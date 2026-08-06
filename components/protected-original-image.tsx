"use client";

import type { ImgHTMLAttributes } from "react";

type ProtectedOriginalImageProps = ImgHTMLAttributes<HTMLImageElement>;

/**
 * 降低一般訪客直接另存本站原創照片的便利性。
 * 圖片必須下載到瀏覽器才能顯示，因此這不是 DRM；原圖網址仍可能被熟悉工具的使用者取得。
 */
export function ProtectedOriginalImage({ className, ...props }: ProtectedOriginalImageProps) {
  return (
    <img
      {...props}
      className={["protected-original-image", className].filter(Boolean).join(" ")}
      draggable={false}
      onContextMenu={(event) => event.preventDefault()}
      onDragStart={(event) => event.preventDefault()}
    />
  );
}
