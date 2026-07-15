# Google 搜尋與流量健檢表

更新時間：2026-07-15（Asia/Taipei）

| 項目 | 目前看到的資料 | 判斷 | 下一步 |
| --- | --- | --- | --- |
| Google Analytics 標籤 | 線上文章頁有載入 `googletagmanager`、`gtag`，Measurement ID：`G-Z076ZYK89C` | GA 基本追蹤碼有在頁面上，不是完全沒裝 | 等 GA 即時 / 報表出現訪客；若要確認陌生人，需進 GA 看來源與使用者數 |
| Google Analytics 人數 | 這次無法直接讀登入後報表，瀏覽器控制被 Windows helper 擋住 | 不能亂猜人數 | 你開 GA 畫面或貼截圖後，我可以整理使用者、瀏覽、來源、頁面表格 |
| Search Console 資料 | 這次無法直接讀登入後報表，瀏覽器控制被 Windows helper 擋住 | 不能亂猜點擊 / 曝光 / 索引狀態 | 進 Search Console 看「成效」與「網址檢查」，有畫面我就能整理 |
| robots.txt | `User-Agent: *`、`Allow: /`，並指向 sitemap | 沒有擋 Google | 保持即可 |
| sitemap.xml | 公開可讀，目前列出 30 個 URL | Google 有路可以找到文章 | 已補 `updated` 欄位支援，讓改稿文章的 lastmod 能更新 |
| 休息點文章頁 | `/blog/okinawa-family-drive-toilet-convenience-store` 回 `200 OK` | 頁面公開可抓 | 可在 Search Console 對此網址要求建立索引 |
| 線上 SEO 標籤 | 文章頁有 canonical、og:image、新標題文字 | 基本 SEO 標籤存在 | 後續補更多 FAQ / 內鏈時持續檢查 |
| 公開 Google site 查詢 | 本次公開查詢未穩定看到結果 | 目前不能說已被搜尋結果收錄 | 不代表白寫；剛上線通常要等 Google 抓取與建立索引 |
| 已補強文章 lastmod | 休息點、古宇利島、海灘文章都加上 `updated: "2026-07-15"` | 有利於 sitemap / JSON-LD 顯示更新 | build 後推上 GitHub，等待部署與 GSC 重新抓取 |

## 目前結論

網站不是「Google 完全抓不到」的狀態：robots 沒擋、sitemap 有、文章頁 200 OK、GA 標籤也有。現在真正缺的是 Search Console / GA 報表裡的登入後數字，以及 Google 建立索引的時間。

## 明天可以追的表格欄位

| 日期 | GA 使用者 | GA 瀏覽次數 | 主要來源 | GSC 曝光 | GSC 點擊 | 已建立索引頁數 | 新文章索引狀態 | 備註 |
| --- | ---: | ---: | --- | ---: | ---: | ---: | --- | --- |
| 2026-07-15 | 待填 | 待填 | 待填 | 待填 | 待填 | 待填 | 待確認 | 今日已補 sitemap lastmod 與休息點主頁 |
