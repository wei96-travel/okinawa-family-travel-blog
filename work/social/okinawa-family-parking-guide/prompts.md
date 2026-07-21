# AI 生圖 Prompt 紀錄｜投幣停車場三種型式

**狀態**：prompt 已定稿，**圖片尚未生成**（待使用者確認是否用 w-ai 生圖，會消耗點數）
**規範來源**：`docs/social/ai-image-style-guide.md`
**使用時**：主體 prompt + 風格尾綴 + 負向提示，三段一起貼

---

## 固定風格尾綴（每張都加）

```
soft natural daylight, warm cream and sand color palette, muted desaturated tones,
shot on 35mm film, shallow depth of field, subtle film grain, candid documentary feel,
gentle warm highlights, no harsh shadows, calm and quiet mood
```

## 固定負向提示（每張都加）

```
oversaturated colors, vivid tropical blue, HDR, neon, heavy vignette, dramatic lighting,
studio lighting, stock photo look, plastic skin, distorted hands, extra fingers,
readable text, watermark, logo, brand name, license plate, storefront sign,
identifiable child face, direct eye contact of children, crowded tourists, cluttered composition
```

---

## #1　`p1-parking-lot.jpg`

**用途**：輪播 P1 封面底圖
**尺寸**：1080 × 1350（4:5）
**類別**：8 租車（變體 B 停車格）

```
a small white compact car parked in a quiet outdoor parking lot with painted white parking lines,
low palm trees and a plain concrete wall in the soft-focus background,
warm late morning daylight, no license plate, no signage, no people
```

**檢查重點**：車牌必須空白或不可見；背景不能出現店招。

---

## #2　`p2-payment-machine.jpg`

**用途**：輪播 P2 右下小圖（局部裁切用）
**尺寸**：1080 × 1080（1:1，後製裁切）
**類別**：14 生活感（變體 C 車上小物的延伸）

```
close crop of an adult hand reaching toward the keypad of an outdoor freestanding payment kiosk,
neutral grey and cream machine surface, soft overcast daylight,
shallow depth of field, hand only, no readable text, no numbers on the screen, no brand marks
```

**檢查重點**：機器面板不能出現任何可讀文字或數字（AI 會編造金額）。若螢幕有字，重生或後製塗掉。

---

## #3　`r1-flap-plate.jpg`

**用途**：Reels 0–5 秒開場
**尺寸**：1080 × 1920（9:16）
**類別**：8 租車（新增變體：鎖板特寫）

```
low angle close crop of a car front wheel on asphalt, a plain metal plate device raised from the ground
just behind the tire, worn painted parking line beside it,
warm afternoon daylight, shallow depth of field, no people, no license plate, no readable text
```

**檢查重點**：鎖板要在輪胎後方且明顯升起，這是 Hook 的視覺重點。若 AI 生不出鎖板結構，改用向量插畫，不要勉強用照片。

---

## #4　`r2-parking-wide.jpg`（備用）

**用途**：Reels 2–5 秒拉遠鏡頭
**尺寸**：1080 × 1920（9:16）

```
a quiet small outdoor coin parking lot with several marked bays and two parked compact cars,
low buildings and palm trees behind, warm daylight, no signage, no license plates, no people
```

---

## 改用向量的部分（不生圖）

| 用途 | 原因 | 做法 |
| --- | --- | --- |
| P4 鎖板式插畫 | 需要精確的操作結構 | 從 `public/images/articles/okinawa-family-parking-guide/coin-parking-types.svg` 拆用 |
| P5 柵欄式插畫 | 同上 | 同上 |
| P6 車牌辨識式插畫 | 同上 | 同上 |
| P7 踩雷對照表 | 純文字表格 | 新製 SVG |
| Pinterest A/B | 文字佔比高 | 新製 SVG |
| Reels 資訊卡 A/B/C | 需與輪播一致 | 由 P4–P6 改 9:16 |

**這是刻意的設計**：只有 3–4 張需要 AI 生圖，其餘全部用既有 SVG 拆用或新製向量。既省成本，也確保與網站文章的視覺完全一致。

---

## 生圖後檢查表

- [ ] 沒有可辨識兒童正臉（本組無人物正面）
- [ ] 沒有商標、店招、車牌、可讀文字
- [ ] 手部正常（#2 有手，放大檢查）
- [ ] 色調為米白／沙色／木質棕，無高飽和藍綠
- [ ] 光線柔和，無 HDR
- [ ] 沒有冒充特定停車場或特定業者
- [ ] 使用時已標「情境示意」
- [ ] 四張看起來像同一天、同一台相機拍的
