import imageSizes from "@/content/image-sizes.json";

/**
 * 讀出 public/ 底下圖片的原始尺寸，供 <img> 的 width / height 屬性使用。
 *
 * 為什麼需要：文章內嵌圖原本在 CSS 寫死 aspect-ratio: 16 / 9，直式資訊圖會被壓扁，
 * 只能靠檔名白名單逐張豁免，漏掉的就默默壞掉。改成不寫死比例後，圖片在載入前
 * 高度會塌成 0，版面跳動而且延遲載入會失準。給瀏覽器真實尺寸就能同時解決兩件事：
 * 用原始比例，而且載入前就先保留正確空間。
 *
 * 圖片尺寸在建置前產生為靜態清單，避免 Vercel 函式把整個 public/ 資料夾打包進去。
 */

type Size = { width: number; height: number };

const MAX_IMAGE_DIMENSION = 32768;

function isReasonableSize(size: Size | null): size is Size {
  return Boolean(
    size &&
      Number.isFinite(size.width) &&
      Number.isFinite(size.height) &&
      size.width > 0 &&
      size.height > 0 &&
      size.width <= MAX_IMAGE_DIMENSION &&
      size.height <= MAX_IMAGE_DIMENSION,
  );
}

export function getImageSize(src: string): Size | null {
  const size = imageSizes[src as keyof typeof imageSizes] as Size | undefined;
  return size && isReasonableSize(size) ? size : null;
}
