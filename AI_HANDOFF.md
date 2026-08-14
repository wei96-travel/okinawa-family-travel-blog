# Okinawa Family Notes Live Handoff

Last updated: 2026-08-14 (Claude Code, image-audit scope widened and three more extension/format mismatches fixed; ownership returned to Codex)

This is the current operational handoff between Codex and Claude Code. Keep it short and update it whenever ownership changes, work pauses, or a task is completed.

- 2026-08-14 morning content run (Codex, draft-only): revalidated the already-published Naha rainy-day decision guide without repeating its release workflow. Current DMM official pages support ordinary 09:00–19:00 hours, admission up to 60 minutes before closing, and an approximately 20-minute drive from Naha Airport; same-day hours may differ, so no social asset hard-codes an opening time. Prepared the non-duplicative Instagram single-image draft `work/social/dmm-kariyushi-family-time/copy-instagram.md` plus 1080 × 1350 text-only SVG and rendered-PNG previews. It offers a 1.5–2 hour family planning recommendation, explicitly not a venue-guaranteed visit duration, and contains no affiliate link, external image, logo, ticket image or unverified asset. Topic registry permits this narrow DMM duration angle and it does not repeat the full guide, Naha rainy-day decision or 8/6 sleep/second-stop Reel. Strict audit passed (49 articles, 0 critical; 37 pre-existing style reminders); the restricted first build hit `spawn EPERM`, and the approved retry passed with 77 static pages. `git diff --check` passed and the rendered phone preview has no text clipping. No upload, scheduling, publication, commit, push, deployment, production verification or Search Console action occurred; user approval is required before any social action. Klook's 14-day data still cannot support a variant decision: known 8 clicks are all on legacy text link `1357775`, while existing article and booking-hub IDs `1362380` / `1362390` are 0. Do not add, move or edit Klook placements. Detailed record: `100_Todo/plans/2026-08-14-dmm-morning-quality-check.md`.

## Daily Master Schedule

- 2026-08-14 **AdSense 退件原因已確認：「缺乏價值的內容」（Claude Code 於帳戶內讀取）**：`adsense-noreply@google.com` 於 2026-08-13 19:09 寄出退件通知。**本檔先前多筆條目記載的「site under review／正在接受審查」已經過期，不可再沿用。** 在使用者重新啟動並連上 Claude in Chrome 後，Claude Code 讀取了 AdSense 帳戶的「網站」頁面：`okinawafamilynotes.com` 的核准狀態為 **`需要處理`**，狀態詳情為 **`缺乏價值的內容`**，Ads.txt 狀態 `已授權`，上次更新時間 2026-08-14 上午 3:09 CST。網站詳情頁的完整說明為：「請確認您的網站符合 AdSense 計畫政策。修正違規問題後，即可提出網站複查申請。／缺乏價值的內容／您的網站尚未達到 Google 發布商聯播網中的使用條件」，並列出「最低內容相關規定」、「請確保網站提供獨特且優質的內容，並提供良好的使用者體驗」、「內容空洞的網站管理員品質指南」、「網站管理員品質指南」四個資源連結。Google **沒有**指出任何具體頁面或具體違規項目，這是標準的 low value content 退件。**技術面全部排除**（2026-08-14 實測）：`/privacy`、`/about`、`/contact`、`/blog`、首頁皆回 200；`ads.txt` 內容正確；`robots.txt` 允許檢索並列出 sitemap；首頁 HTML 含發佈商編號與 `adsbygoogle` 指令碼且無 `noindex`；隱私權頁涵蓋 Google 廣告與 Cookie 說明。因此問題純屬內容品質判定，不是設定或程式問題。**未點選「提出網站複查申請」**，也未建立任何廣告版位。在內容問題實際改善前不要送複查，重複退件會拉長後續審查週期。

- 2026-08-14 **Search Console 索引狀態已查明，無需修正（Claude Code 於帳戶內讀取）**：`sc-noreply@google.com` 於 2026-08-09 通知的「重新導向錯誤」已定位。網頁索引狀態為已建立索引 64、未建立索引 10，未建立索引的三個原因分別是：（1）**重新導向錯誤，1 頁，網址為 `https://okinawafamilynotes.com/en/`**，最後檢索 2026-08-08；（2）**頁面會重新導向，3 頁**，分別是 `https://www.okinawafamilynotes.com/blog/dmm-kariyushi-aquarium-family-guide`、`http://www.okinawafamilynotes.com/`、`http://okinawafamilynotes.com/`；（3）已找到但尚未建立索引，6 頁。**逐項實測結論：全部正常，沒有需要修正的東西。** `/en/`（帶尾斜線）目前是一次 308 跳轉到 `/en` 並回 200，`/en/blog/` 行為相同，屬 Next.js 預設的 trailing-slash 正規化；站內沒有任何連結指向 `/en/`，首頁與 `/en` 的 canonical 及 `zh-TW` / `en` / `x-default` hreflang 全部使用不帶尾斜線的 `/en`，sitemap 的 71 個網址也沒有任何會重新導向的網址，因此 8/8 那次應是檢索當下的暫時狀況。第（2）類的三個網址是 www 與 http 變體跳轉到正式網域，本來就該重新導向，屬正常現象不是錯誤。**未提交任何索引要求，也未按「驗證修正」。** 這批索引問題與 AdSense 退件無關，不要把兩件事混為一談。

- 2026-08-14 圖片稽核範圍擴大與同類檔案修正（Claude Code，完成並推送；所有權交回 Codex）：處理 8/13 審查的第 3、4 項。**先發現再修**：手動用檔頭簽名掃描整個 `public/`（152 個點陣圖檔），找出 `public/previews/churaumi-ticket-guide/screens/` 底下還有 3 個與 8/12 同類的檔案 —— `05-desktop-plan-selection.png`、`07-desktop-quantity-two-adults.png`、`08-desktop-total-and-book.png`，副檔名是 `.png` 但內容是 JPEG。它們是造成 8/12 版面爆炸的那批 Trip.com 截圖的預覽頁副本，因為舊稽核只掃 `public/images` 所以一直沒被抓到。這三個檔案不走 `lib/image-size.ts`（該預覽頁是靜態 HTML），所以沒有實際版面災情，但同類 bug 確實仍存在於 repo。**處理內容：**（1）三個檔案以 `git mv` 改名為 `.jpg`，並更新 `public/previews/churaumi-ticket-guide/index.html` 內的 6 處引用（3 個 `href` + 3 個 `src`）；（2）`scripts/content-audit.mjs` 的掃描範圍由 `public/images` 擴大到整個 `public/`，並在 `listFiles()` 補上目錄不存在時回傳空陣列的防呆，避免稽核直接丟例外中斷；（3）`package.json` 移除 `check:publish`，因為 `build` 已內含 strict 稽核後它只是 `npm run build` 的別名、名稱會誤導；`build` 內含稽核的設計刻意保留，理由是 8/12 的 bug 正是因為沒有東西擋它才上線。**順序很重要：** 必須先修好那 3 個檔案才能擴大掃描範圍，否則 build 會立刻被自己的稽核擋住。**檢查結果：** 擴大範圍後重新掃描 `public/` 152 個圖檔，格式不符 **0 個**；`npm run build` exit 0，稽核 49 篇、0 個重大問題、37 個既有提醒，型別檢查通過，77 個靜態頁。**未做：** 用假檔驗證擴大後的稽核會真的擋下問題，這個回歸測試在使用者環境被權限拒絕兩次，未執行也未繞過，因此「掃描範圍生效」目前只有「修正前能掃出那 3 個檔案、修正後歸零」這項間接證據。未部署、未做正式站驗證、未動 Search Console、未做任何社群動作。**刻意未動：** `work/ticket-guides/churaumi-aquarium/screens/` 底下有同名的未追蹤工作副本，屬於使用者的工作素材、不會被部署，保持原樣未改。8/13 審查的第 5 項（`markdown-content.tsx` 對靜態圖檔使用 Next `<Link>` 可能造成多餘 prefetch）維持不處理，理由是尚未實測、不為猜測改架構。完整紀錄：`100_Todo/plans/2026-08-13-claude-review-churaumi-layout-and-link-tabs.md`。

- 2026-08-14 連結分頁審查後續修正（Claude Code，完成並推送；所有權交回 Codex）：依 wei96 指示處理 8/13 審查的第 1、2 項建議，範圍只限連結屬性，未改動任何文章內容、版面、圖片、票券或分潤連結。（1）`components/reading-next-steps.tsx` 的 READING PATH 區塊底部「聯絡頁」連結原為同分頁，與正上方三張 NEXT 卡不一致，改為 `target="_blank" rel="noopener noreferrer"`；此舉符合 `AI_COLLABORATION.md` 既有的 article-link-tab 規則（該連結不屬於全站導覽、分類導覽或返回鍵），因此未新增規則文字。（2）`app/blog/[slug]/page.tsx` 封面出處的來源與授權連結原為 `rel="noreferrer"`，補上 `noopener`；審查時另外查到 `app/en/blog/[slug]/page.tsx` 的封面出處有同一類問題，同屬文章閱讀體驗，一併修正，避免只修中文頁又留下不一致。此項為慣例一致性修正，非安全漏洞：現代瀏覽器在 `noreferrer` 或 `target="_blank"` 下已自動切斷 `window.opener`。檢查結果：`npm run build`（內含 strict 稽核）exit 0，稽核 49 篇、0 個重大問題、37 個既有口吻提醒，型別檢查通過，產生 77 個靜態頁。在建置產物 `.next/server/app/blog/churaumi-aquarium-family-time.html` 中確認：READING PATH 的 `/contact` 連結與兩個 Unsplash 封面出處連結都已是 `rel="noopener noreferrer" target="_blank"`，頁首與頁尾的 `/contact` 維持同分頁，該頁已無殘留的裸 `rel="noreferrer"`。**未做：** 未部署、未做正式站驗證、未動 Search Console、未做任何社群動作；實際點擊測試仍未完成（工作階段的內建瀏覽器面板未顯示，截圖與點擊會逾時），驗證僅止於建置產物的屬性層級。**未處理項目（維持待決定）：** 8/13 審查的第 3 項（`npm run build` 內含 strict 稽核會讓任一圖片格式不符擋住整個 Vercel 部署，且 `check:publish` 已等同 `build`）、第 4 項（圖片稽核只掃 `public/images`，且 `listFiles()` 在該目錄不存在時會丟例外中斷稽核）、第 5 項（`markdown-content.tsx` 對靜態圖檔連結使用 Next `<Link>` 可能產生多餘 prefetch，未實測）。另註：`app/contact`、`app/en/contact`、`app/privacy`、`app/en/privacy` 仍有 `rel="noreferrer"`，但不屬於文章閱讀體驗，刻意未改。完整紀錄：`100_Todo/plans/2026-08-13-claude-review-churaumi-layout-and-link-tabs.md`。

- 2026-08-13 Churaumi 版面與連結分頁審查（Claude Code，完成；所有權交回 Codex）：依 Codex 的 review handoff 審查 `8fd16e2`（`Fix Churaumi ticket article image layout`）與 `a0d67b7`（`Open article reading links in new tabs`），並在正式站驗證 `https://okinawafamilynotes.com/blog/churaumi-aquarium-ticket-price-guide`。**結論：兩個 commit 皆判斷正確，正式站通過驗證。** 桌機（1265px）與手機（390×844）都是 `<article>` 子元素 0 處重疊，文件總高 10,429 / 10,737px，6 個 figure 高度 318–527px；兩張 Trip.com 圖片的預留尺寸 `1278×719`、`1280×520` 與實際 `naturalWidth/Height` 完全一致，8 張圖片全部載入。HTTP 直測：三張 `.jpg` 皆 200 + `image/jpeg`，位元組數與本機檔案相同；舊的 `trip-ticket-selection.png` 回 404，文章 4 處引用全部指向 `.jpg`，`content/blog/*.md` 無殘留 `.png` 引用。手機 `scrollWidth` = `clientWidth` = 390，無橫向溢出（表格在自有水平捲動容器內）。連結分頁行為逐一比對頁面全部 33 個 `<a>`：頁首導覽 5 個、頁尾 5 個、`回文章列表` 1 個維持同分頁；文章區 22 個開新分頁，含內文、官方來源、圖片放大連結（`noopener noreferrer`）與聯盟連結（`sponsored noreferrer noopener`）；相關文章卡三個連結皆開新分頁。READING PATH 區塊在該 slug 不顯示，改於 `/blog/churaumi-aquarium-family-time` 驗證 NEXT 01–03 皆為 `target="_blank" rel="noopener noreferrer"`。本機 `node scripts/content-audit.mjs --strict` 通過（49 篇、0 重大問題、37 個既有口吻提醒、exit 0）。**未完成項目：** 實際點擊測試沒有做成，本次工作階段的內建瀏覽器面板未顯示、畫面不合成，`screenshot`／座標捲動／`left_click` 全部逾時；上述連結結論來自線上 HTML 的實際 `target`／`rel` 屬性與版面量測，不是點擊實測，需在可顯示面板的環境補測或由 wei96 手動確認。**4 項非阻斷建議（尚未處理，待決定）：**（1）`components/reading-next-steps.tsx:63` 的「聯絡頁」連結仍是同分頁，與正上方三張 NEXT 卡不一致，需明確歸類或在 `AI_COLLABORATION.md` 定義導覽例外；（2）`app/blog/[slug]/page.tsx` 封面出處的兩個 Unsplash 連結仍是 `rel="noreferrer"` 缺 `noopener`，無安全漏洞、僅與本次慣例不一致；（3）`npm run build` 現內含 strict 稽核，Vercel 部署會一起跑，日後任一圖片格式不符將擋住整個部署（含無關文章），且 `check:publish` 已等同 `build`、失去獨立意義；（4）圖片稽核只掃 `public/images`，`public/previews/` 等位置不在範圍，且 `listFiles()` 在 `public/images` 不存在時會丟例外中斷稽核而非回報。另有一項未證實觀察：`components/markdown-content.tsx` 對站內連結一律用 Next `<Link>`，包含指向靜態圖檔的 `/images/....jpg`，可能產生多餘的路由 prefetch 下載，本次未實測網路請求。審查期間未修改任何既有程式或文章、未 rebuild、未部署、未動 Search Console、未做任何社群動作，工作區草稿與素材全部保留。完整紀錄：`100_Todo/plans/2026-08-13-claude-review-churaumi-layout-and-link-tabs.md`。註：審查期間 Codex 於同一 repo 推送 `fc857fe`、`a3ba7b7`，故本檔延後至該輪結束後才更新；`AI_COLLABORATION.md` 的 article-link-tab 規則仍為未提交狀態，維持原樣未動。

- 2026-08-13 那霸雨天決策文（Codex，已推送）：使用者已核可完整文章版本。提交 `fc857fe`（`Publish Naha rainy-day decision guide`）與交接提交 `a3ba7b7` 已推送至 `origin/main`；文章以 DMM Kariyushi 水族館與沖繩縣立博物館・美術館的二選一為核心，未新增圖片、票券、Klook 或其他分潤連結。嚴格稽核通過（49 篇、0 個重大問題；37 個既有提醒），production build 通過並產生 77 個靜態頁；正式頁、文章標題、canonical 與 sitemap 已驗證。Search Console 顯示網址尚未編入索引，單次「要求建立索引」線上測試回傳一般錯誤，未重送；稍後再人工檢查即可。Facebook〈下雨不是把景點全部搬室內〉與手機預覽仍未上傳、未排程、未發布，因為使用者尚未明確要求社群發布。

- 2026-08-13 Codex -> Claude Code review handoff: wei96 approved pushing yesterday's completed fixes. Commits `8fd16e2` (`Fix Churaumi ticket article image layout`) and `a0d67b7` (`Open article reading links in new tabs`) are now on `origin/main`; local `HEAD` and `origin/main` both equal `a0d67b7d236915b531ad707a05933d6f128fb296`. Claude Code should review these exact two commits and, after deployment is available, re-open `https://okinawafamilynotes.com/blog/churaumi-aquarium-ticket-price-guide` on desktop and a phone-sized viewport. Verify that the Trip.com screenshots and all later sections no longer overlap, the correct `.jpg` assets load, and representative article-body, official, affiliate, image, related-reading and next-reading links open a new tab while global navigation and back links stay in the same tab. Do not rebuild the solution or include unrelated dirty files in a review commit. The working tree still contains many user/Claude drafts, social assets and planning records; preserve all of them. The permanent future-article rule has also been added locally to `AI_COLLABORATION.md`, but that documentation change is not part of the two pushed commits and must not be assumed deployed.

- 2026-08-13 morning content run (Codex, completed; draft-only): created `100_Todo/drafts/articles/2026-08-13-naha-rainy-indoor-decision-guide.md` and kept its role narrow: compare DMM Kariyushi Aquarium versus the Okinawa Prefectural Museum & Art Museum by child state, available time and movement cost. It does not repeat the existing Naha arrival/return rainy-day guide, and it sends the Okinawa Zoo & Museum to its existing full guide because it is a central-Okinawa main outing, not a Naha quick backup. Official checks cover DMM's current access/hours/family facilities, the museum's hours, multilingual guidance and location, and the Zoo's Naha travel time. The Facebook copy and 1080 × 1350 phone preview for `下雨不是把景點全部搬室內` are in `work/social/okinawa-naha-rainy-indoor-decision/`; it is a distinct one-main-stop decision, not the published arrival/return carousel. Strict audit passed (48 articles, 0 critical; 37 pre-existing style reminders) and the approved-retry production build passed with 76 static pages. The local-preview screenshot was blocked by the in-app browser file-URL policy and was not bypassed; the SVG preview was attached for user review. No live article, image, affiliate/Klook change, commit, push, deployment, production verification, indexing, upload, schedule, or social publishing occurred. Full record: `100_Todo/plans/2026-08-13-naha-rainy-morning-quality-check.md`.

- 2026-08-12 article-reading link behavior (Codex, pushed to `main` on 2026-08-13 in `a0d67b7`): user requested that links opened while reading preserve the current page. Article-body links, related-reading links and affiliate/external action links now open in a new tab; global navigation, category navigation and back links remain same-tab. The shared Markdown renderer applies the behavior automatically to future articles, and external/affiliate links include `noopener noreferrer` (`sponsored` remains on tracked links). Strict content audit passed (48 articles, 0 critical; 37 pre-existing style reminders), `git diff --check` passed and the production Next.js build passed with 76 static pages before the push. Deployment and fresh production verification are still required; preserve all unrelated dirty files.

- 2026-08-12 Churaumi ticket article layout diagnosis (Codex, pushed to `main` on 2026-08-13 in `8fd16e2`): the two Trip.com assets under `public/images/articles/churaumi-aquarium-ticket-guide/` used `.png` filenames but contained JPEG bytes. `lib/image-size.ts` previously selected the parser by extension, misread the JPEG header as PNG dimensions (`65536 × 4292542531`), and made the browser reserve a roughly 37-million-pixel figure height; all later article blocks then collapsed onto the browser layout limit and visually overlapped. The final fix has three layers: both files and all four article references were renamed from `.png` to `.jpg`; the shared image reader now identifies PNG/JPEG/WebP by file signature and rejects implausible dimensions; `scripts/content-audit.mjs` now scans raster signatures and reports mismatched or unreadable formats as critical. `package.json` also runs the strict content audit inside every `npm run build`, so local builds and Vercel deployments cannot bypass the image check. Correct build-time dimensions are `1278 × 719` and `1280 × 520`. A full `public/images` signature scan found no other mismatches. The final integrated build passed (48 articles, 0 critical; 37 existing style reminders; 76 static pages), and the built article contains only the corrected `.jpg` URLs. Deployment and fresh production verification are still required.

- 2026-08-12 morning content run (Codex, completed; publication remains blocked): created the draft-only first-screen replacement for `churaumi-aquarium-family-time` and a `/start` three-entry requirements brief. Official checks still support the 1.5-hour aquarium average excluding transfers and the half-day estimate for wider park facilities; the August extension is explicitly not used to justify overbooking the day. No live article, affiliate link, Klook placement or image changed; the existing Unsplash cover and attribution remain untouched. `content:audit:strict` passed (48 articles, 0 critical; 37 existing style reminders) and the approved-retry production build passed with 76 static pages. Publication is blocked until the user reviews the exact complete article update; `/start` is specification-only because no route exists. No commit, push, deployment, production verification, indexing, social preview or social action occurred. Full record: `100_Todo/plans/2026-08-12-churaumi-morning-quality-check.md`.

- 2026-08-11 Ashibinaa morning content run (Codex, completed; draft remains blocked): rechecked the live official homepage and services page; the general 10:00–20:00 hours, weather / hours-change caveats, stroller loan limits, nursing / changing facilities, accessible toilets and roughly 1,000 parking spaces remain supported. Converted the four previously mapped reader-helpful references into natural draft links to the existing last-day, rental pickup/return, summer packing and DMM guides; each target file exists. No affiliate link was added and the Klook placement test remains untouched through 2026-08-14. Strict audit passed (48 articles, 0 critical; 37 existing style reminders) and the approved-retry production build passed with 76 static pages. Publication remains blocked: no verifiable ASHIBINAA photo, location record or EXIF exists for labels 3, 5 or 9, and the user has not approved the exact complete draft. No commit, push, deployment, production verification, indexing, social preview or social action occurred. Full record: `100_Todo/plans/2026-08-11-ashibinaa-morning-quality-check.md`.

- 2026-08-10 Ashibinaa morning content run (Codex, completed; draft remains blocked): rechecked the draft against ASHIBINAA's live official homepage and services page. General hours remain 10:00–20:00, with explicit weather / hours-change caveats; stroller loan limits, nursing/changing facilities, kids space and roughly 1,000 parking spaces remain supported. Completed the internal-link map to the existing last-day, rental pickup/return, summer packing and DMM guides. No affiliate links were added and the Klook placement test remains untouched through 2026-08-14. Fact and reader-experience checks pass at draft level; publication check fails because the workspace still has no verifiable Ashibinaa original photos, location records or EXIF for labels 3, 5 and 9. The article therefore stays in `100_Todo/drafts/`, pending cleared image material and the user's full-draft approval. `content:audit:strict` passed (48 articles, 0 critical; 37 existing reminders) and the production build passed with 76 static pages after a restricted-environment `spawn EPERM` retry. The 8/10 Facebook/IG car-emergency-kit carousel remains a candidate only: no phone preview, approval or social action occurred. Full record: `100_Todo/plans/2026-08-10-ashibinaa-morning-content-check.md`. No commit, push, deployment, production verification or Search Console action occurred.

- 2026-08-09 Ashibinaa morning content run (Codex, completed; draft remains blocked): refreshed `100_Todo/drafts/articles/2026-08-01_ashibinaa-family-shopping-guide.md` from ASHIBINAA official operating, access and services pages. Removed the unsupported TK02 mention; added official parking, stroller, nursing/changing and kids-space details; and preserved the warning that weather can alter operations. The official access page showed a typhoon-13 temporary-closure notice during this check, so general hours are not treated as a same-day opening guarantee. No original Ashibinaa photos or location/EXIF records exist in the workspace: photo numbers 3, 5 and 9 are unverified labels only, so no self-shot photo is cleared for public use. Full source and three-pass record: `100_Todo/plans/2026-08-09-ashibinaa-morning-quality-check.md`. `content:audit:strict` passed (48 articles, 0 critical; 37 pre-existing reminders) and production `next build` passed (76 static pages). The article remains a draft pending verifiable image material and the user's exact-draft approval. No publication, commit, push, deployment, Search Console action, affiliate change, social preview or social publishing occurred.

- 2026-08-09 workspace cleanup phase 1 (Codex): created `100_Todo/plans/2026-08-09-cleanup-and-change-checklist.md` to separate keep, modify, delete-candidate and deferred work. Verified `AI_HANDOFF.md`, the social publishing log, topic registry and daily schedule are valid UTF-8; the earlier mojibake was a read-mode display issue, so no record rewrite was needed. Removed 18 low-risk server logs, SVG test files and empty browser-test folders. Added `.gitignore` rules for local `tmp/`, preview-server logs, SVG checks, browser artifacts and generated Reel frames. Preserved all formal articles, English drafts, social finals, original photos, the itinerary preview, the double-nine-grid preview and all unrelated dirty files. Do not delete `output/` or `outputs/` wholesale because they contain deliverables.

- 2026-08-06 cover-caption simplification (Codex, deployed in `b6c9558`): reader-facing captions must identify the scene only; removed source/provenance and "real photo" wording from the DMM stingray cover and Okinawa World entrance cover. New captions: `館內水槽的魟魚。` and `沖繩世界園區入口。`. Strict audit passed (48 articles, 0 critical; 37 existing style reminders) and production build passed (73 static pages). Production 390px verification confirmed both exact captions and no horizontal overflow.

- 2026-08-06 Gyokusendo name correction (Codex, deployed in `805673b`): a reader-facing caption mistakenly said `岩宿王`; the correct name is `岩窟王`, verified against the sign in wei96's supplied photo and independent travel references. Corrected the public alt/caption, the content plan and this handoff. Strict audit passed (48 articles, 0 critical; 37 existing style reminders) and production build passed (73 static pages). Production 390px verification then confirmed the exact corrected alt and caption, no remaining wrong spelling, and no horizontal overflow. Do not treat visual recognition of Japanese text as sufficient: cross-check every named photo landmark against its sign or authoritative reference before publishing. For future layout work, benchmark the first-screen decision aid, photo-by-route sequencing and family-specific caveats from relevant search-leading pages before declaring the design ready.

- 2026-08-06 public photo-caption wording (Codex, deployed in `03afa77`): wei96 asked to remove internal privacy-check wording from reader-visible captions. Removed every public reference to avoiding people / identifiable visitors from the DMM and Gyokusendo articles; cave captions now simply name the real scene, and the cave safety sentence stays focused on walking and children. `content:audit:strict` passed (48 articles, 0 critical; 37 existing style reminders) and production build passed (73 static pages). Production was then verified at a 390px mobile viewport: the three cave captions are the simplified scene names, no old reader-visible terms remain, and no horizontal overflow was detected. The existing indexed URL was not resubmitted to Search Console. Commit only these two articles plus this handoff update; preserve all other dirty files.

- 2026-08-06 Okinawa World / Gyokusendo photo update (wei96-approved, deployed in `6928456` and `3f10838`): user reported completing their own check and explicitly approved public use of the original photos to improve the article. The published article now uses photo 13 (entrance), 15 (岩窟王), 16 (Ao-no-Izumi) and 17 (cave water scene); photo 18 is excluded because visitors are identifiable. The original-photo cover and three inline photographs use the established download deterrence; the existing site-made decision graphic deliberately remains unprotected. Strict audit passed (48 articles, 0 critical; 37 existing style reminders) and production build passed (73 static pages). Production 390px verification passed with no horizontal overflow; the existing indexed URL was not resubmitted to Search Console. All unrelated dirty files were preserved.

- 2026-08-06 DMM original-photo download deterrence (Codex, deployed in `1fd1461`): user requested download protection after publication. Added `ProtectedOriginalImage`, applied only to the DMM article's original-photo cover and inline images, and added CSS to block ordinary right-click saving, drag saving, text selection and iOS-style touch callouts. This is deliberately a deterrent, not DRM: a browser must still receive an image in order to display it. `content:audit:strict` passed (48 articles, 0 critical; 37 existing style reminders) and production `next build` passed (73 static pages). Production verification confirmed the protection class on all three DMM images and 390px mobile layout has no horizontal overflow; the two off-screen inline images retain normal lazy-loading behaviour. All other dirty files were preserved.

- 2026-08-06 DMM publication approval (wei96, completed in `ba08eeb`): the user explicitly approved publication of the reviewed DMM Kariyushi Aquarium article and clarified that its photos may also be published after checking the applicable information online. Codex recovered the original 22-photo attachment set from the prior conversation record. The published article uses only photos 10 (stingray cover), 8 (otter mousse) and 14 (sloth); photo 1 is excluded because visitors are identifiable, photo 2 is excluded because its reflected visitors could not be safely cropped in this environment, and photo 11 is excluded for image quality. **Photo rule:** crop out every identifiable face; if a composition cannot avoid faces, exclude that photo rather than blur it or publish it.

- 2026-08-06 DMM publication run (Codex, deployed in `ba08eeb`): refreshed the DMM Kariyushi Aquarium article against current official sources; its public page is `https://okinawafamilynotes.com/blog/dmm-kariyushi-aquarium-family-guide`, with natural links to the existing Naha rainy-day, airport-to-city and Churaumi-duration guides. After the morning draft review, wei96 explicitly approved publication and the selected original photos. Three review passes completed: intent and scope clear; current official ticket, facility, access, cafe, operating and photo-use information verified; every used image was manually checked for identifiable faces; strict audit passed (48 articles, 0 critical issues; 37 pre-existing style reminders, none from the new article) and `next build` passed (73 static pages). Production verification passed: the HTTPS page returned the correct title and self-canonical, all three images loaded at a 390px viewport, and no horizontal overflow occurred. Search Console initially reported the URL unknown / unindexed; one request was then accepted into the priority crawl queue. Do not resubmit while that request is pending. No Klook change or social content was created. The already-dirty daily schedule and social files remain unstaged and untouched.

- 2026-08-05 Kokusai-dori title SEO test (Codex, user-approved and deployed in `5de7fa5`; files: `content/blog/okinawa-kokusai-dori-family-guide.md` and `content/search-keyword-map.md`): Search Console 2026-07-08 through 2026-08-03 shows 170 clicks, 3,503 impressions, 4.9% CTR, average position 7 and 104 queries. The `國際通廁所` query variants total 2 clicks / 36 impressions, so the user approved changing only the article title to `2026 沖繩國際通廁所在哪裡？親子逛街、推車與停車動線`. The description, URL, date and article body remain unchanged. Strict content audit passed with 47 articles and 0 critical issues; production `next build` passed with 72 static pages. Production returned 200 with the new title, the original self-canonical, a working cover image and sitemap coverage. This is an existing indexed URL, so no duplicate Search Console request was sent. Observe the title for 14 days without changing another SEO variable on the page.
- 2026-08-05 Yui Rail child-fare update (Codex, user-approved and integrated): Search Console data through 2026-08-02 shows `沖繩單軌兒童票` at 0 clicks / 11 impressions / position 7.8. Added the approved direct-answer block to `content/blog/okinawa-yui-rail-family-guide.md`, clarified throughout that child fare applies from age 6 to under 12, and documented that contactless payment charges the adult fare for children. Official evidence is in `research/yui-rail-child-fares-2026-08-05.md`; title, description, URL, prices, images and commercial links were not changed. Also corrected the inaccurate cover alt text in `content/blog/okinawa-rental-car-license-translation.md`; the official driving-document facts remain valid and unchanged. Strict audit passed (47 articles, 0 critical; 37 pre-existing reminders) and production `next build` passed (72 static pages). Eight unrelated untracked licence-image files remain untouched. No social content was published and no duplicate Search Console request was sent.
- 2026-08-04 PageSpeed mobile optimization (Codex, completed and deployed in `f209987`): baseline for `https://okinawafamilynotes.com/` was Performance 60, Accessibility 95, Best Practices 81 and SEO 100; LCP was 19.3 seconds and image delivery could save about 4,288 KiB. Replaced the two homepage-linked article covers with right-sized WebP files: emergency-kit cover 2,061,467 -> 106,842 bytes and Naha-airport luggage cover 2,089,111 -> 77,994 bytes. Strict content audit passed with 47 articles and 0 critical issues; production `next build` passed with 72 static pages. Local and production 375px QA passed with no horizontal overflow and both new assets loaded. Three post-deployment PageSpeed mobile runs produced Performance 37/62/88 and LCP 10.3/8.5/3.8 seconds; the medians are Performance 62 and LCP 8.5 seconds. Image savings fell to 461 KiB. The first run's CLS was 0.636 but the next two were 0, so keep it as a monitored load variance rather than claiming a persistent layout regression. Full results are in `100_Todo/plans/2026-08-04-pagespeed-mobile-baseline.md`. Preserve all unrelated dirty files.
- 2026-08-04 strategy and Instagram review (Codex): consolidated the active audience assumptions, positioning, three content pillars, 90-day validation sequence and weekly decision rules in `100_Todo/plans/2026-08-04-audience-positioning-validation.md`. The primary audience is Taiwanese families taking a first or second 3–6-day Okinawa trip with children, especially those planning a rental-car itinerary and needing help with accommodation rhythm, driving logistics, temporary family problems and practical choices. Reworked the unpublished eight-slide Instagram accommodation carousel under `work/social/first-okinawa-where-to-stay/`: corrected all page counts to 1/8–8/8, softened absolute advice, added visible `本站自製情境圖` labels to the generated scenes, replaced the raw-link CTA with the profile-link instruction, created platform-specific Instagram copy and custom alt text, and regenerated all eight 1080×1350 PNGs. Visual review found no clipping or garbled text. The complete preview has been shown to the user in chat; do not publish until the user explicitly approves this exact version. The user also added a permanent whole-message rewrite rule in `AI_COLLABORATION.md`: when one sentence in an external response is corrected, rewrite and return the full coherent message rather than an isolated replacement.
- 2026-08-04 Okinawa World / Gyokusendo publication run (Codex): converted the completed draft into `content/blog/okinawa-world-gyokusendo-family-guide.md`, using a site-made AI situation cover and a site-made 4:5 family decision graphic. The restricted self-shot interior photos remain private and are not referenced by public content. Rechecked the copy from a reader's perspective, corrected wording that could imply a mid-route cave exit, replaced one repetitive AI-style opening, and kept four natural internal links. Strict content audit passed with 47 articles, 0 critical issues and 37 pre-existing reminders; this article adds no reminder. Production `next build` passed with 72 static pages. Deployment, production mobile verification and Search Console submission follow in the same run; no affiliate link or social post was added.
- 2026-08-03 execution update: AdSense personal/payment data is complete and Google shows the site is still under review. Review approval does not immediately trigger a PIN; Google sends the address-verification PIN only after earnings reach the verification threshold. The Okinawa World / Gyokusendo draft has completed its first factual, SEO and reader-language correction in `100_Todo/drafts/articles/2026-08-01_okinawa-world-gyokusendo-family-guide.md` and remains unpublished. The Facebook typhoon long-form was approved, published publicly at 21:38, and verified with one image plus the article URL in Wei Fan's first comment. Public post: https://www.facebook.com/permalink.php?story_fbid=pfbid0UjvzNGn4MfeyoKBD4TipyjUpyT9WdVZbJ6AsNCKuLMry2WNyGQJ8kDk6arMTfDAFl&id=61588725730543.
- 2026-08-02 visible-browser correction: when wei96 must sign in, enter personal or payment data, solve a CAPTCHA or inspect a page, the target page must be brought to the visible foreground and its URL/title verified. Do not claim a background tab is open. This permanent project rule is now in `AGENTS.md`.
- 2026-08-02 execution update: Threads patrol comments、場館照片規則、AdSense 個人付款資料、跨平台簡介及 Threads 第 2 則均已完成。第 2 則於 21:40 公開，下一個社群內容仍須先給精確預覽並取得使用者當次確認。
- 2026-08-02 venue-photo decision: DMM and Okinawa World official inquiry forms were not submitted. After reviewing the commercial-use restrictions and form requirements, wei96 decided not to pursue permission for this batch. Do not publish, deploy or repurpose the DMM Aquarium or Okinawa World / Gyokusendo interior photos. The article topics remain available, but future drafts must use official facts plus site-made covers or infographics.
- 2026-08-02 Codex consolidated the active article, SEO, indexing, Facebook, Instagram, Threads, affiliate, AdSense and analytics work into `100_Todo/plans/2026-08-02-daily-master-schedule.md`. Both agents must read that file after the permanent rules and this handoff before choosing daily work. It uses two morning content units rather than forcing two full articles: one primary article task plus one evidence-backed update, research or social task. The first cycle runs through 2026-08-15, with weekly reviews on 8/8 and 8/15. Social publication still requires an exact preview and the user's explicit approval each time.
- AdSense personal and payment-profile information was completed with the user present on 2026-08-02. The site remains under review, so neither agent may claim that ads are serving or earning revenue yet.
- 2026-08-02 Threads morning patrol automation: active automation `threads` runs daily at 07:30 Taiwan time. It inspects up to three relevant Threads posts and proposes natural Traditional Chinese comments plus up to two accounts worth considering. It must not like, follow or submit comments automatically; every public interaction requires an exact preview and the user's current confirmation. It must keep the existing in-app-browser session, never log out or repeatedly retry login, and must ignore the accidental text `a87`.

## Current State

- 2026-08-02 Threads second post (Codex, published and verified; files: `work/social/threads-parking-reminder/` and `work/social/threads-launch/copy-threads.md`): after reviewing current Okinawa self-drive and family posts, replaced the weak text-only reminder with one 1080×1350 contextual image and a specific pain-led caption. The image is clearly marked `情境示意圖`, includes `okinawafamilynotes.com`, and the main post contains no external link. It was published at 21:40 Taiwan time and verified on the public profile. Permalink: `https://www.threads.com/@okinawa.family.notes/post/Dbiio3UGApr`.

- 2026-08-02 Threads launch post (Codex, published and verified; files claimed: `work/social/threads-launch/assets/` and `work/social/threads-launch/render/`): after the user approved the final copy and all three 1080x1350 cards, Codex published the first Threads post through the in-app browser at 00:47 Taiwan time. The public permalink is `https://www.threads.com/@okinawa.family.notes/post/DbgTZF7mFfx`. Public-page verification confirmed the exact approved copy and all three images in the intended order: original Okinawa road cover, five-step family-itinerary flowchart, and original Okinawa sunset question card. The main post contains no external URL; the profile website link remains available. No account was followed during this publication task.

- 2026-08-02 cross-platform profile positioning (Codex, completed): Threads、Instagram、Facebook 與部落格關於頁都已依同一組真實資料更新，定位為利用下班和休假時間整理沖繩親子自由行的上班族。四個平台依長度各自改寫，網站連結保留，沒有啟用跨平台同步。不可再改成「專門研究」、「旅遊專家」或旅行社口吻。完整採用文字在 `100_Todo/plans/2026-08-01-cross-platform-profile-refresh.md`。

- 2026-08-02 Threads account status (Codex, first post live): Threads is active at `@okinawa.family.notes`, the profile is public, the natural office-worker bio is visible, and `okinawafamilynotes.com` appears as a clickable profile link. The first post is live and verified at `https://www.threads.com/@okinawa.family.notes/post/DbgTZF7mFfx`. Continue using the plan in `docs/social/threads-publishing-plan.md`; preview every later post before publishing. Do not enable account linking, automatic cross-posting or profile syncing.

- 2026-08-01 calculator publication and emergency-kit product links (Codex, deployed in `a3fb5a5`): published `/okinawa-family-trip-budget-calculator`, added it to the footer and sitemap, and kept this release free with no account or stored personal data. A full 2-adult/1-child, 5-day self-drive test with NT$36,000 airfare returned the expected itemized range; local and production 390x844 browser checks showed readable controls and results. Added only three existing, recently vetted Shopee links to `/blog/okinawa-family-car-emergency-kit`: small-pack wet wipes, resealable bags and a 700ml emergency urine bag. The copy explains why each may help, keeps the urine bag as a parked-car last resort, and avoids leak or suitability guarantees. Production returned 200 for both pages; the calculator title and self-canonical are correct, the sitemap contains the route, and all three product links use `rel="sponsored noreferrer"`. `content:audit:strict` passed with 46 articles, 0 critical issues and 37 pre-existing style reminders; the production build passed with 71 static pages. Search Console initially reported the calculator as an unknown URL, completed its live test and confirmed one indexing request was added to the priority crawl queue on 2026-08-01. Do not resubmit while this request is pending. Preserve all unrelated local work.

- 2026-08-01 emergency-kit article strengthening (Codex, included in current main update): replaced the generic SVG cover on `/blog/okinawa-family-car-emergency-kit` with a new GPT-generated photorealistic family-travel scene showing the rental car fully parked before the emergency bag is opened. The public caption clearly labels it as a site-made AI scene rather than a real Okinawa documentary photo. Rewrote the description and opening for more natural Traditional Chinese, added four fast situation checks for toilet urgency, motion sickness, wet clothes and spills, linked the existing travel-gear hub without adding a new product or affiliate URL, and replaced a three-column table after mobile QA showed that its action column required horizontal scrolling. `content:audit:strict` remains at 46 articles, 0 critical issues and 37 pre-existing style reminders; this article adds no new reminder. Production build passed with 71 static pages. Desktop preview rendered the new 1600×900 cover at 702×394; the 390×844 mobile preview rendered it at 333×186 with no document-level horizontal overflow and a visible AI caption. The original `cover.svg` remains in the repo for history but is no longer referenced by the article.

- 2026-08-01 AdSense account and site connection (Codex, site under review; deployment commit `f65833a`): created the AdSense account under `wei960315@gmail.com` for `okinawafamilynotes.com`; publisher ID is `pub-8772944565154374`. Added the exact AdSense verification script supplied by the account to the root layout and published the exact account-provided line in `public/ads.txt`. Production `next build` passed with 70 static pages; both local and production checks returned the publisher ID in the homepage HTML and the exact `ads.txt` line at `/ads.txt`. AdSense confirmed site ownership, accepted the review request and now shows `正在接受審查`; Google CMP is enabled with the three-option consent message (`同意` / `不同意` / `管理選項`). Do not create ad placements or enable broad automatic ads before site review is approved. Payment-profile details remain incomplete and must be entered with the user because they contain legal and banking data.

- 2026-08-01 AdSense readiness and first-page SEO sprint (Codex, completed and committed in `ca19e87`): updated `app/privacy/page.tsx` with a conditional Google advertising and Cookie disclosure, added a first-screen CDW/NOC/roadside-assistance decision table plus a `noc豁免` FAQ to `content/blog/okinawa-rental-car-insurance-noc-guide.md`, and recorded the four-week execution plan in `100_Todo/plans/2026-08-01-adsense-seo-sprint.md`. The NOC title, description and URL were not changed, and existing Klook links remain untouched in their 14-day observation window. `content:audit:strict` passed with 46 articles, 0 critical issues and 37 pre-existing style reminders. Production `next build` passed with 70 static pages. Browser QA passed at 390x844: the NOC page has no horizontal page overflow, its three tables render, the cover loads, and the page language is `zh-Hant-TW`; the privacy page exposes the new section and working Google ads-settings link. The AdSense form was prepared under `wei960315@gmail.com` with Taiwan and no personalized performance tips selected; account creation and site connection were completed in the subsequent handoff entry above.

- 2026-08-01 multilingual pilot (Codex, completed and pushed in `679004c`): implemented plan 2 with Traditional Chinese remaining the main site and a limited `/en/` test. Added an English landing page, English guide index and three manually localized guides covering first-stay area choice, child car-seat rental and Churaumi family visits. Added visible manual language switching, self-canonicals, reciprocal `zh-TW` / `en` / `x-default` alternates, Article metadata and sitemap coverage without changing existing Chinese URLs or advice. Each English guide is 1,200+ words, uses official source links and contains no affiliate placement. `content:audit:strict` passed with 46 Chinese articles and 0 critical issues; production-mode `next build` passed with 70 static pages. Browser QA passed on the English homepage and Churaumi guide at desktop and 390×844 mobile: hydrated document language is `en`, page overflow is 0, images render, the language switch points to the paired Chinese article, and the wide comparison table stays inside its own horizontal scroller. Production returned 200 for `/en`, all three English articles, the paired Chinese article, all three actual cover assets and `sitemap.xml`; canonicals and reciprocal alternates matched the plan. Search Console initially reported all three English articles as unknown new URLs, then completed the live indexing test and confirmed each URL was added once to the priority crawl queue. Do not resubmit while those requests are pending. Handoff and audit records were pushed separately in `910cd4f`.

- 2026-08-01 weekly review (Codex, local report only): completed `100_Todo/plans/2026-08-01-weekly-review.md` without changing public pages, social posts, affiliate links or deployment. Latest complete Search Console week (2026-07-23～07-29) is 73 clicks / 1,304 impressions / 5.6% CTR / 6.9 average position; overview shows 46 indexed and 7 unindexed URLs. GA4 2026-07-25～31 is 141 active users / 443 page views / 105 Organic Search sessions, with 21 Facebook and 2 Instagram sessions; test-account traffic cannot be fully separated in GA4. Facebook reports 1,060 views (93% non-followers) and 32 raw interactions, but author comments and known test reactions mean no verified natural-interaction aggregate; Instagram reports 191 views, 174 reached accounts, 8 raw interactions and 1 profile visit. Klook reports 8 clicks, 0 vouchers and NT$0.00 commission; Shopee was signed out and Trip.com dashboard did not resolve, so their figures are explicitly missing. Klook attribution is in its 14-day observation window: do not add or move buttons. The next-week proposal is two official-source drafts (Okinawa World/Gyokusendo and DMM Kariyushi Aquarium; photo-use rights first), one NOC-guide decision-table improvement, two distinct social angles and the existing Klook placement comparison. `content:audit:strict` passed with 46 articles, 0 critical issues and 37 pre-existing style reminders. Production emergency-kit page has a self-canonical and all four images loaded; this run's attempted 390px browser override did not take effect, so live mobile recheck remains open. The worktree was already dirty; only this weekly-review file and this handoff entry were edited, and neither is committed.

- 2026-08-01 July monthly audit (Codex, local report only): reviewed the 2026-07-03 through 2026-08-01 Git history, all 46 current articles, Search Console snapshots, Facebook / Instagram publishing logs, affiliate implementation, 24 social work folders, six unpublished article-draft files and untracked working leftovers. The complete keep / observe / archive / stop assessment is in `100_Todo/plans/2026-08-01-july-monthly-work-audit.md`. Current content audit passes with 46 articles and 0 critical issues, but still flags 37 repetitive style patterns. No public content, social post, affiliate link or production code changed in this audit. No files were deleted; cleanup candidates remain proposals until the user approves deletion or archiving.

- 2026-08-01 daily content run (Codex, published to `origin/main`; preview path fix included): Search Console 3-month view through 2026-07-29 is 91 clicks / 1,704 impressions / 5.3% CTR / 7.2 average position. The car-seat, Churaumi-duration, Kokusai-dori, first-stay, Churaumi-stay, Naha-airport-city and old-URL 301 experiments remained in their recorded cooling or observation windows; no old public article changed. The old-page slot is `research/internal-link-audit-2026-08-01.md`. Added source-checked `/blog/okinawa-family-car-emergency-kit`, which separates car-cabin supplies and safe-use limits from the existing route/stop planning article. The matching unpublished 8-slide 1080×1350 PNG carousel, source and record are under `work/social/okinawa-family-car-emergency-kit/`; its stable noindex preview route is `/previews/okinawa-family-car-emergency-kit-carousel/`. One distinct AI-generated illustration was used only for slide 1; slides 2–8 are self-made information cards. Local visual check caught and fixed slide 1 and 8 text clipping; the noindex preview also uses absolute image paths so production redirects cannot break its eight PNGs. `content:audit:strict` passed (46 articles, 0 critical; 37 pre-existing style reminders) and `next build` passed (65 static pages). Updated `content/content-plan.md` and `content/seo-scorecard.md`; intentionally did not edit pre-existing dirty `work/social/progress.md`. No product or affiliate link was added, and nothing was uploaded or published to social platforms.

- 2026-08-01 production verification (Codex): `/blog/okinawa-family-car-emergency-kit` returned the article with its self-canonical and cover SVG. The deployed noindex preview returned all 8 PNGs at 1080×1350 after the absolute-path hotfix. The browser extension blocked a direct `sitemap.xml` navigation; the successful production build had already generated the route and the page is included by `app/sitemap.ts`. Search Console showed the new URL as unindexed and not in a visible queue. One indexing request was attempted, but Google returned a reCAPTCHA connection error; do not submit it again until the next normal Search Console review. The browser surface available for this run did not expose a 390px viewport control, so the specific live 390px visual check remains a follow-up rather than being claimed as passed.

- 2026-08-01 unpublished original-photo draft run (Codex, completed and paused for review): the user asked Codex to finish all usable articles first and publish nothing until a later review. Completed `100_Todo/drafts/articles/2026-08-01_photo-batch-draft-index.md` plus five full drafts for DMM Kariyushi Aquarium, Okinawa World / Gyokusendo, Sairai-in Daruma Temple, ASHIBINAA and Tondou ramen. Each draft now includes a search title and description, family decision angle, FAQ, internal-link plan, original-photo placement, sources and publication blockers. Three checks passed: current facts and source cautions, natural reader wording, and publication safety. Keep all six files under `100_Todo/drafts/articles/`; do not move them into `content/blog/`, copy photos into `public/`, deploy, request indexing, or publish to Facebook / Instagram before the user explicitly approves the reviewed versions. DMM and Okinawa World photos remain internal references until their commercial-use terms are resolved. The Tondou meal name in photo 21 remains unconfirmed and photo 13 should be location-checked once more before public use.

- 2026-08-01 photo-location follow-up (Codex): resolved two unknowns from the 22-photo batch without asking the user to remember them. Photos 4, 6 and 7 are identified as Darumaho Sairai-in (Daruma Temple) in Shuri, Naha, using the visible `達磨峰` sign plus matching public display photos. Photo 8 is the otter mousse cake at KIRARA CAFE inside DMM Kariyushi Aquarium, confirmed on the aquarium's official cafe page. The photo plan now records these as identified; current menu availability and venue photo-use terms still require a fresh check before publication.

- 2026-08-01 original-photo batch record (Codex): the user's 22 Okinawa photos were discussed in chat but had never been formally catalogued. Added `100_Todo/projects/2026-08-01_okinawa-original-photo-content-plan.md` with a photo-by-photo map, duplicate handling, proposed DMM / Gyokusendo / food article uses, unresolved venue names and rights checks. No photo was copied into `public/` or published. The Daruma and dessert locations were subsequently resolved; remaining location checks are the Tondou branch, photo 13 and the generic road/sunset shots. Verify current venue photo-use terms before publication.

- 2026-07-31 affiliate attribution upgrade (Codex): split the shared Churaumi Klook destination into two separately labelled affiliate ads so the article and booking hub no longer report under one ID. Article ad ID: `1362380` (`blog_churaumi_ticket / churaumi_ticket / comparison_link`); booking-hub ad ID: `1362390` (`hub_trip_booking / churaumi_ticket / ticket_section`). All public affiliate components and Markdown affiliate links now send the same GA4 `affiliate_click` fields: `affiliate_network`, `source_page`, `item_name`, `link_placement`, `content_group`, `link_url`, and `page_path`. GA4 event-scoped custom dimensions were created for platform, source page, item and placement. Operating rules and the 14-day review window are recorded in `100_Todo/plans/2026-07-31-affiliate-attribution-plan.md`. `content:audit:strict` passed with 45 articles and 0 critical issues; 37 pre-existing style reminders remain. `next build` passed with 64 static pages. Existing unrelated dirty files were preserved and not staged.

- 2026-07-31 Facebook independent long-form publication (Codex): after the user explicitly said `發`, published `孩子到了沖繩餐廳突然不吃，不一定是挑食` through the Codex in-app browser on Wei Fan. The main post contains no external URL; the first comment links to `https://okinawafamilynotes.com/blog/okinawa-family-restaurant-dining-guide`. The standalone public post page was reopened and verified for the approved body copy, audience `所有人`, and the completed first comment. Public post: https://www.facebook.com/permalink.php?story_fbid=122117680041290857&id=61588725730543. Facebook Content Library also records it as published on 2026-07-31 at 22:15 Taiwan time.

- 2026-07-31 Facebook caption correction (Codex): the user rejected the published Naha Airport luggage-storage caption because it sounded formulaic and exposed the internal phrase `作者第一則留言`. After the six wording changes were explicitly approved, the live Facebook post was edited in place through the Codex in-app browser. The revised caption now opens with the actual arrival situation, gives the return-to-airport decision rule directly, points readers to `第一則留言` without referring to an author, adds the official-site reminder and keeps only three relevant hashtags. Public verification passed: the new caption and hashtags are visible, the old phrase is absent, audience remains public, all eight carousel images remain attached, and the existing first-comment article link still renders. Public post: https://www.facebook.com/permalink.php?story_fbid=pfbid0RpmEfQ8kxMPCvpegqrQNtPaaSosikuEsZCBheLT49SDNj8nYRtdCJU6NDTyjo993l&id=61588725730543. Permanent publishing rule: reader-facing copy must never contain workflow labels such as `作者第一則留言`; run both a natural-language review and a public-context check before pressing publish.

- 2026-07-31 Facebook carousel publication (Codex): user gave same-task approval to publish the Naha Airport luggage-storage carousel. Using the Codex in-app browser, uploaded and verified exactly `01.png` through `08.png` from `work/social/okinawa-naha-airport-luggage-storage-family-guide/render/png/`, kept the approved Facebook copy, confirmed audience `所有人` and immediate publication, then published publicly to Wei Fan. Public post: https://www.facebook.com/permalink.php?story_fbid=pfbid0RpmEfQ8kxMPCvpegqrQNtPaaSosikuEsZCBheLT49SDNj8nYRtdCJU6NDTyjo993l&id=61588725730543. The author's first comment contains the UTM-tagged luggage-storage article URL and renders the correct rich preview. The public post was reopened and verified for caption, public visibility, carousel media and comment. Instagram was not used. Pre-existing dirty `work/social/progress.md` and all other unrelated changes were preserved and not staged.

- 2026-07-31 daily content run (Codex): work commit `a1d671a Publish Naha airport luggage storage guide`. It adds source-checked `/blog/okinawa-naha-airport-luggage-storage-family-guide`, covering the narrow arrival-day question of whether a family can temporarily store large luggage at Naha Airport before hotel check-in. Facts come from Naha Airport's first-party luggage-service pages: Yamato, Before U Go and Sagawa options are presented as dated, per-item/per-day references rather than availability guarantees. The page links naturally to the existing airport-transfer, stroller, rental-luggage and last-day guides; no commercial link was added. The old-page slot stayed a cooling-window / internal-link audit: no changes to the car-seat, Churaumi-duration, Kokusai-dori, first-stay or 301 rest-stop experiments. A matching eight-slide 1080×1350 carousel uses three distinct original generated scenes; its source, PNGs, copy and record are under `work/social/okinawa-naha-airport-luggage-storage-family-guide/`. Stable noindex review URL: `/previews/okinawa-naha-airport-luggage-storage-carousel/`. Local 390px verification: all 8 images loaded; client and scroll width both 390px; first-screen visual inspected. `content:audit:strict` passed (45 articles, 0 critical; 37 pre-existing legacy style reminders) and `next build` passed (64 static pages). Production verification passed after deployment: article and cover returned 200, canonical self-references, sitemap contains the slug, and preview plus all eight PNGs returned 200. No usable signed-in Search Console surface was available in this run, so no index request was submitted. Existing dirty `content/content-plan.md` and `work/social/progress.md` were preserved and not edited. This carousel was subsequently published; see the Facebook publication entry above.

- Booking-hub improvement (Codex, 2026-07-31): `/okinawa-family-trip-booking` now opens with three direct choices for accommodation, rental cars and attraction tickets; Naha and Onna sections use existing approved regional images; the verified Churaumi Klook/Trip.com ticket links and illustrated purchase guide are included. `AffiliateServiceLink` now tracks Klook as well as Trip.com and Shopee. Build passed with 63 static pages. Desktop and 390px mobile browser checks passed; the mobile document measured 375px client width and 375px scroll width, and both ticket buttons were visible. No Trip.com hotel product photo was copied because the partner session was signed out and the public tool page only clearly confirmed official banner tools, not general reuse rights for hotel photos.
- Shared operating plan (Codex): added `100_Todo/plans/2026-07-31-site-growth-revenue-plan.md` as the required source for keyword selection, link placement, image-card testing, multilingual gating and non-affiliate revenue. Updated `AI_COLLABORATION.md` with a mandatory start sequence: check Git state, re-read the permanent rules and latest handoff, inspect the current plans and scorecards, respect experiment windows and file ownership, then continue the highest evidence-backed task. Current priority is to verify platform-provided image rights/tools, then test image-rich cards on the booking and travel-gear hubs. Full-site translation remains deferred; the first multilingual test is English `/en/` plus 3 manually reviewed pages only after the recorded evidence gate is met. Additional revenue priorities are a small digital product, LINE/email audience building, later AdSense, brand/UGC work, original-photo licensing and a carefully bounded itinerary-review service.
- Homepage SEO update (Codex): the homepage now emits the standalone title `2026 沖繩親子自由行攻略｜行程、住宿、租車與景點` for Google search results without changing the visible brand or adding a year to every article. Homepage-only `WebSite` JSON-LD identifies the Chinese site name with `Okinawa Family Notes` as the alternate name; the existing `Organization` JSON-LD now uses the same naming order. The production build passed with 63 static pages. Strict content audit remains at 44 articles, 0 critical issues and 37 pre-existing style reminders. Production returned the new title after deployment. Search Console confirmed the homepage is indexed; exactly one recrawl request was submitted on 2026-07-30 and accepted into the priority crawl queue. Do not resubmit while Google is processing it.
- 2026-07-30 daily content run (Codex): Search Console 3-month report through 2026-07-28 is 77 clicks / 1,400 impressions / 5.5% CTR / 7.2 average position. The car-seat title experiment is now 4 / 209 / 1.9% / 6.9 versus 2 / 106 / 1.9% / 7.2 at its baseline: do not alter it again; observe at least two more weeks. Churaumi time, Kokusai-dori toilet and 301 rest-stop experiments remain untouched. Old-page work was therefore a documented internal-link audit (`research/internal-link-audit-2026-07-30.md`), not a forced content edit.
- New article in this run: `/blog/okinawa-naha-airport-to-city-family-guide`, an official-source, no-affiliate comparison of monorail, bus, taxi and rental-car shuttle choices for a family arriving at Naha Airport. It has links to the existing Yui Rail, rental pickup, licence-translation and rainy-day pages. Matching unpublished 8-slide 1080×1350 carousel source, PNGs, mobile-preview HTML and prompt record are at `work/social/okinawa-naha-airport-to-city-family-guide/`; no social post was uploaded or published. `content:audit:strict` passed with 44 articles and 0 critical issues (37 legacy style reminders; none in this article); `next build` passed with 63 static pages. Production verification passed: article and cover return 200, the canonical self-references, the sitemap contains the slug, and the 390px production article has 375px document scroll width. Search Console showed the new URL as unindexed and not previously queued; exactly one request was submitted on 2026-07-30 and confirmed in the priority crawl queue. Do not resubmit before the normal 7–14-day review. The pre-existing dirty `content/content-plan.md` and `work/social/progress.md` were preserved, not edited.
- 2026-07-30 permanent correction: do not put commission, affiliate, partnership, revenue or disclosure wording in reader-facing articles, booking/product pages, social copy, first comments or user-facing reports. The existing tracked links and technical attributes remain; the public wording was removed from eleven articles, the booking and gear pages, the about/contact/footer surfaces, and the obsolete public disclosure route. This rule and the required daily re-read are recorded in `AI_COLLABORATION.md` and `content/affiliate-product-workflow.md`. Work commit: `5d87019 Remove public affiliate wording`.
- Status update (2026-07-30): the Facebook sign-in and publication task is complete. The next social review is to collect 24–48-hour Facebook reach, interaction and website-click data for the two published carousels.
- Active owner: Codex for SEO and content strategy. Claude Code may complete the Instagram organic-growth research assignment below and may research hotel or emergency-toilet product candidates after receiving the matching plan; it should not edit public articles yet.

## Facebook publication record — 2026-07-29/30 (Codex)

- Published publicly, Facebook only (no Instagram post):
  - **美麗海水族館附近親子住宿** — [Facebook post](https://www.facebook.com/permalink.php?story_fbid=pfbid02gQp6M1XXmARiX98rgsAwuKoNz5AdWMcgT3fBqmjbZniTe5f7J2BhiDz6Z2sLisqWl&id=61588725730543); linked article: https://okinawafamilynotes.com/blog/okinawa-churaumi-nearby-family-stay
  - **第一次去沖繩住哪裡（舊文優化）** — [Facebook post](https://www.facebook.com/permalink.php?story_fbid=pfbid0DZ9dSM162E1wu9wZH87WpoEh5EvzzVNZVLpiWmQMSJbXK5cLP4WaoYFiBtJeZfEol&id=61588725730543); linked article: https://okinawafamilynotes.com/blog/first-okinawa-where-to-stay
- For both posts, the Facebook editor’s image list was verified as exactly `01.png`–`08.png`, audience as public, and Wei Fan’s first comment as the corresponding article URL with a rendered article preview.
- Active Codex task: await the user signing in to Facebook in the required in-app browser, then publish the two approved carousel sets. The Trip.com affiliate additions for `/blog/okinawa-churaumi-nearby-family-stay` are complete in `c7a8cf6` and production-verified; they did not alter its title, description, URL or primary advice. Observe the page after 2026-08-26; keep the Churaumi ticket guide in its 7–14-day observation window.
- `research/serp-affiliate/rental-car.md` contains the completed first map. `family-stay.md` and `family-gear.md` currently contain useful three-query summaries but do not yet meet the required ten-result-per-file completion definition; treat them as unfinished research, not completed maps.
- Codex files currently claimed: `work/social/okinawa-last-day-family-plan/copy-facebook-long-form-2026-07-27.md`, `work/social/okinawa-family-restaurant-dining-guide/copy-facebook-long-form-2026-07-28.md`, `100_Todo/plans/2026-08-01-weekly-review.md`, `content/content-plan.md`, and this handoff.
- The rental-car luggage carousel was published successfully through the Codex in-app browser with all eight images, public visibility and the article URL in the author's first comment:
  `https://www.facebook.com/permalink.php?story_fbid=122117308761290857&id=61588725730543`
- Permanent correction: Facebook posts, carousels, Reels, first comments and insights must use the Codex in-app browser unless the user explicitly requests Chrome in that task. If the in-app browser fails, stop before publishing and report the problem; never silently switch browsers or claim success.
- Permanent Reel correction: before upload, match the exact file hash, duration and visible first scene against the approved or cross-platform reference. In Instagram's crop step, explicitly choose the intended aspect ratio instead of trusting the default. After publishing, verify the public transcode dimensions and a public-page screenshot before adding the first comment. If the public ratio is wrong, stop, record the issue and obtain user approval before deleting or reposting.
- Instagram carousel #5, `沖繩單軌親子搭乘`, was published on 2026-07-28 at 21:53 Taiwan time with eight verified 1080×1350 images, custom alt text, public visibility, comments enabled and Threads auto-share disabled: `https://www.instagram.com/okinawa.family.notes/p/DbVsRicGSZl/`. The first comment was verified at 21:55; `docs/social/instagram-publishing-log.md` is the detailed record.
- Facebook audit on 2026-07-28 confirmed the rental-luggage, Yui Rail and Okinawa Zoo carousels each contain exactly eight ordered slides. The Yui Rail and Okinawa Zoo captions had accidentally exposed the internal note `（發布時將文章連結置於第一則留言）`; Codex edited the existing public posts in place, removed the note, retained public visibility and verified both first-comment article links. The matching local `copy-facebook.md` files are corrected.
- The stroller carousel was rebuilt as v2 with eight distinct stroller-decision scenes and no repeated rental-luggage sequence. All eight images load at 390px mobile and desktop widths without horizontal overflow; the Facebook copy keeps the article URL out of the main post. It is not published and still requires the user's visual approval and final publication confirmation.
- The earlier Facebook draft with an ambiguous `01.png +8` summary is retired. When v2 is approved, start a fresh in-app-browser upload, attach exactly `01.png` through `08.png`, verify all eight thumbnails, confirm `所有人`, and place the article URL in the author's first comment.
- Shared branch: `main`
- Latest site commit: `a3a619e Publish Churaumi ticket comparison guide`
- Latest daily content commits: `4ef510a Publish driving pace and typhoon guides`, `8fea335 Record daily content handoff`
- Latest content commit: `a3a619e Publish Churaumi ticket comparison guide`
- Last full site build: passed on 2026-07-29 (62 static pages, 42 articles).
- Live site: `https://okinawafamilynotes.com`

## Claude Code Research Assignment, 2026-07-26

The user explicitly asked Claude Code to collect more evidence before deciding the long-term Instagram publishing rhythm.

- Status: completed through a public-source-only Claude Code second review. The combined 30-day strategy is saved at `100_Todo/plans/2026-07-26-instagram-organic-growth-research-claude.md`.
- Research the current best practices for growing a new Instagram account through organic reach, with priority on official Instagram / Meta guidance and recent credible experiments or case studies.
- Compare daily posting with 3–5 high-quality posts per week for a new Traditional Chinese family-travel account.
- Evaluate carousel frequency, first-slide hooks, caption structure, keyword and hashtag placement, first-comment strategy, saves/shares, profile conversion, and the role of Reels.
- Separate evidence from opinion. Do not promise reach, invent algorithm rules, or treat one creator's result as universal.
- Review the first three published posts and the metrics in `docs/social/instagram-publishing-log.md`, but do not edit or publish any Instagram post.
- Write findings and a concrete 30-day recommendation only to `100_Todo/plans/2026-07-26-instagram-organic-growth-research-claude.md`.
- Do not change the active daily 20:30 Instagram automation, public-account settings, social assets, article content, or files currently claimed by Codex.

## Just Completed

### Daily content: Churaumi-area family stay, 2026-07-29 (Codex)

- Published `/blog/okinawa-churaumi-nearby-family-stay`, a separate intent from the existing aquarium-duration and regional-stay pages: whether a family should stay in Motobu for the aquarium day, and which three candidates to compare first.
- Added three verified, individually tracked Trip.com hotel links at the same-date comparison decision point: Royal View Hotel Churaumi (hotel ID `1945610`), Hotel Mahaina Wellness Resorts Okinawa (`703608`), and Wisteria Condominium Resort (`3898854`). The single short disclosure appears directly below; the page retains `rel="sponsored noreferrer"` through the Markdown renderer. Research confirmed all three current booking pages; prices remain intentionally unstated because dates and party details were not supplied.
- Used first-party/official sources for Royal View Hotel Churaumi, Hotel Mahaina and Wisteria. The article deliberately does not rank a permanent cheapest option: the 2026-07-29 check had no shared travel date, room count, adult count or child age, so homepage starting prices were not comparable. No unverified affiliate link was added.
- Improved `first-okinawa-where-to-stay` only with a natural Motobu decision link. Its title, description, URL and existing candidate list remain untouched. Skipped car-seat (until 2026-07-30 data review), aquarium duration (until 2026-08-07), the 2026-07-28 Kokusai-dori update (until 2026-08-11), and the 301 rest-stop experiment.
- Added two unpublished 8-slide 1080×1350 carousel sets, their original copy, self-made three-scene photo assets and noindex public previews: `/previews/okinawa-churaumi-nearby-family-stay-carousel` and `/previews/first-okinawa-where-to-stay-carousel`. At 390px, both previews loaded all 8 images with no horizontal overflow; the article’s first image also loads with no overflow.
- Fixed the first inline article image from lazy to eager loading. This came from the real 390px check, which initially revealed the new cover blank before it entered the viewport.
- Search Console could not be operated in this run, so no index request was submitted. Recorded baseline and cooldown decisions in `content/seo-scorecard.md`.
- `content:audit:strict`: passed, 43 articles and 0 critical issues; 37 legacy style reminders remain. `next build`: passed, 63 static pages. Content commit: `318f83f Add Churaumi family stay guide`.
- Production verification after the push passed: the new article and cover return 200, its canonical is self-referencing, the sitemap contains the new slug, and both noindex previews return 200 with all 8 images loaded.

### Churaumi ticket comparison guide, 2026-07-29 (Codex)

- Added `/blog/churaumi-aquarium-ticket-price-guide` for the separate search intent of ticket prices, platform comparison, child-age rules and purchase steps. The existing Churaumi duration article keeps its established `停留時間` focus and now links naturally to the new guide.
- Compared only matching general admission products across the official site, Klook and Trip.com. The Klook 17:00 ticket is clearly identified as a different, time-limited product and is not used to claim that one platform is always cheapest.
- Added one verified Klook affiliate link and one Trip.com affiliate deep link. Ordinary platform source links remain `noreferrer`; only tracked links render with `rel="sponsored noreferrer"`.
- Included three verified Klook purchase screenshots with full-size links for mobile readers. Visual QA found that the source files were JPEG images carrying `.png` names; they were corrected to `.jpg`, rebuilt and rechecked at desktop and 390px mobile widths.
- Added matching Trip.com walkthrough visuals after reader review: one shows how to skip the one-day-tour area and find the single-attraction ticket, and one shows two adult tickets with the order total. Trip.com auto-filled the signed-in account email on the lower checkout form, so every published crop stops above personal and payment data.
- Reader-facing copy uses one short `合作收益` disclosure and does not use the word `分潤`; keep the disclosure transparent without making monetization the focus.
- Recorded the Trip.com link evidence in `research/affiliate/trip-churaumi-deep-link.md` and the 14-day traffic plan in `100_Todo/plans/2026-07-29-churaumi-ticket-traffic-plan.md`.
- `content:audit:strict`: passed with 43 articles and 0 critical issues; 37 pre-existing style reminders remain and the ticket guide adds none.
- `next build`: passed with 63 static pages.
- Production verification passed after deployment: the article returns the expected title and canonical, all five Klook/Trip.com walkthrough images load, the page has no mobile horizontal overflow, both tracked links render as sponsored and the existing duration article links to the guide.
- Search Console reported the new URL as unknown and unindexed. One index request was submitted on 2026-07-29 and Google confirmed it entered the priority crawl queue; do not submit it again before the 7-to-14-day review.
- Latest walkthrough commit: `508a8f7 Add Trip.com ticket walkthrough`; original article commit: `a3a619e Publish Churaumi ticket comparison guide`.

### First Klook Churaumi affiliate deep link, 2026-07-28 (Codex)

- Generated the link through the logged-in Klook Affiliate converter with `Okinawa Family Notes` selected as the promotion site.
- Verified that the generated link includes affiliate ID `128859`, redirects to the correct Churaumi Aquarium ticket product and retains affiliate tracking parameters after the redirect.
- Added one reader-facing ticket comparison link to `content/blog/churaumi-aquarium-family-time.md`, with a single disclosure and reminders to compare the official price, age rules, date and cancellation terms.
- Recorded the source URL, generated URL and verification result in `research/affiliate/klook-churaumi-deep-link.md`. Do not bulk-add more Klook links until this placement has live click data.

### Churaumi ticket walkthrough preview, 2026-07-28 (Codex)

- Prepared a noindex public walkthrough preview for cross-device review at `/previews/churaumi-ticket-guide`.
- The guide uses three verified Klook screenshots to show the general-ticket selection, two-adult quantity setting, NT$844 total and `立即預訂` button. It stops before login and contains no QR code, account data or payment action.
- Verified all three images at 390px mobile and 1280px desktop widths with no horizontal overflow. Work commit: `ac586da`; the production short URL redirects correctly, keeps `noindex`, and loads all three images on both viewport checks.
- Removed the internal-sounding phrase `教學到這裡就先停下來`; the reader-facing copy now moves directly from login to the final order checks.

### Northern family itinerary Facebook Reel, 2026-07-27 (Codex)

- Published the 15.5-second Okinawa northern family itinerary Reel through the Codex in-app browser to the Wei Fan professional profile with Public visibility.
- Enabled Facebook's AI-content label because the Reel uses realistic AI-generated travel scenes.
- Kept the external article URL out of the main caption and added the live Churaumi family-time article in the author's first comment:
  `https://okinawafamilynotes.com/blog/churaumi-aquarium-family-time`
- Public Reel:
  `https://www.facebook.com/reel/1397626239013312/`
- Instagram was not published in this run; it still requires explicit user authorization and the in-app-browser publishing workflow.

### Public carousel previews and cross-device acceptance rule, 2026-07-27 (Codex)

- Added two noindex public preview pages for the unpublished rental-luggage and stroller carousels. Each contains eight web-optimized images, uses a single-column mobile layout and a three-column desktop layout, and has a stable short preview URL. The initial mobile check found that deferred image loading left lower slides unloaded; the follow-up commit `840df30 Eager load carousel preview images` removes that delay so all eight load immediately.
- Added redirects from each clean preview URL to its static `index.html`, so the preview does not depend on a local `C:\...` path or a chat attachment.
- Added a permanent content-plan acceptance rule: a carousel must load at both desktop and 390px mobile width with all eight images present and no horizontal overflow before it can be handed off or scheduled.
- The old driving-rest URL remains a permanent 301 to the current page. No old-URL links were added; the waiting period is only for Google to consolidate the URL signals.
- Work commits: `d4eb3dc Add public carousel previews`, `840df30 Eager load carousel preview images`. Production verification passed: both preview URLs load all eight images at desktop and the 390px mobile viewport, with no horizontal overflow.

### Rental-car luggage decision guide and stroller refresh, 2026-07-27 (Codex)

- Search Console current three-month view through 2026-07-24: 26 clicks, 566 impressions, 4.6% CTR and average position 7.9. The stroller guide rose to 6 clicks / 96 impressions, so it was selected for a conservative old-page improvement.
- Published `/blog/okinawa-rental-car-luggage-stroller-guide`, covering the separate intent of fitting child seats, a folded stroller and luggage into a rental car. It cites Toyota Rent a Car and Nippon Rent-A-Car vehicle-class guidance, distinguishes seating capacity from real cargo configuration, includes FAQs and adds no affiliate link.
- Updated only the stroller article's naturally relevant rental-space link; its title, description and established search intent were left intact.
- Deliberately skipped the active experiments: car-seat title, Churaumi duration page and the 301-merging old driving-rest URL.
- Created two unpublished 8-slide 1080×1350 carousels at `work/social/okinawa-rental-car-luggage-stroller-guide/` and `work/social/okinawa-family-stroller-guide/`. Each uses three self-generated travel scenes, includes source/copy/prompt records and has a visually inspected 390px stacked PNG preview. No social post was published.
- `content:audit:strict`: passed with 40 articles, 0 critical issues and 34 pre-existing style reminders; the new article adds none. `next build`: passed with 60 static pages.
- Local article verification: page renders, self-referencing canonical resolves to the production URL and the cover path is present. Before handoff, still push and verify the deployed URL, cover and sitemap; request indexing only if Search Console shows it unindexed and absent from the existing queue.

### Baby-bottle hotel cleaning guide, 2026-07-26 (Codex)

- Added `/blog/okinawa-baby-bottle-hotel-cleaning-guide` for first-time parents who need a practical hotel routine for washing, sanitizing, drying and carrying bottles during an Okinawa trip.
- The article separates cleaning from sanitizing, explains why a dedicated wash basin and air-drying area matter, and covers infant formula, milk and cleaning-liquid baggage rules without treating all baby-related liquids as exempt.
- Checked the health and flight-safety guidance against Taiwan HPA, the U.S. CDC and EVA Air. The article tells readers to confirm their bottle material, child's health needs, airline and airport rules before travel.
- Added two verified Shopee choices only where they solve a matching problem: a LIFEMATE portable bottle-brush kit and Simba 120ml bottle-cleaning spray. The article includes one affiliate disclosure, limitations and the 120ml checked-baggage warning.
- Generated and optimized an original 16:9 hotel bottle-cleaning cover. No third-party photo attribution is required.
- Added natural internal links to the driving rest-stop guide, summer packing list, travel-gear page and first-stay guide.
- `content:audit:strict`: passed, 39 articles and 0 critical issues; 34 existing reminders remain, with none from the new article.
- `next build`: passed, 59 static pages. Production verification passed: the article and WebP cover return `200`, the page has a self-referencing canonical, and the live sitemap contains the slug.
- Search Console reported the new URL as unknown and unindexed. One index request was submitted on 2026-07-26 and Google confirmed it entered the priority crawl queue; do not submit it again before the normal recheck window.
- Commit: `8a55a85 Publish baby bottle hotel cleaning guide`.

### Standalone Facebook long-form post, 2026-07-26 (Codex)

- Published a new long-form post from the Wei Fan professional profile about deciding whether to wake a child who falls asleep just before arriving at the next stop.
- The post uses a different situation and structure from the driving-pace carousel instead of stretching the carousel into a longer caption.
- Confirmed the post audience is public. The main post contains no external URL; the matching driving-pace article was added in the author's first comment.
- Permalink: `https://www.facebook.com/permalink.php?story_fbid=pfbid0guKFYxDNJP5s1AhVZLRvd7CHd5dc74F9fXYcjYZw8K2U9mx2u7KC3Jt9Q69iZKpDl&id=61588725730543`

### Public contact channel, 2026-07-26 (Codex)

- Replaced the unfinished contact-page placeholder with the user's public Facebook profile as the current contact channel.
- Added clear guidance for article corrections, travel experience additions and collaboration enquiries without exposing a private phone number, address or LINE account.
- Updated the privacy page to link to the live contact page.

### 700ml emergency urine bag affiliate links, 2026-07-26 (Codex)

- Replaced the weak child-urinal direction with two verified 700ml disposable emergency urine bag choices.
- The primary option is a MINONO product in Shopee Mall with complete material and capacity details; the backup has 1,000+ sales and 117 reviews but one low review reported poor absorption.
- Added both links to `/okinawa-family-travel-gear` and the drive-toilet article with safe-stop, privacy, disposal and seller-claim limitations. The article still prioritizes planned toilets, roadside stations and rest stops.
- Updated `100_Todo/plans/2026-07-26-hotel-and-emergency-product-candidates.md` with the observed product data and short links.

### Facebook long-form topic rule, 2026-07-26 (Codex)

- Facebook long-form posts must use a new situation, question or angle that has not just been published as a carousel.
- A long post may link to a related site article, but it must not stretch the same carousel copy into 1,000-1,500 characters or repeat the same Hook on the following day.
- Updated `docs/social/social-workflow.md` and `content/content-plan.md` so Codex and Claude Code follow the same rule.

### Hotel affiliate placement, 2026-07-26 (Codex)

- Added the four verified Trip.com hotel links to reader-matched decisions instead of showing a generic affiliate list:
  - Tokyu Stay Okinawa Naha and Mercure Okinawa Naha in `/blog/first-okinawa-where-to-stay`.
  - Rizzan Sea-Park Hotel Tancha Bay and Hotel Miyuki Beach in `/blog/onna-family-stay-guide`.
  - All four on `/okinawa-family-trip-booking`, separated by Naha and Onna family situations.
- Each hotel gives one useful fit and one limitation before the button. The area-level hotel list remains available only as a fallback.
- All article links render with `rel="sponsored noreferrer"`. The booking-hub buttons retain GA4 `affiliate_click` tracking and separate `trip_sub1` values.
- Mobile QA at 390px found and fixed one long Rizzan button label. Final buttons are 44px high, all text fits, and no horizontal overflow was detected on the hub or either article.
- `content:audit:strict`: passed, 38 articles and 0 critical issues; 34 existing style reminders remain.
- `next build`: passed, 58 static pages.
- Production verification passed after deployment: the booking hub shows all four hotels, and both lodging articles expose their expected Trip.com `trip_sub1` values with sponsored link attributes.
- Emergency-toilet product links remain on hold because exact product specifications are not yet verified.

### First hotel affiliate links, 2026-07-26 (Codex)

- Generated four Trip.com hotel deep links in the signed-in affiliate dashboard, each with a separate `trip_sub1` value: Tokyu Stay Okinawa Naha, Mercure Okinawa Naha, Rizzan Sea-Park Hotel Tancha Bay and Hotel Miyuki Beach.
- Recorded the exact links, intended reader situation and placement order in `100_Todo/plans/2026-07-26-hotel-and-emergency-product-candidates.md`.
- Searched Shopee Affiliate for child car urinals. Several listings show 1,000+ sold, but the available affiliate view does not confirm enough information about material, capacity, opening size, seal or gender fit. The direct product page triggered Shopee security verification, so no product link was generated or approved.
- Do not publish a child-urinal affiliate link until an official or otherwise reliable specification source can be matched to the exact Shopee listing. Continue with a branded child urinal or a clearly specified solidifying emergency urine bag.
- No public article or booking-page content changed in this step.

### Daily Facebook publication, 2026-07-26 (Codex)

- Published the Yui Rail and Okinawa Zoo & Museum 8-slide carousels from the Wei Fan personal professional account. Each was individually set to `所有人` before publication and the upload editor confirmed `01.png` through `08.png`.
- Added the matching live article URL in the author's first comment for each carousel:
  - `https://okinawafamilynotes.com/blog/okinawa-yui-rail-family-guide`
  - `https://okinawafamilynotes.com/blog/okinawa-zoo-museum-family-guide`
- The user approved changing the global audience default. Codex enabled `設為預設分享對象` with `所有人`, closed the empty draft and reopened the composer to confirm future posts now default to public.
- Updated `work/social/progress.md`. No Instagram target was identified or used in this publication run.

### Search-led content and affiliate plan, 2026-07-26 (Codex)

- Search Console for 2026-07-08 to 2026-07-23 reports 22 clicks, 472 impressions, 4.7% CTR and average position 8.
- Current search signals center on child car-seat rules, rental-car safety seats, refueling, aquarium duration, rain plans and Onna accommodation.
- Highest-opportunity pages are the child car-seat guide (2 clicks / 124 impressions), driving rest-stop guide (2 / 27), toilet and convenience-store guide (0 / 24), and refueling guide (0 / 29).
- Chosen operating rhythm: one new article plus one existing-article improvement, rather than two unrelated new articles every day.
- The 08:00 daily automation now reads `content/seo-scorecard.md` and the search-led plan before selecting work. Pages inside an active SEO experiment must remain unchanged until their recorded verification date; if no old page is eligible, the automation performs research or an internal-link audit instead.
- The child car-seat title was changed by Claude Code on 2026-07-23 and must remain unchanged through 2026-07-29. Codex briefly prepared another edit, found the hold in the scorecard before committing, and fully removed the local change.
- Accommodation content will compare 3–5 price-friendly, conveniently located candidates per area without claiming a permanently lowest price.
- Affiliate disclosure remains mandatory but appears once near the first affiliate action; Trip.com stays in booking decisions and Shopee stays inside matching gear situations.
- Full plan: `100_Todo/plans/2026-07-26-search-led-affiliate-growth.md`.
- Added the same daily decision rules to `content/content-plan.md`, so the 08:00 automation, Codex and Claude Code all consult the scorecard before changing an existing article.
- Completed the first shared candidate sheet at `100_Todo/plans/2026-07-26-hotel-and-emergency-product-candidates.md`: four Naha hotels, three Onna hotels and six mid-drive toilet-emergency product categories, all with reader fit, limitations and official hotel sources. No unverified Trip.com or Shopee link was added.

### Daily-content visual correction, 2026-07-26 (Codex)

- Replaced the two new articles' self-made SVG covers with 16:9 GPT-generated, photorealistic family-travel scenes and natural cover captions. The images are deliberately generic situations, not claims of a named station or venue.
- Rebuilt both unpublished 8-slide carousels to use three distinct GPT-generated, photorealistic family-travel scenes each; all slides now have full-bleed photo backgrounds, and the closing slide remains photographic. The 390px stacked previews were manually reviewed.
- Added `prompts.md` records for both Facebook drafts. Public-facing captions and carousel footers follow the site's existing style and do not add AI-image wording. No social post was uploaded or published.
- Follow-up check: replaced the stale “本站自製資訊圖” cover alt text left from the original SVG assets with plain visual descriptions matching the new photographic covers.
- Carousel follow-up: restored the established top watermark, `沖繩親子旅遊筆記`, on every slide instead of the English brand label; the website URL remains in the footer.
- Added a mandatory social-image quality gate: at least three distinct GPT photo scenes per eight-slide carousel, with photographic cover and CTA slides; SVG information graphics are only for facts that photos cannot honestly convey.
- Commit: `e8e361a Replace guide graphics with GPT travel scenes`.
- `content:audit:strict`: passed, 38 articles and 0 critical issues; 34 older style reminders remain. `next build`: passed, 58 static pages. Production verification after deployment: both new cover files return `200`, both articles have self-referencing canonicals, and `sitemap.xml` contains both slugs. A 390px browser check confirmed the new Yui Rail cover renders correctly.
- Search Console was checked while signed in: both URLs were discovered through the sitemap but not indexed, and each was submitted once. Search Console confirmed both are in the priority crawl queue; do not resubmit unless the user explicitly requests it.

### Daily articles and unpublished carousels, 2026-07-26 (Codex)

- Published in source and committed as `37bbd8c Publish Yui Rail and zoo family guides`:
  - `/blog/okinawa-yui-rail-family-guide` covers deciding whether to use Yui Rail, child ticket rules, 24/48-hour ticket tradeoffs, elevators and a Naha family route.
  - `/blog/okinawa-zoo-museum-family-guide` covers Okinawa Zoo & Museum as a middle-island family main stop, indoor/outdoor pacing, current official admission guidance, stroller facilities and rain/typhoon boundaries.
- Both articles use only self-made SVG covers, natural internal links, FAQs and official first-party source lists. No affiliate or unverified Shopee link was added.
- Created two unpublished 8-slide 1080×1350 PNG carousels with source files, Facebook copy, 390px previews and in-page mobile screenshots under their matching `work/social/` folders. All carousel imagery is self-made information graphics; neither set was uploaded or published.
- `content:audit:strict`: passed, 38 articles and 0 critical issues; 34 older style reminders remain.
- `next build`: passed, 58 static pages. Local checks: both URLs return `200`, have self-referencing canonicals and appear in `/sitemap.xml`. The 390px first-screen capture has no horizontal visual overflow.
- Production verification passed after `03a2907` was pushed: both URLs return `200`, each has a self-referencing canonical and `sitemap.xml` contains both slugs. Search Console is not available in this run, so no index request was submitted; request it once only if a URL is shown unindexed and not already queued.

### Okinawa family booking hub, 2026-07-26 (Codex)

- Added `/okinawa-family-trip-booking` as a decision-first booking hub for Naha and Onna accommodation, Okinawa rental cars and the existing checked travel-gear page.
- Reused only the three Trip.com deep links already verified in matching articles. Each uses a separate `trip_sub1` value for hub click attribution and `rel="sponsored noreferrer"`.
- Added a visible affiliate disclosure and avoided hotel rankings, personal-stay claims, temporary prices and unchecked attraction tickets.
- Removed the public-facing placeholder that explained why attraction tickets were absent; that was an internal planning note and weakened the page ending.
- Reader-view reread found and fixed four more issues: the disclosure incorrectly mentioned direct Shopee links, the hero sounded defensive, the two-area accommodation scope was unclear, and the gear ending still used internal editorial wording.
- Added booking-hub entry points to the home page, blog reading center, footer and sitemap.
- Added GA4 `affiliate_click` tracking for Trip.com hub buttons.
- Visual QA at 1440×900 and 390×844 found one button-color override; fixed it and confirmed white text, 44px minimum height and no horizontal overflow.
- `content:audit:strict`: 36 articles, 0 critical issues; 34 existing style reminders.
- `next build`: passed on 2026-07-26, 56 static pages.
- Local verification: `200`, self-referencing canonical, three sponsored links and sitemap inclusion.
- Production verification passed after deployment. Search Console initially reported `Google 無法辨識的網址`; one index request was submitted on 2026-07-26 and confirmed in the priority crawl queue. Recheck in 7–14 days and do not resubmit before then.

### Trip.com affiliate pilot and Facebook lodging post, 2026-07-25 (Codex)

- Added three tracked Trip.com affiliate links to their matching decision points:
  - Naha hotels in `first-okinawa-where-to-stay`.
  - Onna hotels in `onna-family-stay-guide`.
  - Okinawa rental cars in `okinawa-rental-car-family-guide`.
- Each placement explains what to compare before clicking, asks readers to verify final hotel or supplier terms, and includes a visible affiliate disclosure. No temporary promotion, lowest-price claim or guaranteed saving was added.
- Added `rel="sponsored noreferrer"` to Trip.com and Shopee affiliate links rendered inside articles, and corrected the existing travel-gear affiliate buttons to use the same sponsored signal.
- Prepared one unpublished 1080x1350 Facebook visual and natural post draft under `work/social/trip-okinawa-stay-pilot/`. The main post contains no external URL; its first comment sends readers to the lodging article, where the Trip.com link appears after the regional decision guidance.
- `content:audit:strict`: 36 articles, 0 critical issues; 34 existing style reminders.
- `next build`: passed on 2026-07-25, 55 static pages. Generated HTML contains all three `trip_sub1` tracking labels.

### Two daily Facebook carousels published, 2026-07-25 (Codex)

- Published the family-driving-pace carousel publicly with all eight 1080×1350 slides in `01.png` to `08.png` order:
  `https://www.facebook.com/permalink.php?story_fbid=122116987677290857&id=61588725730543`
- Published the typhoon family-travel carousel publicly with all eight 1080×1350 slides in `01.png` to `08.png` order:
  `https://www.facebook.com/permalink.php?story_fbid=122116988355290857&id=61588725730543`
- Verified both posts show `分享對象：所有人`. Added each supporting article URL in the author's first comment and verified the Facebook article preview card.
- Rewrote both standalone Facebook long-form drafts so they do not stretch or repeat the carousel captions:
  - Driving: hidden family-transition time, a four-question afternoon state check and when to drop the third stop.
  - Typhoon: decisions split into the next six hours, tonight-to-tomorrow transport and the child's next 24 hours of needs.
- The long-form bodies are 1,087 and 1,256 Chinese characters. Keep them as D+1 follow-ups; do not publish them on the same day as these carousels.
- No Next.js build was required because this task changed only social copy, progress tracking and the handoff.

### Daily articles and carousels, 2026-07-25 (Codex)

- Added `/blog/okinawa-family-driving-pace-guide`: a rent-car cluster article that turns the family pacing question into two main stops, a rest window and a removable third stop. It uses JAF's two-hour rest guidance as a driving-safety baseline and labels the two-stop rule as an editorial recommendation.
- Added `/blog/okinawa-typhoon-family-travel-guide`: separates ordinary rainy-day changes from strong-wind or warning conditions, and prioritizes safety, lodging and transport. It uses Okinawa Meteorological Observatory, the official Okinawa travel guide and OTS terms; it does not generalize any airline, hotel or car-rental policy.
- Both articles include self-made SVG covers, source lists, FAQs and natural internal links. No products or unverified Shopee links were added.
- Created two unpublished 8-slide 1080×1350 Facebook／IG carousels with source files, PNGs, copy and 390px previews under their corresponding `work/social/` folders. All visuals are self-made information graphics; `work/social/progress.md` records both as awaiting wei96's publishing decision.
- Added `break-all` to the shared blog H1 after the first 390px review exposed title overflow. Browser viewport checks then verified both new pages at 390px: 375px content width, 375px document scroll width and no horizontal overflow.
- `content:audit:strict`: 36 articles, 0 critical issues; 34 older style reminders, with none from the two new articles.
- `next build`: passed on 2026-07-25, 55 static pages.
- Pushed `4ef510a` and `8fea335` to `origin/main`. Both production articles returned `200`, had self-referencing canonical tags and cover references, and both URLs were present in the live sitemap.
- Search Console URL Inspection found both new URLs unindexed (`Google 無法辨識的網址`) with no detected sitemap or referring page. A single index request was sent for each on 2026-07-25 and both were confirmed in the priority crawl queue. Recheck in 7–14 days; do not resubmit before then.
- Visual refresh: replaced both article covers and both 8-slide carousels with original GPT-generated, project-local family-travel scenes plus varied itinerary/checklist cards. Added one unpublished Facebook long-form draft per article. `7508efb Refresh family travel visuals`; strict audit still has 0 critical issues and the Next.js build passed (55 static pages).

### Separate Facebook long-form post rule, 2026-07-25 (Codex)

- Published a new standalone Kokusai-dori Facebook long-form post rather than placing the long copy inside the existing carousel caption.
- Restored the original carousel caption and kept its article URL in the author's first comment.
- Expanded the separate long post from roughly 650 characters to 1,321 characters. It now adds two route choices, hotel-location adjustments, toilet backup, Sunday Transit Mall limits, self-driving parking decisions, a meal backup and four map locations to save before departure.
- Published the long post publicly and added the article URL in the author's first comment:
  `https://www.facebook.com/permalink.php?story_fbid=pfbid02kzqzp4apPqN5KRktypSbGknryQ5t7oPsb9B5oYtWM9DM7roWz2qa8SzDZK9rNXLVl&id=61588725730543`
- Verified after editing that the post remains public, the expanded sections are visible and the first-comment article link remains present.
- Updated `docs/social/social-workflow.md`: every completed carousel now has a short carousel caption and a separate 1,000-1,500-character Facebook long-form post. Publish the long post on D+1 so it does not compete with the carousel on the same day.
- Saved the two versions separately as `copy-facebook.md` and `copy-facebook-long-form.md`.
- No Next.js build was needed because only workflow and social source files changed.

### Travel gear affiliate expansion, 2026-07-25 (Codex)

- Expanded `/okinawa-family-travel-gear` from four to eight verified Shopee affiliate links.
- Added two situation-based product pairs instead of unrelated recommendations:
  - Hotel bottle cleaning: LIFEMATE portable seven-piece bottle-brush kit and Simba 120ml bottle/produce cleaning spray.
  - Rental-car cleanup: Baan 20-count travel wipes and MioChieh PE zipper storage bags.
- Cross-checked each new candidate against a manufacturer page or Shopee direct/official listing and recorded the research, short links, visible sales data and limitations in `100_Todo/plans/2026-07-25-travel-gear-affiliate-expansion.md`.
- The page is now grouped into bottle cleaning, car cleanup, stroller check-in and return packing. Each product explains the problem it solves, why it was retained and what it cannot promise.
- Added explicit cautions that cleaning is not sterilization, the 120ml cleaner exceeds the common 100ml cabin-container limit, wipes do not replace handwashing and zipper bags are not guaranteed waterproof.
- `content:audit:strict`: 34 articles, 0 critical issues; 34 existing style reminders remain in older articles.
- `next build`: passed, 53 static pages. Browser QA confirmed four groups, eight Shopee buttons, one loaded 1600px cover and no desktop horizontal overflow.
- Pushed `c11b44e` and handoff commit `a3c0469` to `origin/main`. Production verification confirmed the updated title, canonical, four situation groups, all eight Shopee links, zero broken images and no desktop horizontal overflow.

### Travel gear affiliate hub, 2026-07-24 (Codex)

- Added `/okinawa-family-travel-gear` as a useful product-decision page rather than a bare affiliate-link list.
- Reused four previously verified Shopee products: stroller travel bag, luggage scale, foldable travel bag and six-piece compression packing set.
- The hub starts with four links, then grows toward roughly 12–15 verified links. Each need may keep 2–3 choices with genuinely different tradeoffs such as lower price, clearer specifications or lighter weight; do not pad the page with unchecked alternatives.
- Each section explains the travel problem, why the candidate was retained, what it cannot promise, and links back to the full supporting article.
- Added inline affiliate disclosure, checked dates, canonical and Open Graph metadata.
- Added discoverable links from the homepage and footer, plus the static route in `sitemap.xml`. The top mobile navigation was deliberately left unchanged to avoid wrapping.
- Added an `affiliate_click` GA4 event with item name, destination URL and page path for the four outbound buttons.
- `content:audit:strict`: 34 articles, 0 critical issues and no new style reminder.
- `next build`: passed, 53 static pages. Desktop and 390px mobile checks show no horizontal overflow, four buttons, zero broken images and white-on-brown button contrast.
- Pushed commit `0cbf2c9` to `origin/main`. Production verification confirmed the page, four affiliate links, disclosure, canonical, choice-policy text, homepage and footer entry links, and a live sitemap entry.

### First verified Shopee affiliate placement, 2026-07-24 (Codex)

- Compared all three stroller-bag candidates in the logged-in Shopee affiliate dashboard.
- Chose candidate 1 because its live page showed 700 reviews, 2,000+ sales, seven size variants and stated Oxford-cloth material. The two alternatives had much smaller review and sales samples and about 1% social-media commission.
- Generated the affiliate short link `https://s.shopee.tw/9zwOmFGv6v`.
- Added a short placement to `/blog/okinawa-family-stroller-guide` explaining why the size table is useful, telling readers to measure the folded stroller, and disclosing the affiliate relationship.
- Did not repeat the seller's waterproof claim, call the product universal, or promise protection from checked-baggage damage.
- `content:audit:strict`: 34 articles, 0 critical issues. The new copy adds no style reminders; 34 existing reminders remain elsewhere.
- `next build`: passed, 52 static pages. At 390px the article has no horizontal overflow, all images load, and the affiliate copy and disclosure remain readable.
- Pushed commit `7e9148f` to `origin/main` and verified the production article after deployment. The affiliate link, inline disclosure, self-referencing canonical and new-tab `noreferrer` link attributes are present.

### Kokusai-dori Facebook carousel publication, 2026-07-24 (Codex)

- Published all eight 1080x1350 slides publicly in the intended `01.png` to `08.png` order.
- Verified the post privacy is public and the permalink opens the correct post:
  `https://www.facebook.com/permalink.php?story_fbid=122116930431290857&id=61588725730543`
- Added the article URL in the author's first comment and verified Facebook generated the correct article preview card.
- The post was new at verification time, so Facebook still showed 0 views and 0 natural interactions. Recheck after 24–48 hours instead of judging the carousel immediately.
- Opened the provisional Shopee stroller-bag candidate again. Shopee required a manual slider verification, so no product claims or affiliate link were approved yet.

### Rental flow, Churaumi upgrade, Kokusai-dori guide, carousel and affiliate candidates, 2026-07-24 (Codex)

- Added `/blog/okinawa-rental-car-pickup-return-guide`.
  - Checked OTS, Nippon Rent-A-Car, Toyota Rent a Car and Naha Airport first-party guidance.
  - Separates airport shuttle, office check-in, documents, vehicle inspection, full-tank return and terminal shuttle. It does not generalize one company's bus stop or timing to every operator.
  - Added one original airport-shuttle family cover and one mobile-first vertical five-step SVG.
  - Linked the rental hub, licence translation, insurance/NOC, child seat, refuelling and last-day pages.
- Upgraded `/blog/churaumi-aquarium-family-time` around the disclosed `美麗海水族館 停留時間` search intent.
  - Official average is labelled as 1.5 hours; the editorial family recommendation is 2–3 hours for the aquarium and half a day with surrounding facilities.
  - Corrected stroller pickup locations, 2026 extended hours, partial Wednesday opening, bus-time range and facility names. Removed unsupported MAPCODE and convenience-store ticket claims.
  - Added a mobile-readable four-option time graphic and recorded the test baseline in `content/seo-scorecard.md`.
- Added `/blog/okinawa-kokusai-dori-family-guide`.
  - Uses official sources for the 1.6 km street length, monorail lifts/toilets, Transit Mall rules, parking restrictions, Makishi market facilities and closure risk.
  - Focuses on one-way routes, a short Makishi version, toilets, stroller and exit points rather than a generic must-buy list.
  - Uses a real Kokusai-dori Unsplash cover with author and licence metadata plus an original route SVG.
- Completed an eight-slide 1080x1350 Kokusai-dori carousel under `work/social/okinawa-kokusai-dori-family-guide/`.
  - Three different licensed real photos plus five information layouts; no single image repeated through the whole deck.
  - Exported PNGs and visually checked all eight. The deck was later published publicly after user approval; see the publication record above.
- Compared three Shopee stroller travel-bag candidates from the logged-in affiliate dashboard and recorded visible price, sales and commission in `100_Todo/plans/2026-07-24-stroller-bag-affiliate-candidates.md`.
  - The first candidate is provisional only. The live product page triggered Shopee security verification, so size, material and review-count hard checks remain incomplete.
  - No affiliate link was added to the article. Status remains `確認後才能放連結`.
- `content:audit:strict`: 34 articles, 0 critical issues. The two new articles add no style reminders; 34 reminders remain in older pages.
- `next build`: passed, 52 static pages.
- Mobile QA at 390px: all three pages have no horizontal overflow, all images load, and all three custom SVGs were visually checked. The rental-flow SVG was redesigned once after its first five-column version was too small on mobile.
- Pushed commit `84f5340` to `origin/main` and verified both new production URLs, the updated Churaumi page, five new image URLs, self-referencing canonicals and both new sitemap entries. All returned HTTP 200.
- Inspected both new URLs in Search Console on 2026-07-24. Both initially showed `網址不在 Google 服務中` and `Google 無法辨識的網址`.
- Submitted one indexing request for each new URL. Both confirmed `已要求建立索引` and were added to Google's priority crawl queue. Search Console had not yet detected their sitemap references, although the live sitemap already contains both URLs; treat this as reporting delay and do not resubmit.

### SEO, indexing, affiliate and social operating plan, 2026-07-24 (Codex)

- Read the latest logged-in Search Console report. The three-month view through 2026-07-22 now shows 18 clicks, 400 impressions, 4.5% CTR and average position 8.
- Index coverage shows 18 indexed pages and 5 not indexed. HTTPS shows 22 valid pages and 0 non-HTTPS pages.
- Checked the two newest URLs:
  - `/blog/okinawa-rental-car-license-translation`: `已找到－目前尚未建立索引`; sitemap and referring page detected.
  - `/blog/okinawa-rental-car-insurance-noc-guide`: initially `Google 無法辨識的網址`.
- Sent one Search Console indexing request for each URL on 2026-07-24. Both confirmed they were added to the priority crawl queue. Do not resubmit repeatedly; check again after 7–14 days.
- Added a permanent post-publish rule: after every new article is live, Codex verifies production URL, images, canonical and sitemap, then checks Search Console and requests indexing once when needed without waiting for the user.
- Added `content/seo-affiliate-roadmap.md`. The next two planned articles are:
  1. `沖繩租車取車與還車流程`
  2. `帶小孩逛沖繩國際通怎麼排`
- Affiliate work is separated from new-article work. Prioritize actual Shopee candidates for the existing stroller, summer packing and beach packing pages because those three pages already account for 13 Google clicks. Do not force Shopee into licence, insurance or rental-process articles.
- Expanded `docs/social/carousel-system.md` with a strict pain -> conclusion -> action -> saveable summary -> CTA flow, a hook quality gate and a concrete eight-slide Kokusai-dori carousel outline.
- Recorded the first Reel baseline: 64 views, 4 viewers and 84.4% of views from non-followers. The two reactions came from the user's own test accounts, so natural reactions, comments, shares and clicks remain 0.
- Added `docs/social/facebook-profile-plan.md`. The following bio was applied to the public Wei Fan Facebook profile on 2026-07-24 and verified after reload:
  `第一次帶小孩去沖繩，行程不用排到喘。這裡整理租車、景點、住宿和行李，讓你少查一點、旅途中少慌一點。`
- `npm.cmd run content:audit:strict`: 32 articles, 0 critical issues. Existing 36 style reminders remain. No site output changed, so a Next.js build was not required.

### Licence article infographic redesign, 2026-07-24 (Codex)

- Replaced the flat-lay document graphic in `/blog/okinawa-rental-car-license-translation` after the user found it visually weak.
- Removed the blank fake-document objects and reduced the copy. The new 1080x1350 editorial graphic leads with the single decision readers need: Taiwan-issued international driving permits do not work in Japan; bring the Japanese translation.
- The lower half now shows only the three pickup documents — passport, original Taiwan licence and Japanese translation — plus a short application reminder. Text remains readable at the article's 335px mobile width.
- Added `work/infographics/render-license-docs.mjs` so Codex or Claude Code can reproduce the exact JPG from the editable HTML without manual screenshots. It uses local Chrome and the bundled Playwright/Sharp packages.
- `content:audit:strict`: 32 articles, 0 critical issues. `next build`: passed, 50 static pages. The replacement image loads at 1080x1350 and the 390px article page has no horizontal overflow.

### Rental-car insurance guide and licence cover review, 2026-07-24 (Codex)

- Published `/blog/okinawa-rental-car-insurance-noc-guide`, filling the next gap in the car-transport cluster. It explains the difference between basic coverage, CDW, NOC and roadside assistance, gives a family-specific way to choose a plan, and lists the correct accident-reporting order.
  - Claims were checked against Times CAR RENTAL, Nippon Rent-A-Car, OTS and Toyota Rent a Car official pages. Company-specific amounts are labelled as examples, not Japan-wide rules.
  - Added one original 1600x900 rental-counter cover and one hand-written 1200x820 four-layer SVG. The rental-car hub now links into the article.
  - No Shopee affiliate link was added. This topic has no natural Shopee product that improves the insurance decision, so forcing a product section would weaken the article.
- Reviewed Claude Code's `/blog/okinawa-rental-car-license-translation` article. The facts, structure and inline three-document graphic remain strong, so the article copy was not rewritten. Replaced only the weak flat-lay cover with a clearer rental-counter handover scene; blank document surfaces remain deliberately non-official.
- `content:audit:strict`: 32 articles, 0 critical issues; the new article adds 0 style reminders. Existing site-wide reminder count remains 36.
- `next build`: passed, 50 static pages. Checked both articles at a 390x844 mobile viewport: both covers load at 1600x900, page width does not overflow, and the insurance SVG loads at its true 1200x820 ratio.
- Verified the new article, replacement licence cover and new sitemap URL on production after the GitHub push.

### Site-wide image bug, found and fixed 2026-07-23 (Claude Code)

**Read this before touching article images.** Inline figures were pinned to `aspect-ratio: 16 / 9` with `object-fit: contain` in `app/globals.css`, so any portrait image was letterboxed until its text was unreadable. The only escape was a hardcoded allowlist of filenames, which meant a new tall image broke silently until somebody remembered to register it.

**Two images had already been broken on the live site and nobody noticed**: `coin-parking-types.svg` in the parking guide and `repellent-age-guide.svg` in the medicine guide. Both are portrait, both missed the allowlist.

The fix is `lib/image-size.ts`: it reads real dimensions from the file at build time (SVG attributes or viewBox, PNG/JPEG/WebP headers) and `components/markdown-content.tsx` passes them as `width`/`height` on the `img`. The browser then uses the true ratio and reserves correct space before load. The allowlist is gone and new images need no registration.

Removing the forced ratio on its own is not enough and was tried first: without reserved height the images collapse to a 2px strip and lazy loading never fires. That intermediate state was never pushed.

Verified on production that all four affected articles now emit correct dimensions.

### Also on 2026-07-23

- Published `/blog/okinawa-rental-car-license-translation`. **Closed a real content risk**: the rental hub covered seats, pickup, fuel and parking but never documents, and 駕照日文譯本 appeared once site-wide as a packing-list bullet. A reader following the site would have arrived unable to collect a car, since Taiwan's international driving permit is not valid in Japan.
  - Topic picked from impression data: the car-transport cluster is roughly half of all site impressions (165 of 339 over three months), so the cluster Google already trusts got deepened rather than opening food or shopping from zero.
  - Facts verified against primary sources: 公路局 臺日駕照互惠 (IDP not usable, three documents, one-year limit), 臺北市區監理所 (NT$100, required ID, one-hour turnaround), 監理服務網, JAF (in-Japan fallback, 2-3 working days, ¥6,000, online only).
  - Added inbound links from the rental hub and the summer packing list, and gave the hub the documents section it lacked.
- The figure in that article went through three versions after user feedback. The final one is built from `work/infographics/license-docs.html` via Playwright, the same HTML-to-PNG route as the carousels, so it stays editable. Design rule it now follows: one dominant element, accent colour reserved for that element only, everything else demoted. The struck-through 國際駕照 against 日文譯本 is the focal point because that is the counterintuitive fact readers need.
  - The photo shows blank documents on purpose. No legible text, number, emblem or face, and both the in-image and figure captions say the documents are illustrative. A photo that looked like a real Taiwanese licence would tell readers something false about their own.
- Closed track 1: retitled `/blog/okinawa-car-seat-rental-guide` around the question readers actually ask, folding in the 兒童座椅 wording that Search Console shows them using. Slug untouched. See `content/seo-scorecard.md`.
- Added `content/seo-scorecard.md` with the per-page baseline, so the retitle can be judged rather than guessed.
- Added `work/dev-server.mjs`. The preview tool launches from another directory and Next resolves `content/` from `process.cwd()`, so it read the wrong folder and returned 500. The launcher chdirs first. Start it with the `okinawa-blog-dev` entry in `C:\AI\cc\.claude\launch.json` (port 3100).

- Published `/blog/okinawa-rental-car-license-translation` on 2026-07-23 (Claude Code). **This closed a genuine content risk**: the rental hub covered seats, pickup, fuel and parking but never documents, and 駕照日文譯本 appeared once site-wide as a packing-list bullet. A reader following the site would have arrived unable to collect a car, because Taiwan's international driving permit is not valid in Japan.
  - Topic chosen from impression data, not a wish list: the car-transport cluster is roughly half of all site impressions (165 of 339 over three months), so the cluster Google already trusts got deepened instead of opening food or shopping from zero.
  - Every claim verified against primary sources: 公路局 臺日駕照互惠 (IDP not usable, three documents, one-year limit), 臺北市區監理所 (NT$100, required ID, one-hour turnaround), 監理服務網 (online filing), JAF (in-Japan fallback, 2-3 working days, ¥6,000, online only).
  - Cover is generated and labelled; the card in frame carries no legible text. The three-document breakdown is hand-written SVG on purpose, since generating an image of an official document would invent one.
  - Added inbound links from the rental hub and the summer packing list, and gave the hub the documents section it lacked.
  - `content:audit:strict` clean for the new file, reminder count unchanged at 36. `next build` passed, 49 pages. Title, description, canonical, both images and the sitemap entry verified in the built output.
  - Three temp images (`raw-cover.jpg`, `preview.jpg`, `zoom.jpg`) sit untracked in that image folder; deletion was declined during the session. They are not committed so they will not deploy, but they can be removed.

- Track 1 SEO near-win closed on 2026-07-23 (Claude Code): retitled `/blog/okinawa-car-seat-rental-guide`.
  - The page had the site's largest impression count (90) but one click, about 1.1% CTR, while the stroller and beach-packing pages sit near 9%. The difference was the title pattern: both high performers open with the reader's own question (`需要推車嗎`, `要帶什麼`), this one opened with `怎麼選`. Someone searching 沖繩 安全座椅 is asking whether one is required at all, not how to pick a model.
  - Title is now `沖繩租車一定要安全座椅嗎？6 歲規定、三種座椅與取車檢查`; the description keeps an information gap (`滿 6 歲不一定就能改繫成人安全帶`) instead of restating the answer flat; the opening line answers the title with `要。` before explaining.
  - **Slug and canonical untouched**, so the existing ranking history stays on the URL. No claims, sources or facts changed.
  - `content:audit:strict` clean for this file (30 articles, 36 style reminders, all pre-existing elsewhere). `next build` passed, 48 pages. Verified in the built HTML that title, description, H1 and canonical all render correctly.
- Added `content/seo-scorecard.md` (Claude Code): per-page baseline as of 2026-07-20 plus the change log, so the next Search Console read can attribute results instead of guessing. It records the control to watch — if average position shifts at the same time, the CTR change cannot be credited to the title.
- Also committed Codex's uncommitted 2026-07-22 Google data review, which was sitting unstaged when capacity ran out (`23176f1`).

- Reviewed live Google data on 2026-07-22 (Codex):
  - Search Console, latest 28-day view updated five hours earlier and reporting through 2026-07-20: 10 clicks, 280 impressions, 3.6% CTR and average position 8.8.
  - Strongest pages by Search Console clicks: stroller guide 5/52, beach packing list 2/22, car-seat guide 1/90, Churaumi guide 1/19 and convenience-store shopping guide 1/4. The car-seat page is the clearest near-win because it has the largest impressions but about 1.1% CTR.
  - GA4, latest seven days: 41 active users, 90 page views and 24 Organic Search sessions. Google / organic brought 16 active users. Highest visible article views included summer packing list 9, stroller guide 8 and convenience-store shopping guide 8.
  - Do not create another broad convenience-store article yet. Three related URLs already share the cluster; first audit their query overlap and internal-link roles.

- Published two practical family-travel articles on 2026-07-22 (Codex):
  - `/blog/okinawa-family-shopping-guide`: separates AEON, Kokusai-dori and supermarkets by family use case instead of presenting another generic must-buy list. Includes one original cover, one hand-written SVG decision map and one selected Shopee affiliate link.
  - `/blog/okinawa-souvenir-packing-guide`: covers Taiwan entry checks, liquids, breakables, packing order and tax-free checked baggage. Includes one original cover, one hand-written SVG packing-order guide and three selected Shopee affiliate links.
  - Affiliate sections explain the problem solved, why the item was selected and its limitations. Prices and specifications are described as changeable; actual links were generated from the user's logged-in Shopee affiliate dashboard.
  - Updated the content plan, SEO roadmap and social topic mapping. `npm run content:audit:strict`: 30 articles, 0 critical issues. `next build`: passed, 48 static pages. Desktop and 390px mobile previews passed with no horizontal overflow and all images loaded.

- Published Facebook carousel topic #62, `投幣式停車場有三種`, on 2026-07-22 (Codex).
  - Corrected the closing slide so it points to the website parking guide instead of calling it a complete itinerary, then re-exported and visually checked all eight 1080x1350 PNGs.
  - Published to the Wei Fan personal profile and changed the audience from Friends to Public. Added the article URL in the author's first comment.
  - Public post: `https://www.facebook.com/permalink.php?story_fbid=122114132331290857&id=61588725730543`
  - Next action: record 24-48 hour and 7-day reach, interactions and link clicks in `work/social/progress.md`; do not change the format before the first measurement.

- Published the family dining decision guide on 2026-07-22 (Codex): `/blog/okinawa-family-restaurant-dining-guide`.
  - Covers restaurant choice, child-friendly Okinawa foods, a three-level backup plan, food-allergy checks, takeout and eight FAQ items. The article avoids pretending to be a restaurant ranking or personal dining review.
  - Added two original AI-assisted photos and one hand-written SVG backup-plan infographic under `public/images/articles/okinawa-family-restaurant-dining-guide/`. Desktop and 390px mobile previews were checked; the vertical infographic no longer inherits the 16:9 crop.
  - Added the `沖繩美食` category, refreshed site metadata/about copy, marked content-plan item #29 complete and mapped social topics #80-84 to the new article. Future Content topics dropped from 32 to 27.
  - `npm run content:audit:strict`: 28 articles, 0 critical issues. `next build`: passed, 46 static pages.
- The first northern itinerary Facebook Reel was published on 2026-07-22. Its initial audience was accidentally set to Friends and was then corrected to Public. Review reach after 24-48 hours before changing the social format again.

- Built the Social Media Content System on 2026-07-21 (Claude Code), planning documents only, under `docs/social/`: `README.md`, `site-analysis.md`, `social-brand-guide.md`, `carousel-system.md`, `reels-system.md`, `ai-image-style-guide.md`, `content-repurpose.md`, `cta-library.md`, `social-content-plan.md`, `social-workflow.md`.
  - Explicit scope limit from the user: do not change site architecture, Next.js, SEO, blog, sitemap, metadata, components, design, or existing article content. Verified with `git diff --stat` (empty) that zero tracked files were modified. `docs/` is outside the Next.js route tree, so no new pages and no sitemap impact. `next build` was not required because no site output changed.
  - Key contents: 10 carousel templates, 15/30/60s Reels templates, an AI image prompt library in 14 categories with a fixed style suffix and negative prompt, 60 CTAs (the repeated `完整攻略請點網站` is now banned), 100 social topics mapped to articles (68 mapped, 32 marked Future Content), and a Step 0-9 production SOP.
  - Future Content gaps identified as the biggest content holes: food/restaurants, shopping/souvenirs, airport logistics, night views, Kokusai-dori, budget planning, non-summer travel. Writing a family-restaurant article would unlock 5 social topics at once.
  - Production output belongs in `work/social/{slug}/`, not in `docs/` and not in `public/` (moving assets into `public/` needs user approval first).
- Published two new articles on 2026-07-21 (Claude Code), each with three images: an AI-generated cover photo, one inline AI scene photo, and one hand-written brand-style SVG infographic (covers/photos resized to ~220-365KB jpg; captions label them as 情境示意 / 本站自製資訊圖):
  - `/blog/okinawa-family-medicine-sunscreen-repellent` (旅遊用品): medicine carry limits (MHLW + Japan Customs), reef-safe sunscreen, mosquito-repellent age tiers (Taiwan CDC). Images: medicine-sunscreen-cover, beach-sunscreen-child, repellent-age-guide.svg. Internal links to summer packing list, beach packing list, convenience-store guide.
  - `/blog/okinawa-family-parking-guide` (租車交通): free lots at Churaumi/Kouri, three coin-parking types, Naha hotel fees, Kokusai-dori Sunday transit-mall restriction. Images: parking-cover, parking-family-getout, coin-parking-types.svg. Internal links to rental-car, refueling, drive-toilet, last-day, north-day-trip, Churaumi, Kouri.
- Updated `content/content-plan.md`: marked #21 done; added #28 parking as a car-transport cluster fill (not an original numbered item, user-approved).
- Content audit (strict) passed: 0 critical issues. `next build` passed (44 static pages).
- Verified all six images live on production (HTTP 200) after deploy, then submitted Search Console "Request Indexing" for both new article URLs on 2026-07-21 (both confirmed "已要求建立索引 / added to priority crawl queue").
- Earlier on 2026-07-21: fixed the northern short-video preview media 404 (absolute paths).
- Prior context: summer packing list and north day-trip articles published with images; GA on 2026-07-20 showed 40 active users / 90 page views / 8 organic sessions (7 days); Search Console 5 clicks, 153 impressions, 3.3% CTR, avg position 10.5 through 2026-07-18; manual indexing submitted for the two prior article URLs on 2026-07-20.

## Social Track: what was done (Claude Code, 2026-07-21 to 07-22)

Eleven commits, `a75bcc6` through `4c9ce13`. Two layers: reusable rules in `docs/social/`, and one finished worked example in `work/social/okinawa-family-parking-guide/`.

### 1. The rule set — `docs/social/` (10 files)

`README.md`, `site-analysis.md`, `social-brand-guide.md`, `carousel-system.md`, `reels-system.md`, `ai-image-style-guide.md`, `content-repurpose.md`, `cta-library.md`, `social-content-plan.md`, `social-workflow.md`.

Contents: brand tone and persona, a dark carousel design system, 10 carousel templates, 15/30/60s Reels templates, an AI image prompt library in 14 categories with a fixed style suffix and negative prompt, per-platform specs for Facebook / Instagram / Threads / Pinterest, 60 CTAs, 100 social topics mapped to articles (68 mapped, 32 marked Future Content), and a Step 0-9 SOP.

**Several rules were rewritten mid-run after the trial exposed them as wrong. Read the current text, not the original intent:**

| Rule | Why it changed |
| --- | --- |
| Inventory `public/images/articles/{slug}/` before generating any image (SOP Step 1a) | Went straight to generation and burned 240 points on four renders, three rejected, while a better cover already sat in the repo |
| Palette governs UI, text and charts only — not photos | The original blanket ban on saturated blue-green contradicted the site's own published covers |
| Machine panels, rate boards and anything with figures must be vector, never AI photo | Models always render legible invented numbers; readers could budget from a fabricated price |
| Prompts must say `modern Japanese` and `no emblem or badge on the car` | Renders produced FIAT and VW badges and Mediterranean streets |
| AI disclosure goes in the post copy, not as a chip on the image | User's call; the site keeps its caption-level disclosure unchanged |
| Facebook link goes in the author's first comment, not the post body | Reach penalty on posts carrying external links |
| Carousels need an image-to-text ratio; no two consecutive text-only slides | First render was six text slides out of eight |
| Closing slide is a dark full-bleed photo, not a flat colour card | A plain card read as an afterthought at the end of the swipe |

### 2. The worked example — `work/social/okinawa-family-parking-guide/`

Topic #62 (投幣式停車場有三種), sourced from `/blog/okinawa-family-parking-guide`.

- **Ready to publish**: 8 carousel PNGs at 1080x1350 in `render/png/01.png`–`08.png`, plus final Facebook / Instagram / Threads / Pinterest copy.
- **Not built**: the Reels video. `copy-reels.md` has the 30s and 15s storyboards and subtitle lines, but no MP4 exists.
- `render/carousel.html` + `render/export.py` are the reusable pipeline: HTML layout, Playwright screenshots each slide at exact size. Copy the `render/` folder to a new topic and change the text. Output must go to `render/png/`, never `out/` — `.gitignore` already claims `out` for the Next.js export.
- Serve with `python -m http.server 4180 --directory "C:/AI/codex 部落格"`; there is a `social-render` entry in `C:\AI\cc\.claude\launch.json`.
- Image generation totalled 480 w-ai points over 8 renders, 4 accepted. Rejected files stay on disk untracked; see `images/README.md`.
- `render/carousel.bak.html` is a pre-redesign backup that can be deleted.

### 3. Where it stopped

The first northern itinerary Facebook Reel and topic #62 parking carousel are both live and Public. The parking carousel has its website link in the author's first comment. The next useful step is to record each post's 24-48 hour reach, views and interactions, then compare Reel versus carousel performance before choosing the next format.

## Process note for whoever works on images next

Build passing and a 200 from curl do **not** mean the page looks right. Both were true for the whole time these images were unreadable. Open the page in a browser and look at it before reporting an image as done.

## Next Task

Facebook 的「第一次沖繩住宿區怎麼選」單圖貼文已於 2026-07-25 公開發佈：

- 貼文：https://www.facebook.com/permalink.php?story_fbid=122117039889290857&id=61588725730543
- 主貼文沒有外部連結。
- 作者第一則留言已加入 `/blog/first-okinawa-where-to-stay`，Facebook 連結預覽卡顯示正常。
- 下一次於發佈後 24–48 小時回收觸及、留言與連結點擊。

1. Recheck `/blog/okinawa-rental-car-pickup-return-guide` and `/blog/okinawa-kokusai-dori-family-guide` after 7–14 days. Do not submit either URL again while it is already in the priority crawl queue.
2. Publish the two completed 2026-07-25 standalone Facebook long-form drafts on D+1, one at a time, with the supporting article URL in the author's first comment.
3. Open the provisional stroller-bag winner with the user and verify size, material, review count and recurring complaints before generating or placing an affiliate link.
4. Keep the Facebook bio unchanged for 14 days and compare profile visits, follows and website clicks.
5. Do not touch the car-seat title before 2026-07-29. Check the Churaumi title change no earlier than 2026-08-07.
6. Recheck Trip.com `affiliate_click` events after the new hotel buttons receive real traffic; do not add more hotel buttons just to increase link count.
7. Keep the emergency-toilet product links on hold until the exact product specifications are verified; sales count alone is not enough.

Do not touch the car-seat title before 2026-07-29. Keep blog writing, affiliate comparison and social production as separate tracked tasks.

## Concurrent edit note (2026-07-22)

Codex claimed this file and updated the header, owner and File Ownership block while Claude Code was writing the social section below. Both sets of changes are present: Codex's claim and ownership list were preserved untouched, and Claude Code only added the Social Track section and two Pending User Decisions entries. Nothing of Codex's was overwritten. Codex also claims `docs/social/social-content-plan.md`, which Claude Code has not edited since that claim.

## Review Result (Claude Code, 2026-07-21)

- Verified `okinawa-north-carousel-music-d-18s.mp4` on the live site: 18 s, 1080x1920, 9:16, all six scenes present (bridge intro, coastline, luggage/accommodation, aquarium whale shark, schedule tip, refueling tip), audio track decodes correctly.
- All three voiceover MP3s (natural 33.1 s, bright 21.5 s, B2 12.7 s) load and play.
- Mobile viewport 375px: no horizontal overflow; layout is single-column and correct.
- Found and fixed a bug: visiting `/previews/okinawa-north-video/` without `index.html` triggered Next.js's trailing-slash redirect, which broke every relative media path (video, poster, and all three MP3s returned 404). All media paths in `index.html` are now absolute, so both URL forms work.
- `next build` passed after the fix.

## Loose ends (nothing blocking)

- **Untracked temp images sit in `public/images/articles/okinawa-rental-car-license-translation/`**: `raw-cover.jpg` (3.3MB), `preview.jpg`, `zoom.jpg`, `_chk.jpg`, `_chk2.jpg`, `_zoom.jpg`, `three-documents.png`. None are committed so none deploy, but the folder is messy. Deletion was declined during the session; clear them when convenient. Same for `work/social/_tmp_svgcheck.{png,jpg}`.
- The source photo for the licence graphic lives at `work/infographics/docs-row.jpg`, deliberately outside `public/` so it does not deploy. `license-docs.html` references it relatively, so keep them together.
- Two more pages show 0% CTR at positions 5.9-7.3 (`drive-toilet`, `refueling`). Recorded in the scorecard, not acted on. Impressions are still small; do not batch-edit titles before the car-seat test reports.

## File Ownership

- Codex currently claims:
  - `AI_HANDOFF.md`
  - `app/layout.tsx`
  - `app/page.tsx`
  - `content/content-plan.md`
  - `content/seo-scorecard.md`
  - `content/blog/okinawa-rental-car-pickup-return-guide.md`
  - `content/blog/okinawa-rental-car-family-guide.md`
  - `content/blog/okinawa-rental-car-license-translation.md`
  - `content/blog/okinawa-rental-car-insurance-noc-guide.md`
  - `content/blog/okinawa-last-day-family-plan.md`
  - `content/blog/churaumi-aquarium-family-time.md`
  - `content/blog/okinawa-kokusai-dori-family-guide.md`
  - `content/blog/okinawa-family-shopping-guide.md`
  - `100_Todo/plans/2026-07-24-stroller-bag-affiliate-candidates.md`
  - `public/images/articles/churaumi-aquarium-family-time/churaumi-time-options.svg`
  - `public/images/articles/okinawa-rental-car-pickup-return-guide/`
  - `public/images/articles/okinawa-kokusai-dori-family-guide/`
  - `work/social/okinawa-kokusai-dori-family-guide/`
  - `work/social/progress.md`
  - `research/serp-affiliate/rental-car.md`
- Claude Code may research in a separate draft file only after recording that path here. It must not edit the files above while Codex owns them.
- Before editing, record the active agent, objective, and exact files being changed.
- Do not work concurrently on files claimed by the other agent.

## Pending User Decisions

- Shopee links may be added only after the user has approved the product or explicitly asked Codex to choose from the logged-in affiliate dashboard. Record why each product fits and do not imply that price, stock or specifications are permanent.
- Decide the next Facebook format after the first Reel and parking carousel each have at least 24-48 hours of data.

## 2026-07-28 Codex 每日內容流程（已完成，已推送）

- Search Console（3 個月、資料截止 2026-07-25）：31 點擊／704 曝光／4.4% CTR／平均排名 7.7。選題理由為「國際通廁所」已有 5 次曝光但尚未點擊；頁面 `okinawa-kokusai-dori-family-guide` 有 1 點擊／19 曝光。
- 舊文只補首屏的明確廁所備案：第一牧志公設市場、縣廳前站、牧志站；沒有改標題、摘要或網址。2026-08-11 起再評估。跳過安全座椅（2026-07-30 後才讀新數據）、水族館（觀察至 2026-08-07）與 301 合併中的自駕休息點舊網址。
- 新文：`/blog/okinawa-naha-rainy-day-family-half-day`，承接那霸雨天、抵達日與還車日的室內半日需求；官網資料來源為那霸機場與沖繩縣立博物館・美術館；未放未核對的聯盟連結。
- 輪播已輸出但**未發布**：`work/social/okinawa-naha-rainy-day-family-half-day/render/png/01.png`～`08.png`；`work/social/okinawa-kokusai-dori-family-guide-2026-07-28/render/png/01.png`～`08.png`。兩組均為 1080×1350，已依使用者授權建立 noindex 跨裝置預覽：[那霸雨天](https://okinawafamilynotes.com/previews/okinawa-naha-rainy-day-carousel/)／[國際通廁所](https://okinawafamilynotes.com/previews/okinawa-kokusai-dori-toilet-carousel/)。兩頁均在手機版確認 8／8 圖片載入且無水平溢位；未進入社群發布流程。
- 已推送內容 commits：`b6d6bc4 Add Naha rainy day guide`、`c3d0eb9 Refine rainy day carousel notes`。嚴格稽核為 41 篇、0 個重大問題；Next.js build 為 61 個靜態頁；新文章正式 URL、封面、canonical 與 sitemap 均已確認。
- 本次認領檔案：新文、國際通舊文、content plan、SEO 記分卡、社群進度、上述兩個輪播資料夾及本 handoff。保留現有的 Reel 與 `copy-instagram.md` 本機變更。

## 2026-07-28 Facebook 長文與週檢討

- 2026-07-27 Facebook 獨立長文已於 2026-07-28 透過 Codex 內建瀏覽器公開發布。切角是還車前兩小時的人、行李、廁所與接駁緩衝，不重複租車行李輪播；主文未放網址，作者第一則留言已放部落格連結，分享對象已確認為「所有人」。公開貼文：https://www.facebook.com/permalink.php?story_fbid=122117441343290857&id=61588725730543
- 已補寫 2026-07-28 Facebook 獨立長文：`work/social/okinawa-family-restaurant-dining-guide/copy-facebook-long-form-2026-07-28.md`。切角是孩子到餐廳突然不吃時的判斷與備案，不重複單軌、雨天或國際通輪播。
- 兩篇主文均達獨立長文長度，禁用詞掃描無結果；對應正式文章網址均已實際開啟確認。餐廳長文仍未發布，應與本次長文錯開，發布前仍須取得使用者對該版本的明確確認。
- 建立 `100_Todo/plans/2026-08-01-weekly-review.md`，固定檢查文章、索引、Search Console、GA4、Facebook／Instagram、Shopee／Trip.com／Klook 與交接品質。Codex automation `沖繩部落格每週六檢討` 已啟用，每週六 09:00 執行。
- 那霸雨天半日文章於 2026-07-28 在 Search Console 顯示「Google 無法辨識的網址」。已提交一次索引要求，Google 確認加入優先檢索佇列；不要重複提交。
- 今日仍未完成：兩份十筆 SERP 配置表、第一個 Klook 美麗海深層分潤連結、兩組已完成輪播的發布決定、未發布的推車輪播，以及社群貼文 24～48 小時數據回收。

## 2026-07-31 FB／IG 導流決策

- 社群導流已補入 `100_Todo/plans/2026-07-31-site-growth-revenue-plan.md`，固定流程為：社群觸及 → 個人檔案 → 網站入口 → 文章／專題頁 → 內部連結或商業連結 → LINE／Email 回訪。
- Facebook 以直接導流為主：主文預設不放外部網址，作者第一則留言放帶 UTM 的文章連結；長文不得只是輪播文字加長。
- Instagram 以收藏、分享與個人檔案瀏覽為主：輪播或 Reel 發布後搭配限時動態連結貼紙；CTA 必須說明點進網站能取得的表格、比較或安排。
- 規劃新增手機優先 `/start` 社群入口頁，第一版只放「第一次住哪裡、租車自駕、景點與行程」三個選擇，不先塞聯盟連結。
- 第一輪 14 天測試主題為「第一次去沖繩住哪裡」：Facebook 用新的獨立長文角度，Instagram 使用尚未在 IG 發布的住宿輪播並補限時動態。兩邊分開加 UTM，七天與十四天各檢查一次。
- 自己兩個測試帳號的互動必須另外標記，不得算進自然流量。

## 2026-07-31 親子旅行預訂頁改版

- Work commit: `aaff6a2 Improve family booking hub`（已推送至 `origin/main`）。
- 第一屏後方新增「住宿區、租車、景點票券」三個直接入口，讀者不用先讀完整頁面才找到下一步。
- 那霸與恩納住宿區加入已在本站使用的區域實景圖；飯店名稱、適合情境與限制仍保留，不用不明來源的飯店商品照。
- 新增美麗海水族館票券區，使用 2026-07-27 已核對的 Klook／Trip.com 票券連結與既有購票畫面，並導回完整圖解文章。
- `components/affiliate-service-link.tsx` 已支援 Klook 點擊追蹤；所有外部商業連結維持 `rel="sponsored noreferrer"`。
- `next build` 通過，共 63 個靜態頁。桌面首屏、票券區與 390px 手機畫面均已實際檢查；手機版無水平溢位。
- 本次只修改 `app/okinawa-family-trip-booking/page.tsx`、`components/affiliate-service-link.tsx` 與本交接檔；其他 CC／使用者未提交變更均保留。

## 2026-07-31 社群發布總表

- 新增 `docs/social/publishing-master-log.md`，統一記錄 Facebook、Instagram、Reels 與獨立長文；之後先查這份總表，再看各平台細節紀錄。
- 已公開、已公開但缺連結、草稿完成三種狀態已分開，避免把完成文案誤報成已發布。
- Facebook 長文暫排 2026-08-01、08-03、08-05 台灣時間 20:30，中間日期留給輪播或 Reel；真正發布前仍須取得使用者對該版本的確認。

## 2026-08-02 AdSense 個人付款資料

- Codex 已透過內建瀏覽器確認並送出 AdSense 個人付款資料；姓名與地址已由使用者本人核對，帳戶類型為個人。交接文件不得記錄完整住址。
- 送出後 Google 顯示「太好了！您已完成所有步驟」、「我們已獲得您的資訊」及「您的網站尚待審查，還不能放送廣告」。
- 目前不是缺少個人資料，也不是需要再填銀行帳戶；下一步是等待網站審查。審查通過前不得宣稱廣告已開始放送或已有廣告收益。
- 下一個工作依每日主排程為：先讓 wei96 預覽 Facebook、Instagram 與部落格簡介，再逐一修改；之後才預覽 Threads 第 2 則，未取得當次確認不得發布。

## 2026-08-02 跨平台簡介更新

- Facebook 簡介已透過 Codex 內建瀏覽器更新並儲存，內容為：「我是一個上班族，利用下班和休假時間整理沖繩親子自由行。這裡會分享租車、住宿、景點，還有帶孩子最容易卡住的小事。」公開範圍維持「所有人」。
- Instagram `@okinawa.family.notes` 簡介已更新為三行版本，保留 `okinawafamilynotes.com` 網站連結，未開啟跨平台同步。
- 部落格 `app/about/page.tsx` 已加入作者的上班族身分與內容方向，原有的資料來源、親身體驗界線與圖片說明均保留。
- 三個平台共同事實一致，但依平台長度各自改寫；不可再改回「專門研究」、「旅遊專家」或不符本人身分的定位。
- Next.js 正式建置已通過，共產生 71 個靜態頁；本機 `/about` 已確認新文字顯示、桌面版無水平溢位。

## 2026-08-06 Codex Threads 4 天 3 夜行程圖（進行中）

- Active owner：Codex。
- Objective：參考 Threads 原文與公開回覆，製作「沖繩 4 天 3 夜、早去晚回、自駕」單張 4:5 行程圖預覽與自然回覆文案；不代為發布。
- Claimed files：`output/2026-08-06-沖繩4天3夜行程/` 與本交接檔。
- Source policy：公開回覆只用來判讀需求；營業時間與交通限制以景點、交通業者官方網站為準。
- Current state：`preview.html` 與 `preview-card.jpg` 已完成；1080px 寬 4:5 預覽無溢位，4 張圖片皆載入。已做事實、閱讀與畫面三輪檢查；尚未匯出最終 2x PNG，等待使用者確認預覽。

## 2026-08-06 社群防重複決策

- 新增 `docs/social/topic-status-registry.md`，把已公開、草稿、排程與撤回題材放在同一張表；之後 20:00 社群預覽前必須先查此表、發布總表、`work/social/` 與 `content/blog/`。
- 判斷不再只看平台或形式。相同「讀者痛點 + 主要答案」即使改成 Reel、Threads、輪播或換圖片，也視為重複並撤回。
- 2026-08-06 Threads「車上臨時狀況」已撤回，因為和既有車上備用包文章及 8/10 輪播重複；今晚不硬補主要貼文。
- 2026-08-07 原 Reel「孩子在車上睡著，第二站還要去嗎？」已撤回，因為 2026-07-26 Facebook 長文已完整發布；新候選改為「古宇利島和名護，只選一個怎麼選？」。
- 8/10 車上備用包輪播暫作該題材唯一保留的社群版本，發布前仍須給使用者看完整預覽並取得當次確認。

## 2026-08-06 Instagram Reel 控制測試

- 使用者確認要用短片測試同一痛點在 Instagram 的表現，因此覆蓋前述撤回決策一次；這是格式測試例外，不代表日後可任意重複題材。
- 22:17 已公開 15 秒 Reel「孩子在車上睡著，第二站還要去嗎？」：https://www.instagram.com/okinawa.family.notes/reel/Dbs5NCgs7ag/
- 只發 Instagram，未同步 Facebook；說明欄不放外部連結。
- 8/7 先回收 24 小時觀看、平均觀看時間、個人檔案造訪與新增追蹤，不再發布同題；下一支候選仍是「古宇利島和名護，只選一個怎麼選？」。

## Handoff Template

## 2026-08-07 Instagram Reel 發布

- 已依使用者確認公開 15 秒 Reel「古宇利島和名護怎麼選？」。
- 公開連結：https://www.instagram.com/okinawa.family.notes/reel/DbuZp-bTWgY/
- 已確認公開頁顯示完整文案、正確 Hashtag 與第一則互動留言。
- 僅發布 Instagram，未同步 Facebook、Threads 或 WhatsApp。
- 已更新 `docs/social/publishing-master-log.md`、`docs/social/topic-status-registry.md` 與該 Reel 工作資料夾，後續不得把相同痛點換格式重發。

## 2026-08-04 Codex editorial and SEO verification

- Published `content/blog/okinawa-world-gyokusendo-family-guide.md` and verified the production build.
- Search Console accepted the indexing request for the live article on 2026-08-04.
- Removed reader-facing uses of `你家` and `狼狽` from published blog content; replaced them with precise descriptions of the family situation.
- Added an editorial rule to `AI_COLLABORATION.md`: public long-form articles must stay natural while retaining an editorial tone.
- Strict content audit result: 47 articles, 0 critical issues, 37 style reminders. The remaining reminders mainly flag repeated `不是 A，而是 B` phrasing and should be improved gradually without bulk rewriting article meaning.
- Next.js production build passed: 72 static pages generated.
- The daily 11:00 Search Console task is a Codex heartbeat automation attached to the current task, not a WordPress or Google background service.
- New permanent approval rule from the user: every blog draft or substantial rewrite must be shown in full and explicitly approved before publication, GitHub deployment or Search Console indexing. Scheduled automations may prepare and verify drafts, but may not treat the schedule itself as approval.

When handing off, replace the sections above and include:

- Active owner and reason for handoff
- Exact objective
- Last pushed commit
- Completed work
- Work still in progress
- Files changed or claimed
- Tests or build result
- Public URLs or deployment state
- Decisions that still need the user

## 2026-08-08 週檢討（Codex automation）

- Active owner：無；本輪是只讀分析與交接工作，不認領文章、社群草稿或其他既有檔案。
- Objective：完成 2026-08-01～08-07 的每週檢討，保留既有工作區變更，不發布社群、不改冷卻期頁面。
- 新增紀錄：`100_Todo/plans/2026-08-08-weekly-review.md`。
- 可查核結果：Search Console 99 點擊／2,553 曝光／3.9% CTR／平均排名 7.0，索引 63／未索引 6；GA4 129 活躍使用者、365 瀏覽、145 Organic Search 工作階段、2 次追蹤連結事件。
- Facebook 8/1～8/7 原始資料為 151 瀏覽、7 互動、94.7% 非追蹤者瀏覽；其中 2 則作者第一則留言已排除，不當作自然互動。Instagram 與平台後台不足以排除測試帳號或確認訂單，報告已明列缺資料。
- 品質檢查：`content:audit:strict` 為 48 篇、0 重大問題、37 個既有語氣提醒。車上備用包、玉泉洞及 DMM 公開頁 canonical 與延遲載入圖片均正常；本輪無法實際覆寫為 390px，不能宣稱完成 live 手機複驗。
- 下週只提案兩篇決策型新文、一次美麗海停留時間頁補強、兩組不重複社群內容及一個維持頁面不動的 Klook 分流觀察；所有文章與社群發布仍需使用者當次核可。
- 未提交：工作區原有多項使用者／其他代理變更；本輪不建置、不提交、不推送，避免混入他人檔案。

## 2026-08-08 早晨內容開工追加驗證（Codex automation）

- 沒有認領或修改公開文章、社群草稿、分潤連結與 Klook 版位；只補週報、發布總表與本交接檔，保留所有既有工作區變更。
- 英文 3 篇測試文均已收錄。2026-08-08 重新以標準網址 `https://okinawafamilynotes.com/en` 檢查，Search Console 明確顯示「網址在 Google 服務中／網頁已編入索引」；先前的 `/en/` 未收錄結果只是轉址版本的獨立狀態，不得再判定為英文首頁未收錄。GA4 的英文區近 28 天合計為 16 次瀏覽／13 位活躍使用者；8/1～8/7 的英文查詢 `okinawa family accommodation` 為 9 次曝光、0 點擊，樣本仍不足以判定成敗。
- `content:audit:strict` 通過（48 篇、0 critical；37 個既有 style reminders）。受限環境建置首次 `spawn EPERM`，重跑正式 `next build` 已通過並生成 73 個靜態頁。
- 英文頁 self-canonical、三組 `hreflang` 與現有圖片均通過正式站檢查；瀏覽器無法真正套用 390px（實際 1280px），因此本輪未宣稱完成手機版複驗。沒有提交、推送、部署或要求索引。

## 2026-08-08 英文版第二意見交接（給 Claude Code）

- Active owner：Claude Code 只負責第二意見與研究；不得直接修改或發布英文頁、中文文章、社群內容及分潤連結。Codex 保留策略整合與最終驗收。
- Objective：讀取本交接、`AI_COLLABORATION.md`、`100_Todo/plans/2026-08-08-weekly-review.md` 與目前 3 篇英文文章，判斷英文試行內容太少是否為低曝光主因，提出可驗證的下一步，不要先寫完整文章。
- 已確認事實：標準英文首頁 `https://okinawafamilynotes.com/en` 與 3 篇英文文章均已收錄；`/en/` 會轉址到 `/en`。正式頁為 `index, follow`、self-canonical `/en`，並有 `zh-TW`／`en`／`x-default` hreflang。不得重複提交索引。
- 目前基準：英文區近 28 天 16 次瀏覽、13 位活躍使用者；英文查詢 9 次曝光、0 點擊。流量可能包含站方測試，不能宣稱已有穩定海外讀者。
- 請比較至少兩種方案：A. 維持 3 篇至 14 天／28 天再判斷；B. 補到 6～8 篇形成住宿、租車、景點／雨天決策型主題群。每個方案列出預期訊號、成本、風險與停止條件。
- 請用公開搜尋結果與官方資料檢查候選英文關鍵字，但不要憑搜尋量工具臆測精確流量。候選內容必須符合第一次或第二次帶小孩去沖繩、需要解決行程取捨的家庭。
- 交付格式：一份 Markdown 第二意見，包含「低曝光原因排序、建議補寫的 3～5 個英文題目、內部連結架構、14／28 天驗收指標、是否建議現在擴寫」。完成後先回報，不 commit、不 push、不發布。

## 2026-08-08 英文版第二意見完成（Claude Code）

- **擁有權變更**：使用者在本次對話中明確授權 Claude Code 進行編輯，並指定後續英文文章改寫也由 Claude Code 製作。原交接寫的「Claude Code 只負責第二意見、不得修改英文頁」以使用者當次授權為準。Codex 接手前請先確認此變更，不要直接覆蓋。
- 交付檔：`100_Todo/plans/2026-08-08-english-second-opinion-claude.md`。未 commit、未 push、未部署、未提交索引、未發布社群，未撰寫完整文章。
- **主要結論與原案不同**：低曝光的第一主因不是篇數太少，是三篇都站在「本站身分空白」的題目上——`churaumi-aquarium-with-kids` 五個來源全為官方英文頁、`where-to-stay-in-okinawa-with-kids` 無一手資料，只有 `okinawa-child-car-seat-rental-guide` 用到警察廳／國土交通省等日文限定來源。因此**不建議擴寫到 6～8 篇**，建議 3 改寫 ＋ 0～2 新增。
- SERP 實查（2026-08-08，美國區，未使用搜尋量工具）：`where to stay in okinawa with kids` 由 Expedia、Tripadvisor、Accor 與兩個成熟親子部落格佔據；`churaumi aquarium with kids` 由 Japan Uncharted、Okinawa Lab、おきなわlovers 等專門站佔據，且本站該篇每項事實都能在競爭頁找到。兩題皆為紅海。
- 確認的內容空白：**如何跟日本租車公司溝通兒童座椅需求**，搜尋結果只有租車公司產品頁與一則論壇提問，無任何訊息範本。另發現 Okinawa Rent-a-Car 以 LINE 聯繫而非 email，範本需做成可貼進 email／LINE／預訂備註欄的通用版本。建議注入既有安全座椅文，不開新文。
- 三篇處置建議：安全座椅重點改寫、住宿輕度改寫、Churaumi 維持現狀不投資。改寫皆不動網址、標題與 hreflang，且依核可閘門必須先給使用者看完整版本。
- **提醒下週規劃**：`2026-08-08-weekly-review.md` 第 94、95 行的兩篇新文都與既有文章重疊——美麗海一日文撞 `okinawa-north-family-day-trip` 與 `okinawa-churaumi-nearby-family-stay`；雨天選擇文撞 `okinawa-rainy-day-family-spots` 與 DMM／玉泉洞／兒童王國三篇的既有雨天段落。動筆前建議重新界定意圖或改題。
- 另檢出既有中文文章三組互相稀釋：`okinawa-family-itinerary-not-too-tired` 與 `okinawa-family-driving-pace-guide`；`okinawa-rental-car-family-guide` hub 與其三篇子頁；`first-okinawa-where-to-stay` 與 `okinawa-change-hotels-family`。細節見交付檔附錄。
- 待使用者處理：Klook／Shopee／Trip.com 三個後台仍為缺資料，Shopee 的滑動驗證需本人操作，不得繞過。

## 2026-08-08 英文區改善（Claude Code，已於 `f77b2b2` 部署）

**使用者於 2026-08-08 明確核可部署，與同日的結構化資料補完合併在工作提交 `f77b2b2`。座椅篇改寫草稿不在這次上線範圍。未重複提交索引。**

- **渲染器缺陷修復（影響全站，請特別注意）**：`components/markdown-content.tsx` 原本不支援 fenced code block，且 `content.trim().split(/\n\s*\n/g)` 會在空行切斷區塊。日文範本這類內容會被拆散並被 `block.replace(/\n/g," ")` 壓成一行，連 ``` 都會印出。新增 `splitBlocks()` 先行處理圍欄、再依空行切塊，並輸出 `<pre className="code-block">`；`app/globals.css` 補上 `.code-block` 樣式（`overflow-x:auto`、`white-space:pre`，不造成頁面水平溢位）。已驗證既有中文文章（門票頁）段落、圖片、表格、清單、`rel="sponsored"` 全部不受影響。
- **新增英文信任頁**：`app/en/about/`、`app/en/contact/`、`app/en/privacy/`。三頁皆有 self-canonical 與 `zh-TW`／`en`／`x-default` 互指；中文 `/about`、`/contact`、`/privacy` 也補上反向 hreflang（原本只有 canonical）。`app/sitemap.ts` 已收錄三個新路由。
- **AdSense 相關**：英文 footer 原本只有 Family guides 與 繁體中文，**沒有隱私權政策也沒有聯絡方式**。審查中的網站若審查員落在英文頁，看不到隱私權政策。`components/footer.tsx` 現在英文區輸出 About／Contact／Privacy policy／繁體中文。`/en/privacy` 內含 GA4、Cookie、Google 廣告與 Google 廣告設定連結，對應中文版 8/1 的揭露內容。未新增任何廣告版位或廣告程式碼。
- **技術修正**：`/en` 首頁標題原本輸出「| 沖繩親子旅遊筆記」。原因是 Next.js 的 `title.template` 只套用於子層，`app/en/page.tsx` 因此落回根 layout 的中文模板；改用 `title.absolute` 修正。`app/en/layout.tsx` 補 `openGraph.images`，讓所有英文頁都有 og:image（原本英文頁只有 twitter:image）。
- **草稿待核可**：`100_Todo/drafts/articles/2026-08-08_en-child-car-seat-rewrite.md`，為 `content/blog-en/okinawa-child-car-seat-rental-guide.md` 的改寫版，網址、標題、description、hreflang 全部不動。新增四家（OTS／Nippon／Toyota／Okinawa Rent-a-Car）座椅規格對照、日文溝通範本（完整版／LINE 短版／填寫範例／逐行英文對照）、日文法條引用、身高對照含英吋磅、日文回覆關鍵字表。素材依據見 `research/en-child-seat-rental-comparison-2026-08-08.md`。**使用者確認未曾實際聯繫過日本租車公司，因此全文不含第一人稱經歷，範本標示為依官方公開資訊整理。**
- 日文語氣依日本商務信件慣例校正：初次聯繫使用「初めてご連絡いたします」，不使用「お世話になっております」（僅限已有往來對象）。仍建議日文母語者複核。
- 驗證：`content:audit:strict` 48 篇／0 重大／37 既有提醒（與基準相同）；`next build` 通過，**76 個靜態頁**（原 73，增加三個英文頁）。390px 檢查：文章頁與新頁面皆無頁面水平溢位，日文範本三塊皆在 348px 內不需左右捲動。
- 驗證用的臨時檔 `content/blog-en/zz-preview-car-seat-draft.md` 已刪除。
- 變更檔案：`app/about/page.tsx`、`app/contact/page.tsx`、`app/privacy/page.tsx`、`app/en/layout.tsx`、`app/en/page.tsx`、`app/globals.css`、`app/sitemap.ts`、`components/footer.tsx`、`components/markdown-content.tsx`，新增 `app/en/{about,contact,privacy}/page.tsx`。

## 2026-08-08 三個聯盟後台資料補齊（Claude Code＋使用者登入）

先前週檢討記錄的 Klook／Shopee／Trip.com「缺資料」已由使用者本人登入後取得。**滑動驗證與帳密全程由使用者操作，未由代理輸入或繞過。**

| 平台 | 點擊 | 訂單／憑證 | 收益 |
| --- | ---: | ---: | ---: |
| Klook | 8（過去 30 天） | 0 | NT$0.00 |
| Shopee | 8（8/1–8/7） | 0（查詢區間 6/1–8/7、狀態全部，顯示「尚無數據」） | $0 |
| Trip.com | 1 | 0 | USD 0.00（已結算／待結算／預計皆為 0） |

合計 17 次點擊、0 筆訂單、收益為零。同期 Search Console 為 99 點擊／週、GA4 為 145 Organic Search 工作階段／週。

**三項追蹤缺陷，比零收益本身更需要先處理：**

1. **Klook 的分流觀察無效**：8 次點擊全部歸於 `文字連結 1357775`；交接記錄中觀察至 8/15 的兩個 ID（`1362380` 文章版位、`1362390` 導購頁版位）皆為 0 點擊。該 A/B 觀察目前沒有可比較的資料，不應在 8/15 依此下結論。
2. **Shopee 無來源歸因**：點擊報告的 `Sub_id` 欄位全部為空，無法判斷點擊來自哪一篇文章或哪個版位。
3. **Shopee 點擊疑似非自然**：8/4 有 3 次落在 24 秒內（16:23:58／16:24:19／16:24:22），8/1 有 4 次落在 83 秒內（21:32:20–21:33:43），全部來自 Taiwan。時間分布比較像同一人連續點擊或站方測試，不宜當作 8 位獨立讀者。

**Trip.com 後台正確入口為 `https://www.trip.com/partners/`（登入後導向 `/partners/dashboard`）。`alliance.trip.com` 實測無法連線，先前記錄的「網址無法解析」屬實，請更新既有紀錄。** Trip.com 僅 `D18951522`（`Trip_Sub1 = hotel_pmc_onna`，恩納 Pink Marlin Club）有 1 次點擊，其餘飯店、租車與美麗海票券版位皆為 0。

Google OAuth 在內建瀏覽器會被擋（彈窗不開），Trip.com 是改用使用者既有 Chrome 登入狀態讀取的。後續要讀 Trip.com 報表需沿用同一途徑。

## 2026-08-08 費用試算成效補查（Codex）

- 正式頁：`https://okinawafamilynotes.com/okinawa-family-trip-budget-calculator`，於 2026-08-01 上線。
- GA4 過去 28 天報表（2026-07-11～08-07）以該路徑篩選：4 次瀏覽、2 位活躍使用者、每位 2.00 次瀏覽、平均參與時間 49 秒。頁面 8/1 才存在，因此可作為上線後截至 8/7 的初始基準，但無法排除站方自己的測試瀏覽。
- GA4 事件報表以 `budget_` 篩選為 0；`budget_calculator_start`、`budget_calculator_complete`、`budget_calculator_share`、`budget_premium_interest`、`budget_booking_click` 皆無紀錄。不可把頁面瀏覽解讀成已開始或完成試算，也沒有可驗證的分享、預訂點擊或轉換。
- 下次週報固定同時查看「試算頁瀏覽」與五項 `budget_` 事件；未累積新操作前先保留頁面，不因 2 位使用者的小樣本改版或新增付費功能。

## 2026-08-08 英文區結構化資料補完（Claude Code，工作提交 `f77b2b2`）

**使用者核可後與同日稍早的英文區改善一起進入 `f77b2b2`（共 16 個檔案）。座椅篇改寫草稿依核可閘門保留在 `100_Todo/drafts/`，不在這次上線範圍。未提交索引。**

- Active owner：Claude Code。依 `100_Todo/plans/2026-08-08-english-execution-plan-claude.md` 階段 1.2，補完五項技術修正中剩下的三項；前兩項（英文首頁 `<title>`、`og:image`）已於本日稍早完成。至此階段 1.2 全部完成。
- 認領檔案：新增 `lib/faq.ts`；修改 `app/en/blog/[slug]/page.tsx`、`app/en/blog/page.tsx`、`app/en/page.tsx`、`app/layout.tsx`。未動中文文章、`app/blog/[slug]/page.tsx`、社群內容與分潤連結。
- **`FAQPage`**：新增 `lib/faq.ts` 的 `getFaqEntries()`，從英文 Markdown 的 `## Frequently asked questions` 區塊讀 `### 問題` 與其答案段落，轉為純文字（移除連結、粗體、行內程式碼標記）。只有存在 FAQ 區塊時才輸出節點。三篇分別產生 5／5／4 題，與原文題數一致；答案在頁面上本來就可見，符合 Google 對 FAQ 結構化資料的可見性要求。
- **`BreadcrumbList`**：英文文章頁輸出三層（`/en` → `/en/blog` → 文章），`/en/blog` 輸出兩層。中文頁未加，維持 Codex 擁有權。
- **`Organization` schema**：`app/layout.tsx` 原本 `sameAs: []`，補上三個已驗證的公開帳號——Facebook `profile.php?id=61588725730543`（與 `/contact`、`/en/contact` 頁上同一個連結）、Instagram `okinawa.family.notes`、Threads `@okinawa.family.notes`。名稱維持中文 `name` ＋ 英文 `alternateName` 不動；英文區的英文站名由 `/en` 既有的 `WebSite` 節點負責，這次只補上它缺少的 `publisher` 指向 `#organization`，避免同一個 `@id` 出現兩種語言的衝突節點。
- 驗證（在 prerender 產物上實查，非推論）：`content:audit:strict` 48 篇／0 重大／37 個既有語氣提醒（與基準相同）；`next build` 通過、**76 個靜態頁**（與本日稍早相同，未新增路由）。三個英文文章頁各含 1 組 `BreadcrumbList` 與 1 組 `FAQPage`；`/en/blog` 含 1 組 `BreadcrumbList`；中文文章頁的 `FAQPage` 數為 0，僅隨全站 `Organization` 取得 `sameAs`。本輪只新增 JSON-LD，未變更任何可見 DOM 或樣式，因此不重複宣稱 390px 手機複驗。
- 建議給 Codex（不在本輪擁有權內）：中文文章多數也有 FAQ 段落但沒有 `FAQPage` 標記，`lib/faq.ts` 的解析器可直接沿用，只需改成比對中文標題。要不要做由 Codex 決定。
- **正式站驗證（部署後實查，非推論）**：`/en/about`、`/en/contact`、`/en/privacy`、`/en`、`/en/blog`、`/sitemap.xml` 全部回 200。`/en/privacy` self-canonical 正確，`zh-TW`／`en`／`x-default` 三組互指齊全；中文 `/privacy` 的反向 hreflang 也已指回 `/en/privacy`。英文文章頁 `FAQPage` 與 `BreadcrumbList` 均在，Question 數與原文一致。首頁 `Organization` 的 `sameAs` 三個帳號已上線。`sitemap.xml` 收錄三個新英文路由。Vercel 部署耗時約 60–80 秒。**比對 hreflang 時注意 Next 輸出的是 `hrefLang` 駝峰**，用小寫 `hreflang` 比對會誤判為 0。
- 階段 2.1 座椅篇改寫已於同日完成並上線，見下一節。階段 2.2 住宿篇改寫需要階段 0 素材（孩子年齡、實際到訪與自駕經驗）才能加入第一人稱段落，沒有素材就只做日文官方交通資料對照。

## 2026-08-08 英文座椅篇改寫上線（Claude Code，工作提交 `a1d5b9b`）

**使用者在本次對話看過完整草稿後明確核可上線。既有網址改寫，網址、標題、description、`hreflang` 全部未動。未提交索引。**

- 檔案：`content/blog-en/okinawa-child-car-seat-rental-guide.md`。草稿來源 `100_Todo/drafts/articles/2026-08-08_en-child-car-seat-rewrite.md` 保留不刪；事實依據 `research/en-child-seat-rental-comparison-2026-08-08.md` 的發布前待辦已勾掉。
- 改寫內容：新增 OTS／Nippon／Toyota／Okinawa Rent-a-Car 四家座椅規格與價格對照、含英尺英吋換算的身高分段表、日文訊息範本三塊（完整版／填寫範例／LINE 短版）＋逐行英文對照＋日文回覆關鍵字表、警察廳條文與「六歲以上仍依體格判斷」的官方建議。FAQ 由 5 題增為 6 題，新增 100 cm 類別邊界那題。
- frontmatter 只加 `updated: "2026-08-08"`（`lib/posts.ts:85` 讀 `frontMatter.updated ?? frontMatter.date`，中文區已有 17 篇用同一個 key），`date` 維持 `2026-08-01`。
- **事實邊界**：使用者確認未曾實際聯繫過日本租車公司，全文無第一人稱經歷，範本標示為依各公司公開資訊整理。四家規格為 2026-08-08 當日快照，與上線同日。You-I Rent a Car 本輪未查核，不納入。
- 驗證：`content:audit:strict` 48 篇／0 重大／37 個既有提醒（與基準相同）；`next build` 通過、76 個靜態頁（未新增路由）。prerender 產物實查：`Question` 6 題（解析器正確略過 `## The message to send when you book` 底下那四個非 FAQ 的 `###`）、`BreadcrumbList` 1 組、`<pre class="code-block">` 3 塊、無殘留 ``` 符號、日文各 31／31／14 行未被壓成單行。
- 390px 本機實測（`next start` ＋ 瀏覽器實際套用 390×844）：`document.scrollWidth` 390 = `clientWidth` 390，**頁面無水平溢位**。三塊日文範本容器 348px、內容 348px，連內部橫捲都不需要。四個表格都在既有的 `div.table-scroll`（`overflow-x: auto`）內。
- 正式站驗證：200、self-canonical 正確、三組 `hreflang` 互指 `/blog/okinawa-car-seat-rental-guide`、`FAQPage` 6 題、`BreadcrumbList` 存在、3 塊 code block、`dateModified` 2026-08-08、封面圖 200、中文對應頁 200 且英文連結正常。
- **待辦（留給使用者）**：日文語氣尚未經母語者複核。已依日本商務信件慣例校正——初次聯繫用「初めてご連絡いたします」，不用僅限已有往來對象的「お世話になっております」。
- **待觀察**：四家對照表在 390px 下為 640px 寬，手機讀者需在表格內橫捲才能看到 Toyota 與 Okinawa Rent-a-Car 兩欄。表格後的三段結論文字已獨立成立，不需讀表也能拿到重點，因此本輪不改版；若 9/5 閘門顯示這篇有實際流量，再評估是否改為分段卡片。
- 成效判讀依 `100_Todo/plans/2026-08-08-english-execution-plan-claude.md` 的 9/5 決策閘門：看**可見 query 是通用紅海詞還是操作型詞**，不是看曝光數字本身。

## 2026-08-08 英文住宿篇改寫上線（Claude Code，工作提交 `8d369ae`）

**使用者看過完整草稿後核可上線。既有網址改寫，網址、標題、description、`hreflang` 全部未動。未提交索引。階段 2.2 完成，英文區進入 8/16–8/22 觀察期。**

- 檔案：`content/blog-en/where-to-stay-in-okinawa-with-kids.md`。草稿來源 `100_Todo/drafts/articles/2026-08-08_en-where-to-stay-rewrite.md` 保留。
- 這是計畫裡的「輕度改寫」，只做**不需要階段 0 個人素材**的那半邊：把抽象的 driving time 換成官方公布的具體數字。既有決策框架、三個區的分段與 FAQ 結構保留。
- **官方數字（全部第一手，來源網址均實測回 200）**：機場→北谷約 40 分（巴士約 60 分）、機場→恩納約 1 小時（巴士約 75 分）、那霸→本部半島約 90 分（巴士到名護 2–3 小時）、機場→美麗海／海洋博公園高速約 2 小時、一般道約 2 小時 50 分、高速巴士約 2 小時 30 分。
- **兩個英文圈未見的推論（本篇差異化來源）**：(1) 海洋博公園官方同時公布高速 2 小時與一般道 2 小時 50 分，因此高速單程值約 50 分鐘、來回近 1 小時 40 分；(2) 官方的「那霸→本部半島 90 分」與水族館官方的「約 2 小時」不衝突——水族館在半島遠端，所以比較北部飯店時要看訂在半島哪一頭。另補上官方描述的恩納海岸「近 30 公里長、不到 5 公里寬」，說明同一個區名下的兩家飯店車程可以差很多。
- **過路費刻意不寫。** 查到 950／1,000／1,040／1,610 四種數字，全部來自聚合網站而非 NEXCO 第一手，且 ETC 與現金、上下行方向價格不同。文中改為說明費用因交流道與付款方式而異，請向高速公路營運方確認。**後續若要補這個數字，必須從 NEXCO 西日本官方查詢工具取得，不得引用聚合網站。**
- FAQ 由 4 題增為 5 題，新增「How long is the drive from Naha Airport to Churaumi Aquarium?」——這是操作型 query，正好對應 9/5 閘門要觀察的訊號類型。
- 驗證：`content:audit:strict` 48 篇／0 重大／37 個既有提醒（與基準相同）；`next build` 通過、76 個靜態頁。prerender 實查 `Question` 5 題、`FAQPage` 1、`BreadcrumbList` 1、`dateModified` 2026-08-08。390px 本機實測 `scrollWidth` 390 = `clientWidth` 390，頁面無水平溢位；新增的三欄車程表在既有 `div.table-scroll`（`overflow-x: auto`）內，表格 640px、容器 348px，僅表格自身橫捲。
- 正式站驗證：200、self-canonical 正確、三組 `hreflang` 互指 `/blog/first-okinawa-where-to-stay`、`FAQPage` 5 題、`BreadcrumbList` 存在、封面圖 200、中文對應頁 200、`sitemap.xml` 的 `lastmod` 已更新為 `2026-08-08`。

## 英文區目前狀態與下一個閘門（2026-08-08 收尾）

- 階段 1.2、1.3、2.1、2.2 全部完成。Churaumi 篇依計畫**不投資**（紅海、零差異化），只作為被連結的終端頁。
- **8/16–8/22 觀察期不動任何英文頁。** 8/22 只看方向不做決策：`/en/*` 曝光是否脫離每週 9 次量級、可見 query 是通用詞還是操作型詞、是否有任一頁進前 30、Churaumi 平均互動時間是否仍是個位數秒。
- **索引：不重複提交。** 兩篇改寫的 `updated` 已讓 `sitemap.xml` 的 `lastmod` 自動更新為 2026-08-08，這就是通知 Google 內容變更的機制。若 8/22 觀察時發現 Google 快取仍是舊版，屆時才考慮用 Search Console 要求重新檢索（需使用者本人登入，且 Google OAuth 在內建瀏覽器會被擋，須用既有 Chrome）。
- 尚未做、需要使用者素材才能做的：兩篇的第一人稱經歷段落（階段 0 素材——孩子年齡與人數、實際到訪次數、取車日時間軸、實際住過哪幾區）。沒有素材就維持現狀，不編造。
- **停止條件仍然有效**：英文工作若排擠中文版兩篇新文的節奏，立即暫停英文。繁中站是第一優先。

## 2026-08-09 中文首頁首屏明亮化（Codex，使用者已確認）

- Active owner：Codex。
- 認領檔案：`app/page.tsx`。
- 目的：改善首頁首屏偏暗、第一眼不易辨認「沖繩親子旅行」的問題；改用既有明亮親子旅遊視覺，強化 `2026 沖繩親子自由行`、住宿、租車與親子景點等第一屏訊號。
- 最終版採白底、不加綠色遮罩，保留淡化的沖繩親子實景圖；主要按鈕改為黑底白字，次要按鈕維持白底，且樣式只作用於首頁。
- 使用者已於 2026-08-09 看過本機預覽並確認「看起來可以、有特色」。Next.js 正式建置通過後，可提交並推送 `app/page.tsx` 與本段交接紀錄。
