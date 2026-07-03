# 沖繩親子慢旅筆記：上線清單

## 品牌

- 網站名稱：沖繩親子慢旅筆記
- 定位：給第一次帶孩子去沖繩的台灣家庭，一份慢慢整理的旅行規劃筆記。
- 語氣：誠實、溫暖、具體，不假裝實住或實地體驗。

## 上線前必做

- 確認首頁、文章列表、分類頁、單篇文章、關於、聯絡、隱私權、聯盟揭露都能開啟。
- 確認文章都有資料來源與更新時間。
- 確認沒有把 AI 圖包裝成真實照片。
- 確認 `NEXT_PUBLIC_SITE_URL` 在 Vercel 設定為正式網址。
- 確認 sitemap：`/sitemap.xml`。
- 確認 robots：`/robots.txt`。

## Vercel

- 將專案推到 GitHub。
- 在 Vercel 匯入專案。
- Framework Preset 選 Next.js。
- Build Command 使用 `npm run build` 或 Vercel 預設 Next.js build。
- 設定環境變數：
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_GA_ID`，先空著，等 GA 建好再填。

## 網域

- 短期可先用 Vercel 免費網址測試。
- 正式網域候選：
  - `okinawafamilynotes.com`
  - `okinawafamilytrip.com`
  - `slowokinawa.com`
- 買網域前先確認是否可用、是否和既有品牌太相似。

## 上線後

- 設定 Google Search Console。
- 送出 sitemap。
- 設定 Google Analytics。
- 每週固定新增或重寫 1 到 2 篇文章。
- 優先補完住宿與行程兩個主題群。
