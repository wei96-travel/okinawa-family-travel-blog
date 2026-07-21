# AI Image Style Guide｜AI 生圖風格與 Prompt Library

目前網站沒有大量真實照片，未來圖片以 AI 生成為主。
這份文件的目的是：**不管誰生圖、用哪個模型，出來的圖都像同一個品牌。**

---

## 一、風格定義

### 一句話風格

> 溫暖自然光、米白木質色調、生活感的家庭旅行紀錄照，不是明信片式的觀光照。

### 風格四要素

| 要素 | 設定 |
| --- | --- |
| 光線 | 自然光為主。上午 9–11 點或下午 4–6 點的柔和斜射光。不用棚燈、不用強對比。 |
| 色調 | 暖調，色溫偏 5200–5600K。米白、沙色、木質棕、低飽和海藍。 |
| 質感 | 輕微顆粒感（film grain），淺景深，像用 35mm 定焦鏡隨手拍。 |
| 構圖 | 留白多、主體不置中也可以、允許不完美的生活感（散落的鞋、沒收好的包）。 |

### 品牌色對應到生圖語彙

| 品牌色 | Prompt 用語 |
| --- | --- |
| `#FFFDF8` 米白 | `warm off-white`, `cream tone` |
| `#F6EFE4` 淺沙 | `soft sand beige` |
| `#694624` 深棕 | `warm wood brown` |
| `#9A6B43` 焦糖 | `caramel brown accents` |
| 沖繩的海與天 | `natural turquoise sea`, `clear blue sky`（可以有藍，但**不要** `vivid`, `hyper-saturated`, `HDR`） |

**注意**（2026-07-21 修正）：色票規範 UI、文字與圖表；情境照片可以有沖繩自然的藍天碧海。判準是「像隨手拍的，不像修圖過的旅遊廣告」。

---

## 二、通用 Prompt 結構

所有 prompt 都用同一個順序，只換中間的主體：

```
{主體與動作}, {場景與地點感}, {光線}, {色調}, {鏡頭與構圖}, {風格與質感}, {限制}
```

### 固定尾綴（每張圖都加）

**風格尾綴（Style Suffix）**
```
soft natural daylight, warm cream and sand color palette, muted desaturated tones,
shot on 35mm film, shallow depth of field, subtle film grain, candid documentary feel,
gentle warm highlights, no harsh shadows, calm and quiet mood
```

**負向提示（Negative Prompt）— 每張都要用**
```
oversaturated colors, vivid tropical blue, HDR, neon, heavy vignette, dramatic lighting,
studio lighting, stock photo look, plastic skin, distorted hands, extra fingers,
readable text, watermark, logo, brand name, license plate, storefront sign,
identifiable child face, direct eye contact of children, crowded tourists, cluttered composition
```

### 尺寸對應

| 用途 | 比例 | 尺寸 |
| --- | --- | --- |
| IG／FB 輪播 | 4:5 | 1080 × 1350 |
| IG 方形 | 1:1 | 1080 × 1080 |
| Reels 畫面 | 9:16 | 1080 × 1920 |
| Pinterest | 2:3 | 1000 × 1500 |
| 文章封面 | 16:9 | 1600 × 900 |

---

## 三、鐵則（違反就重生）

1. **不出現可辨識的兒童正臉。** 一律用背影、側身、低頭、局部（手、腳、背包、帽子）。
2. **不出現可辨識商標、店招、車牌、包裝字樣。** prompt 明確加 `no logos, no readable text`。
3. **不冒充特定景點。** 不寫 `Churaumi Aquarium`、`Kouri Bridge` 等具體名稱，改寫地貌特徵（`long coastal bridge over turquoise shallow water`）。要指涉具體地點時，用資訊圖／插畫地圖，不用 AI 照片。
4. **所有 AI 圖標「情境示意」。** 社群圖在圖上或文案標，文章圖在圖說標。
5. **不生成醫療、藥品包裝、法規文件的擬真畫面。** 這類一律改用自製 SVG 資訊圖。
6. **人物不超過 4 人**，避免手部與臉部崩壞。
7. **AI 圖不做「實測」「開箱」用途。**

### 生圖前先做一件事

**先看 `public/images/articles/{slug}/` 有沒有能重用的圖。** 每篇文章通常已有 2–3 張經過審核的素材，重用零成本且視覺一致。只生既有素材沒有的畫面。

### 通用模型的兩個已知弱點（2026-07-21 實測）

| 弱點 | 對策 |
| --- | --- |
| 車輛會長出真實廠徽（FIAT、VW 都出現過） | prompt 明寫 `no emblem or badge on the car`；車輛盡量用側面、局部或遠景，避免正面車頭特寫 |
| 「日本場景」先驗很弱，容易生成地中海／歐洲街景 | prompt 明寫 `modern Japanese`，並描述具體地貌（`smooth dark asphalt`, `crisp white bay lines`）；生出白牆紅瓦民宅就重生 |

另外，機器面板、鍵盤、螢幕幾乎一定會生出可讀數字。**需要出現機器操作的畫面，直接改用向量插畫，不要用 AI 照片。**

---

## 四、Prompt Library

以下 14 類，每類提供 3–5 組可直接使用的 prompt。使用時**貼上 prompt + 風格尾綴 + 負向提示**。

---

### 1. 住宿（Accommodation）

**A. 親子房間清晨**
```
a quiet family hotel room in the morning, two low beds with white linen slightly rumpled,
a small suitcase open on the floor with folded clothes, soft curtains half drawn,
warm light spilling across a wooden floor, no people
```

**B. 陽台看海**
```
a hotel balcony with a simple wooden chair and a folded towel on the railing,
distant muted turquoise sea beyond low buildings, early morning haze, no people
```

**C. 家庭辦入住**
```
back view of an adult in linen shirt standing at a quiet hotel lobby counter,
a child in a bucket hat holding the adult's hand, seen from behind,
warm wooden interior, soft window light, no readable signage
```

**D. 房間裡的行李與童鞋**
```
a corner of a hotel room, small children's sandals placed neatly beside a large suitcase,
a stuffed toy resting on a bed edge, afternoon light through sheer curtains, no people
```

---

### 2. 景點（Attractions）

**A. 步道與樹蔭**
```
back view of a family of three walking on a shaded stone path lined with subtropical trees,
dappled sunlight on the ground, adult holding a small child's hand, seen from behind
```

**B. 觀景平台**
```
back view of an adult lifting a toddler to look over a wooden observation railing,
distant muted turquoise coastline below, soft afternoon light, no faces visible
```

**C. 公園草地**
```
a wide grassy park with a low playground structure in the distance,
a picnic mat with a canvas bag and a water bottle in the foreground, no people, gentle sunlight
```

**D. 室內展館走廊**
```
back view of a child in a bucket hat standing in a dim indoor exhibition corridor,
soft blue ambient glow from a large display panel, silhouette only, no readable text
```

---

### 3. 海灘（Beach）

**A. 淺灘玩水**
```
back view of a small child in a long-sleeve rash guard crouching at the edge of very shallow calm water,
pale sand, muted turquoise sea, soft midday light diffused by thin clouds, no faces
```

**B. 沙灘裝備**
```
a beach towel spread on pale sand with a sun hat, a small bucket, and a water bottle,
gentle waves in the soft-focus background, warm late afternoon light, no people
```

**C. 傍晚收拾**
```
back view of an adult carrying a folded beach mat and a child's inflatable ring,
walking away along a quiet shoreline at golden hour, long soft shadows
```

**D. 海邊淋浴區**
```
an outdoor beach rinse station with a simple shower post and sandy footprints on concrete,
low sun, muted colors, no people, no signage
```

---

### 4. 美食（Food）

**A. 家庭餐桌**
```
a simple wooden table with a shared meal, small rice bowls and a child-sized plate,
plain ceramic tableware, an adult's hand reaching for a bowl, soft window light, no faces
```

**B. 便利商店採買**
```
a paper bag on a car passenger seat with onigiri, a small carton drink and a banana,
warm afternoon light through the windshield, no readable packaging text, no logos
```

**C. 早餐時光**
```
a hotel breakfast tray with toast, fruit and a small cup of milk,
a child's hand holding a spoon at the edge of frame, warm cream tones, soft morning light
```

**D. 外帶飲料**
```
two takeaway cups on a low wall beside a quiet street, condensation on the surface,
blurred greenery behind, no brand marks, warm side light
```

---

### 5. 咖啡（Cafe）

**A. 海景咖啡窗邊**
```
a corner seat by a large window in a small cafe, a ceramic mug and an open notebook on a wooden table,
muted sea visible through the glass, soft overcast light, no people
```

**B. 帶小孩的角落**
```
back view of an adult sitting at a cafe table with a toddler in a wooden high chair beside them,
soft interior light, plants in the background, faces not visible
```

**C. 老屋咖啡外觀**
```
the entrance of a small single-storey cafe with a wooden door and potted plants,
sunlight on a concrete step, quiet residential street, no signage, no text
```

---

### 6. 親子（Family）

**A. 牽手走路**
```
back view of an adult and a young child walking hand in hand along a quiet sidewalk,
the child wearing a small backpack, warm late afternoon light, long soft shadows
```

**B. 車上休息**
```
a child asleep in a rear car seat, viewed from the side with the face turned away,
soft light through a tinted window, a small blanket across the lap, calm mood
```

**C. 收行李**
```
an adult's hands folding small children's clothes into a packing cube on a hotel bed,
warm cream bedding, soft window light, hands only
```

**D. 推車散步**
```
back view of an adult pushing a lightweight stroller along a tree-lined path,
dappled sunlight, muted greens, no faces visible
```

---

### 7. 購物（Shopping）

**A. 大型超市走道**
```
a wide quiet supermarket aisle with neutral shelving, a shopping cart in the foreground,
soft even overhead light, no readable labels, no logos, no people
```

**B. 伴手禮打包**
```
several small paper-wrapped gift boxes arranged on a wooden table beside an open suitcase,
warm afternoon light, cream and kraft-paper tones, no printed text
```

**C. 手拿購物袋**
```
back view of an adult carrying two plain paper shopping bags along a quiet street,
warm side light, blurred storefronts with no readable signage
```

---

### 8. 租車（Rental Car）

**A. 取車檢查**
```
an adult's hands adjusting a child safety seat harness inside a compact car,
soft daylight through the open rear door, clean neutral interior, hands only, no logos
```

**B. 停車格**
```
a small white compact car parked in a quiet outdoor parking lot,
palm trees and low buildings in the soft-focus background, warm daylight, no license plate, no signage
```

**C. 後車廂收納**
```
an open car trunk with a suitcase, a folded stroller and a cooler bag neatly arranged,
soft overcast daylight, muted colors, no people, no brand marks
```

**D. 自助加油**
```
a hand holding a fuel nozzle at a self-service pump, close crop,
soft daylight, neutral grey and cream tones, no readable text, no brand marks
```

---

### 9. 雨天（Rainy Day）

**A. 車窗雨滴**
```
raindrops on a car side window with a blurred green landscape beyond,
soft grey daylight, cool-neutral tones with warm interior reflection, no people
```

**B. 撐傘走路**
```
back view of an adult and a child sharing a transparent umbrella on a wet sidewalk,
reflections on the pavement, soft diffused light, muted colors
```

**C. 室內看雨**
```
a child's silhouette standing at a large window watching rain outside,
warm indoor light, soft grey exterior, back view only
```

**D. 玄關的雨具**
```
a small yellow raincoat and child-sized rain boots placed by a doorway,
water drops on the floor, soft natural light, no people
```

---

### 10. 夜景（Night）

**A. 夜晚街道**
```
a quiet residential street at dusk with warm window lights and low buildings,
deep blue sky with remaining sunset glow, soft bokeh, no readable signage, no people
```

**B. 飯店窗外夜色**
```
view from a hotel window at night, scattered warm city lights below and a dark distant sea,
soft reflections on the glass, calm mood, no people
```

**C. 夜間便利補給**
```
back view of an adult walking at night carrying a small plastic bag,
warm streetlight pools on the pavement, muted blue-dark surroundings, no signage
```

---

### 11. 飯店（Hotel Facilities）

**A. 泳池清晨**
```
a small quiet hotel pool at early morning, still water reflecting soft sky,
folded towels on a lounge chair, no people, warm gentle light
```

**B. 洗衣區**
```
a small hotel laundry corner with two front-loading machines and a folding counter,
soft overhead light, clean neutral tones, no readable text, no people
```

**C. 大廳休息區**
```
a hotel lobby seating area with wooden furniture, linen cushions and a low table,
large window with soft daylight, plants in the corner, no people
```

**D. 兒童友善設施**
```
a small carpeted play corner with soft blocks and a low wooden shelf,
warm neutral tones, gentle indoor light, no people, no character illustrations
```

---

### 12. 機場（Airport）

**A. 出發大廳**
```
back view of an adult pushing a luggage cart with a small child walking alongside,
wide bright terminal hall, soft even light, blurred background, no readable signage
```

**B. 候機區**
```
a row of empty airport waiting seats with a small backpack on one of them,
large window with soft daylight and a distant aircraft silhouette, muted tones
```

**C. 行李轉盤**
```
a suitcase and a folded stroller on a baggage carousel, close crop,
soft cool interior light, no logos, no readable tags, no people
```

---

### 13. 人物（People）

**通用限制**：所有人物圖一律不露可辨識正臉；兒童只用背影、側身、局部。

**A. 大人側身講電話**
```
side view of an adult in a linen shirt looking at a phone while standing outdoors,
face partially out of frame, warm afternoon light, blurred greenery behind
```

**B. 大人與孩子的手**
```
close crop of an adult hand holding a small child's hand,
warm skin tones, soft natural light, plain neutral background
```

**C. 一家人的背影**
```
back view of a family of four walking away along a quiet coastal road,
carrying a small bag and a folded mat, golden hour light, long shadows, no faces
```

**D. 孩子的腳步**
```
close crop of small sandals stepping on warm pale sand,
soft shadow, shallow depth of field, no faces
```

---

### 14. 生活感（Lifestyle Details）

這一類是**輪播內頁與 Reels 過場的主力素材**，成本低、風險低、最能建立品牌一致性。

**A. 行程筆記**
```
an open notebook with handwritten-looking marks and a pen on a wooden table,
a folded map corner and a coffee cup at the edge, warm morning light, no readable text
```

**B. 出發前的桌面**
```
flat lay of travel items on a cream linen surface: a bucket hat, sunscreen bottle without labels,
a small water bottle, folded socks and a passport-sized booklet,
soft even daylight, warm cream palette, no readable text, no logos
```

**C. 車上小物**
```
a car cup holder with a water bottle and a pack of wet wipes without printed text,
warm daylight through the windshield, shallow depth of field
```

**D. 曬衣與濕衣袋**
```
a small mesh bag with damp swimwear hanging on a balcony rail,
warm late afternoon light, muted cream and sand tones, no people
```

**E. 收好的行李**
```
an open suitcase with packing cubes neatly arranged, a child's hat on top,
warm cream bedding underneath, soft window light, no readable text
```

---

## 五、自製資訊圖（非 AI 生成）

以下情境**不用 AI 生圖**，改做 SVG 或向量資訊圖，沿用網站既有做法：

| 情境 | 原因 | 形式 |
| --- | --- | --- |
| 法規、藥品攜帶量、年齡分級 | AI 會編造數字 | 表格式 SVG |
| 停車費率、投幣機操作步驟 | 需要準確步驟 | 流程圖 |
| 地理位置、車程 | 不用 Google Maps 截圖 | 簡化插畫地圖 |
| 行程時間軸 | 需精確 | 時間軸圖 |
| 對照表、檢查清單 | 文字為主 | 表格卡 |

**資訊圖樣式規範**
- 底 `#FFFDF8`，區塊底 `#F6EFE4`，線 `#EADFCE`。
- 標題 `#694624`，內文 `#5F594F`，強調 `#B4552F`（一張最多一處）。
- 字型 Noto Sans TC。
- 右下角固定放 `沖繩親子旅遊筆記` 小字 + `#9A6B43`。
- 資料來源標在圖底：`資料整理自 {來源}，實際以官方公告為準`。

---

## 六、生圖後檢查表

- [ ] 沒有可辨識兒童正臉
- [ ] 沒有商標、店招、車牌、可讀文字
- [ ] 手指、腳、四肢正常（放大檢查）
- [ ] 色調符合米白／沙色／木質棕，沒有高飽和藍綠
- [ ] 光線柔和，沒有 HDR 或戲劇性打光
- [ ] 沒有冒充特定景點或飯店
- [ ] 已標「情境示意」
- [ ] 尺寸符合用途，且主體不在安全區之外
- [ ] 同一組輪播的所有圖看起來像同一天、同一台相機拍的
