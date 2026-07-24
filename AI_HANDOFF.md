# Okinawa Family Notes Live Handoff

Last updated: 2026-07-24 (Codex, Kokusai-dori carousel published)

This is the current operational handoff between Codex and Claude Code. Keep it short and update it whenever ownership changes, work pauses, or a task is completed.

## Current State

- Active owner: Codex. The approved article sequence is live, both new URLs are in Google's priority crawl queue, and the Kokusai-dori carousel is public. The final Shopee product check is waiting for the user's manual security verification.
- Shared branch: `main`
- Latest content commit: `84f5340 Publish rental flow and Kokusai guides`
- Last full site build: passed on 2026-07-24 (52 static pages, 34 articles).
- Live site: `https://okinawafamilynotes.com`

## Just Completed

### Kokusai-dori Facebook carousel publication, 2026-07-24 (Codex)

- Published all eight 1080x1350 slides publicly in the intended `01.png` to `08.png` order.
- Verified the post privacy is public and the permalink opens the correct post:
  `https://www.facebook.com/permalink.php?story_fbid=122116930431290857&id=61588725730543`
- Added the article URL in the author's first comment and verified Facebook generated the correct article preview card.
- The post was new at verification time, so Facebook still showed 0 views and 0 natural interactions. Recheck after 24–48 hours instead of judging the carousel immediately.
- Opened the provisional Shopee stroller-bag candidate again. Shopee required a manual slider verification, so no product claims or affiliate link were approved yet.

### Rental flow, Churaumi upgrade, Kokusai-dori guide, carousel and affiliate candidates, 2026-07-24 (Codex)

- Added `/blog/okinawa-rental-car-pickup-return-guide`.
  - Checked OTS, Nippon Rent-A-Car, Toyota Rent a Car and Naha Airport first-party guidance.
  - Separates airport shuttle, office check-in, documents, vehicle inspection, full-tank return and terminal shuttle. It does not generalize one company's bus stop or timing to every operator.
  - Added one original airport-shuttle family cover and one mobile-first vertical five-step SVG.
  - Linked the rental hub, licence translation, insurance/NOC, child seat, refuelling and last-day pages.
- Upgraded `/blog/churaumi-aquarium-family-time` around the disclosed `美麗海水族館 停留時間` search intent.
  - Official average is labelled as 1.5 hours; the editorial family recommendation is 2–3 hours for the aquarium and half a day with surrounding facilities.
  - Corrected stroller pickup locations, 2026 extended hours, partial Wednesday opening, bus-time range and facility names. Removed unsupported MAPCODE and convenience-store ticket claims.
  - Added a mobile-readable four-option time graphic and recorded the test baseline in `content/seo-scorecard.md`.
- Added `/blog/okinawa-kokusai-dori-family-guide`.
  - Uses official sources for the 1.6 km street length, monorail lifts/toilets, Transit Mall rules, parking restrictions, Makishi market facilities and closure risk.
  - Focuses on one-way routes, a short Makishi version, toilets, stroller and exit points rather than a generic must-buy list.
  - Uses a real Kokusai-dori Unsplash cover with author and licence metadata plus an original route SVG.
- Completed an eight-slide 1080x1350 Kokusai-dori carousel under `work/social/okinawa-kokusai-dori-family-guide/`.
  - Three different licensed real photos plus five information layouts; no single image repeated through the whole deck.
  - Exported PNGs and visually checked all eight. The deck was later published publicly after user approval; see the publication record above.
- Compared three Shopee stroller travel-bag candidates from the logged-in affiliate dashboard and recorded visible price, sales and commission in `100_Todo/plans/2026-07-24-stroller-bag-affiliate-candidates.md`.
  - The first candidate is provisional only. The live product page triggered Shopee security verification, so size, material and review-count hard checks remain incomplete.
  - No affiliate link was added to the article. Status remains `確認後才能放連結`.
- `content:audit:strict`: 34 articles, 0 critical issues. The two new articles add no style reminders; 34 reminders remain in older pages.
- `next build`: passed, 52 static pages.
- Mobile QA at 390px: all three pages have no horizontal overflow, all images load, and all three custom SVGs were visually checked. The rental-flow SVG was redesigned once after its first five-column version was too small on mobile.
- Pushed commit `84f5340` to `origin/main` and verified both new production URLs, the updated Churaumi page, five new image URLs, self-referencing canonicals and both new sitemap entries. All returned HTTP 200.
- Inspected both new URLs in Search Console on 2026-07-24. Both initially showed `網址不在 Google 服務中` and `Google 無法辨識的網址`.
- Submitted one indexing request for each new URL. Both confirmed `已要求建立索引` and were added to Google's priority crawl queue. Search Console had not yet detected their sitemap references, although the live sitemap already contains both URLs; treat this as reporting delay and do not resubmit.

### SEO, indexing, affiliate and social operating plan, 2026-07-24 (Codex)

- Read the latest logged-in Search Console report. The three-month view through 2026-07-22 now shows 18 clicks, 400 impressions, 4.5% CTR and average position 8.
- Index coverage shows 18 indexed pages and 5 not indexed. HTTPS shows 22 valid pages and 0 non-HTTPS pages.
- Checked the two newest URLs:
  - `/blog/okinawa-rental-car-license-translation`: `已找到－目前尚未建立索引`; sitemap and referring page detected.
  - `/blog/okinawa-rental-car-insurance-noc-guide`: initially `Google 無法辨識的網址`.
- Sent one Search Console indexing request for each URL on 2026-07-24. Both confirmed they were added to the priority crawl queue. Do not resubmit repeatedly; check again after 7–14 days.
- Added a permanent post-publish rule: after every new article is live, Codex verifies production URL, images, canonical and sitemap, then checks Search Console and requests indexing once when needed without waiting for the user.
- Added `content/seo-affiliate-roadmap.md`. The next two planned articles are:
  1. `沖繩租車取車與還車流程`
  2. `帶小孩逛沖繩國際通怎麼排`
- Affiliate work is separated from new-article work. Prioritize actual Shopee candidates for the existing stroller, summer packing and beach packing pages because those three pages already account for 13 Google clicks. Do not force Shopee into licence, insurance or rental-process articles.
- Expanded `docs/social/carousel-system.md` with a strict pain -> conclusion -> action -> saveable summary -> CTA flow, a hook quality gate and a concrete eight-slide Kokusai-dori carousel outline.
- Recorded the first Reel baseline: 64 views, 4 viewers and 84.4% of views from non-followers. The two reactions came from the user's own test accounts, so natural reactions, comments, shares and clicks remain 0.
- Added `docs/social/facebook-profile-plan.md`. The following bio was applied to the public Wei Fan Facebook profile on 2026-07-24 and verified after reload:
  `第一次帶小孩去沖繩，行程不用排到喘。這裡整理租車、景點、住宿和行李，讓你少查一點、旅途中少慌一點。`
- `npm.cmd run content:audit:strict`: 32 articles, 0 critical issues. Existing 36 style reminders remain. No site output changed, so a Next.js build was not required.

### Licence article infographic redesign, 2026-07-24 (Codex)

- Replaced the flat-lay document graphic in `/blog/okinawa-rental-car-license-translation` after the user found it visually weak.
- Removed the blank fake-document objects and reduced the copy. The new 1080x1350 editorial graphic leads with the single decision readers need: Taiwan-issued international driving permits do not work in Japan; bring the Japanese translation.
- The lower half now shows only the three pickup documents — passport, original Taiwan licence and Japanese translation — plus a short application reminder. Text remains readable at the article's 335px mobile width.
- Added `work/infographics/render-license-docs.mjs` so Codex or Claude Code can reproduce the exact JPG from the editable HTML without manual screenshots. It uses local Chrome and the bundled Playwright/Sharp packages.
- `content:audit:strict`: 32 articles, 0 critical issues. `next build`: passed, 50 static pages. The replacement image loads at 1080x1350 and the 390px article page has no horizontal overflow.

### Rental-car insurance guide and licence cover review, 2026-07-24 (Codex)

- Published `/blog/okinawa-rental-car-insurance-noc-guide`, filling the next gap in the car-transport cluster. It explains the difference between basic coverage, CDW, NOC and roadside assistance, gives a family-specific way to choose a plan, and lists the correct accident-reporting order.
  - Claims were checked against Times CAR RENTAL, Nippon Rent-A-Car, OTS and Toyota Rent a Car official pages. Company-specific amounts are labelled as examples, not Japan-wide rules.
  - Added one original 1600x900 rental-counter cover and one hand-written 1200x820 four-layer SVG. The rental-car hub now links into the article.
  - No Shopee affiliate link was added. This topic has no natural Shopee product that improves the insurance decision, so forcing a product section would weaken the article.
- Reviewed Claude Code's `/blog/okinawa-rental-car-license-translation` article. The facts, structure and inline three-document graphic remain strong, so the article copy was not rewritten. Replaced only the weak flat-lay cover with a clearer rental-counter handover scene; blank document surfaces remain deliberately non-official.
- `content:audit:strict`: 32 articles, 0 critical issues; the new article adds 0 style reminders. Existing site-wide reminder count remains 36.
- `next build`: passed, 50 static pages. Checked both articles at a 390x844 mobile viewport: both covers load at 1600x900, page width does not overflow, and the insurance SVG loads at its true 1200x820 ratio.
- Verified the new article, replacement licence cover and new sitemap URL on production after the GitHub push.

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

1. Recheck `/blog/okinawa-rental-car-pickup-return-guide` and `/blog/okinawa-kokusai-dori-family-guide` after 7–14 days. Do not submit either URL again while it is already in the priority crawl queue.
2. Show the Kokusai-dori carousel preview to the user. Publish only after the user approves it at that moment.
3. Open the provisional stroller-bag winner with the user and verify size, material, review count and recurring complaints before generating or placing an affiliate link.
4. Keep the Facebook bio unchanged for 14 days and compare profile visits, follows and website clicks.
5. Do not touch the car-seat title before 2026-07-29. Check the Churaumi title change no earlier than 2026-08-07.

Do not touch the car-seat title before 2026-07-29. Keep blog writing, affiliate comparison and social production as separate tracked tasks.

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

- Codex currently claims:
  - `AI_HANDOFF.md`
  - `content/content-plan.md`
  - `content/seo-scorecard.md`
  - `content/blog/okinawa-rental-car-pickup-return-guide.md`
  - `content/blog/okinawa-rental-car-family-guide.md`
  - `content/blog/okinawa-rental-car-license-translation.md`
  - `content/blog/okinawa-rental-car-insurance-noc-guide.md`
  - `content/blog/okinawa-last-day-family-plan.md`
  - `content/blog/churaumi-aquarium-family-time.md`
  - `content/blog/okinawa-kokusai-dori-family-guide.md`
  - `content/blog/okinawa-family-shopping-guide.md`
  - `100_Todo/plans/2026-07-24-stroller-bag-affiliate-candidates.md`
  - `public/images/articles/churaumi-aquarium-family-time/churaumi-time-options.svg`
  - `public/images/articles/okinawa-rental-car-pickup-return-guide/`
  - `public/images/articles/okinawa-kokusai-dori-family-guide/`
  - `work/social/okinawa-kokusai-dori-family-guide/`
  - `work/social/progress.md`
- Claude Code may research in a separate draft file only after recording that path here. It must not edit the files above while Codex owns them.
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
