import fs from "fs";
import path from "path";

/**
 * 讀出 public/ 底下圖片的原始尺寸，供 <img> 的 width / height 屬性使用。
 *
 * 為什麼需要：文章內嵌圖原本在 CSS 寫死 aspect-ratio: 16 / 9，直式資訊圖會被壓扁，
 * 只能靠檔名白名單逐張豁免，漏掉的就默默壞掉。改成不寫死比例後，圖片在載入前
 * 高度會塌成 0，版面跳動而且延遲載入會失準。給瀏覽器真實尺寸就能同時解決兩件事：
 * 用原始比例，而且載入前就先保留正確空間。
 *
 * 只在伺服器端（建置時）呼叫。
 */

type Size = { width: number; height: number };

const cache = new Map<string, Size | null>();

function readSvgSize(buffer: Buffer): Size | null {
  // 只看開頭，避免把大檔整份轉成字串
  const head = buffer.subarray(0, 2048).toString("utf8");

  const width = head.match(/\bwidth="([\d.]+)(?:px)?"/);
  const height = head.match(/\bheight="([\d.]+)(?:px)?"/);
  if (width && height) {
    return { width: Math.round(Number(width[1])), height: Math.round(Number(height[1])) };
  }

  // 沒有 width/height 時退回 viewBox
  const viewBox = head.match(/viewBox="[\d.\-]+\s+[\d.\-]+\s+([\d.]+)\s+([\d.]+)"/);
  if (viewBox) {
    return { width: Math.round(Number(viewBox[1])), height: Math.round(Number(viewBox[2])) };
  }

  return null;
}

function readPngSize(buffer: Buffer): Size | null {
  if (buffer.length < 24) return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function readJpegSize(buffer: Buffer): Size | null {
  let offset = 2; // 跳過 SOI

  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    // SOF0-SOF15，扣掉 DHT(c4)、JPG(c8)、DAC(cc) 這三個不是影格標頭的
    const isStartOfFrame =
      marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;

    if (isStartOfFrame) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7)
      };
    }

    offset += 2 + buffer.readUInt16BE(offset + 2);
  }

  return null;
}

function readWebpSize(buffer: Buffer): Size | null {
  if (buffer.length < 30) return null;
  if (buffer.toString("ascii", 8, 12) !== "WEBP") return null;

  const format = buffer.toString("ascii", 12, 16);

  if (format === "VP8X") {
    return {
      width: 1 + buffer.readUIntLE(24, 3),
      height: 1 + buffer.readUIntLE(27, 3)
    };
  }

  if (format === "VP8 ") {
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff
    };
  }

  if (format === "VP8L") {
    const bits = buffer.readUInt32LE(21);
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1
    };
  }

  return null;
}

export function getImageSize(src: string): Size | null {
  if (cache.has(src)) return cache.get(src) ?? null;

  let size: Size | null = null;

  try {
    // src 一律是站內絕對路徑，例如 /images/articles/foo/bar.jpg
    const filePath = path.join(process.cwd(), "public", src);
    const buffer = fs.readFileSync(filePath);
    const ext = path.extname(src).toLowerCase();

    if (ext === ".svg") size = readSvgSize(buffer);
    else if (ext === ".png") size = readPngSize(buffer);
    else if (ext === ".jpg" || ext === ".jpeg") size = readJpegSize(buffer);
    else if (ext === ".webp") size = readWebpSize(buffer);
  } catch {
    // 讀不到就當作沒有尺寸，圖片仍會顯示，只是少了防跳動的保留空間
    size = null;
  }

  cache.set(src, size);
  return size;
}
