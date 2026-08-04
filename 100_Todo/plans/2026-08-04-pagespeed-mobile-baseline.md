# PageSpeed Insights 手機版基準

測試日期：2026-08-04 23:30（Asia/Taipei）  
測試網址：<https://okinawafamilynotes.com/>  
測試模式：Google PageSpeed Insights／行動裝置／慢速 4G／Moto G Power  
Lighthouse：13.4.1

## 基準分數

| 項目 | 分數 |
|---|---:|
| Performance | 60 |
| Accessibility | 95 |
| Best Practices | 81 |
| SEO | 100 |

## 實驗室指標

| 指標 | 結果 | 判斷 |
|---|---:|---|
| First Contentful Paint | 4.9 秒 | 偏慢 |
| Largest Contentful Paint | 19.3 秒 | 主要問題 |
| Total Blocking Time | 50 毫秒 | 良好，JavaScript 阻塞不是首要問題 |
| Cumulative Layout Shift | 0 | 良好，畫面穩定 |
| Speed Index | 6.2 秒 | 偏慢 |

PageSpeed 顯示目前沒有足夠的真實使用者資料，因此這份基準以單次 Lighthouse 實驗室測試為主，不能當成所有訪客的實際速度。

## 優先問題

1. 圖片傳送仍可減少約 4,288 KiB，是本輪最值得先處理的項目。
2. 整頁網路資源約 5,336 KiB，對手機慢速 4G 過重。
3. LCP 19.3 秒，需要先確認首頁最大內容元素及其圖片格式、尺寸、壓縮與載入優先級。
4. 無用 JavaScript 約可減少 338 KiB，但 Total Blocking Time 僅 50 毫秒，優先度低於圖片。
5. 無障礙主要提醒為部分前景與背景顏色對比不足。
6. Best Practices 包含一項淘汰 API 警告，以及 CSP、HSTS、COOP、XFO／CSP、Trusted Types 等安全標頭建議；需逐項確認，不因分數一次全部加入。

## 圖片問題明細

| 圖片 | 資源大小 | 預估可節省 | 處理優先度 |
|---|---:|---:|---|
| `emergency-kit-cover-ai-v2.png` | 2,013.2 KiB | 1,965.8 KiB | 1 |
| `naha-airport-luggage-storage-cover.png` | 2,040.1 KiB | 1,954.9 KiB | 2 |
| `gyokusendo-family-cover.webp` | 304.2 KiB | 253.6 KiB | 3 |
| `okinawa-attractions-cover.webp` | 166.9 KiB | 113.7 KiB | 4 |

前兩張 PNG 合計約 4 MB，已占本輪圖片浪費量的大部分。優先轉成 WebP 或 AVIF，並依首頁實際顯示尺寸輸出適當版本；處理前先確認文章頁是否共用同一檔案，避免只為首頁縮圖而降低文章首圖畫質。

## 下一步

1. 找出首頁 LCP 元素與 PageSpeed 列出的高浪費圖片。
2. 先挑 1～3 張影響最大的圖片做格式、尺寸及壓縮優化，不一次重做全站。
3. 用相同網址、相同行動裝置條件重測，至少比較三次結果中位數。
4. 驗收重點為 LCP、傳輸量與手機畫面品質，不只追求總分。

## 2026-08-04 圖片優化執行結果

| 圖片 | 優化前 | 優化後 | 縮減幅度 |
|---|---:|---:|---:|
| `emergency-kit-cover-ai-v2` | 2,061,467 bytes | 106,842 bytes | 94.8% |
| `naha-airport-luggage-storage-cover` | 2,089,111 bytes | 77,994 bytes | 96.3% |
| **合計** | **4,150,578 bytes** | **184,836 bytes** | **95.5%** |

- 兩篇文章的封面與內文圖片引用已由 PNG 改為 WebP。
- `content:audit:strict`：47 篇文章、0 個嚴重問題；37 個既有語氣提醒未增加。
- `next build`：通過，共產生 72 個靜態頁面。
- 手機版實頁檢查：375px 寬度下，兩篇文章的 `clientWidth` 與 `scrollWidth` 都是 375px，沒有水平溢出；新圖片均完整載入。
- 正式站已部署，兩篇文章均確認載入新的 WebP，手機頁面沒有水平溢出。

## 正式站 PageSpeed 三次重測

測試時間：2026-08-05 00:20～00:23（Asia/Taipei）
條件：Moto G Power、慢速 4G、Lighthouse 13.4.1

| 次數 | Performance | FCP | LCP | TBT | CLS | Speed Index | 圖片預估可省 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | 37 | 4.9 秒 | 10.3 秒 | 140 毫秒 | 0.636 | 5.8 秒 | 461 KiB |
| 2 | 62 | 4.3 秒 | 8.5 秒 | 130 毫秒 | 0 | 5.0 秒 | 461 KiB |
| 3 | 88 | 0.9 秒 | 3.8 秒 | 50 毫秒 | 0 | 2.6 秒 | 461 KiB |
| **中位數** | **62** | **4.3 秒** | **8.5 秒** | **130 毫秒** | **0** | **5.0 秒** | **461 KiB** |

### 前後比較

- LCP：19.3 秒降至中位數 8.5 秒，改善約 56%。
- 圖片預估可省：4,288 KiB 降至 461 KiB，減少約 89%。
- Performance：單次基準 60；部署後三次中位數 62。第三次為 88，但不以最好的一次代替中位數。
- 第一輪出現 CLS 0.636，另外兩輪皆為 0，判定為單次載入波動；後續若再出現，應從首頁圖片、字型或第三方元件的版面位移追查。
- 下一輪優先處理 PageSpeed 仍列出的 `gyokusendo-family-cover.webp` 與 `okinawa-attractions-cover.webp`，並檢查首頁圖片是否能改用響應式尺寸。
