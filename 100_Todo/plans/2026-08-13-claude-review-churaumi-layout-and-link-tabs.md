# 2026-08-13 Claude Code 審查：Churaumi 版面修正與文章連結開新分頁

審查者：Claude Code
審查範圍：`8fd16e2`（Fix Churaumi ticket article image layout）、`a0d67b7`（Open article reading links in new tabs）
基準：審查時 `HEAD` = `origin/main` = `a0d67b7`（審查進行中 Codex 另外推送了 `fc857fe`、`a3ba7b7`，不在本次審查範圍）
結論：兩個 commit 的核心目的都達成，線上頁面通過驗證。另有 4 個非阻斷性建議，需 wei96 或 Codex 決定是否處理。

## 一、線上驗證結果（https://okinawafamilynotes.com/blog/churaumi-aquarium-ticket-price-guide）

### 桌機（1265px 視窗寬）

- 版面重疊：`<article>` 直屬子元素逐一比對上下邊界，**0 處重疊**。
- 文件總高 10,429px；最大單一元素高 10,259px。舊 bug 造成的數千萬像素高度已消失。
- 6 個 `<figure>` 高度分別為 452 / 527 / 527 / 527 / 428 / 318px，全部正常。
- 兩張 Trip.com 圖片的預留尺寸為 `1278×719`、`1280×520`，與實際 `naturalWidth/naturalHeight` **完全一致**，不會產生位移。
- 8 張圖片全部載入成功（`complete: true`、`naturalWidth > 0`）。
  - 註：首次量測時 5 張 lazy 圖顯示未載入，原因是內建瀏覽器面板未顯示、未觸發 lazy loading；改成 eager 後全部正常，非網站問題。

### 檔案層級（直接打 HTTP）

| URL | 結果 |
| :-- | :-- |
| `.../trip-ticket-selection.jpg` | 200、`image/jpeg`、67,531 bytes |
| `.../trip-quantity-two-adults.jpg` | 200、`image/jpeg`、52,170 bytes |
| `.../klook-plan-selection.jpg` | 200、`image/jpeg`、70,180 bytes |
| `.../trip-ticket-selection.png`（舊路徑） | **404**（正確，改名已生效） |

回應大小與本機檔案完全相同，確認改名後的檔案已部署。文章內 4 處引用全部指向 `.jpg`，全站 `content/blog/*.md` 已無殘留 `.png` 引用。

### 手機（390×844）

- `document.scrollWidth` = `clientWidth` = 390 → **無橫向溢出**。
- 版面重疊 0 處，文件總高 10,737px。
- 8 張圖片全部載入，比例正確。
- 唯一超出視窗寬度的元素是表格（`table/thead/tbody/tr`），但包在自己的水平捲動容器內，文件本身不溢出 — 與既有設計一致。

### 連結分頁行為（頁面上全部 33 個 `<a>`）

| 區塊 | 同分頁 | 新分頁 |
| :-- | --: | --: |
| 頁首導覽 | 5 | 0 |
| 頁尾 | 5 | 0 |
| 文章區（含相關文章卡） | 1（`回文章列表`） | 22 |

- 內文內部連結、官方來源、圖片放大連結：`target="_blank" rel="noopener noreferrer"` ✅
- 聯盟連結（Klook / Trip.com）：`target="_blank" rel="sponsored noreferrer noopener"` ✅（`sponsored` 保留）
- 相關文章卡：圖片、標題、`繼續閱讀` 三個連結都開新分頁 ✅
- 全站導覽、頁尾、`回文章列表`：維持同分頁 ✅
- READING PATH 區塊在本頁不顯示（該 slug 不在 `lib/reading-paths.ts`），改到
  `/blog/churaumi-aquarium-family-time` 驗證：NEXT 01–03 三張卡都是
  `target="_blank" rel="noopener noreferrer"` ✅

### 未完成的驗證項目（環境限制，不視為通過）

實際「點下去看是否真的開新分頁」的互動測試**沒有做成**。本次工作階段的內建瀏覽器面板未顯示，畫面不合成，
`screenshot`、座標捲動與 `left_click` 全部逾時。以上結論來自線上 HTML 的實際 `target` / `rel` 屬性與版面量測，
不是點擊實測。若要補這一項，需要在瀏覽器面板可顯示的環境重跑，或由 wei96 手動點兩三個代表性連結確認。

## 二、程式碼審查

### `8fd16e2` — 判斷正確

- `lib/image-size.ts` 改用檔頭簽名（PNG / JPEG / WebP）判斷格式，不再信任副檔名，直接解決本次 bug 的根因。
- 新增 `isReasonableSize()` 上限 32,768。原本誤讀出的 `65536 × 4292542531` 兩軸都會被擋下，屬於有效的第二道防線。
- `scripts/content-audit.mjs` 新增 `IMAGE_FORMAT_MISMATCH` critical 規則，讓同類問題在建置階段就被擋住。
- 本機實跑 `node scripts/content-audit.mjs --strict`：49 篇文章、**0 重大問題**、37 個既有口吻提醒、exit code 0。

### `a0d67b7` — 範圍正確

- `MarkdownContent` 只用於 `app/blog/[slug]/page.tsx` 與 `app/en/blog/[slug]/page.tsx`，
  `ReadingNextSteps` 只用於中文文章頁，`ArticleCard openInNewTab` 只在文章頁的相關文章區傳入。
  首頁、文章列表頁、分類頁的卡片維持同分頁 — 與規則一致，沒有誤傷導覽。
- `TrackedAffiliateLink` 的 `rel` 是必填 prop（`rel: string`），現有呼叫端都有傳值，
  所以 `` `${rel} noopener` `` 目前不會產生 `"undefined noopener"`。

## 三、建議事項（全部非阻斷，需決定是否處理）

> 2026-08-14 更新：wei96 指示全部交給 Claude Code 處理。
> 第 1、2 項已修正（連結屬性）；第 3 項已處理（移除失去意義的 `check:publish`，保留 build 內含稽核）；
> 第 4 項已處理（掃描範圍擴大到整個 `public/`、補上目錄防呆，並先修好因此被掃出的 3 個檔案）。
> 第 5 項維持不動，理由見該項。

1. ~~**READING PATH 區塊的「聯絡頁」連結仍是同分頁**~~ **（已修正）**（`components/reading-next-steps.tsx:63）。
   線上已確認：同一個閱讀區塊裡，NEXT 01–03 開新分頁，正下方的「聯絡頁」開同分頁。
   它既不是全站導覽也不是返回鍵，行為和上方三張卡不一致。建議明確決定要跟隨新分頁規則，還是在
   `AI_COLLABORATION.md` 把「聯絡／關於」歸類為導覽例外，不要留在模糊地帶。

2. ~~**封面圖出處連結缺 `noopener`**~~ **（已修正，並一併處理英文文章頁）**。線上實測 `Rick Wallace／Unsplash` 與 `Unsplash License` 兩個連結是
   `target="_blank" rel="noreferrer"`，由 `app/blog/[slug]/page.tsx` 的封面出處區塊產生，這次沒被改到。
   現代瀏覽器在 `noreferrer` 或 `target="_blank"` 下已自動切斷 `window.opener`，所以**沒有安全漏洞**，
   純粹是與本次確立的 `noopener noreferrer` 慣例不一致。

3. **`npm run build` 現在內含 strict 稽核，Vercel 部署會一起跑。** **（已處理：保留稽核，移除 `check:publish`）**
   這是刻意設計（避免繞過圖片檢查），但要知道副作用：日後任何一張圖片格式不符，會**擋住整個部署**，
   包含與該圖無關的文章更新。另外稽核會掃描本機未追蹤的圖片，所以可能出現「本機建置失敗但 CI 正常」
   或反過來的情況。本次實跑本機稽核為 0 重大問題，目前沒有這個狀況。
   同時 `check:publish` 現在等同 `npm run build`，已無獨立意義，引用它的文件可以一併更新。

4. **圖片稽核只掃 `public/images`**（`scripts/content-audit.mjs`）。**（已處理：擴大到整個 `public/`，並補上目錄防呆）**
   `public/` 底下其他位置（例如 `public/previews/`、社群輸出圖）不在檢查範圍，同類的副檔名／格式不符
   仍可能發生。另外 `listFiles(imagesDir)` 沒有防呆，`public/images` 若不存在會直接丟例外中斷稽核，
   而不是回報問題。

5. （觀察，未證實）`components/markdown-content.tsx` 對站內連結一律用 Next `<Link>` 並加 `target="_blank"`，
   其中包含指向靜態檔的圖片連結（`/images/....jpg`）。Next `<Link>` 會對 href 做路由 prefetch，
   對靜態圖檔可能造成多餘的下載。本次沒有實測網路請求（面板未顯示），僅列為待確認項目；
   若要保守處理，非路由 href 可改用一般 `<a>` 或加 `prefetch={false}`。

## 四、狀態

- 審查期間未修改任何專案檔案，未 commit、未 push、未部署、未動 Search Console、未做任何社群動作。
- 工作區大量草稿、社群素材與未追蹤檔案全部保留未動。
- 審查期間 Codex 於同一個 repo 推送 `fc857fe`、`a3ba7b7`（發布那霸雨天決策文章），因此本次
  **未寫入 `AI_HANDOFF.md`**，避免與 Codex 同時編輯同一檔案。待 Codex 該輪結束後再補上交接條目。
