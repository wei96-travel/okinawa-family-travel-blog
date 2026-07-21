# AI 生圖 Prompt 紀錄｜投幣停車場三種型式

**狀態**：已生圖並驗收完畢（2026-07-21）
**規範來源**：`docs/social/ai-image-style-guide.md`
**使用時**：主體 prompt + 風格尾綴 + 負向提示，三段一起貼
**模型**：Nano Banana 2（w-ai），2K，jpg
**成本**：8 次生成共 480 點（2815 → 2335）

---

## 驗收結果總表

| 檔名 | 判定 | 說明 |
| --- | --- | --- |
| `p1-parking-lot.jpg` | ❌ 棄用 | 車頭出現可辨識 FIAT 廠徽 |
| `p2-payment-machine.jpg` | ❌ 棄用 | 鍵盤 1–9、0、Enter 全部可讀；色調偏冷灰藍；像歐洲街頭繳費機 |
| `r1-flap-plate.jpg` | ❌ 棄用 | 鎖板像生鏽斜坡鐵板，辨識度不足（已由 v2 取代） |
| `r2-parking-wide.jpg` | ❌ 棄用 | VW 廠徽可見、有白色車牌、地中海式白牆紅瓦背景 |
| `r1-flap-plate-v2.jpg` | ✅ **採用** |
| `p5-gate.jpg` | ✅ **採用** | 柵欄升起 + 取票柱 + 等待的車，日式住宅街景 |
| `p6-camera.jpg` | ✅ **採用** | 桿上攝影機 + 停好的車，無柵欄無鎖板 |
| `p8-dusk.jpg` | ✅ **採用** | 黃昏海邊停車場、後車廂開啟、行李與草帽 | 乾淨的鎖板鉸鏈結構、白色現代小車、日式住宅背景、無廠徽無車牌無可讀文字 |

**最終採用素材**

| 用途 | 檔案 | 來源 |
| --- | --- | --- |
| 輪播 P1 封面底圖 | `public/images/articles/okinawa-family-parking-guide/parking-cover.jpg` | **既有素材重用** |
| 輪播 P2 配圖 | 取消（改為純文字版面） | —— |
| 輪播 P4–P6 插畫 | `coin-parking-types.svg` 拆用 | **既有素材重用** |
| Reels Hook（0–5s） | `r1-flap-plate-v2.jpg` | 本次生成 |
| Reels 拉遠鏡頭 | `public/images/articles/okinawa-family-parking-guide/parking-cover.jpg` | **既有素材重用** |

**結論：5 個用途裡有 3 個靠既有素材解決，只有 1 個真的需要生圖。** 這是 Step 1a 補進 SOP 的原因。

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

## #5　`r1-flap-plate-v2.jpg`　✅ 採用版

**用途**：Reels 0–5 秒開場
**尺寸**：1080 × 1920（9:16）

```
Low angle close crop in a clean modern Japanese coin parking lot. A flat rectangular steel flap plate
is hinged from the asphalt and tilted upward at about 45 degrees, positioned directly beneath the car
body just behind the front tire, blocking the car from moving. The plate is clean painted metal, not
rusty. A modern white compact hatchback front wheel fills the left of the frame. Crisp freshly painted
white bay lines on smooth dark asphalt. Warm late afternoon daylight, blurred neutral background.
```

負向提示額外加入：
```
any emblem or badge on the car, rust, damaged metal, ramp shape, wheel clamp
```

**成功關鍵**（可套用到其他生圖）：
1. 明寫 `modern Japanese`，避免模型跑去生地中海街景。
2. 明寫 `no emblem or badge on the car`，這是廠徽問題的唯一有效對策。
3. 描述具體地貌（`smooth dark asphalt`、`crisp freshly painted white bay lines`）比抽象形容詞有效。
4. 明寫 `not rusty`、`ramp shape` 排除，才拿到正確的鎖板結構。

---

## 以下為棄用版本，保留供對照

## #3　`r1-flap-plate.jpg`（棄用）

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


---

## #6　`p5-gate.jpg`（P5 柵欄式）4:5

```
A modern Japanese coin parking lot entrance photographed in daylight. A white barrier gate arm is
raised at an angle, and a slim ticket dispenser column stands beside the driveway. A clean white
compact hatchback waits at the entrance. Smooth dark asphalt with crisp freshly painted white lines.
Low residential buildings and a few palm trees blurred behind. Warm late afternoon daylight.
```

## #7　`p6-camera.jpg`（P6 車牌辨識式）4:5

```
Low angle daylight photo of a modern Japanese open-air parking lot. In the foreground left, a slim grey
pole carries a small white surveillance camera angled down toward the parking bays. A clean white
compact hatchback is parked between crisp freshly painted white bay lines on smooth dark asphalt.
No barrier arm, no gate, no metal plate on the ground. Low Japanese residential houses and a few palm
trees blurred in the background. Warm late afternoon daylight.
```

**注意**：這張第一次裁切時把攝影機切出畫面，只剩一台車，整頁重點就沒了。版面用 `object-position:center 15%` 把裁切點往上拉。

## #8　`p8-dusk.jpg`（P8 收尾）4:5

```
Dusk photo of a white compact hatchback parked at the edge of a quiet seaside parking lot in Okinawa.
The rear door is open, a small suitcase and a straw hat rest on the asphalt beside it. Calm sea and low
islands on the horizon, warm golden sunset light raking across the ground, long soft shadows. Painted
white parking lines on the asphalt. No people.
```

**注意**：車子在原圖中下方，會被收尾頁的文字區蓋住。版面用 `height:130%; top:-24%` 放大上移，讓車體露在文字之上。

三張都沿用同一組負向提示，並額外加入 `any emblem or badge on the car`。
