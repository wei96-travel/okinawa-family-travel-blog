# 三個聯盟後台實讀紀錄

日期：2026-09-10（Claude Code，wei96 本人登入）

過去的交接紀錄一路寫著「Klook 登出、Trip.com 不解析、蝦皮 CAPTCHA 擋住」，因此結論一直停在
「orders and commission remain missing, not zero」。這次三個後台都成功讀到，可以把「missing」換成實際數字。

**結論：三個平台的歷史佣金都是 0。不是讀不到，是真的沒有。**

---

## 後台網址（之前沒有被記下來，這是這份文件的主要用途之一）

| 平台 | 網址 | 備註 |
| --- | --- | --- |
| Trip.com | `https://www.trip.com/partners/dashboard` | `alliance.trip.com` 與 `affiliate.trip.com` 都不解析，不要再試 |
| Klook | `https://affiliate.klook.com/dashboard` | 首頁右上角 Log In，用 Google 帳號；登入前要勾同意條款 |
| 蝦皮 | `https://affiliate.shopee.tw/report/click_report` | Conversion Report 在 `/report/conversion_report` |

---

## Trip.com

- 區間 2026-09-02～09-09：2 次點擊、2 UV、**0 筆訂單**
- 帳戶層級佣金（不受日期篩選影響）：已結算 **USD 0.00**、待結算 **USD 0.00**、預計 **USD 0.00**
- `trip_sub1` **有正確帶進後台**：

| Ad ID | Trip_Sub1 | 點擊 | 訂單 |
| --- | --- | ---: | ---: |
| D18913071 | `blog_rental_car_guide` | 1 | 0 |
| D18972921 | `churaumi-ticket-comparison` | 1 | 0 |

## Klook

- 最近 30 天：**6 次點擊**、0 張票、佣金 **0.00**、CVR 0%
- 目前餘額 **0.00 TWD**、預計撥款 **0.00 TWD**
- 6 次點擊全部落在 Text Link **1362380**；舊的 `1357775` 與 `1362390` 在 30 天內都是 0
  （8/14 紀錄相反：當時 8 次點擊全在 1357775。位置換了，量級沒變）

## 蝦皮

- Click Report 合計 **58 次點擊**
- Conversion Report（2026-07-01～09-09）：**No Data**
- Commission Bill：空白
- **每一列的 Sub_id 都是空的**，58 筆沒有一筆帶到

### 這 58 次點擊很可能不是讀者

兩個理由：

1. **時間高度叢集**：9/9 00:10–00:14 四分鐘內 9 次；9/8 22:20–22:30 十分鐘內 7 次。讀者不會這樣點。
2. **Referrer 欄幾乎全是 `Others`**，只有一筆是 `Shopeevideo-Shopee`（來自蝦皮站內，不是部落格）。

站上的蝦皮連結是 28 條 `s.shopee.tw` 短連結，歸因在蝦皮端，從網址看不出有沒有掛 sub_id。
但可確認的操作事實是：**58 次點擊產生 0 筆 sub_id 歸因**，所以 8/28 交接檔列的
「蝦皮 Sub_id 是否真的帶入，尚未驗證」現在有答案了——**沒有帶入**。
（Trip.com 的 sub_1 有效，所以問題出在蝦皮這條線，不是做法本身。）

---

## 交叉比對：規模對不上

同期 Search Console 顯示全站 28 天 **452 次點擊**。三個平台加起來的聯盟點擊是個位數到數十，
而 GA4 的 `affiliate_click` 是 28 天 10 次。

- Klook 6（30 天）、Trip.com 2（7 天）——這兩個量級與 GA4 的 10 次大致相符
- 蝦皮 58 次卻與 GA4 對不上，這支持上面「不是讀者點的」判斷

---

## 這份資料改變了什麼

1. **「沒進展」不再是猜測。** 三個平台歷史佣金 0，可以停止討論「是不是後台沒讀到」。
2. **不是 CTA 或連結位置的問題。** 讀者確實有進站（452 點擊／28 天），但點到聯盟連結的比例極低，
   且點進去的沒有成交。
3. **蝦皮這條線目前無法歸因，也沒有收入。** 在 sub_id 修好之前，不值得為它再投入內容。
4. **Trip.com 的技術面是通的**（sub_1 有效、連結正確），缺的是有購買意圖的流量——
   而住宿群 3 個月只有 11 次點擊，這正是 2026-09-10 樞紐頁在處理的問題。

下一次回看：2026-09-24（與住宿樞紐頁同一天），確認 Trip.com 的點擊數有沒有隨住宿流量上升。

---

## 同日稍晚更正：Sub_id 沒有壞

上面「蝦皮 Sub_id 沒有帶入」的結論**是錯的**，當天稍晚用重導向解析推翻。

### 怎麼查的（不用點擊，可重複）

`s.shopee.tw` 短連結的 301 `Location` 標頭裡就有 sub_id，藏在 `utm_content`：

```
curl -sI --max-redirs 0 -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" https://s.shopee.tw/XXXX \
  | grep -i '^location:' | grep -oE 'utm_content=[^&]*'
```

`utm_content` 是 Sub_id1～5 用連字號串起來。`okinawaSummerFamilyPackingList-table---` 代表
sub1=文章駝峰式 slug、sub2=`table`、sub3～5 空白。**完全空的會是 `----`（五個空欄、四個連字號）**，
這正是 Click Report 裡看到的那個值。

### 實際狀況

28 條短連結裡：

| Sub_id | 條數 | 文章 |
| --- | ---: | --- |
| 有 | 16 | `okinawa-convenience-store-family-shopping-guide`(6)、`okinawa-summer-family-packing-list`(5)、`okinawa-family-beach-packing-list`(4)、`okinawa-family-medicine-sunscreen-repellent`(1) |
| 無 | 12 | `okinawa-souvenir-packing-guide`(3)、`okinawa-family-car-emergency-kit`(3)、`okinawa-baby-bottle-hotel-cleaning-guide`(2)、`okinawa-family-drive-toilet-convenience-store`(2)、`okinawa-family-stroller-guide`(1)、`okinawa-family-shopping-guide`(1) |

有 sub_id 的 16 條，正好是 2026-09-07 `1685851` 加的那批。

### 所以 Click Report 全空的真正原因

那 58 次點擊落在**舊的 12 條**上，不是機制失效。新的 16 條 9/7 才上線，
所在的四篇流量都不高（夏季行李清單 7 月時是 6 點擊／21 曝光），三天內 0 點擊並不意外。

**修正後的結論**：Sub_id 不需要修，需要補。要做的是把沒帶 sub_id 的 12 條重新產生一次。
在那之前，帶 sub_id 的 16 條其實才剛開始跑，還沒有足夠資料說「痛點＋推薦」在這個站有沒有用。

---

## 2026-09-11 補產：12 條舊連結全部補上 Sub_id

站上 28 條蝦皮短連結，現在 **28 條都帶 Sub_id**。

### 命名改成三層

舊的 16 條是兩層（`sub1=文章`、`sub2=table`），同一篇裡的多條完全同值，分得出文章分不出商品。
這批 12 條改成三層，文章層級分析不受影響（照 `sub1` 篩即可）：

```
sub1 = okinawaSouvenirPackingGuide   文章（駝峰式 slug）
sub2 = inline                         位置
sub3 = luggageScale                   商品
```

### 對照表

| 文章 | 商品 | 舊 | 新 | sub3 |
| --- | --- | --- | --- | --- |
| 奶瓶清潔 | 小獅王辛巴洗潔噴霧 | `7fYU3gwukD` | `1qbvdGicrT` | `bottleSpray` |
| 奶瓶清潔 | LIFEMATE 奶瓶刷具組 | `8AUkeaABdd` | `2VrcQZQWct` | `bottleBrushSet` |
| 車上備品 | 貝恩柔濕巾 | `1VxqiMy7pC` | `1qbvdOSTCa` | `babyWipes` |
| 車上備品 | 妙潔 PE 密實袋 | `1qah6zZhJB` | `Ln7qgeo2f` | `zipBags` |
| 車上備品 | 700ml 應急尿袋 | `8V7dmjkyZo` | `Ln7qiVXfF` | `emergencyUrineBag` |
| 自駕休息點 | MINONO 尿袋 | `30mhF0ID2q` | `W6Y32zmbf` | `urineBagMinono` |
| 自駕休息點 | 700ml 應急尿袋 | `8V7dmjkyZo` | `AUttxRiPlJ` | `emergencyUrineBag` |
| 購物攻略 | 摺疊擴充旅行袋 | `7AcACRk7hy` | `2gB2d4YF7q` | `foldableTravelBag` |
| 推車 | 推車旅行收納袋 | `9zwOmFGv6v` | `1qbvdZ72wL` | `strollerTravelBag` |
| 伴手禮打包 | POLYWELL 行李秤 | `7AcACMuSfB` | `3g3ZoxKd9w` | `luggageScale` |
| 伴手禮打包 | 摺疊擴充旅行袋 | `7AcACRk7hy` | `1qbvdboeFX` | `foldableTravelBag` |
| 伴手禮打包 | 六件式壓縮收納袋 | `9V04ylQwhF` | `1qbvdd8BFY` | `compressionBags` |

**`8V7dmjkyZo` 與 `7AcACRk7hy` 原本各被兩篇共用同一條**，那樣即使有 sub_id 也分不出來源，
所以各拆成兩條分別產生。商品完全沒換，只補追蹤，變因單一。

### 操作上的兩個坑

1. **`form_input` 設值後，第一次點 Get Link 不會生效，要點第二次。** 應該是合成事件讓 React 狀態
   慢一拍。可靠做法是 `scroll_to` 按鈕 →點→等 3 秒→再點一次。
2. **新連結一律用 JS 從欄位讀值**，不要看截圖抄（短網址的 `I/l`、`4a/4s` 會誤判，已發生過兩次）。

### 驗證

12 條逐條用重導向查過 `utm_content`，全部符合預期值。之後全站 28 條再掃一次，
沒有任何一條回傳 `----`。`npm run build` 通過，86 頁。

### 這解鎖了什麼

推車（28 天 45 點擊）與伴手禮打包（34 點擊）是全站流量第一與第五，
在此之前它們的商品連結完全無法歸因。現在可以第一次回答：
**那 79 個讀者裡，有幾個真的點了商品連結。**

兩到三週後看 Click Report，用 `sub1` 篩文章。這個數字會直接回答
「痛點＋推薦」在這個站有沒有用，不需要另外開站測。
