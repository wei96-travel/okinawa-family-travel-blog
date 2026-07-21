# Social Workflow｜社群製作 SOP

從一篇網站文章完成，到全平台發佈完成的標準流程。
目標：**一次坐下來，一篇文章的所有社群素材一次做完。**

---

## 總覽

```
網站文章完成（已發佈、已建索引）
   │
   ▼
Step 0  拆解：從文章抓出 3–5 個資訊塊
   │
   ▼
Step 1  AI Prompt：一次生完這組要用的所有圖
   │
   ▼
Step 2  Carousel：做 8 張輪播（FB / IG 共用）
   │
   ▼
Step 3  Reels：從輪播抓 3 個點做 30 秒
   │
   ▼
Step 4  CTA：每個平台指定一個編號
   │
   ▼
Step 5  Hashtag：三層結構，各平台調整數量
   │
   ▼
Step 6  文案：FB → IG → Threads → Pinterest
   │
   ▼
Step 7  檢查：跑完四張檢查表
   │
   ▼
Step 8  排程發佈：FB → IG → Reels → Threads → Pinterest
   │
   ▼
Step 9  紀錄與回收
```

**預估時間**：熟練後單篇約 90–120 分鐘。

---

## 前置條件

開始之前必須成立：

- [ ] 文章已在 `https://okinawafamilynotes.com` 上線且可點
- [ ] 文章內的事實已查證過，價格／時間類已標「以官方為準」
- [ ] 已在 `social-content-plan.md` 找到這篇對應的主題編號
- [ ] `AI_HANDOFF.md` 沒有其他 agent 正在改這篇文章

**注意**：社群製作與部落格寫作分開進行，不要在同一個工作段落混做（`AI_HANDOFF.md` 既有規則）。

---

## Step 0：拆解文章

**產出**：一份 3–5 條的資訊塊清單。

1. 讀完整篇文章。
2. 依 `content-repurpose.md` 的「拆解方法」表，找出對照表、檢查清單、FAQ、誤解段落、具體數字。
3. 挑出 3–5 個**可以單獨成立**的資訊塊（拿掉上下文也看得懂）。
4. 決定用哪個輪播模板（`carousel-system.md` 的選用速查表）。
5. 從 `social-content-plan.md` 確認主題編號與建議格式。

**卡住時的判斷**：如果找不到 3 個可獨立的資訊塊，這篇文章不適合做輪播，改做 Threads 單則 + Pinterest 圖釘就好。

---

## Step 1：素材（先盤點，再生圖）

**產出**：8–12 張圖，存進 `work/social/{slug}/images/`。

### Step 1a：先盤點既有素材（必做，不可跳過）

**每篇文章通常已經有 2–3 張經過審核、已上線的圖，優先重用。**

```
ls public/images/articles/{slug}/
```

| 找到什麼 | 怎麼用 |
| --- | --- |
| 文章封面 `*-cover.jpg` | 直接當輪播 P1 封面底圖 |
| 文章情境圖 | 當輪播內頁或 Reels 過場 |
| 自製資訊圖 `*.svg` | 拆用元素，或改尺寸直接放進輪播 |

**重用的三個好處**：零成本、已通過審核（無商標、無車牌、標過情境示意）、與網站文章視覺完全一致。

> 這條是 2026-07-21 主題 62 試做時補上的。當時直接跳到生圖，花了 240 點生 4 張，其中 3 張因為出現 FIAT／VW 廠徽和可讀數字而不合格——而該篇文章本來就有一張更好的封面圖躺在 `public/images/articles/` 裡。

### Step 1b：只補既有素材沒有的畫面

1. 列出這組需要的畫面，扣掉 Step 1a 已經有的，剩下的才要生。
2. 從 `ai-image-style-guide.md` 的 14 類 Prompt Library 挑對應 prompt。
3. **每張都貼上風格尾綴 + 負向提示**，不可省略。
4. 一次生完，不要邊做輪播邊生圖——會導致風格不一致。
5. 把實際使用的 prompt 存成 `work/social/{slug}/prompts.md`，之後要補圖可重現。
6. 跑一次「生圖後檢查表」。

**改用資訊圖的情況**：法規、費率、年齡分級、車程、時間軸、對照表 → 做 SVG，不用 AI 生圖。

---

## Step 2：Carousel

**產出**：8 張 1080×1350。

1. 套 Step 0 選定的模板骨架。
2. 首頁只放 Hook（`social-brand-guide.md` 的標題公式擇一，主標 ≤16 字）。
3. 內頁一頁一件事，內文 ≤60 字。
4. 至少做一張「可單獨截圖的總表」。
5. 末頁放 CTA（Step 4 決定編號，先留空版）。
6. 頁碼、品牌標位置固定。
7. 跑一次「輪播製作檢查表」。

**FB 與 IG 共用同一組圖**，不重做。

### 算圖工具（2026-07-21 建立）

輪播用 HTML 排版再匯出 PNG，不用設計軟體。範本在：

```
work/social/okinawa-family-parking-guide/render/carousel.html   版型範本，直接複製改內容
work/social/okinawa-family-parking-guide/render/export.py       匯出 1080x1350 PNG
```

**流程**

1. 複製 `render/` 整個資料夾到新主題底下，改 `carousel.html` 的文字。
2. 啟動靜態伺服器（專案根目錄）：
   ```
   python -m http.server 4180 --directory "C:/AI/codex 部落格"
   ```
   （`C:\AI\cc\.claude\launch.json` 裡有一個叫 `social-render` 的設定可直接啟動）
3. 瀏覽器開 `http://localhost:4180/work/social/{slug}/render/carousel.html` 校稿。
4. `python export.py` → 輸出到 `render/png/01.png` ~ `08.png`（**不要用 `out/`**，專案 `.gitignore` 有 `out`，會被忽略），可直接上傳。

**已知地雷**：`.pad` 是 `position:absolute` 且同時設了 `top` 與 `bottom`，**不要再加 `height:100%`**，會覆蓋 inset 的 bottom 值，導致內容溢出投影片底部。範本裡已註記。

匯出後務必逐張看過再發，版面溢出在瀏覽器縮圖不一定看得出來。

---

## Step 3：Reels

**產出**：30 秒主片（必做）+ 15 秒短版（可選）。

1. 從輪播的 3 個最強資訊點抽出來，套 `reels-system.md` 的 30 秒模板。
2. 寫腳本：Hook（2s）→ Context（3s）→ 3 個點（20s）→ CTA（4s）→ Ending（1s）。
3. 字幕逐句拆好，每句 8–14 字。
4. 用 Step 1 生的過場圖 + 輪播內頁改成 9:16 的資訊卡。
5. 燒硬字幕，加固定 Ending 品牌卡。
6. 匯出 1080×1920 / 30fps。
7. 跑一次「Reels 製作檢查表」。

**15 秒短版做法**：直接取 30 秒版的其中 2 個點，換一個 Hook，不重製素材。

---

## Step 4：CTA

**產出**：每個平台一個 CTA 編號。

依 `cta-library.md` 的搭配速查表指定：

| 平台 | 型 | 編號範圍 |
| --- | --- | --- |
| Facebook | 導流 | 1–15 |
| Instagram | 收藏 | 16–30 |
| Reels | 收藏或導流 | 16、19、23 / 1、3、6、14 |
| Threads（串接第 3 則） | 互動 + 導流 | 31–45 + 1–15 |
| Pinterest | 導流 | 1、3、6、7、11、13 |

1. 把 `{}` 變數換成這篇的具體內容。
2. 確認這些編號一個月內沒用過（查 `work/social/cta-log.md`）。
3. 回頭把輪播末頁與 Reels 的 CTA 文字填上。

---

## Step 5：Hashtag

**產出**：每個平台一組 hashtag。

1. 品牌層固定：`#沖繩親子旅遊筆記` `#OkinawaFamilyNotes`。
2. 主題層依這篇內容寫 4–6 個。
3. 客群層從常用池挑 3–5 個。
4. 依平台調整數量：IG 10–15、FB 3–5、Threads 1–3、Reels 5–8、Pinterest 0。
5. Pinterest 改成把關鍵字寫進標題與描述。

---

## Step 6：文案

**產出**：四份文案檔。

依序寫，因為後面的可以縮寫前面的：

1. **Facebook**（150–400 字，最長）：處境句 → 說明 → 三個要點 → 「連結放留言」→ hashtag。**貼文本體不放連結**，CTA 與連結寫成第一則留言，發文後立刻補。
2. **Instagram**（80–200 字）：縮寫 FB 版，換成收藏型 CTA，hashtag 移到留言區。
3. **Threads**（3 則串接）：第 1 則講處境、第 2 則講方法、第 3 則放連結。**主文不放連結。**
4. **Pinterest**：標題 ≤40 字含關鍵字、描述 ≤100 字。

**規則**：四個平台的第一句不要完全一樣，避免同一批人看到重複內容。

存成 `copy-facebook.md`、`copy-instagram.md`、`copy-threads.md`、`copy-reels.md`。

---

## Step 7：檢查

四張檢查表全部跑完才能發：

1. `social-brand-guide.md` → 跨平台一致性檢查表
2. `carousel-system.md` → 輪播製作檢查表
3. `reels-system.md` → Reels 製作檢查表
4. `ai-image-style-guide.md` → 生圖後檢查表

**額外必查**：
- [ ] 文章連結實際點過，沒有 404
- [ ] 沒有假裝實地體驗的句子
- [ ] AI 圖都標了「情境示意」
- [ ] 價格／時間類都有「以官方為準」
- [ ] 沒有中國用語、沒有半形標點

---

## Step 8：排程發佈

不要同一天全平台放送。

| 天 | 平台 | 時段 |
| --- | --- | --- |
| D+0 | Facebook 輪播 | 21:00–22:30 |
| D+1 | Instagram 輪播 + 限動（連結貼紙 + 投票） | 21:00–23:00 |
| D+2 | Instagram Reels（同步 FB Reels、YouTube Shorts） | 20:00–22:00 |
| D+3 | Threads 三則串接 | 22:00–23:30 |
| D+3~5 | Pinterest 圖釘 ×2 | 不限 |

**發佈後 30 分鐘內**：回覆前幾則留言（早期互動對觸及影響最大）。

---

## Step 9：紀錄與回收

1. 在 `work/social/progress.md` 標記這個主題編號完成。
2. 在 `work/social/cta-log.md` 記下用過的 CTA 編號與日期。
3. 發佈後 7 天回收數據：觸及、儲存、留言、連結點擊。
4. 把 IG 限動投票結果、Threads 留言問題收集起來，當成下一批選題。
5. 表現在前 20% 的貼文：3 個月後換 Hook 與封面重發。
6. 表現在後 20% 的貼文：不重發，改用另一個模板重拆同一篇文章。

---

## 週節奏（建議）

| 日 | 工作 |
| --- | --- |
| 週一 | 選題（從 `social-content-plan.md` 挑本週 2 個主題） |
| 週二 | Step 0–2：拆解 + 生圖 + 輪播 |
| 週三 | Step 3–6：Reels + CTA + Hashtag + 文案 |
| 週四 | Step 7–8：檢查 + 排程 |
| 週五 | Pinterest 補圖釘 + Threads 額外 2–3 則 |
| 週日 | Step 9：回收數據 + 下週選題預備 |

---

## 與部落格工作的分工

- 社群製作與文章寫作**分開的工作段落**，不混做。
- `docs/social/` 只放規劃文件，產出物放 `work/social/`。
- **不因為社群需要而修改既有文章**。若發現文章有錯或缺內容，記在 `AI_HANDOFF.md` 的待辦，另開工作處理。
- 社群素材若需要放進 `public/` 供外部存取，先提案給使用者確認，因為那會改變網站可公開存取的檔案。
- 每次社群工作結束，在 `AI_HANDOFF.md` 記錄做了哪些主題、發到哪些平台。
