# Okinawa Family Notes AI Collaboration

Last updated: 2026-07-15

This project is maintained with both Codex and Claude Code. Use this file as the shared handoff before making content, SEO, or site changes.

## Current Goal

Build Okinawa Family Notes into a Traditional Chinese family-travel site first. The next 90 days should focus on traffic, not monetization polish.

Primary KPI:
- Publish and improve useful Okinawa family-travel articles.
- Build topic clusters Google can crawl and understand.
- Repurpose each article into short-video ideas for TikTok / Reels.
- Add Shopee affiliate products only when they naturally help the reader.

Do not optimize affiliate buttons, redesign the site, or add multilingual structure before the Traditional Chinese site has clearer indexing and traffic signals.

## Shared Rules

- Write in natural Traditional Chinese for Taiwan readers.
- Avoid AI-sounding filler, generic travel copy, and exaggerated titles.
- Research factual claims before writing, especially transport, safety, laws, opening hours, and facilities.
- Prefer official sources first: tourism boards, venue sites, government pages, store/location search pages.
- Keep affiliate mentions light: about 80% useful guidance, 20% product recommendation at most.
- Do not say every Japanese convenience store has toilets. Phrase it as: many may have toilets, but availability depends on the store and on-site rules.
- Keep internal links aligned with current article titles.
- Run `next build` before committing site changes.
- Push completed work to GitHub after a clean build.

## Where To Look First

- Content plan: `content/content-plan.md`
- SEO growth roadmap: `content/seo-growth-roadmap.md`
- Google status table: `content/google-seo-status.md`
- Affiliate product workflow: `content/affiliate-product-workflow.md`
- Blog posts: `content/blog/`
- Article loading and metadata: `lib/posts.ts`, `app/blog/[slug]/page.tsx`, `app/sitemap.ts`

## Current Site Status

- Site is deployed at `https://okinawafamilynotes.com`.
- Sitemap is public and lists 30 URLs.
- `robots.txt` allows crawling.
- GA tag exists on the live site: `G-Z076ZYK89C`.
- Search Console / GA exact traffic numbers still need a working logged-in browser view or screenshots.
- The public Google `site:` check has not shown stable indexed results yet, so assume early indexing stage.

## Recently Completed

- Expanded `okinawa-family-drive-toilet-convenience-store` into the main family self-drive rest-stop guide.
- Added `updated` frontmatter support so sitemap `lastmod` and JSON-LD `dateModified` can reflect article updates.
- Added `content/google-seo-status.md` to track GA / GSC / indexing checks.
- Added quick facts and FAQ sections to key family attraction posts.

## Recommended 30-Day Plan

Use a sustainable pace:

- 3 new articles per week.
- 2 old article upgrades per week.
- 10 short-video scripts per week.
- Publish 5 to 7 short videos per week.
- Add 3 to 5 Shopee affiliate products only when relevant.

Priority content lines:

1. Packing and family travel gear
   - Best for Shopee affiliate links.
   - Examples: Okinawa family packing list, rain gear, beach gear, stroller items.

2. Rental car and transport
   - Builds on existing cluster.
   - Examples: convenience store shopping, parking, gas stations, road-rest rhythm.

3. Family attractions
   - Builds searchable guides.
   - Examples: Churaumi, Kouri, beaches, rainy-day spots, aquarium alternatives.

4. Accommodation areas
   - Builds decision guides.
   - Examples: Naha vs Onna, north vs south, changing hotels, family hotel criteria.

## Next Best Article

Recommended next article:

`沖繩便利商店親子採買攻略：小孩餓了、尿急、下雨時怎麼用超商補位`

Why:
- It links naturally from the rest-stop article.
- It can support Shopee items without becoming a product page.
- It can become short videos about snacks, emergency items, rain, and family self-drive.

Suggested sections:
- 出發前先知道：便利商店是補位，不是萬能
- 親子自駕途中，超商適合買什麼
- 小孩突然餓了，先買哪些比較穩
- 下雨天 / 海邊後 / 回飯店前可以補什麼
- 哪些東西建議台灣先買，不要到沖繩才找
- 便利商店廁所與停車注意
- FAQ

Possible affiliate products:
- Waterproof phone pouch
- Small wet bag
- Travel tissue / wet wipes
- Kids raincoat
- Packing cubes

## Affiliate Product Workflow

Use `content/affiliate-product-workflow.md` before adding Shopee products or asking Claude Code to research product categories.

Codex controls strategy and final review. Claude Code can help build candidate product-category tables. wei96 chooses the actual Shopee affiliate links.

## Short Video Pattern

Each article should generate 2 short videos first, not 3 to 4 until the workflow is stable.

Format:
- Hook: one specific pain point.
- 3 useful points.
- Soft CTA: `完整清單我整理在網站。`

Avoid:
- Directly saying `去蝦皮買` in every video.
- Making every clip a product pitch.
- Overpromising savings or ranking claims without evidence.

## Claude Code Handoff

If Claude Code takes over:

1. Read this file first.
2. Check `git status --short` before editing.
3. Read the target article and nearby internal links.
4. Research externally before factual travel claims.
5. Keep changes scoped.
6. Run `next build`.
7. Commit with a clear message and push.
8. Update this file or `content/google-seo-status.md` when a durable decision changes.

## Codex Handoff

If Codex takes over:

1. Continue from this shared plan rather than restarting strategy.
2. Use open-seo-advisor and speak-human-tw when drafting SEO articles.
3. Keep the writing human, practical, and parent-focused.
4. Keep technical SEO changes conservative.
5. Push to GitHub after clean builds.

