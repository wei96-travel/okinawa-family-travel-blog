# Okinawa Family Notes Live Handoff

Last updated: 2026-07-22 (Codex, shopping and souvenir article pair published)

This is the current operational handoff between Codex and Claude Code. Keep it short and update it whenever ownership changes, work pauses, or a task is completed.

## Current State

- Active owner: none. Codex completed and released the shopping and souvenir article files.
- Shared branch: `main`
- Latest completed work commit: `6d40863 Publish family shopping and souvenir guides`
- Last full site build: passed with Next.js 15.5.20 on 2026-07-22 (48 static pages).
- Live site: `https://okinawafamilynotes.com`

## Just Completed

- Reviewed live Google data on 2026-07-22 (Codex):
  - Search Console, latest 28-day view updated five hours earlier and reporting through 2026-07-20: 10 clicks, 280 impressions, 3.6% CTR and average position 8.8.
  - Strongest pages by Search Console clicks: stroller guide 5/52, beach packing list 2/22, car-seat guide 1/90, Churaumi guide 1/19 and convenience-store shopping guide 1/4. The car-seat page is the clearest near-win because it has the largest impressions but about 1.1% CTR.
  - GA4, latest seven days: 41 active users, 90 page views and 24 Organic Search sessions. Google / organic brought 16 active users. Highest visible article views included summer packing list 9, stroller guide 8 and convenience-store shopping guide 8.
  - Do not create another broad convenience-store article yet. Three related URLs already share the cluster; first audit their query overlap and internal-link roles.

- Published two practical family-travel articles on 2026-07-22 (Codex):
  - `/blog/okinawa-family-shopping-guide`: separates AEON, Kokusai-dori and supermarkets by family use case instead of presenting another generic must-buy list. Includes one original cover, one hand-written SVG decision map and one selected Shopee affiliate link.
  - `/blog/okinawa-souvenir-packing-guide`: covers Taiwan entry checks, liquids, breakables, packing order and tax-free checked baggage. Includes one original cover, one hand-written SVG packing-order guide and three selected Shopee affiliate links.
  - Affiliate sections explain the problem solved, why the item was selected and its limitations. Prices and specifications are described as changeable; actual links were generated from the user's logged-in Shopee affiliate dashboard.
  - Updated the content plan, SEO roadmap and social topic mapping. `npm run content:audit:strict`: 30 articles, 0 critical issues. `next build`: passed, 48 static pages. Desktop and 390px mobile previews passed with no horizontal overflow and all images loaded.

- Published Facebook carousel topic #62, `投幣式停車場有三種`, on 2026-07-22 (Codex).
  - Corrected the closing slide so it points to the website parking guide instead of calling it a complete itinerary, then re-exported and visually checked all eight 1080x1350 PNGs.
  - Published to the Wei Fan personal profile and changed the audience from Friends to Public. Added the article URL in the author's first comment.
  - Public post: `https://www.facebook.com/permalink.php?story_fbid=122114132331290857&id=61588725730543`
  - Next action: record 24-48 hour and 7-day reach, interactions and link clicks in `work/social/progress.md`; do not change the format before the first measurement.

- Published the family dining decision guide on 2026-07-22 (Codex): `/blog/okinawa-family-restaurant-dining-guide`.
  - Covers restaurant choice, child-friendly Okinawa foods, a three-level backup plan, food-allergy checks, takeout and eight FAQ items. The article avoids pretending to be a restaurant ranking or personal dining review.
  - Added two original AI-assisted photos and one hand-written SVG backup-plan infographic under `public/images/articles/okinawa-family-restaurant-dining-guide/`. Desktop and 390px mobile previews were checked; the vertical infographic no longer inherits the 16:9 crop.
  - Added the `沖繩美食` category, refreshed site metadata/about copy, marked content-plan item #29 complete and mapped social topics #80-84 to the new article. Future Content topics dropped from 32 to 27.
  - `npm run content:audit:strict`: 28 articles, 0 critical issues. `next build`: passed, 46 static pages.
- The first northern itinerary Facebook Reel was published on 2026-07-22. Its initial audience was accidentally set to Friends and was then corrected to Public. Review reach after 24-48 hours before changing the social format again.

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

## Social Track: what was done (Claude Code, 2026-07-21 to 07-22)

Eleven commits, `a75bcc6` through `4c9ce13`. Two layers: reusable rules in `docs/social/`, and one finished worked example in `work/social/okinawa-family-parking-guide/`.

### 1. The rule set — `docs/social/` (10 files)

`README.md`, `site-analysis.md`, `social-brand-guide.md`, `carousel-system.md`, `reels-system.md`, `ai-image-style-guide.md`, `content-repurpose.md`, `cta-library.md`, `social-content-plan.md`, `social-workflow.md`.

Contents: brand tone and persona, a dark carousel design system, 10 carousel templates, 15/30/60s Reels templates, an AI image prompt library in 14 categories with a fixed style suffix and negative prompt, per-platform specs for Facebook / Instagram / Threads / Pinterest, 60 CTAs, 100 social topics mapped to articles (68 mapped, 32 marked Future Content), and a Step 0-9 SOP.

**Several rules were rewritten mid-run after the trial exposed them as wrong. Read the current text, not the original intent:**

| Rule | Why it changed |
| --- | --- |
| Inventory `public/images/articles/{slug}/` before generating any image (SOP Step 1a) | Went straight to generation and burned 240 points on four renders, three rejected, while a better cover already sat in the repo |
| Palette governs UI, text and charts only — not photos | The original blanket ban on saturated blue-green contradicted the site's own published covers |
| Machine panels, rate boards and anything with figures must be vector, never AI photo | Models always render legible invented numbers; readers could budget from a fabricated price |
| Prompts must say `modern Japanese` and `no emblem or badge on the car` | Renders produced FIAT and VW badges and Mediterranean streets |
| AI disclosure goes in the post copy, not as a chip on the image | User's call; the site keeps its caption-level disclosure unchanged |
| Facebook link goes in the author's first comment, not the post body | Reach penalty on posts carrying external links |
| Carousels need an image-to-text ratio; no two consecutive text-only slides | First render was six text slides out of eight |
| Closing slide is a dark full-bleed photo, not a flat colour card | A plain card read as an afterthought at the end of the swipe |

### 2. The worked example — `work/social/okinawa-family-parking-guide/`

Topic #62 (投幣式停車場有三種), sourced from `/blog/okinawa-family-parking-guide`.

- **Ready to publish**: 8 carousel PNGs at 1080x1350 in `render/png/01.png`–`08.png`, plus final Facebook / Instagram / Threads / Pinterest copy.
- **Not built**: the Reels video. `copy-reels.md` has the 30s and 15s storyboards and subtitle lines, but no MP4 exists.
- `render/carousel.html` + `render/export.py` are the reusable pipeline: HTML layout, Playwright screenshots each slide at exact size. Copy the `render/` folder to a new topic and change the text. Output must go to `render/png/`, never `out/` — `.gitignore` already claims `out` for the Next.js export.
- Serve with `python -m http.server 4180 --directory "C:/AI/codex 部落格"`; there is a `social-render` entry in `C:\AI\cc\.claude\launch.json`.
- Image generation totalled 480 w-ai points over 8 renders, 4 accepted. Rejected files stay on disk untracked; see `images/README.md`.
- `render/carousel.bak.html` is a pre-redesign backup that can be deleted.

### 3. Where it stopped

The first northern itinerary Facebook Reel and topic #62 parking carousel are both live and Public. The parking carousel has its website link in the author's first comment. The next useful step is to record each post's 24-48 hour reach, views and interactions, then compare Reel versus carousel performance before choosing the next format.

## Next Task

Six open tracks:

0. Social — record the first Reel and topic #62 carousel's 24-48 hour results, then choose the next Facebook post from `social-content-plan.md`. Do not publish anything without the user saying so in the moment.
   - The family restaurant article now unlocks topics #80-84 for future carousels and Reels.
   - Record 7-day reach and link clicks in `work/social/progress.md`. Those numbers decide whether link-in-first-comment helps this account.

1. SEO near-win — review `okinawa-car-seat-rental-guide` first. It has 90 impressions but one click; improve title/description, answer the child-seat-rule intent earlier and check FAQ/internal links before considering a separate article.
2. Google data review — keep a weekly page/query scorecard: URL, query, impressions, clicks, CTR, average position, organic users, internal links, derivative topic and monetization fit. Prioritize positions 5-20 and pages with impressions but low CTR.
3. Blog content — continue at about two articles per week, but let real query data choose the next extension. Candidate branches from the new pair are Kokusai-dori with children, Okinawa supermarket souvenir selection and airport return-day packing; wait for initial impressions before choosing one.
4. Monetization — keep Shopee for relevant travel gear. Separately evaluate affiliate programs for attraction tickets, eSIM, hotels, rental cars and flights before adding those links. Food stays content-first unless a genuinely useful ticket, booking or product offer fits.
5. Short video — use the live northern itinerary Reel as the first measurement baseline. Do not generate another full video until its early performance has been recorded.

Keep social production separate from blog writing.

## Concurrent edit note (2026-07-22)

Codex claimed this file and updated the header, owner and File Ownership block while Claude Code was writing the social section below. Both sets of changes are present: Codex's claim and ownership list were preserved untouched, and Claude Code only added the Social Track section and two Pending User Decisions entries. Nothing of Codex's was overwritten. Codex also claims `docs/social/social-content-plan.md`, which Claude Code has not edited since that claim.

## Review Result (Claude Code, 2026-07-21)

- Verified `okinawa-north-carousel-music-d-18s.mp4` on the live site: 18 s, 1080x1920, 9:16, all six scenes present (bridge intro, coastline, luggage/accommodation, aquarium whale shark, schedule tip, refueling tip), audio track decodes correctly.
- All three voiceover MP3s (natural 33.1 s, bright 21.5 s, B2 12.7 s) load and play.
- Mobile viewport 375px: no horizontal overflow; layout is single-column and correct.
- Found and fixed a bug: visiting `/previews/okinawa-north-video/` without `index.html` triggered Next.js's trailing-slash redirect, which broke every relative media path (video, poster, and all three MP3s returned 404). All media paths in `index.html` are now absolute, so both URL forms work.
- `next build` passed after the fix.

## File Ownership

- No files are currently claimed. The shopping and souvenir article files, their image folders, `content/content-plan.md`, `content/seo-growth-roadmap.md`, `docs/social/social-content-plan.md` and this handoff file were released after commit `6d40863`.
- Before editing, record the active agent, objective, and exact files being changed.
- Do not work concurrently on files claimed by the other agent.

## Pending User Decisions

- Shopee links may be added only after the user has approved the product or explicitly asked Codex to choose from the logged-in affiliate dashboard. Record why each product fits and do not imply that price, stock or specifications are permanent.
- Decide the next Facebook format after the first Reel and parking carousel each have at least 24-48 hours of data.

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
