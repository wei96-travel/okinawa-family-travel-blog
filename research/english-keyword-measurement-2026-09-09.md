# 英文市場關鍵字實測（2026-09-09）

**工具**：Google Ads 關鍵字規劃工具，帳戶 `300-358-4941`（沖繩親子旅遊筆記）
**設定**：語言英文；地區美國、新加坡、澳洲、香港（**已移除台灣**）；期間 2025 年 8 月 – 2026 年 7 月
**限制**：帳戶無實際廣告花費，因此只給範圍值。表格中的 `—` 代表**低於可量測門檻**，不完全等於零。

---

## 一、為什麼要做這個測量

英文區在 2026-08-08 完成階段 1.2／1.3／2.1／2.2 後進入觀察期，`AI_HANDOFF.md` 訂的判斷點是「8/22 檢查 `/en/*` 曝光是否脫離每週 9 次量級」。

**該檢查從未執行。** 2026-09-09 補查 Search Console（近 28 天）：`/en/*` 共 **419 曝光 / 6 點擊 / CTR 1.4% / 平均排序 6.7**，約每週 105 次曝光，是門檻的 11 倍。**觀察期的標準早就通過了，只是沒人回來看。**

但「曝光達標」不等於「市場夠大」。中文站在 2026-09-07 已經有過一次教訓：只看 SERP 與曝光推論市場，兩個判斷都被搜尋量實測推翻（見 `C:\AI\cc\100_Todo\projects\2026-09-07_育兒採買聯盟站-可行性研究.md`）。因此在投入英文之前先量。

## 二、有搜尋量的詞

| 關鍵字 | 月搜尋量 | 競爭 | 首頁頂端出價（低–高） |
| --- | ---: | :-: | ---: |
| flights to okinawa | **1萬–10萬** | 中 | $4.57 – $25.44 |
| flights to okinawa japan | **1萬–10萬** | 中 | $4.57 – $25.44 |
| **okinawa car rental** | **1000–1萬** | 高 | **$24.67 – $105.91** |
| car rental okinawa japan | 1000–1萬 | — | — |
| okinawa travel | 1000–1萬 | 低 | $8.64 – $70.51 |
| okinawa churaumi aquarium | 1000–1萬 | 中 | $8.30 – $79.09 |
| **rent a car okinawa airport** | 100–1000 | 高 | **$46.46 – $179.89** |
| okinawa tours | 100–1000 | 高 | $17.72 – $80.60 |
| okinawa itinerary | 100–1000 | 高 | $1.27 – $62.30 |

## 三、查不到量的詞（全部回傳 `—`）

`okinawa with kids`、`okinawa with children`、`okinawa family travel`、`okinawa kids activities`、`japan with kids`、`okinawa child car seat`

另外兩個極小：

| 關鍵字 | 月搜尋量 |
| --- | ---: |
| okinawa family hotel | 10–100 |
| where to stay in okinawa | 10–100 |

`okinawa with kids` 在「尋找新的關鍵字」流程中被系統直接移除，提示「部分關鍵字已移除，無法用於關鍵字提案」。

## 四、三個結論

### 1. 英文區現在的定位在英文市場不存在

「親子」這條線六個詞全部查不到量。中文的「沖繩親子」至少還有 100–1000。

特別諷刺的是 `where to stay in okinawa` 只有 **10–100**，而 `/en/blog/where-to-stay-in-okinawa-with-kids` 卻是英文區 CTR 最好的一頁（86 曝光 / 4 點擊 / 4.7%）。它的曝光顯然來自其他長尾詞，不是這個主詞。

### 2. 英文的需求在租車，不在親子——但台灣市場大十倍

`okinawa car rental` 是 1000–1萬。台灣的「沖繩租車」是 **1萬–10萬**。**同一個主題，中文市場大一個量級。**

### 3. 英文流量單位價值確實比較高

`rent a car okinawa airport` 出價 **$46.46–$179.89**，高於中文組實測的最高值（沖繩住宿 $62.95）。所以「英文分潤比較好做」這個直覺方向正確，只是量少十倍。

## 五、建議

**不要擴英文。** 2026-09-09 補測 SERP 後，這條從「優先序在後面」變成「結構上不可得」——詳見第六節。

簡短版：有量的英文查詢（租車、水族館）前排全是供應商、OTA 與官方單位，內容站零席；SERP 對利基部落格開放的親子類查詢則查不到搜尋量。中文的「沖繩租車」是唯一兩個條件同時成立的地方。

英文區的處置：

- **保留三篇，只修 CTR，不寫新文章。** `okinawa-child-car-seat-rental-guide` 已於 2026-09-09 改為答案先行標題（排序 5.7 但 CTR 僅 1.3%，是排名好、標題差的典型）。
- **若要寫新英文文章，寫租車不要寫親子。** 現行站名與定位在英文打不到人。
- **真正的時機是中文租車樞紐頁見效之後**，把驗證過的架構移植為英文版，直接打 1000–1萬 的量與 $46–$180 的出價。**用中文市場當實驗場，英文市場收成。**

## 五之二、24 個講法完整實測（2026-09-09 補測，回應「是不是根本沒搜尋到」）

**第三節初版只測了 8 個講法，種子詞是我自己想的。** 使用者質疑可能漏掉英語系慣用的其他說法，這一節是補測。

**設定**：地區美國、所有語言、2025 年 8 月 – 2026 年 7 月。含兩個**對照組**（已知有量），用來確認「—」是真的低於門檻而不是工具異常。

### 有量的 6 個

| 關鍵字 | 月搜尋量 | 競爭 | 首頁頂端出價 |
| --- | ---: | :-: | ---: |
| `okinawa churaumi aquarium` ← 對照組 | **1萬–10萬** | 高 | $17.77 – $86.53 |
| `okinawa car rental` ← 對照組 | **1000–1萬** | 高 | **$44.87 – $169.79** |
| `japan family travel` | 100–1000 | 高 | $46.63 – $243.33 |
| `okinawa family resort` | 10–100 | 高 | $21.39 – $68.10 |
| `okinawa family vacation` | 10–100 | 低 | — |
| `okinawa for families` | 10–100 | 低 | — |

### 查不到量的 18 個

`okinawa with kids`、`okinawa with children`、`okinawa with toddler`、`okinawa with baby`、`okinawa kid friendly`、`okinawa family friendly`、`okinawa family travel`、`okinawa family holiday`、`okinawa family itinerary`、`okinawa family beach`、`okinawa kids activities`、`okinawa baby friendly`、`okinawa stroller`、`okinawa child car seat`、`things to do in okinawa with kids`、`family trip to okinawa`、`is okinawa good for families`、`japan with kids`

### 兩個數字要更正

- `okinawa churaumi aquarium` 第二節記為 1000–1萬，**美國單一市場實測為 1萬–10萬**，差一個數量級。以本節為準。
- `okinawa car rental` 的出價第二節記為 $24.67–$105.91，**美國單一市場為 $44.87–$169.79**。以本節為準。

第二節是美國＋新加坡＋香港＋澳洲的合併值，較低的讀數可能來自小市場稀釋。

### 這一節改變了什麼

**結論沒變，但證據從「我測的幾個沒有」變成「24 個講法測完，18 個無資料、3 個 10–100」。** 對照組有值，所以不是沒搜尋到。

**同時讓剪刀更鋒利**：英文量最大的 `okinawa churaumi aquarium`（1萬–10萬）正是 SERP 最封閉的那一個（見第六節，前排全為官方站、Wikipedia、JNTO、TripAdvisor）。**量越大的英文詞，內容站越進不去。**

### 仍未做

第一次「尋找新的關鍵字」產生的 301 個提案**只讀了 9 個**。判斷不必補讀：那 301 個是租車／行程／飯店／travel 四個詞的擴展（`okinawa with kids` 當時已被系統移除、不參與擴展），不會長出親子詞；而親子詞已由本節 24 個講法直接測完。**這是判斷，不是驗證過的事實。**

## 六、英文 SERP 競爭格局（2026-09-09 補測）

用美國端搜尋實查三個代表性查詢，看前排是誰。

| 查詢 | 月搜尋量 | 前排組成 | 內容站進得去嗎 |
| --- | ---: | --- | :-: |
| `okinawa car rental` | 1000–1萬 | Times 官網、VISIT OKINAWA（官方觀光局）、OTS 官網、Enterprise、Klook、Kayak ×2 | **否**——七個結果**零個內容站** |
| `okinawa churaumi aquarium` | 1000–1萬 | 海洋博公園官網、Wikipedia、JNTO 日本觀光局、TripAdvisor、水族館官網 ×3 | **否**——導航型查詢，Google 直接給官方來源 |
| `okinawa itinerary with kids` | **無可量測** | Novotel、GOOD LUCK TRIP、**Tiny Tot In Tokyo**、KKday、**littlekyushuadventures ×3** | **可以**——利基部落格確實排得上 |

### 結論：這是一把剪刀，兩邊都缺一半

**有量的地方，SERP 對內容站關閉；SERP 打得開的地方，沒有量。**

- 租車在英文是**交易型查詢**，Google 服務的是訂車頁不是文章。這跟排名努力無關，是意圖決定的版面。
- 水族館是**導航型查詢**，使用者要的就是官網。這也解釋了 2026-08-08「紅海、零差異化」的判斷為何正確——**但當時的理由不完整**，真正的原因不是競爭激烈，是查詢意圖根本不需要第三方內容。因此 churaumi 那頁**不要改標題**，改了也上不去。
- 親子行程類的 SERP 確實有利基部落格，但那正是搜尋量查不到的那一群。而且 `littlekyushuadventures.com` 一家就佔了七個結果中的三個，等於已經有人把這件事做完了。

### 對照：中文為什麼可以

「沖繩租車」在台灣是 **1萬–10萬**，而且 SERP 前五名有四個是個人部落格。**量與開放度兩個條件同時成立**，英文沒有任何一個詞同時具備。

### 因此

英文**不是優先序在後面，是結構上不可得**。除非出現以下變化，否則不要投入：

- 英文的親子類查詢出現可量測的搜尋量，或
- 中文租車樞紐頁驗證成功，且屆時重測顯示英文 SERP 組成改變

### 未做、之後要補的
- `flights to okinawa` 量最大（1萬–10萬）但**刻意不追**：機票比價由 Skyscanner、Google Flights 這類平台佔據，且缺乏合適的聯盟方案。
- `okinawa churaumi aquarium` 有 1000–1萬 的量，一度看似推翻 2026-08-08「紅海、零差異化」的判斷。**第六節的 SERP 實測顯示該判斷成立，只是理由不同**：那是導航型查詢，前排是官方園區站、水族館官網、Wikipedia 與 JNTO，內容站進不去。**該頁不要改標題。**

見 `C:\Users\wei96\.claude\projects\C--AI-cc\memory\feedback_serp_is_not_search_volume.md`、`project_okinawa_keyword_findings.md`。
