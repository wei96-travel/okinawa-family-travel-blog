# 2026-08-28 電子報漏斗量測

## 目的

先讓既有的 Kit 訂閱流程可量測，再決定要不要增加更多入口。這一輪不改文章正文、不調整聯盟連結，也不把表單做成干擾閱讀的彈窗。

## 現況

- 中文文章結尾已經顯示 Kit 的「沖繩租車證件檢查表」表單。
- `/newsletter` 是獨立介紹與訂閱頁。
- `/checklist/okinawa-rental-car-documents` 是訂閱後的交付頁，維持 `noindex`。
- GA4 目前只有一般頁面瀏覽，無法分辨哪一篇文章看見表單、哪裡送出表單。

## 本輪唯一變數

只補三個不含個資的 GA4 事件：

1. `newsletter_signup_view`：表單區塊第一次進入畫面。
2. `newsletter_signup_submit`：讀者送出 Kit 表單。
3. `lead_magnet_delivery_view`：讀者開啟檢查表交付頁。

共同參數只包含 `page_path`、`source_page`、`link_placement`、`lead_magnet`。不得傳送 Email、姓名、Kit subscriber ID、確認信網址或查詢參數。

## 14 天判讀

- 觀察期間：正式上線後連續 14 天。
- 每週記錄各來源頁的表單曝光、送出與交付頁到達。
- `lead_magnet_delivery_view` 只能視為交付頁到達，不等同 Kit 已確認訂閱；正式訂閱人數以 Kit 後台為準。
- 若表單有曝光但沒有送出，先檢查文案與表單操作阻力。
- 若有送出但沒有交付頁到達，先檢查確認信、寄件設定與自動化流程。
- 樣本太小時不改第二個變數，不用站方測試流量假裝成讀者成效。

## 發布閘門

- `npm run content:audit:strict` 通過。
- `npm run build` 通過。
- 手機版表單可見、文字無裁切、送出事件只觸發一次。
- 檢查表頁可正常開啟，且沒有把個資送進 GA4。
- wei96 看過本次可見畫面並明確同意發布後，才可提交與推送。

## 2026-08-30 執行狀態

- wei96 已明確要求立即執行本次量測部署。
- 正式站 `/newsletter` 仍可載入 Kit 公開表單，檢查表交付頁也可正常開啟。
- Kit 試用期已結束，帳號目前停在方案選擇頁。免費方案保留表單與單次廣播，但不包含 Email Sequences 與 Visual Automations；因此原五封自動行前信不得再宣稱為運作中。
- 本次部署只處理三個不含個資的 GA4 事件，不改信件、文章、聯盟連結或 Kit 帳號方案。
- 新一輪 CC 限時檢討沒有回傳內容並已終止；目前採用 2026-08-27 已完成的 CC 第二意見，不以等待外部回應繼續延誤量測。
- wei96 已於 2026-08-30 明確同意推送並降級；Kit 已顯示「You’re now on the Kit free plan」，帳號恢復可用。
- 免費方案下進入 Email sequences 會導向升級頁，因此原五封自動行前信與 Visual Automation 已確認不能繼續運作；目前只保留表單、訂閱名單與單次 Broadcast。
- 量測提交 `ea1526d` 已推送到 `origin/main`。正式 `/newsletter` 已出現 `data-newsletter-signup="page"`，Kit 表單可見且仍送往 Form ID `9801697`；正式檢查表頁回 200、canonical 正確並維持 `noindex, nofollow`。
- 正式頁已載入 GA4 指令碼與本次事件程式，但瀏覽器控制環境沒有建立可讀取的 `window.gtag`，因此尚未宣稱 GA4 Realtime 已收到事件。後續以 GA4 實際事件報表與 Kit 後台訂閱數判讀，不用程式存在取代成效證據。
