# Okinawa Family Notes Live Handoff

Last updated: 2026-08-01 (Codex, five original-photo article drafts completed; awaiting user review)

This is the current operational handoff between Codex and Claude Code. Keep it short and update it whenever ownership changes, work pauses, or a task is completed.

## Current State

- 2026-08-01 daily content run (Codex, published to `origin/main`; preview path fix included): Search Console 3-month view through 2026-07-29 is 91 clicks / 1,704 impressions / 5.3% CTR / 7.2 average position. The car-seat, Churaumi-duration, Kokusai-dori, first-stay, Churaumi-stay, Naha-airport-city and old-URL 301 experiments remained in their recorded cooling or observation windows; no old public article changed. The old-page slot is `research/internal-link-audit-2026-08-01.md`. Added source-checked `/blog/okinawa-family-car-emergency-kit`, which separates car-cabin supplies and safe-use limits from the existing route/stop planning article. The matching unpublished 8-slide 1080×1350 PNG carousel, source and record are under `work/social/okinawa-family-car-emergency-kit/`; its stable noindex preview route is `/previews/okinawa-family-car-emergency-kit-carousel/`. One distinct AI-generated illustration was used only for slide 1; slides 2–8 are self-made information cards. Local visual check caught and fixed slide 1 and 8 text clipping; the noindex preview also uses absolute image paths so production redirects cannot break its eight PNGs. `content:audit:strict` passed (46 articles, 0 critical; 37 pre-existing style reminders) and `next build` passed (65 static pages). Updated `content/content-plan.md` and `content/seo-scorecard.md`; intentionally did not edit pre-existing dirty `work/social/progress.md`. No product or affiliate link was added, and nothing was uploaded or published to social platforms.

- 2026-08-01 production verification (Codex): `/blog/okinawa-family-car-emergency-kit` returned the article with its self-canonical and cover SVG. The deployed noindex preview returned all 8 PNGs at 1080×1350 after the absolute-path hotfix. The browser extension blocked a direct `sitemap.xml` navigation; the successful production build had already generated the route and the page is included by `app/sitemap.ts`. Search Console showed the new URL as unindexed and not in a visible queue. One indexing request was attempted, but Google returned a reCAPTCHA connection error; do not submit it again until the next normal Search Console review. The browser surface available for this run did not expose a 390px viewport control, so the specific live 390px visual check remains a follow-up rather than being claimed as passed.

- 2026-08-01 unpublished original-photo draft run (Codex, completed and paused for review): the user asked Codex to finish all usable articles first and publish nothing until a later review. Completed `100_Todo/drafts/articles/2026-08-01_photo-batch-draft-index.md` plus five full drafts for DMM Kariyushi Aquarium, Okinawa World / Gyokusendo, Sairai-in Daruma Temple, ASHIBINAA and Tondou ramen. Each draft now includes a search title and description, family decision angle, FAQ, internal-link plan, original-photo placement, sources and publication blockers. Three checks passed: current facts and source cautions, natural reader wording, and publication safety. Keep all six files under `100_Todo/drafts/articles/`; do not move them into `content/blog/`, copy photos into `public/`, deploy, request indexing, or publish to Facebook / Instagram before the user explicitly approves the reviewed versions. DMM and Okinawa World photos remain internal references until their commercial-use terms are resolved. The Tondou meal name in photo 21 remains unconfirmed and photo 13 should be location-checked once more before public use.

- 2026-08-01 photo-location follow-up (Codex): resolved two unknowns from the 22-photo batch without asking the user to remember them. Photos 4, 6 and 7 are identified as Darumaho Sairai-in (Daruma Temple) in Shuri, Naha, using the visible `達磨峰` sign plus matching public display photos. Photo 8 is the otter mousse cake at KIRARA CAFE inside DMM Kariyushi Aquarium, confirmed on the aquarium's official cafe page. The photo plan now records these as identified; current menu availability and venue photo-use terms still require a fresh check before publication.

- 2026-08-01 original-photo batch record (Codex): the user's 22 Okinawa photos were discussed in chat but had never been formally catalogued. Added `100_Todo/projects/2026-08-01_okinawa-original-photo-content-plan.md` with a photo-by-photo map, duplicate handling, proposed DMM / Gyokusendo / food article uses, unresolved venue names and rights checks. No photo was copied into `public/` or published. The Daruma and dessert locations were subsequently resolved; remaining location checks are the Tondou branch, photo 13 and the generic road/sunset shots. Verify current venue photo-use terms before publication.

- 2026-07-31 affiliate attribution upgrade (Codex): split the shared Churaumi Klook destination into two separately labelled affiliate ads so the article and booking hub no longer report under one ID. Article ad ID: `1362380` (`blog_churaumi_ticket / churaumi_ticket / comparison_link`); booking-hub ad ID: `1362390` (`hub_trip_booking / churaumi_ticket / ticket_section`). All public affiliate components and Markdown affiliate links now send the same GA4 `affiliate_click` fields: `affiliate_network`, `source_page`, `item_name`, `link_placement`, `content_group`, `link_url`, and `page_path`. GA4 event-scoped custom dimensions were created for platform, source page, item and placement. Operating rules and the 14-day review window are recorded in `100_Todo/plans/2026-07-31-affiliate-attribution-plan.md`. `content:audit:strict` passed with 45 articles and 0 critical issues; 37 pre-existing style reminders remain. `next build` passed with 64 static pages. Existing unrelated dirty files were preserved and not staged.

- 2026-07-31 Facebook independent long-form publication (Codex): after the user explicitly said `發`, published `孩子到了沖繩餐廳突然不吃，不一定是挑食` through the Codex in-app browser on Wei Fan. The main post contains no external URL; the first comment links to `https://okinawafamilynotes.com/blog/okinawa-family-restaurant-dining-guide`. The standalone public post page was reopened and verified for the approved body copy, audience `所有人`, and the completed first comment. Public post: https://www.facebook.com/permalink.php?story_fbid=122117680041290857&id=61588725730543. Facebook Content Library also records it as published on 2026-07-31 at 22:15 Taiwan time.

- 2026-07-31 Facebook caption correction (Codex): the user rejected the published Naha Airport luggage-storage caption because it sounded formulaic and exposed the internal phrase `作者第一則留言`. After the six wording changes were explicitly approved, the live Facebook post was edited in place through the Codex in-app browser. The revised caption now opens with the actual arrival situation, gives the return-to-airport decision rule directly, points readers to `第一則留言` without referring to an author, adds the official-site reminder and keeps only three relevant hashtags. Public verification passed: the new caption and hashtags are visible, the old phrase is absent, audience remains public, all eight carousel images remain attached, and the existing first-comment article link still renders. Public post: https://www.facebook.com/permalink.php?story_fbid=pfbid0RpmEfQ8kxMPCvpegqrQNtPaaSosikuEsZCBheLT49SDNj8nYRtdCJU6NDTyjo993l&id=61588725730543. Permanent publishing rule: reader-facing copy must never contain workflow labels such as `作者第一則留言`; run both a natural-language review and a public-context check before pressing publish.

- 2026-07-31 Facebook carousel publication (Codex): user gave same-task approval to publish the Naha Airport luggage-storage carousel. Using the Codex in-app browser, uploaded and verified exactly `01.png` through `08.png` from `work/social/okinawa-naha-airport-luggage-storage-family-guide/render/png/`, kept the approved Facebook copy, confirmed audience `所有人` and immediate publication, then published publicly to Wei Fan. Public post: https://www.facebook.com/permalink.php?story_fbid=pfbid0RpmEfQ8kxMPCvpegqrQNtPaaSosikuEsZCBheLT49SDNj8nYRtdCJU6NDTyjo993l&id=61588725730543. The author's first comment contains the UTM-tagged luggage-storage article URL and renders the correct rich preview. The public post was reopened and verified for caption, public visibility, carousel media and comment. Instagram was not used. Pre-existing dirty `work/social/progress.md` and all other unrelated changes were preserved and not staged.

- 2026-07-31 daily content run (Codex): work commit `a1d671a Publish Naha airport luggage storage guide`. It adds source-checked `/blog/okinawa-naha-airport-luggage-storage-family-guide`, covering the narrow arrival-day question of whether a family can temporarily store large luggage at Naha Airport before hotel check-in. Facts come from Naha Airport's first-party luggage-service pages: Yamato, Before U Go and Sagawa options are presented as dated, per-item/per-day references rather than availability guarantees. The page links naturally to the existing airport-transfer, stroller, rental-luggage and last-day guides; no commercial link was added. The old-page slot stayed a cooling-window / internal-link audit: no changes to the car-seat, Churaumi-duration, Kokusai-dori, first-stay or 301 rest-stop experiments. A matching eight-slide 1080×1350 carousel uses three distinct original generated scenes; its source, PNGs, copy and record are under `work/social/okinawa-naha-airport-luggage-storage-family-guide/`. Stable noindex review URL: `/previews/okinawa-naha-airport-luggage-storage-carousel/`. Local 390px verification: all 8 images loaded; client and scroll width both 390px; first-screen visual inspected. `content:audit:strict` passed (45 articles, 0 critical; 37 pre-existing legacy style reminders) and `next build` passed (64 static pages). Production verification passed after deployment: article and cover returned 200, canonical self-references, sitemap contains the slug, and preview plus all eight PNGs returned 200. No usable signed-in Search Console surface was available in this run, so no index request was submitted. Existing dirty `content/content-plan.md` and `work/social/progress.md` were preserved and not edited. This carousel was subsequently published; see the Facebook publication entry above.

- Booking-hub improvement (Codex, 2026-07-31): `/okinawa-family-trip-booking` now opens with three direct choices for accommodation, rental cars and attraction tickets; Naha and Onna sections use existing approved regional images; the verified Churaumi Klook/Trip.com ticket links and illustrated purchase guide are included. `AffiliateServiceLink` now tracks Klook as well as Trip.com and Shopee. Build passed with 63 static pages. Desktop and 390px mobile browser checks passed; the mobile document measured 375px client width and 375px scroll width, and both ticket buttons were visible. No Trip.com hotel product photo was copied because the partner session was signed out and the public tool page only clearly confirmed official banner tools, not general reuse rights for hotel photos.
- Shared operating plan (Codex): added `100_Todo/plans/2026-07-31-site-growth-revenue-plan.md` as the required source for keyword selection, link placement, image-card testing, multilingual gating and non-affiliate revenue. Updated `AI_COLLABORATION.md` with a mandatory start sequence: check Git state, re-read the permanent rules and latest handoff, inspect the current plans and scorecards, respect experiment windows and file ownership, then continue the highest evidence-backed task. Current priority is to verify platform-provided image rights/tools, then test image-rich cards on the booking and travel-gear hubs. Full-site translation remains deferred; the first multilingual test is English `/en/` plus 3 manually reviewed pages only after the recorded evidence gate is met. Additional revenue priorities are a small digital product, LINE/email audience building, later AdSense, brand/UGC work, original-photo licensing and a carefully bounded itinerary-review service.
- Homepage SEO update (Codex): the homepage now emits the standalone title `2026 沖繩親子自由行攻略｜行程、住宿、租車與景點` for Google search results without changing the visible brand or adding a year to every article. Homepage-only `WebSite` JSON-LD identifies the Chinese site name with `Okinawa Family Notes` as the alternate name; the existing `Organization` JSON-LD now uses the same naming order. The production build passed with 63 static pages. Strict content audit remains at 44 articles, 0 critical issues and 37 pre-existing style reminders. Production returned the new title after deployment. Search Console confirmed the homepage is indexed; exactly one recrawl request was submitted on 2026-07-30 and accepted into the priority crawl queue. Do not resubmit while Google is processing it.
- 2026-07-30 daily content run (Codex): Search Console 3-month report through 2026-07-28 is 77 clicks / 1,400 impressions / 5.5% CTR / 7.2 average position. The car-seat title experiment is now 4 / 209 / 1.9% / 6.9 versus 2 / 106 / 1.9% / 7.2 at its baseline: do not alter it again; observe at least two more weeks. Churaumi time, Kokusai-dori toilet and 301 rest-stop experiments remain untouched. Old-page work was therefore a documented internal-link audit (`research/internal-link-audit-2026-07-30.md`), not a forced content edit.
- New article in this run: `/blog/okinawa-naha-airport-to-city-family-guide`, an official-source, no-affiliate comparison of monorail, bus, taxi and rental-car shuttle choices for a family arriving at Naha Airport. It has links to the existing Yui Rail, rental pickup, licence-translation and rainy-day pages. Matching unpublished 8-slide 1080×1350 carousel source, PNGs, mobile-preview HTML and prompt record are at `work/social/okinawa-naha-airport-to-city-family-guide/`; no social post was uploaded or published. `content:audit:strict` passed with 44 articles and 0 critical issues (37 legacy style reminders; none in this article); `next build` passed with 63 static pages. Production verification passed: article and cover return 200, the canonical self-references, the sitemap contains the slug, and the 390px production article has 375px document scroll width. Search Console showed the new URL as unindexed and not previously queued; exactly one request was submitted on 2026-07-30 and confirmed in the priority crawl queue. Do not resubmit before the normal 7–14-day review. The pre-existing dirty `content/content-plan.md` and `work/social/progress.md` were preserved, not edited.
- 2026-07-30 permanent correction: do not put commission, affiliate, partnership, revenue or disclosure wording in reader-facing articles, booking/product pages, social copy, first comments or user-facing reports. The existing tracked links and technical attributes remain; the public wording was removed from eleven articles, the booking and gear pages, the about/contact/footer surfaces, and the obsolete public disclosure route. This rule and the required daily re-read are recorded in `AI_COLLABORATION.md` and `content/affiliate-product-workflow.md`. Work commit: `5d87019 Remove public affiliate wording`.
- Status update (2026-07-30): the Facebook sign-in and publication task is complete. The next social review is to collect 24–48-hour Facebook reach, interaction and website-click data for the two published carousels.
- Active owner: Codex for SEO and content strategy. Claude Code may complete the Instagram organic-growth research assignment below and may research hotel or emergency-toilet product candidates after receiving the matching plan; it should not edit public articles yet.

## Facebook publication record — 2026-07-29/30 (Codex)

- Published publicly, Facebook only (no Instagram post):
  - **美麗海水族館附近親子住宿** — [Facebook post](https://www.facebook.com/permalink.php?story_fbid=pfbid02gQp6M1XXmARiX98rgsAwuKoNz5AdWMcgT3fBqmjbZniTe5f7J2BhiDz6Z2sLisqWl&id=61588725730543); linked article: https://okinawafamilynotes.com/blog/okinawa-churaumi-nearby-family-stay
  - **第一次去沖繩住哪裡（舊文優化）** — [Facebook post](https://www.facebook.com/permalink.php?story_fbid=pfbid0DZ9dSM162E1wu9wZH87WpoEh5EvzzVNZVLpiWmQMSJbXK5cLP4WaoYFiBtJeZfEol&id=61588725730543); linked article: https://okinawafamilynotes.com/blog/first-okinawa-where-to-stay
- For both posts, the Facebook editor’s image list was verified as exactly `01.png`–`08.png`, audience as public, and Wei Fan’s first comment as the corresponding article URL with a rendered article preview.
- Active Codex task: await the user signing in to Facebook in the required in-app browser, then publish the two approved carousel sets. The Trip.com affiliate additions for `/blog/okinawa-churaumi-nearby-family-stay` are complete in `c7a8cf6` and production-verified; they did not alter its title, description, URL or primary advice. Observe the page after 2026-08-26; keep the Churaumi ticket guide in its 7–14-day observation window.
- `research/serp-affiliate/rental-car.md` contains the completed first map. `family-stay.md` and `family-gear.md` currently contain useful three-query summaries but do not yet meet the required ten-result-per-file completion definition; treat them as unfinished research, not completed maps.
- Codex files currently claimed: `work/social/okinawa-last-day-family-plan/copy-facebook-long-form-2026-07-27.md`, `work/social/okinawa-family-restaurant-dining-guide/copy-facebook-long-form-2026-07-28.md`, `100_Todo/plans/2026-08-01-weekly-review.md`, `content/content-plan.md`, and this handoff.
- The rental-car luggage carousel was published successfully through the Codex in-app browser with all eight images, public visibility and the article URL in the author's first comment:
  `https://www.facebook.com/permalink.php?story_fbid=122117308761290857&id=61588725730543`
- Permanent correction: Facebook posts, carousels, Reels, first comments and insights must use the Codex in-app browser unless the user explicitly requests Chrome in that task. If the in-app browser fails, stop before publishing and report the problem; never silently switch browsers or claim success.
- Permanent Reel correction: before upload, match the exact file hash, duration and visible first scene against the approved or cross-platform reference. In Instagram's crop step, explicitly choose the intended aspect ratio instead of trusting the default. After publishing, verify the public transcode dimensions and a public-page screenshot before adding the first comment. If the public ratio is wrong, stop, record the issue and obtain user approval before deleting or reposting.
- Instagram carousel #5, `沖繩單軌親子搭乘`, was published on 2026-07-28 at 21:53 Taiwan time with eight verified 1080×1350 images, custom alt text, public visibility, comments enabled and Threads auto-share disabled: `https://www.instagram.com/okinawa.family.notes/p/DbVsRicGSZl/`. The first comment was verified at 21:55; `docs/social/instagram-publishing-log.md` is the detailed record.
- Facebook audit on 2026-07-28 confirmed the rental-luggage, Yui Rail and Okinawa Zoo carousels each contain exactly eight ordered slides. The Yui Rail and Okinawa Zoo captions had accidentally exposed the internal note `（發布時將文章連結置於第一則留言）`; Codex edited the existing public posts in place, removed the note, retained public visibility and verified both first-comment article links. The matching local `copy-facebook.md` files are corrected.
- The stroller carousel was rebuilt as v2 with eight distinct stroller-decision scenes and no repeated rental-luggage sequence. All eight images load at 390px mobile and desktop widths without horizontal overflow; the Facebook copy keeps the article URL out of the main post. It is not published and still requires the user's visual approval and final publication confirmation.
- The earlier Facebook draft with an ambiguous `01.png +8` summary is retired. When v2 is approved, start a fresh in-app-browser upload, attach exactly `01.png` through `08.png`, verify all eight thumbnails, confirm `所有人`, and place the article URL in the author's first comment.
- Shared branch: `main`
- Latest site commit: `a3a619e Publish Churaumi ticket comparison guide`
- Latest daily content commits: `4ef510a Publish driving pace and typhoon guides`, `8fea335 Record daily content handoff`
- Latest content commit: `a3a619e Publish Churaumi ticket comparison guide`
- Last full site build: passed on 2026-07-29 (62 static pages, 42 articles).
- Live site: `https://okinawafamilynotes.com`

## Claude Code Research Assignment, 2026-07-26

The user explicitly asked Claude Code to collect more evidence before deciding the long-term Instagram publishing rhythm.

- Status: completed through a public-source-only Claude Code second review. The combined 30-day strategy is saved at `100_Todo/plans/2026-07-26-instagram-organic-growth-research-claude.md`.
- Research the current best practices for growing a new Instagram account through organic reach, with priority on official Instagram / Meta guidance and recent credible experiments or case studies.
- Compare daily posting with 3–5 high-quality posts per week for a new Traditional Chinese family-travel account.
- Evaluate carousel frequency, first-slide hooks, caption structure, keyword and hashtag placement, first-comment strategy, saves/shares, profile conversion, and the role of Reels.
- Separate evidence from opinion. Do not promise reach, invent algorithm rules, or treat one creator's result as universal.
- Review the first three published posts and the metrics in `docs/social/instagram-publishing-log.md`, but do not edit or publish any Instagram post.
- Write findings and a concrete 30-day recommendation only to `100_Todo/plans/2026-07-26-instagram-organic-growth-research-claude.md`.
- Do not change the active daily 20:30 Instagram automation, public-account settings, social assets, article content, or files currently claimed by Codex.

## Just Completed

### Daily content: Churaumi-area family stay, 2026-07-29 (Codex)

- Published `/blog/okinawa-churaumi-nearby-family-stay`, a separate intent from the existing aquarium-duration and regional-stay pages: whether a family should stay in Motobu for the aquarium day, and which three candidates to compare first.
- Added three verified, individually tracked Trip.com hotel links at the same-date comparison decision point: Royal View Hotel Churaumi (hotel ID `1945610`), Hotel Mahaina Wellness Resorts Okinawa (`703608`), and Wisteria Condominium Resort (`3898854`). The single short disclosure appears directly below; the page retains `rel="sponsored noreferrer"` through the Markdown renderer. Research confirmed all three current booking pages; prices remain intentionally unstated because dates and party details were not supplied.
- Used first-party/official sources for Royal View Hotel Churaumi, Hotel Mahaina and Wisteria. The article deliberately does not rank a permanent cheapest option: the 2026-07-29 check had no shared travel date, room count, adult count or child age, so homepage starting prices were not comparable. No unverified affiliate link was added.
- Improved `first-okinawa-where-to-stay` only with a natural Motobu decision link. Its title, description, URL and existing candidate list remain untouched. Skipped car-seat (until 2026-07-30 data review), aquarium duration (until 2026-08-07), the 2026-07-28 Kokusai-dori update (until 2026-08-11), and the 301 rest-stop experiment.
- Added two unpublished 8-slide 1080×1350 carousel sets, their original copy, self-made three-scene photo assets and noindex public previews: `/previews/okinawa-churaumi-nearby-family-stay-carousel` and `/previews/first-okinawa-where-to-stay-carousel`. At 390px, both previews loaded all 8 images with no horizontal overflow; the article’s first image also loads with no overflow.
- Fixed the first inline article image from lazy to eager loading. This came from the real 390px check, which initially revealed the new cover blank before it entered the viewport.
- Search Console could not be operated in this run, so no index request was submitted. Recorded baseline and cooldown decisions in `content/seo-scorecard.md`.
- `content:audit:strict`: passed, 43 articles and 0 critical issues; 37 legacy style reminders remain. `next build`: passed, 63 static pages. Content commit: `318f83f Add Churaumi family stay guide`.
- Production verification after the push passed: the new article and cover return 200, its canonical is self-referencing, the sitemap contains the new slug, and both noindex previews return 200 with all 8 images loaded.

### Churaumi ticket comparison guide, 2026-07-29 (Codex)

- Added `/blog/churaumi-aquarium-ticket-price-guide` for the separate search intent of ticket prices, platform comparison, child-age rules and purchase steps. The existing Churaumi duration article keeps its established `停留時間` focus and now links naturally to the new guide.
- Compared only matching general admission products across the official site, Klook and Trip.com. The Klook 17:00 ticket is clearly identified as a different, time-limited product and is not used to claim that one platform is always cheapest.
- Added one verified Klook affiliate link and one Trip.com affiliate deep link. Ordinary platform source links remain `noreferrer`; only tracked links render with `rel="sponsored noreferrer"`.
- Included three verified Klook purchase screenshots with full-size links for mobile readers. Visual QA found that the source files were JPEG images carrying `.png` names; they were corrected to `.jpg`, rebuilt and rechecked at desktop and 390px mobile widths.
- Added matching Trip.com walkthrough visuals after reader review: one shows how to skip the one-day-tour area and find the single-attraction ticket, and one shows two adult tickets with the order total. Trip.com auto-filled the signed-in account email on the lower checkout form, so every published crop stops above personal and payment data.
- Reader-facing copy uses one short `合作收益` disclosure and does not use the word `分潤`; keep the disclosure transparent without making monetization the focus.
- Recorded the Trip.com link evidence in `research/affiliate/trip-churaumi-deep-link.md` and the 14-day traffic plan in `100_Todo/plans/2026-07-29-churaumi-ticket-traffic-plan.md`.
- `content:audit:strict`: passed with 43 articles and 0 critical issues; 37 pre-existing style reminders remain and the ticket guide adds none.
- `next build`: passed with 63 static pages.
- Production verification passed after deployment: the article returns the expected title and canonical, all five Klook/Trip.com walkthrough images load, the page has no mobile horizontal overflow, both tracked links render as sponsored and the existing duration article links to the guide.
- Search Console reported the new URL as unknown and unindexed. One index request was submitted on 2026-07-29 and Google confirmed it entered the priority crawl queue; do not submit it again before the 7-to-14-day review.
- Latest walkthrough commit: `508a8f7 Add Trip.com ticket walkthrough`; original article commit: `a3a619e Publish Churaumi ticket comparison guide`.

### First Klook Churaumi affiliate deep link, 2026-07-28 (Codex)

- Generated the link through the logged-in Klook Affiliate converter with `Okinawa Family Notes` selected as the promotion site.
- Verified that the generated link includes affiliate ID `128859`, redirects to the correct Churaumi Aquarium ticket product and retains affiliate tracking parameters after the redirect.
- Added one reader-facing ticket comparison link to `content/blog/churaumi-aquarium-family-time.md`, with a single disclosure and reminders to compare the official price, age rules, date and cancellation terms.
- Recorded the source URL, generated URL and verification result in `research/affiliate/klook-churaumi-deep-link.md`. Do not bulk-add more Klook links until this placement has live click data.

### Churaumi ticket walkthrough preview, 2026-07-28 (Codex)

- Prepared a noindex public walkthrough preview for cross-device review at `/previews/churaumi-ticket-guide`.
- The guide uses three verified Klook screenshots to show the general-ticket selection, two-adult quantity setting, NT$844 total and `立即預訂` button. It stops before login and contains no QR code, account data or payment action.
- Verified all three images at 390px mobile and 1280px desktop widths with no horizontal overflow. Work commit: `ac586da`; the production short URL redirects correctly, keeps `noindex`, and loads all three images on both viewport checks.
- Removed the internal-sounding phrase `教學到這裡就先停下來`; the reader-facing copy now moves directly from login to the final order checks.

### Northern family itinerary Facebook Reel, 2026-07-27 (Codex)

- Published the 15.5-second Okinawa northern family itinerary Reel through the Codex in-app browser to the Wei Fan professional profile with Public visibility.
- Enabled Facebook's AI-content label because the Reel uses realistic AI-generated travel scenes.
- Kept the external article URL out of the main caption and added the live Churaumi family-time article in the author's first comment:
  `https://okinawafamilynotes.com/blog/churaumi-aquarium-family-time`
- Public Reel:
  `https://www.facebook.com/reel/1397626239013312/`
- Instagram was not published in this run; it still requires explicit user authorization and the in-app-browser publishing workflow.

### Public carousel previews and cross-device acceptance rule, 2026-07-27 (Codex)

- Added two noindex public preview pages for the unpublished rental-luggage and stroller carousels. Each contains eight web-optimized images, uses a single-column mobile layout and a three-column desktop layout, and has a stable short preview URL. The initial mobile check found that deferred image loading left lower slides unloaded; the follow-up commit `840df30 Eager load carousel preview images` removes that delay so all eight load immediately.
- Added redirects from each clean preview URL to its static `index.html`, so the preview does not depend on a local `C:\...` path or a chat attachment.
- Added a permanent content-plan acceptance rule: a carousel must load at both desktop and 390px mobile width with all eight images present and no horizontal overflow before it can be handed off or scheduled.
- The old driving-rest URL remains a permanent 301 to the current page. No old-URL links were added; the waiting period is only for Google to consolidate the URL signals.
- Work commits: `d4eb3dc Add public carousel previews`, `840df30 Eager load carousel preview images`. Production verification passed: both preview URLs load all eight images at desktop and the 390px mobile viewport, with no horizontal overflow.

### Rental-car luggage decision guide and stroller refresh, 2026-07-27 (Codex)

- Search Console current three-month view through 2026-07-24: 26 clicks, 566 impressions, 4.6% CTR and average position 7.9. The stroller guide rose to 6 clicks / 96 impressions, so it was selected for a conservative old-page improvement.
- Published `/blog/okinawa-rental-car-luggage-stroller-guide`, covering the separate intent of fitting child seats, a folded stroller and luggage into a rental car. It cites Toyota Rent a Car and Nippon Rent-A-Car vehicle-class guidance, distinguishes seating capacity from real cargo configuration, includes FAQs and adds no affiliate link.
- Updated only the stroller article's naturally relevant rental-space link; its title, description and established search intent were left intact.
- Deliberately skipped the active experiments: car-seat title, Churaumi duration page and the 301-merging old driving-rest URL.
- Created two unpublished 8-slide 1080×1350 carousels at `work/social/okinawa-rental-car-luggage-stroller-guide/` and `work/social/okinawa-family-stroller-guide/`. Each uses three self-generated travel scenes, includes source/copy/prompt records and has a visually inspected 390px stacked PNG preview. No social post was published.
- `content:audit:strict`: passed with 40 articles, 0 critical issues and 34 pre-existing style reminders; the new article adds none. `next build`: passed with 60 static pages.
- Local article verification: page renders, self-referencing canonical resolves to the production URL and the cover path is present. Before handoff, still push and verify the deployed URL, cover and sitemap; request indexing only if Search Console shows it unindexed and absent from the existing queue.

### Baby-bottle hotel cleaning guide, 2026-07-26 (Codex)

- Added `/blog/okinawa-baby-bottle-hotel-cleaning-guide` for first-time parents who need a practical hotel routine for washing, sanitizing, drying and carrying bottles during an Okinawa trip.
- The article separates cleaning from sanitizing, explains why a dedicated wash basin and air-drying area matter, and covers infant formula, milk and cleaning-liquid baggage rules without treating all baby-related liquids as exempt.
- Checked the health and flight-safety guidance against Taiwan HPA, the U.S. CDC and EVA Air. The article tells readers to confirm their bottle material, child's health needs, airline and airport rules before travel.
- Added two verified Shopee choices only where they solve a matching problem: a LIFEMATE portable bottle-brush kit and Simba 120ml bottle-cleaning spray. The article includes one affiliate disclosure, limitations and the 120ml checked-baggage warning.
- Generated and optimized an original 16:9 hotel bottle-cleaning cover. No third-party photo attribution is required.
- Added natural internal links to the driving rest-stop guide, summer packing list, travel-gear page and first-stay guide.
- `content:audit:strict`: passed, 39 articles and 0 critical issues; 34 existing reminders remain, with none from the new article.
- `next build`: passed, 59 static pages. Production verification passed: the article and WebP cover return `200`, the page has a self-referencing canonical, and the live sitemap contains the slug.
- Search Console reported the new URL as unknown and unindexed. One index request was submitted on 2026-07-26 and Google confirmed it entered the priority crawl queue; do not submit it again before the normal recheck window.
- Commit: `8a55a85 Publish baby bottle hotel cleaning guide`.

### Standalone Facebook long-form post, 2026-07-26 (Codex)

- Published a new long-form post from the Wei Fan professional profile about deciding whether to wake a child who falls asleep just before arriving at the next stop.
- The post uses a different situation and structure from the driving-pace carousel instead of stretching the carousel into a longer caption.
- Confirmed the post audience is public. The main post contains no external URL; the matching driving-pace article was added in the author's first comment.
- Permalink: `https://www.facebook.com/permalink.php?story_fbid=pfbid0guKFYxDNJP5s1AhVZLRvd7CHd5dc74F9fXYcjYZw8K2U9mx2u7KC3Jt9Q69iZKpDl&id=61588725730543`

### Public contact channel, 2026-07-26 (Codex)

- Replaced the unfinished contact-page placeholder with the user's public Facebook profile as the current contact channel.
- Added clear guidance for article corrections, travel experience additions and collaboration enquiries without exposing a private phone number, address or LINE account.
- Updated the privacy page to link to the live contact page.

### 700ml emergency urine bag affiliate links, 2026-07-26 (Codex)

- Replaced the weak child-urinal direction with two verified 700ml disposable emergency urine bag choices.
- The primary option is a MINONO product in Shopee Mall with complete material and capacity details; the backup has 1,000+ sales and 117 reviews but one low review reported poor absorption.
- Added both links to `/okinawa-family-travel-gear` and the drive-toilet article with safe-stop, privacy, disposal and seller-claim limitations. The article still prioritizes planned toilets, roadside stations and rest stops.
- Updated `100_Todo/plans/2026-07-26-hotel-and-emergency-product-candidates.md` with the observed product data and short links.

### Facebook long-form topic rule, 2026-07-26 (Codex)

- Facebook long-form posts must use a new situation, question or angle that has not just been published as a carousel.
- A long post may link to a related site article, but it must not stretch the same carousel copy into 1,000-1,500 characters or repeat the same Hook on the following day.
- Updated `docs/social/social-workflow.md` and `content/content-plan.md` so Codex and Claude Code follow the same rule.

### Hotel affiliate placement, 2026-07-26 (Codex)

- Added the four verified Trip.com hotel links to reader-matched decisions instead of showing a generic affiliate list:
  - Tokyu Stay Okinawa Naha and Mercure Okinawa Naha in `/blog/first-okinawa-where-to-stay`.
  - Rizzan Sea-Park Hotel Tancha Bay and Hotel Miyuki Beach in `/blog/onna-family-stay-guide`.
  - All four on `/okinawa-family-trip-booking`, separated by Naha and Onna family situations.
- Each hotel gives one useful fit and one limitation before the button. The area-level hotel list remains available only as a fallback.
- All article links render with `rel="sponsored noreferrer"`. The booking-hub buttons retain GA4 `affiliate_click` tracking and separate `trip_sub1` values.
- Mobile QA at 390px found and fixed one long Rizzan button label. Final buttons are 44px high, all text fits, and no horizontal overflow was detected on the hub or either article.
- `content:audit:strict`: passed, 38 articles and 0 critical issues; 34 existing style reminders remain.
- `next build`: passed, 58 static pages.
- Production verification passed after deployment: the booking hub shows all four hotels, and both lodging articles expose their expected Trip.com `trip_sub1` values with sponsored link attributes.
- Emergency-toilet product links remain on hold because exact product specifications are not yet verified.

### First hotel affiliate links, 2026-07-26 (Codex)

- Generated four Trip.com hotel deep links in the signed-in affiliate dashboard, each with a separate `trip_sub1` value: Tokyu Stay Okinawa Naha, Mercure Okinawa Naha, Rizzan Sea-Park Hotel Tancha Bay and Hotel Miyuki Beach.
- Recorded the exact links, intended reader situation and placement order in `100_Todo/plans/2026-07-26-hotel-and-emergency-product-candidates.md`.
- Searched Shopee Affiliate for child car urinals. Several listings show 1,000+ sold, but the available affiliate view does not confirm enough information about material, capacity, opening size, seal or gender fit. The direct product page triggered Shopee security verification, so no product link was generated or approved.
- Do not publish a child-urinal affiliate link until an official or otherwise reliable specification source can be matched to the exact Shopee listing. Continue with a branded child urinal or a clearly specified solidifying emergency urine bag.
- No public article or booking-page content changed in this step.

### Daily Facebook publication, 2026-07-26 (Codex)

- Published the Yui Rail and Okinawa Zoo & Museum 8-slide carousels from the Wei Fan personal professional account. Each was individually set to `所有人` before publication and the upload editor confirmed `01.png` through `08.png`.
- Added the matching live article URL in the author's first comment for each carousel:
  - `https://okinawafamilynotes.com/blog/okinawa-yui-rail-family-guide`
  - `https://okinawafamilynotes.com/blog/okinawa-zoo-museum-family-guide`
- The user approved changing the global audience default. Codex enabled `設為預設分享對象` with `所有人`, closed the empty draft and reopened the composer to confirm future posts now default to public.
- Updated `work/social/progress.md`. No Instagram target was identified or used in this publication run.

### Search-led content and affiliate plan, 2026-07-26 (Codex)

- Search Console for 2026-07-08 to 2026-07-23 reports 22 clicks, 472 impressions, 4.7% CTR and average position 8.
- Current search signals center on child car-seat rules, rental-car safety seats, refueling, aquarium duration, rain plans and Onna accommodation.
- Highest-opportunity pages are the child car-seat guide (2 clicks / 124 impressions), driving rest-stop guide (2 / 27), toilet and convenience-store guide (0 / 24), and refueling guide (0 / 29).
- Chosen operating rhythm: one new article plus one existing-article improvement, rather than two unrelated new articles every day.
- The 08:00 daily automation now reads `content/seo-scorecard.md` and the search-led plan before selecting work. Pages inside an active SEO experiment must remain unchanged until their recorded verification date; if no old page is eligible, the automation performs research or an internal-link audit instead.
- The child car-seat title was changed by Claude Code on 2026-07-23 and must remain unchanged through 2026-07-29. Codex briefly prepared another edit, found the hold in the scorecard before committing, and fully removed the local change.
- Accommodation content will compare 3–5 price-friendly, conveniently located candidates per area without claiming a permanently lowest price.
- Affiliate disclosure remains mandatory but appears once near the first affiliate action; Trip.com stays in booking decisions and Shopee stays inside matching gear situations.
- Full plan: `100_Todo/plans/2026-07-26-search-led-affiliate-growth.md`.
- Added the same daily decision rules to `content/content-plan.md`, so the 08:00 automation, Codex and Claude Code all consult the scorecard before changing an existing article.
- Completed the first shared candidate sheet at `100_Todo/plans/2026-07-26-hotel-and-emergency-product-candidates.md`: four Naha hotels, three Onna hotels and six mid-drive toilet-emergency product categories, all with reader fit, limitations and official hotel sources. No unverified Trip.com or Shopee link was added.

### Daily-content visual correction, 2026-07-26 (Codex)

- Replaced the two new articles' self-made SVG covers with 16:9 GPT-generated, photorealistic family-travel scenes and natural cover captions. The images are deliberately generic situations, not claims of a named station or venue.
- Rebuilt both unpublished 8-slide carousels to use three distinct GPT-generated, photorealistic family-travel scenes each; all slides now have full-bleed photo backgrounds, and the closing slide remains photographic. The 390px stacked previews were manually reviewed.
- Added `prompts.md` records for both Facebook drafts. Public-facing captions and carousel footers follow the site's existing style and do not add AI-image wording. No social post was uploaded or published.
- Follow-up check: replaced the stale “本站自製資訊圖” cover alt text left from the original SVG assets with plain visual descriptions matching the new photographic covers.
- Carousel follow-up: restored the established top watermark, `沖繩親子旅遊筆記`, on every slide instead of the English brand label; the website URL remains in the footer.
- Added a mandatory social-image quality gate: at least three distinct GPT photo scenes per eight-slide carousel, with photographic cover and CTA slides; SVG information graphics are only for facts that photos cannot honestly convey.
- Commit: `e8e361a Replace guide graphics with GPT travel scenes`.
- `content:audit:strict`: passed, 38 articles and 0 critical issues; 34 older style reminders remain. `next build`: passed, 58 static pages. Production verification after deployment: both new cover files return `200`, both articles have self-referencing canonicals, and `sitemap.xml` contains both slugs. A 390px browser check confirmed the new Yui Rail cover renders correctly.
- Search Console was checked while signed in: both URLs were discovered through the sitemap but not indexed, and each was submitted once. Search Console confirmed both are in the priority crawl queue; do not resubmit unless the user explicitly requests it.

### Daily articles and unpublished carousels, 2026-07-26 (Codex)

- Published in source and committed as `37bbd8c Publish Yui Rail and zoo family guides`:
  - `/blog/okinawa-yui-rail-family-guide` covers deciding whether to use Yui Rail, child ticket rules, 24/48-hour ticket tradeoffs, elevators and a Naha family route.
  - `/blog/okinawa-zoo-museum-family-guide` covers Okinawa Zoo & Museum as a middle-island family main stop, indoor/outdoor pacing, current official admission guidance, stroller facilities and rain/typhoon boundaries.
- Both articles use only self-made SVG covers, natural internal links, FAQs and official first-party source lists. No affiliate or unverified Shopee link was added.
- Created two unpublished 8-slide 1080×1350 PNG carousels with source files, Facebook copy, 390px previews and in-page mobile screenshots under their matching `work/social/` folders. All carousel imagery is self-made information graphics; neither set was uploaded or published.
- `content:audit:strict`: passed, 38 articles and 0 critical issues; 34 older style reminders remain.
- `next build`: passed, 58 static pages. Local checks: both URLs return `200`, have self-referencing canonicals and appear in `/sitemap.xml`. The 390px first-screen capture has no horizontal visual overflow.
- Production verification passed after `03a2907` was pushed: both URLs return `200`, each has a self-referencing canonical and `sitemap.xml` contains both slugs. Search Console is not available in this run, so no index request was submitted; request it once only if a URL is shown unindexed and not already queued.

### Okinawa family booking hub, 2026-07-26 (Codex)

- Added `/okinawa-family-trip-booking` as a decision-first booking hub for Naha and Onna accommodation, Okinawa rental cars and the existing checked travel-gear page.
- Reused only the three Trip.com deep links already verified in matching articles. Each uses a separate `trip_sub1` value for hub click attribution and `rel="sponsored noreferrer"`.
- Added a visible affiliate disclosure and avoided hotel rankings, personal-stay claims, temporary prices and unchecked attraction tickets.
- Removed the public-facing placeholder that explained why attraction tickets were absent; that was an internal planning note and weakened the page ending.
- Reader-view reread found and fixed four more issues: the disclosure incorrectly mentioned direct Shopee links, the hero sounded defensive, the two-area accommodation scope was unclear, and the gear ending still used internal editorial wording.
- Added booking-hub entry points to the home page, blog reading center, footer and sitemap.
- Added GA4 `affiliate_click` tracking for Trip.com hub buttons.
- Visual QA at 1440×900 and 390×844 found one button-color override; fixed it and confirmed white text, 44px minimum height and no horizontal overflow.
- `content:audit:strict`: 36 articles, 0 critical issues; 34 existing style reminders.
- `next build`: passed on 2026-07-26, 56 static pages.
- Local verification: `200`, self-referencing canonical, three sponsored links and sitemap inclusion.
- Production verification passed after deployment. Search Console initially reported `Google 無法辨識的網址`; one index request was submitted on 2026-07-26 and confirmed in the priority crawl queue. Recheck in 7–14 days and do not resubmit before then.

### Trip.com affiliate pilot and Facebook lodging post, 2026-07-25 (Codex)

- Added three tracked Trip.com affiliate links to their matching decision points:
  - Naha hotels in `first-okinawa-where-to-stay`.
  - Onna hotels in `onna-family-stay-guide`.
  - Okinawa rental cars in `okinawa-rental-car-family-guide`.
- Each placement explains what to compare before clicking, asks readers to verify final hotel or supplier terms, and includes a visible affiliate disclosure. No temporary promotion, lowest-price claim or guaranteed saving was added.
- Added `rel="sponsored noreferrer"` to Trip.com and Shopee affiliate links rendered inside articles, and corrected the existing travel-gear affiliate buttons to use the same sponsored signal.
- Prepared one unpublished 1080x1350 Facebook visual and natural post draft under `work/social/trip-okinawa-stay-pilot/`. The main post contains no external URL; its first comment sends readers to the lodging article, where the Trip.com link appears after the regional decision guidance.
- `content:audit:strict`: 36 articles, 0 critical issues; 34 existing style reminders.
- `next build`: passed on 2026-07-25, 55 static pages. Generated HTML contains all three `trip_sub1` tracking labels.

### Two daily Facebook carousels published, 2026-07-25 (Codex)

- Published the family-driving-pace carousel publicly with all eight 1080×1350 slides in `01.png` to `08.png` order:
  `https://www.facebook.com/permalink.php?story_fbid=122116987677290857&id=61588725730543`
- Published the typhoon family-travel carousel publicly with all eight 1080×1350 slides in `01.png` to `08.png` order:
  `https://www.facebook.com/permalink.php?story_fbid=122116988355290857&id=61588725730543`
- Verified both posts show `分享對象：所有人`. Added each supporting article URL in the author's first comment and verified the Facebook article preview card.
- Rewrote both standalone Facebook long-form drafts so they do not stretch or repeat the carousel captions:
  - Driving: hidden family-transition time, a four-question afternoon state check and when to drop the third stop.
  - Typhoon: decisions split into the next six hours, tonight-to-tomorrow transport and the child's next 24 hours of needs.
- The long-form bodies are 1,087 and 1,256 Chinese characters. Keep them as D+1 follow-ups; do not publish them on the same day as these carousels.
- No Next.js build was required because this task changed only social copy, progress tracking and the handoff.

### Daily articles and carousels, 2026-07-25 (Codex)

- Added `/blog/okinawa-family-driving-pace-guide`: a rent-car cluster article that turns the family pacing question into two main stops, a rest window and a removable third stop. It uses JAF's two-hour rest guidance as a driving-safety baseline and labels the two-stop rule as an editorial recommendation.
- Added `/blog/okinawa-typhoon-family-travel-guide`: separates ordinary rainy-day changes from strong-wind or warning conditions, and prioritizes safety, lodging and transport. It uses Okinawa Meteorological Observatory, the official Okinawa travel guide and OTS terms; it does not generalize any airline, hotel or car-rental policy.
- Both articles include self-made SVG covers, source lists, FAQs and natural internal links. No products or unverified Shopee links were added.
- Created two unpublished 8-slide 1080×1350 Facebook／IG carousels with source files, PNGs, copy and 390px previews under their corresponding `work/social/` folders. All visuals are self-made information graphics; `work/social/progress.md` records both as awaiting wei96's publishing decision.
- Added `break-all` to the shared blog H1 after the first 390px review exposed title overflow. Browser viewport checks then verified both new pages at 390px: 375px content width, 375px document scroll width and no horizontal overflow.
- `content:audit:strict`: 36 articles, 0 critical issues; 34 older style reminders, with none from the two new articles.
- `next build`: passed on 2026-07-25, 55 static pages.
- Pushed `4ef510a` and `8fea335` to `origin/main`. Both production articles returned `200`, had self-referencing canonical tags and cover references, and both URLs were present in the live sitemap.
- Search Console URL Inspection found both new URLs unindexed (`Google 無法辨識的網址`) with no detected sitemap or referring page. A single index request was sent for each on 2026-07-25 and both were confirmed in the priority crawl queue. Recheck in 7–14 days; do not resubmit before then.
- Visual refresh: replaced both article covers and both 8-slide carousels with original GPT-generated, project-local family-travel scenes plus varied itinerary/checklist cards. Added one unpublished Facebook long-form draft per article. `7508efb Refresh family travel visuals`; strict audit still has 0 critical issues and the Next.js build passed (55 static pages).

### Separate Facebook long-form post rule, 2026-07-25 (Codex)

- Published a new standalone Kokusai-dori Facebook long-form post rather than placing the long copy inside the existing carousel caption.
- Restored the original carousel caption and kept its article URL in the author's first comment.
- Expanded the separate long post from roughly 650 characters to 1,321 characters. It now adds two route choices, hotel-location adjustments, toilet backup, Sunday Transit Mall limits, self-driving parking decisions, a meal backup and four map locations to save before departure.
- Published the long post publicly and added the article URL in the author's first comment:
  `https://www.facebook.com/permalink.php?story_fbid=pfbid02kzqzp4apPqN5KRktypSbGknryQ5t7oPsb9B5oYtWM9DM7roWz2qa8SzDZK9rNXLVl&id=61588725730543`
- Verified after editing that the post remains public, the expanded sections are visible and the first-comment article link remains present.
- Updated `docs/social/social-workflow.md`: every completed carousel now has a short carousel caption and a separate 1,000-1,500-character Facebook long-form post. Publish the long post on D+1 so it does not compete with the carousel on the same day.
- Saved the two versions separately as `copy-facebook.md` and `copy-facebook-long-form.md`.
- No Next.js build was needed because only workflow and social source files changed.

### Travel gear affiliate expansion, 2026-07-25 (Codex)

- Expanded `/okinawa-family-travel-gear` from four to eight verified Shopee affiliate links.
- Added two situation-based product pairs instead of unrelated recommendations:
  - Hotel bottle cleaning: LIFEMATE portable seven-piece bottle-brush kit and Simba 120ml bottle/produce cleaning spray.
  - Rental-car cleanup: Baan 20-count travel wipes and MioChieh PE zipper storage bags.
- Cross-checked each new candidate against a manufacturer page or Shopee direct/official listing and recorded the research, short links, visible sales data and limitations in `100_Todo/plans/2026-07-25-travel-gear-affiliate-expansion.md`.
- The page is now grouped into bottle cleaning, car cleanup, stroller check-in and return packing. Each product explains the problem it solves, why it was retained and what it cannot promise.
- Added explicit cautions that cleaning is not sterilization, the 120ml cleaner exceeds the common 100ml cabin-container limit, wipes do not replace handwashing and zipper bags are not guaranteed waterproof.
- `content:audit:strict`: 34 articles, 0 critical issues; 34 existing style reminders remain in older articles.
- `next build`: passed, 53 static pages. Browser QA confirmed four groups, eight Shopee buttons, one loaded 1600px cover and no desktop horizontal overflow.
- Pushed `c11b44e` and handoff commit `a3c0469` to `origin/main`. Production verification confirmed the updated title, canonical, four situation groups, all eight Shopee links, zero broken images and no desktop horizontal overflow.

### Travel gear affiliate hub, 2026-07-24 (Codex)

- Added `/okinawa-family-travel-gear` as a useful product-decision page rather than a bare affiliate-link list.
- Reused four previously verified Shopee products: stroller travel bag, luggage scale, foldable travel bag and six-piece compression packing set.
- The hub starts with four links, then grows toward roughly 12–15 verified links. Each need may keep 2–3 choices with genuinely different tradeoffs such as lower price, clearer specifications or lighter weight; do not pad the page with unchecked alternatives.
- Each section explains the travel problem, why the candidate was retained, what it cannot promise, and links back to the full supporting article.
- Added inline affiliate disclosure, checked dates, canonical and Open Graph metadata.
- Added discoverable links from the homepage and footer, plus the static route in `sitemap.xml`. The top mobile navigation was deliberately left unchanged to avoid wrapping.
- Added an `affiliate_click` GA4 event with item name, destination URL and page path for the four outbound buttons.
- `content:audit:strict`: 34 articles, 0 critical issues and no new style reminder.
- `next build`: passed, 53 static pages. Desktop and 390px mobile checks show no horizontal overflow, four buttons, zero broken images and white-on-brown button contrast.
- Pushed commit `0cbf2c9` to `origin/main`. Production verification confirmed the page, four affiliate links, disclosure, canonical, choice-policy text, homepage and footer entry links, and a live sitemap entry.

### First verified Shopee affiliate placement, 2026-07-24 (Codex)

- Compared all three stroller-bag candidates in the logged-in Shopee affiliate dashboard.
- Chose candidate 1 because its live page showed 700 reviews, 2,000+ sales, seven size variants and stated Oxford-cloth material. The two alternatives had much smaller review and sales samples and about 1% social-media commission.
- Generated the affiliate short link `https://s.shopee.tw/9zwOmFGv6v`.
- Added a short placement to `/blog/okinawa-family-stroller-guide` explaining why the size table is useful, telling readers to measure the folded stroller, and disclosing the affiliate relationship.
- Did not repeat the seller's waterproof claim, call the product universal, or promise protection from checked-baggage damage.
- `content:audit:strict`: 34 articles, 0 critical issues. The new copy adds no style reminders; 34 existing reminders remain elsewhere.
- `next build`: passed, 52 static pages. At 390px the article has no horizontal overflow, all images load, and the affiliate copy and disclosure remain readable.
- Pushed commit `7e9148f` to `origin/main` and verified the production article after deployment. The affiliate link, inline disclosure, self-referencing canonical and new-tab `noreferrer` link attributes are present.

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

Facebook 的「第一次沖繩住宿區怎麼選」單圖貼文已於 2026-07-25 公開發佈：

- 貼文：https://www.facebook.com/permalink.php?story_fbid=122117039889290857&id=61588725730543
- 主貼文沒有外部連結。
- 作者第一則留言已加入 `/blog/first-okinawa-where-to-stay`，Facebook 連結預覽卡顯示正常。
- 下一次於發佈後 24–48 小時回收觸及、留言與連結點擊。

1. Recheck `/blog/okinawa-rental-car-pickup-return-guide` and `/blog/okinawa-kokusai-dori-family-guide` after 7–14 days. Do not submit either URL again while it is already in the priority crawl queue.
2. Publish the two completed 2026-07-25 standalone Facebook long-form drafts on D+1, one at a time, with the supporting article URL in the author's first comment.
3. Open the provisional stroller-bag winner with the user and verify size, material, review count and recurring complaints before generating or placing an affiliate link.
4. Keep the Facebook bio unchanged for 14 days and compare profile visits, follows and website clicks.
5. Do not touch the car-seat title before 2026-07-29. Check the Churaumi title change no earlier than 2026-08-07.
6. Recheck Trip.com `affiliate_click` events after the new hotel buttons receive real traffic; do not add more hotel buttons just to increase link count.
7. Keep the emergency-toilet product links on hold until the exact product specifications are verified; sales count alone is not enough.

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
  - `app/layout.tsx`
  - `app/page.tsx`
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
  - `research/serp-affiliate/rental-car.md`
- Claude Code may research in a separate draft file only after recording that path here. It must not edit the files above while Codex owns them.
- Before editing, record the active agent, objective, and exact files being changed.
- Do not work concurrently on files claimed by the other agent.

## Pending User Decisions

- Shopee links may be added only after the user has approved the product or explicitly asked Codex to choose from the logged-in affiliate dashboard. Record why each product fits and do not imply that price, stock or specifications are permanent.
- Decide the next Facebook format after the first Reel and parking carousel each have at least 24-48 hours of data.

## 2026-07-28 Codex 每日內容流程（已完成，已推送）

- Search Console（3 個月、資料截止 2026-07-25）：31 點擊／704 曝光／4.4% CTR／平均排名 7.7。選題理由為「國際通廁所」已有 5 次曝光但尚未點擊；頁面 `okinawa-kokusai-dori-family-guide` 有 1 點擊／19 曝光。
- 舊文只補首屏的明確廁所備案：第一牧志公設市場、縣廳前站、牧志站；沒有改標題、摘要或網址。2026-08-11 起再評估。跳過安全座椅（2026-07-30 後才讀新數據）、水族館（觀察至 2026-08-07）與 301 合併中的自駕休息點舊網址。
- 新文：`/blog/okinawa-naha-rainy-day-family-half-day`，承接那霸雨天、抵達日與還車日的室內半日需求；官網資料來源為那霸機場與沖繩縣立博物館・美術館；未放未核對的聯盟連結。
- 輪播已輸出但**未發布**：`work/social/okinawa-naha-rainy-day-family-half-day/render/png/01.png`～`08.png`；`work/social/okinawa-kokusai-dori-family-guide-2026-07-28/render/png/01.png`～`08.png`。兩組均為 1080×1350，已依使用者授權建立 noindex 跨裝置預覽：[那霸雨天](https://okinawafamilynotes.com/previews/okinawa-naha-rainy-day-carousel/)／[國際通廁所](https://okinawafamilynotes.com/previews/okinawa-kokusai-dori-toilet-carousel/)。兩頁均在手機版確認 8／8 圖片載入且無水平溢位；未進入社群發布流程。
- 已推送內容 commits：`b6d6bc4 Add Naha rainy day guide`、`c3d0eb9 Refine rainy day carousel notes`。嚴格稽核為 41 篇、0 個重大問題；Next.js build 為 61 個靜態頁；新文章正式 URL、封面、canonical 與 sitemap 均已確認。
- 本次認領檔案：新文、國際通舊文、content plan、SEO 記分卡、社群進度、上述兩個輪播資料夾及本 handoff。保留現有的 Reel 與 `copy-instagram.md` 本機變更。

## 2026-07-28 Facebook 長文與週檢討

- 2026-07-27 Facebook 獨立長文已於 2026-07-28 透過 Codex 內建瀏覽器公開發布。切角是還車前兩小時的人、行李、廁所與接駁緩衝，不重複租車行李輪播；主文未放網址，作者第一則留言已放部落格連結，分享對象已確認為「所有人」。公開貼文：https://www.facebook.com/permalink.php?story_fbid=122117441343290857&id=61588725730543
- 已補寫 2026-07-28 Facebook 獨立長文：`work/social/okinawa-family-restaurant-dining-guide/copy-facebook-long-form-2026-07-28.md`。切角是孩子到餐廳突然不吃時的判斷與備案，不重複單軌、雨天或國際通輪播。
- 兩篇主文均達獨立長文長度，禁用詞掃描無結果；對應正式文章網址均已實際開啟確認。餐廳長文仍未發布，應與本次長文錯開，發布前仍須取得使用者對該版本的明確確認。
- 建立 `100_Todo/plans/2026-08-01-weekly-review.md`，固定檢查文章、索引、Search Console、GA4、Facebook／Instagram、Shopee／Trip.com／Klook 與交接品質。Codex automation `沖繩部落格每週六檢討` 已啟用，每週六 09:00 執行。
- 那霸雨天半日文章於 2026-07-28 在 Search Console 顯示「Google 無法辨識的網址」。已提交一次索引要求，Google 確認加入優先檢索佇列；不要重複提交。
- 今日仍未完成：兩份十筆 SERP 配置表、第一個 Klook 美麗海深層分潤連結、兩組已完成輪播的發布決定、未發布的推車輪播，以及社群貼文 24～48 小時數據回收。

## 2026-07-31 FB／IG 導流決策

- 社群導流已補入 `100_Todo/plans/2026-07-31-site-growth-revenue-plan.md`，固定流程為：社群觸及 → 個人檔案 → 網站入口 → 文章／專題頁 → 內部連結或商業連結 → LINE／Email 回訪。
- Facebook 以直接導流為主：主文預設不放外部網址，作者第一則留言放帶 UTM 的文章連結；長文不得只是輪播文字加長。
- Instagram 以收藏、分享與個人檔案瀏覽為主：輪播或 Reel 發布後搭配限時動態連結貼紙；CTA 必須說明點進網站能取得的表格、比較或安排。
- 規劃新增手機優先 `/start` 社群入口頁，第一版只放「第一次住哪裡、租車自駕、景點與行程」三個選擇，不先塞聯盟連結。
- 第一輪 14 天測試主題為「第一次去沖繩住哪裡」：Facebook 用新的獨立長文角度，Instagram 使用尚未在 IG 發布的住宿輪播並補限時動態。兩邊分開加 UTM，七天與十四天各檢查一次。
- 自己兩個測試帳號的互動必須另外標記，不得算進自然流量。

## 2026-07-31 親子旅行預訂頁改版

- Work commit: `aaff6a2 Improve family booking hub`（已推送至 `origin/main`）。
- 第一屏後方新增「住宿區、租車、景點票券」三個直接入口，讀者不用先讀完整頁面才找到下一步。
- 那霸與恩納住宿區加入已在本站使用的區域實景圖；飯店名稱、適合情境與限制仍保留，不用不明來源的飯店商品照。
- 新增美麗海水族館票券區，使用 2026-07-27 已核對的 Klook／Trip.com 票券連結與既有購票畫面，並導回完整圖解文章。
- `components/affiliate-service-link.tsx` 已支援 Klook 點擊追蹤；所有外部商業連結維持 `rel="sponsored noreferrer"`。
- `next build` 通過，共 63 個靜態頁。桌面首屏、票券區與 390px 手機畫面均已實際檢查；手機版無水平溢位。
- 本次只修改 `app/okinawa-family-trip-booking/page.tsx`、`components/affiliate-service-link.tsx` 與本交接檔；其他 CC／使用者未提交變更均保留。

## 2026-07-31 社群發布總表

- 新增 `docs/social/publishing-master-log.md`，統一記錄 Facebook、Instagram、Reels 與獨立長文；之後先查這份總表，再看各平台細節紀錄。
- 已公開、已公開但缺連結、草稿完成三種狀態已分開，避免把完成文案誤報成已發布。
- Facebook 長文暫排 2026-08-01、08-03、08-05 台灣時間 20:30，中間日期留給輪播或 Reel；真正發布前仍須取得使用者對該版本的確認。

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
