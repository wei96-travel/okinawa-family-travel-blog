# Social Media Content System

建立日期：2026-07-21

這個資料夾只放社群內容系統的規劃文件。**網站是內容來源，不是這個系統要改動的對象。**

## 邊界規則

- 不改網站架構、Next.js 設定、SEO、Blog、Sitemap、Metadata、Component、Design、既有文章內容。
- `docs/` 不在 Next.js 路由內，不會產生新頁面、不會進 sitemap。
- 社群素材若要放進 `public/`，需另外提案並經使用者確認。

## 檔案

| 檔案 | 用途 |
| --- | --- |
| `site-analysis.md` | 網站定位、品牌定位、分類、內容方向、適合的社群平台 |
| `social-brand-guide.md` | 品牌語氣、個性、圖片風格、文字風格、CTA、Hashtag 原則 |
| `carousel-system.md` | 10 種輪播模板 |
| `reels-system.md` | Reels 結構與 15/30/60 秒模板 |
| `ai-image-style-guide.md` | AI 生圖風格與 14 類 Prompt Library |
| `content-repurpose.md` | 一篇文章拆成各平台的流程與規格 |
| `cta-library.md` | 60 種 CTA |
| `social-content-plan.md` | 100 個社群主題與對應文章 |
| `social-workflow.md` | 從文章完成到全平台發佈的 SOP |

## 使用順序

第一次讀：`site-analysis.md` → `social-brand-guide.md` → `social-workflow.md`。
實際製作時：`social-workflow.md` 當主流程，其他當查表。
