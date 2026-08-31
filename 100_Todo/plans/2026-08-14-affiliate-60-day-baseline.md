# 60 天分潤驗證基準

更新日期：2026-08-14
負責：Codex
狀態：執行中

## 目標

在不增加第三個主要平台、不大量新增按鈕的前提下，確認目前票券與住宿內容能否產生可追蹤的點擊與訂單。前 60 天以 Klook 票券、Trip.com 住宿為主；Agoda 僅保留為第二階段單一變因測試。

## 固定受眾

- 第一次帶 2 至 8 歲孩子去沖繩的台灣家庭。
- 旅程約 3 至 5 天。
- 在意總價、移動不要太累、訂票與訂房條件容易理解。
- 站方定位是上班族整理官方資料與家庭決策，不冒充長住者或實住專家。

## 現有票券入口

| 文章 | 平台 | 追蹤識別 | 目前角色 |
| --- | --- | --- | --- |
| `churaumi-aquarium-ticket-price-guide` | Klook | `aid=128859`、`aff_adid=1362380` | 一般電子票主要比較入口 |
| `churaumi-aquarium-ticket-price-guide` | Trip.com | `trip_sub1=churaumi-ticket-comparison`、`trip_sub3=D18972921` | 同票種比價入口 |

## 現有住宿入口

| 文章 | Trip.com 連結數 | 目前角色 |
| --- | ---: | --- |
| `first-okinawa-where-to-stay` | 4 | 全站住宿決策入口；那霸三間候選及列表 |
| `okinawa-churaumi-nearby-family-stay` | 3 | 美麗海附近三間候選 |
| `naha-family-stay-guide` | 1 | 那霸過渡住宿候選 |
| `onna-family-stay-guide` | 4 | 恩納村三間候選及列表 |

目前共有 12 個住宿導購入口。60 天內先改善內容與量測，不再為了數量新增飯店。

## 2026-08-14 技術驗證

- `content:audit:strict`：49 篇文章、0 個重大問題、24 個既有口吻提醒。
- Next.js 正式建置：通過，79 個靜態頁面。
- Klook 票券連結：`target="_blank"`，`rel="sponsored noreferrer noopener"`。
- Trip.com 票券連結：`target="_blank"`，`rel="sponsored noreferrer noopener"`。
- 實際點擊 Klook：另開新分頁，轉址後保留 `aid=128859`、`aff_adid=1362380` 與 `aff_klick_id`；原文章仍開啟。
- 實際點擊 Trip.com：另開新分頁並到達美麗海水族館頁；原文章仍開啟。
- 程式端已有 `affiliate_click` 事件，欄位包含 `affiliate_network`、`content_group`、`item_name`、`link_placement`、`link_url`、`page_path`、`source_page`。
- 正式站檢查發現 `window.gtag` 與 `window.dataLayer` 都不存在；原因是部署環境沒有提供 `NEXT_PUBLIC_GA_ID`，因此過去的 `affiliate_click` 不可能送到 GA4。
- `app/layout.tsx` 已改為環境變數優先、缺值時使用專案既有的公開 GA4 評估 ID `G-Z076ZYK89C`；修正已在 commit `7db248b` 推送至 `main`。
- 正式站已重新載入 Google tag；正式文章的 HTML 可見 `G-Z076ZYK89C`。
- 以正式站 Klook 入口進行一次不購買的點擊測試後，GA4 Realtime 收到 `affiliate_click` 1 次，同一時段也記錄到 `click` 1 次。
- `affiliate_click` 詳細資料顯示 14 個參數鍵，其中包含 `affiliate_network` 與 `content_group`；量測管線已確認可用。

## 60 天執行規則

### 第 1 週：量測先行

1. 用正式站可見頁面各測一次 Klook 與 Trip.com。
2. 在 GA4 確認 `affiliate_click`，並檢查平台、來源文章與品項欄位。
3. 建立每週紀錄：文章瀏覽、分潤點擊、平台後台點擊、訂單、待確認佣金、已核准佣金。
4. 若 GA4 沒收到事件，先修追蹤，不改文案與平台。

### 第 2 至 4 週：只強化第一批頁面

- 票券：`churaumi-aquarium-ticket-price-guide`。
- 住宿入口：`first-okinawa-where-to-stay`。
- 住宿決策：`okinawa-churaumi-nearby-family-stay`、`onna-family-stay-guide`。
- 每頁優先補足選擇理由、總價條件、取消限制、兒童條件與明確但不強迫的行動文字。
- 不在讀者尚未形成需求的位置塞入連結。

### 第 5 至 8 週：依數據判斷

| 現象 | 判讀 | 下一步 |
| --- | --- | --- |
| 搜尋曝光和文章瀏覽都低 | 流量不足，不能判定平台 | 先強化 SEO 與內部連結 |
| 有瀏覽、分潤點擊率低於 2% | 需求承接或 CTA 不清楚 | 改選擇理由與按鈕位置 |
| 有 50 至 100 次合格住宿點擊、零訂單 | 平台、價格或受眾不合 | 只在一篇住宿頁測 Agoda |
| 有訂單但仍待確認 | 住宿尚未完成或平台結算中 | 保持版位，不誤判失敗 |
| 單一頁有訂單 | 已找到有效需求 | 延伸同意圖內容，不全站複製 |

## 每週紀錄欄位

| 週次 | 頁面 | 瀏覽 | GA4 分潤點擊 | 平台後台點擊 | 訂單 | 待確認佣金 | 已核准佣金 | 本週只改一項 |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 基準週 | `churaumi-aquarium-ticket-price-guide` | 待週結 | 1（線上量測測試） | 待平台後台 | - | - | - | 量測驗證完成，開始累積自然點擊 |

## 禁止事項

- 不因一兩天零訂單就換平台。
- 不同時增加 Agoda、改 CTA、換圖片和重寫文章；否則無法判斷原因。
- 不把所有票券、住宿與商品塞在同一頁。
- 不用自己的購買行為製造佣金；測試只驗證連結與事件。
- 不再用 Codex、Claude 或其他自動控制中的瀏覽器反覆開啟 Klook。自動檢查只驗證網址、另開分頁屬性與追蹤參數；最終頁面是否可開由使用者在未受控制的一般瀏覽器手動確認，避免觸發 Klook 403 風控。
- 不對外強調分潤，讀者看到的是決策協助與價格條件。
