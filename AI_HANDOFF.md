# Okinawa Family Notes Live Handoff

Last updated: 2026-07-21 (Claude Code, added the social media content system under `docs/social/`)

This is the current operational handoff between Codex and Claude Code. Keep it short and update it whenever ownership changes, work pauses, or a task is completed.

## Current State

- Active owner: none; Claude Code published two new articles on 2026-07-21. The northern short video is still awaiting the user's publish decision (separate track).
- Shared branch: `main`
- Latest pushed commit: `dd6df61 Add images to medicine and parking family guides`
- Last full site build: passed with Next.js 15.5.20 on 2026-07-21 (44 static pages).
- Live site: `https://okinawafamilynotes.com`

## Just Completed

- Built the Social Media Content System on 2026-07-21 (Claude Code), planning documents only, under `docs/social/`: `README.md`, `site-analysis.md`, `social-brand-guide.md`, `carousel-system.md`, `reels-system.md`, `ai-image-style-guide.md`, `content-repurpose.md`, `cta-library.md`, `social-content-plan.md`, `social-workflow.md`.
  - Explicit scope limit from the user: do not change site architecture, Next.js, SEO, blog, sitemap, metadata, components, design, or existing article content. Verified with `git diff --stat` (empty) that zero tracked files were modified. `docs/` is outside the Next.js route tree, so no new pages and no sitemap impact. `next build` was not required because no site output changed.
  - Key contents: 10 carousel templates, 15/30/60s Reels templates, an AI image prompt library in 14 categories with a fixed style suffix and negative prompt, 60 CTAs (the repeated `完整攻略請點網站` is now banned), 100 social topics mapped to articles (68 mapped, 32 marked Future Content), and a Step 0-9 production SOP.
  - Future Content gaps identified as the biggest content holes: food/restaurants, shopping/souvenirs, airport logistics, night views, Kokusai-dori, budget planning, non-summer travel. Writing a family-restaurant article would unlock 5 social topics at once.
  - Production output belongs in `work/social/{slug}/`, not in `docs/` and not in `public/` (moving assets into `public/` needs user approval first).
- Published two new articles on 2026-07-21 (Claude Code), each with three images: an AI-generated cover photo, one inline AI scene photo, and one hand-written brand-style SVG infographic (covers/photos resized to ~220-365KB jpg; captions label them as 情境示意 / 本站自製資訊圖):
  - `/blog/okinawa-family-medicine-sunscreen-repellent` (旅遊用品): medicine carry limits (MHLW + Japan Customs), reef-safe sunscreen, mosquito-repellent age tiers (Taiwan CDC). Images: medicine-sunscreen-cover, beach-sunscreen-child, repellent-age-guide.svg. Internal links to summer packing list, beach packing list, convenience-store guide.
  - `/blog/okinawa-family-parking-guide` (租車交通): free lots at Churaumi/Kouri, three coin-parking types, Naha hotel fees, Kokusai-dori Sunday transit-mall restriction. Images: parking-cover, parking-family-getout, coin-parking-types.svg. Internal links to rental-car, refueling, drive-toilet, last-day, north-day-trip, Churaumi, Kouri.
- Updated `content/content-plan.md`: marked #21 done; added #28 parking as a car-transport cluster fill (not an original numbered item, user-approved).
- Content audit (strict) passed: 0 critical issues. `next build` passed (44 static pages).
- Verified all six images live on production (HTTP 200) after deploy, then submitted Search Console "Request Indexing" for both new article URLs on 2026-07-21 (both confirmed "已要求建立索引 / added to priority crawl queue").
- Earlier on 2026-07-21: fixed the northern short-video preview media 404 (absolute paths).
- Prior context: summer packing list and north day-trip articles published with images; GA on 2026-07-20 showed 40 active users / 90 page views / 8 organic sessions (7 days); Search Console 5 clicks, 153 impressions, 3.3% CTR, avg position 10.5 through 2026-07-18; manual indexing submitted for the two prior article URLs on 2026-07-20.

## Next Task

Three open tracks:

0. Social system — the docs are done and topic #62 (投幣式停車場有三種) has been run end to end as a trial, under `work/social/okinawa-family-parking-guide/`. All copy is final: an 8-page carousel spec, 30s and 15s Reels storyboards, and Facebook / Instagram / Threads / Pinterest text. **Nothing has been published to any platform, and no social account has been touched.** Still open: rendering the carousel and Reels from the specs, and the user's decision on whether to publish. Do not publish anything without the user saying so.
   - Trial run findings were already folded back into `docs/social/`: always inventory `public/images/articles/{slug}/` before generating images (the carousel ended up needing zero new AI renders); the palette governs UI and charts only, not photos; general image models add real car emblems and render legible keypad digits, so machine panels must be vector art.
   - Image generation cost 300 w-ai points for 5 renders, only 1 accepted (`r1-flap-plate-v2.jpg`). The four rejected files stay on disk untracked; see `work/social/okinawa-family-parking-guide/images/README.md`.
   - Largest Future Content gap remains the family-restaurant article, which would unlock 5 social topics at once.


1. Blog content — continue the weekly cadence (about 2 articles/week). Most numbered content-plan items are done; the next agent should pick an under-served cluster angle (e.g. accommodation decision guides, more family-attraction guides) rather than repeat existing topics. After the two 2026-07-21 articles deploy, consider submitting manual indexing for their URLs.
2. Short video — the D island-chill northern itinerary video still needs the user's approve/reject before any Facebook or Instagram publishing. After approval, use the download link on `https://okinawafamilynotes.com/previews/okinawa-north-video/index.html`.

Keep social production separate from blog writing.

## Review Result (Claude Code, 2026-07-21)

- Verified `okinawa-north-carousel-music-d-18s.mp4` on the live site: 18 s, 1080x1920, 9:16, all six scenes present (bridge intro, coastline, luggage/accommodation, aquarium whale shark, schedule tip, refueling tip), audio track decodes correctly.
- All three voiceover MP3s (natural 33.1 s, bright 21.5 s, B2 12.7 s) load and play.
- Mobile viewport 375px: no horizontal overflow; layout is single-column and correct.
- Found and fixed a bug: visiting `/previews/okinawa-north-video/` without `index.html` triggered Next.js's trailing-slash redirect, which broke every relative media path (video, poster, and all three MP3s returned 404). All media paths in `index.html` are now absolute, so both URL forms work.
- `next build` passed after the fix.

## File Ownership

- No files are currently claimed.
- Before editing, record the active agent, objective, and exact files being changed.
- Do not work concurrently on files claimed by the other agent.

## Pending User Decisions

- User needs to approve or reject the current northern itinerary short video before social publishing.
- Shopee product links remain user-selected; agents may prepare product categories and search terms only.
- After the video review, user will decide whether to continue social production or return to the next article.

## Handoff Template

When handing off, replace the sections above and include:

- Active owner and reason for handoff
- Exact objective
- Last pushed commit
- Completed work
- Work still in progress
- Files changed or claimed
- Tests or build result
- Public URLs or deployment state
- Decisions that still need the user
