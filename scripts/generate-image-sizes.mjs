import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicDirectory = path.join(root, "public");
const outputPath = path.join(root, "content", "image-sizes.json");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".svg", ".webp"]);

function listFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? listFiles(entryPath) : [entryPath];
  });
}

function readSvgSize(buffer) {
  const head = buffer.subarray(0, 2048).toString("utf8");
  const width = head.match(/\bwidth="([\d.]+)(?:px)?"/);
  const height = head.match(/\bheight="([\d.]+)(?:px)?"/);

  if (width && height) {
    return { width: Math.round(Number(width[1])), height: Math.round(Number(height[1])) };
  }

  const viewBox = head.match(/viewBox="[\d.\-]+\s+[\d.\-]+\s+([\d.]+)\s+([\d.]+)"/);
  return viewBox ? { width: Math.round(Number(viewBox[1])), height: Math.round(Number(viewBox[2])) } : null;
}

function readJpegSize(buffer) {
  let offset = 2;

  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    const isStartOfFrame = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;

    if (isStartOfFrame) {
      return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
    }

    offset += 2 + buffer.readUInt16BE(offset + 2);
  }

  return null;
}

function readWebpSize(buffer) {
  if (buffer.length < 30 || buffer.toString("ascii", 8, 12) !== "WEBP") return null;

  const format = buffer.toString("ascii", 12, 16);
  if (format === "VP8X") return { width: 1 + buffer.readUIntLE(24, 3), height: 1 + buffer.readUIntLE(27, 3) };
  if (format === "VP8 ") return { width: buffer.readUInt16LE(26) & 0x3fff, height: buffer.readUInt16LE(28) & 0x3fff };
  if (format === "VP8L") {
    const bits = buffer.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }

  return null;
}

function readImageSize(filePath) {
  const buffer = fs.readFileSync(filePath);
  const extension = path.extname(filePath).toLowerCase();

  if (extension === ".svg") return readSvgSize(buffer);
  if (extension === ".png" && buffer.length >= 24) return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  if ((extension === ".jpg" || extension === ".jpeg") && buffer[0] === 0xff && buffer[1] === 0xd8) return readJpegSize(buffer);
  if (extension === ".webp") return readWebpSize(buffer);

  return null;
}

const imageSizes = {};

for (const filePath of listFiles(publicDirectory)) {
  if (!supportedExtensions.has(path.extname(filePath).toLowerCase())) continue;

  const size = readImageSize(filePath);
  if (size && size.width > 0 && size.height > 0) {
    const src = "/" + path.relative(publicDirectory, filePath).split(path.sep).join("/");
    imageSizes[src] = size;
  }
}

fs.writeFileSync(outputPath, `${JSON.stringify(imageSizes, null, 2)}\n`);
console.log(`Generated ${Object.keys(imageSizes).length} image dimensions.`);
