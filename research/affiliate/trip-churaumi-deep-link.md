# Trip.com 美麗海水族館分潤連結查核

- 查核日期：2026-07-29
- 平台：Trip.com Affiliate
- 推廣網站：沖繩親子旅遊筆記
- 原始頁面：`https://tw.trip.com/things-to-do/detail/50899757/?locale=zh-TW&curr=TWD`
- 追蹤代碼：`churaumi-ticket-comparison`
- 已產生連結：`https://tw.trip.com/things-to-do/detail/50899757/?locale=zh-TW&curr=TWD&Allianceid=8075670&SID=305605448&trip_sub1=churaumi-ticket-comparison&trip_sub3=D18972921`
- 使用文章：`content/blog/churaumi-aquarium-ticket-price-guide.md`

## 查核結果

1. 連結由已登入的 Trip.com 聯盟後台建立，網站選擇為「沖繩親子旅遊筆記」。
   後台網址：`https://www.trip.com/partners/dashboard`（2026-09-10 補記；`alliance.trip.com` 與 `affiliate.trip.com` 都不解析）。
2. 開啟後會轉到沖繩美麗海水族館的 Trip.com 景點頁。
3. 「景點門票」分頁可看到單館一般電子票，不是套票或一日遊。
4. 2026-07-29 首次查核時，一般成人票顯示約 TWD422；製作購票步驟畫面時，頁面顯示原價 TWD431、折扣後 TWD421。價格會浮動，文章只保留查核日期並提醒讀者以付款頁為準。
5. 同頁另有 17:00 後入場票與景點套票，文章不可拿不同票種的起價直接比較。
6. Trip.com 轉址後網址列不保留聯盟參數；本次只以後台成功產生的聯盟網址與正確目的頁作驗證，不宣稱能從網址列再次證明歸因。
7. 新增兩張不含個人資料的操作畫面：單館票選擇頁，以及兩張成人票與右側總額。訂單頁會自動帶入登入帳號的聯絡資料，因此截圖只保留票種、張數與總額區塊。

## 使用規則

- 價格只寫明查核日期，不寫成長期固定價。
- 與 Klook 比價時，只比較一般成人電子票。
- 揭露合作關係一次即可，不在每個按鈕旁重複提醒。

---

## 2026-09-10 新增：主文的直接購票入口

- 追蹤代碼：`blog_churaumi_family_time`
- Ad ID：`D19767295`（後台「之前的連結」表列，非截圖轉抄）
- 已產生連結：`https://tw.trip.com/things-to-do/detail/50899757/?locale=zh-TW&curr=TWD&Allianceid=8075670&SID=305605448&trip_sub1=blog_churaumi_family_time&trip_sub3=D19767295`
- 使用文章：`content/blog/churaumi-aquarium-family-time.md`

### 為什麼加這一條

主文 28 天有 20 次自然點擊，但自己沒有任何購票入口，只有一條內鏈指向票價比較文，而票價文的流量少到進不了前十。等於有購買意圖的讀者要多轉一手。這次在「門票要先買嗎？」段落補上直接入口，比較文的內鏈保留給還在比價的讀者。

### 查核

1. 連結由後台 `https://www.trip.com/partners/dashboard` →「聯盟連結」建立，網站選擇「沖繩親子旅遊筆記」，Site ID `305605448`。
2. 後台「之前的連結」把這筆的語言標成 `English`，但**實走驗證落地頁是繁中**：`document.documentElement.lang` 為 `zh-TW`，h1 為「沖繩美麗海水族館」，標題為「沖繩美麗海水族館門票預訂…｜Trip.com」。該欄位是後台的中繼資料雜訊，不影響讀者看到的語言。
3. Trip.com 已把該景點頁改到 `/travel-guide/attraction/motobu/okinawa-churaumi-aquarium-10559035`，原 `/things-to-do/detail/50899757/` 會轉過去，仍是同一個可訂票的景點頁。
4. 與 2026-07-29 的紀錄一致：轉址後網址列不保留聯盟參數，因此**只驗證連結可解析到正確目的頁，不宣稱能從網址列證明歸因**。
5. 沒有動票價文既有的 `churaumi-ticket-comparison`（`D18972921`）與 Klook `1362380`，兩邊各自獨立可讀。

### 這是一次可測的實驗

- 假設：把購票入口放在有流量的那一頁，聯盟點擊會上升。
- 判讀：2026-09-24 看後台 `blog_churaumi_family_time` 的點擊數，與同期 `churaumi-ticket-comparison` 分開看。
- 基準：2026-09-10 之前，Trip.com 全站 7 天 2 次點擊，其中 `churaumi-ticket-comparison` 1 次；Klook `1362380` 30 天 6 次。
- 天花板很低：門票單價約 NT$400／人，就算成交幾筆也只是個位數到數十元的佣金。這條做的是驗證動線，不是收入本身。
