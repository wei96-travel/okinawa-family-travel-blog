# 分潤來源追蹤計畫

更新日期：2026-07-31

## 目標

先把「哪裡有人點」看清楚，再決定要增加哪一種商品、票券或住宿連結。每個分潤點擊都要能辨認平台、來源頁面、品項與頁面位置。

## 統一欄位

| 欄位 | 用途 | 範例 |
| --- | --- | --- |
| `affiliate_network` | 分潤平台 | Klook、Trip.com、Shopee |
| `source_page` | 點擊發生的頁面 | `/blog/churaumi-aquarium-ticket-price-guide` |
| `item_name` | 被點擊的品項 | 美麗海水族館一般電子票 |
| `link_placement` | 連結在頁面中的位置 | `inline_link`、`ticket_comparison`、`hotel_card` |
| `content_group` | 頁面類型 | `blog_article`、`trip_booking_hub`、`travel_gear_hub` |

## 已完成

- Klook 文章連結：廣告 ID `1362380`，標籤 `blog_churaumi_ticket / churaumi_ticket / comparison_link`。
- Klook 預訂整理頁連結：廣告 ID `1362390`，標籤 `hub_trip_booking / churaumi_ticket / ticket_section`。
- Trip.com 保留現有 `trip_sub1`，網站端另外記錄上述 GA 欄位。
- Shopee 商品卡與文章內分潤連結統一送出上述 GA 欄位。
- GA4 已建立事件範圍自訂維度：分潤平台、來源頁面、分潤品項、點擊位置。

## 檢查節奏

- 每週看一次 `affiliate_click`，先比較來源頁面與點擊位置。
- 14 天後再判斷是否增加、移動或刪除連結，不因單日零點擊頻繁改版。
- 平台後台的點擊與 GA 點擊分開看：GA 用來判斷網站哪裡有效，平台後台用來確認訂單與佣金。
- 不用自己的帳號反覆點連結，以免污染資料。

