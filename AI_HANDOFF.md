# Okinawa Family Notes Live Handoff

Last updated: 2026-07-23 (Claude Code, fixed a site-wide image display bug)

This is the current operational handoff between Codex and Claude Code. Keep it short and update it whenever ownership changes, work pauses, or a task is completed.

## Current State

- Active owner: none. Claude Code took over on 2026-07-23 because Codex ran out of capacity. Closed track 1, published a new article, and fixed a site-wide image bug. No files are claimed.
- Shared branch: `main`
- Latest completed work commit: `346cb7a Rebuild the licence graphic around a single dominant message`
- Last full site build: passed on 2026-07-23 (49 static pages, 31 articles). Deploy verified live.
- Live site: `https://okinawafamilynotes.com`

## Just Completed

### Site-wide image bug, found and fixed 2026-07-23 (Claude Code)

**Read this before touching article images.** Inline figures were pinned to `aspect-ratio: 16 / 9` with `object-fit: contain` in `app/globals.css`, so any portrait image was letterboxed until its text was unreadable. The only escape was a hardcoded allowlist of filenames, which meant a new tall image broke silently until somebody remembered to register it.

**Two images had already been broken on the live site and nobody noticed**: `coin-parking-types.svg` in the parking guide and `repellent-age-guide.svg` in the medicine guide. Both are portrait, both missed the allowlist.

The fix is `lib/image-size.ts`: it reads real dimensions from the file at build time (SVG attributes or viewBox, PNG/JPEG/WebP headers) and `components/markdown-content.tsx` passes them as `width`/`height` on the `img`. The browser then uses the true ratio and reserves correct space before load. The allowlist is gone and new images need no registration.

Removing the forced ratio on its own is not enough and was tried first: without reserved height the images collapse to a 2px strip and lazy loading never fires. That intermediate state was never pushed.

Verified on production that all four affected articles now emit correct dimensions.

### Also on 2026-07-23

- Published `/blog/okinawa-rental-car-license-translation`. **Closed a real content risk**: the rental hub covered seats, pickup, fuel and parking but never documents, and 駕照日文譯本 appeared once site-wide as a packing-list bullet. A reader following the site would have arrived unable to collect a car, since Taiwan's international driving permit is not valid in Japan.
  - Topic picked from impression data: the car-transport cluster is roughly half of all site impressions (165 of 339 over three months), so the cluster Google already trusts got deepened rather than opening food or shopping from zero.
  - Facts verified against primary sources: 公路局 臺日駕照互惠 (IDP not usable, three documents, one-year limit), 臺北市區監理所 (NT$100, required ID, one-hour turnaround), 監理服務網, JAF (in-Japan fallback, 2-3 working days, ¥6,000, online only).
  - Added inbound links from the rental hub and the summer packing list, and gave the hub the documents section it lacked.
- The figure in that article went through three versions after user feedback. The final one is built from `work/infographics/license-docs.html` via Playwright, the same HTML-to-PNG route as the carousels, so it stays editable. Design rule it now follows: one dominant element, accent colour reserved for that element only, everything else demoted. The struck-through 國際駕照 against 日文譯本 is the focal point because that is the counterintuitive fact readers need.
  - The photo shows blank documents on purpose. No legible text, number, emblem or face, and both the in-image and figure captions say the documents are illustrative. A photo that looked like a real Taiwanese licence would tell readers something false about their own.
- Closed track 1: retitled `/blog/okinawa-car-seat-rental-guide` around the question readers actually ask, folding in the 兒童座椅 wording that Search Console shows them using. Slug untouched. See `content/seo-scorecard.md`.
- Added `content/seo-scorecard.md` with the per-page baseline, so the retitle can be judged rather than guessed.
- Added `work/dev-server.mjs`. The preview tool launches from another directory and Next resolves `content/` from `process.cwd()`, so it read the wrong folder and returned 500. The launcher chdirs first. Start it with the `okinawa-blog-dev` entry in `C:\AI\cc\.claude\launch.json` (port 3100).

- Published `/blog/okinawa-rental-car-license-translation` on 2026-07-23 (Claude Code). **This closed a genuine content risk**: the rental hub covered seats, pickup, fuel and parking but never documents, and 駕照日文譯本 appeared once site-wide as a packing-list bullet. A reader following the site would have arrived unable to collect a car, because Taiwan's international driving permit is not valid in Japan.
  - Topic chosen from impression data, not a wish list: the car-transport cluster is roughly half of all site impressions (165 of 339 over three months), so the cluster Google already trusts got deepened instead of opening food or shopping from zero.
  - Every claim verified against primary sources: 公路局 臺日駕照互惠 (IDP not usable, three documents, one-year limit), 臺北市區監理所 (NT$100, required ID, one-hour turnaround), 監理服務網 (online filing), JAF (in-Japan fallback, 2-3 working days, ¥6,000, online only).
  - Cover is generated and labelled; the card in frame carries no legible text. The three-document breakdown is hand-written SVG on purpose, since generating an image of an official document would invent one.
  - Added inbound links from the rental hub and the summer packing list, and gave the hub the documents section it lacked.
  - `content:audit:strict` clean for the new file, reminder count unchanged at 36. `next build` passed, 49 pages. Title, description, canonical, both images and the sitemap entry verified in the built output.
  - Three temp images (`raw-cover.jpg`, `preview.jpg`, `zoom.jpg`) sit untracked in that image folder; deletion was declined during the session. They are not committed so they will not deploy, but they can be removed.

- Track 1 SEO near-win closed on 2026-07-23 (Claude Code): retitled `/blog/okinawa-car-seat-rental-guide`.
  - The page had the site's largest impression count (90) but one click, about 1.1% CTR, while the stroller and beach-packing pages sit near 9%. The difference was the title pattern: both high performers open with the reader's own question (`需要推車嗎`, `要帶什麼`), this one opened with `怎麼選`. Someone searching 沖繩 安全座椅 is asking whether one is required at all, not how to pick a model.
  - Title is now `沖繩租車一定要安全座椅嗎？6 歲規定、三種座椅與取車檢查`; the description keeps an information gap (`滿 6 歲不一定就能改繫成人安全帶`) instead of restating the answer flat; the opening line answers the title with `要。` before explaining.
  - **Slug and canonical untouched**, so the existing ranking history stays on the URL. No claims, sources or facts changed.
  - `content:audit:strict` clean for this file (30 articles, 36 style reminders, all pre-existing elsewhere). `next build` passed, 48 pages. Verified in the built HTML that title, description, H1 and canonical all render correctly.
- Added `content/seo-scorecard.md` (Claude Code): per-page baseline as of 2026-07-20 plus the change log, so the next Search Console read can attribute results instead of guessing. It records the control to watch — if average position shifts at the same time, the CTR change cannot be credited to the title.
- Also committed Codex's uncommitted 2026-07-22 Google data review, which was sitting unstaged when capacity ran out (`23176f1`).

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

## Process note for whoever works on images next

Build passing and a 200 from curl do **not** mean the page looks right. Both were true for the whole time these images were unreadable. Open the page in a browser and look at it before reporting an image as done.

## Next Task

Six open tracks:

0. Social — record the first Reel and topic #62 carousel's 24-48 hour results, then choose the next Facebook post from `social-content-plan.md`. Do not publish anything without the user saying so in the moment.
   - The family restaurant article now unlocks topics #80-84 for future carousels and Reels.
   - Record 7-day reach and link clicks in `work/social/progress.md`. Those numbers decide whether link-in-first-comment helps this account.

1. SEO near-win — **done for the car-seat page on 2026-07-23.** Do not touch it again before 2026-07-29; it needs a full Search Console window to report. Record the result in `content/seo-scorecard.md`.
   - Do not roll the question-form title pattern out to other articles yet. The evidence is five pages: two question titles near 9% against one non-question at 1.1%. That is a hypothesis this one page is testing, not an established rule.
2. Google data review — keep the weekly scorecard in `content/seo-scorecard.md`. Still missing and worth pulling next: per-query data (90 impressions from which keywords?), the list of pages sitting at positions 5-20, and internal-link counts per page.
3. Blog content — continue at about two articles per week. **Next in the same cluster: 租車保險與免責補償 (CDW/NOC).** The hub says 「先把...保險弄清楚」 but nothing on the site actually explains it, and it is the other question every first-time renter asks. Same reasoning as the licence article: the car-transport cluster already earns half the impressions.
   - Other candidates, weaker because they start new clusters from zero: Kokusai-dori with children, supermarket souvenir selection, airport return-day packing.
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

## Loose ends (nothing blocking)

- **Untracked temp images sit in `public/images/articles/okinawa-rental-car-license-translation/`**: `raw-cover.jpg` (3.3MB), `preview.jpg`, `zoom.jpg`, `_chk.jpg`, `_chk2.jpg`, `_zoom.jpg`, `three-documents.png`. None are committed so none deploy, but the folder is messy. Deletion was declined during the session; clear them when convenient. Same for `work/social/_tmp_svgcheck.{png,jpg}`.
- The source photo for the licence graphic lives at `work/infographics/docs-row.jpg`, deliberately outside `public/` so it does not deploy. `license-docs.html` references it relatively, so keep them together.
- Two more pages show 0% CTR at positions 5.9-7.3 (`drive-toilet`, `refueling`). Recorded in the scorecard, not acted on. Impressions are still small; do not batch-edit titles before the car-seat test reports.

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
