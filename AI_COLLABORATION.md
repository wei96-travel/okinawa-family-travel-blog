# Okinawa Family Notes AI Collaboration

Last updated: 2026-07-24

This project is maintained with both Codex and Claude Code. Use this file as the shared handoff before making content, SEO, or site changes.

Permanent rules live here. Current task status lives in `AI_HANDOFF.md`. Both agents must read both files before starting.

## Single Source Of Truth

- `origin/main` is the shared source of truth. Chat history is context only and must not be treated as the project record.
- Before starting, check `git status --short`, read `AI_HANDOFF.md`, then sync with `git pull --ff-only origin main` only when doing so will not overwrite local work.
- If the worktree contains changes from the other agent or the user, preserve them. Read the diff and work around them; never reset or discard them.
- Do not let Codex and Claude Code edit the same files at the same time. The active owner and file scope must be written in `AI_HANDOFF.md`.
- Either agent may become the lead when the user asks. The permanent role split is a default, not a reason to block a handoff.
- One finished task should have one clear commit when practical. Build or test status must be recorded before handoff.
- When work finishes, pauses, changes owner, or reaches a quota limit, update `AI_HANDOFF.md` in the same commit or immediately before stopping.
- A handoff is complete only after the work commit is pushed and `AI_HANDOFF.md` names that exact work commit. The handoff-file update may be a later documentation commit. Unpushed chat promises do not count.

## Quick Handoff Codes

The codes trigger only when the user's entire message is exactly one number. A number inside a sentence, list, filename, date, or article does not trigger them.

- `1` in Claude Code: take over from `AI_HANDOFF.md`. Check the worktree, sync `origin/main` when safe, read the required project files, claim the task and files, then continue the recorded next task without asking the user to repeat context.
- `2` in Codex: take over from `AI_HANDOFF.md` using the same sequence.
- `1` is not a Codex action, and `2` is not a Claude Code action.
- After either code is used, the active agent must finish or pause cleanly: update `AI_HANDOFF.md`, record checks, commit, and push before returning ownership.
- If the worktree is unsafe to sync, a required login is unavailable, or the handoff is genuinely ambiguous, report the exact blocker instead of guessing or overwriting work.

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
- When showing image previews, save the image in the project and attach the latest version directly in every review message so it works on mobile. Do not rely on an earlier preview, an OS temp file, or a `C:\...` local path; those are backups only and are not sufficient by themselves.
- Avoid AI-sounding filler, generic travel copy, and exaggerated titles.
- Research factual claims before writing, especially transport, safety, laws, opening hours, and facilities.
- Prefer official sources first: tourism boards, venue sites, government pages, store/location search pages.
- Keep affiliate mentions light: about 80% useful guidance, 20% product recommendation at most.
- Do not say every Japanese convenience store has toilets. Phrase it as: many may have toilets, but availability depends on the store and on-site rules.
- Keep internal links aligned with current article titles.
- Run `next build` before committing site changes.
- Push completed work to GitHub after a clean build.
- After every new article is live, verify the production URL, images, canonical and sitemap, then inspect the URL in Search Console. If it is not indexed, request indexing once and record the date in the handoff. Do this without waiting for the user to ask, and do not repeatedly resubmit a URL already in Google's queue.

## Where To Look First

- Live handoff: `AI_HANDOFF.md`
- Content operating plan and quality gates: `100_Todo/plans/2026-07-24-okinawa-content-operating-plan.md`
- Content plan: `content/content-plan.md`
- SEO growth roadmap: `content/seo-growth-roadmap.md`
- Google status table: `content/google-seo-status.md`
- Affiliate product workflow: `content/affiliate-product-workflow.md`
- Blog posts: `content/blog/`
- Article loading and metadata: `lib/posts.ts`, `app/blog/[slug]/page.tsx`, `app/sitemap.ts`

## Current Site Status

- Site is deployed at `https://okinawafamilynotes.com`.
- The latest verified production build contains 34 articles and 53 static pages. The travel gear affiliate hub is live at `/okinawa-family-travel-gear`.
- `robots.txt` allows crawling.
- GA tag exists on the live site: `G-Z076ZYK89C`.
- Latest Search Console three-month report through 2026-07-22: 18 clicks, 400 impressions, 4.5% CTR and average position 8.
- Latest recorded GA4 seven-day data: 41 active users, 90 page views and 24 Organic Search sessions.
- Indexing and traffic are still early. Use the weekly scorecard instead of reacting to day-to-day changes.

## Recently Completed

- Published the convenience-store family shopping, beach packing, rental-car refueling, stroller, and child-seat guides.
- Created a six-image Facebook carousel for the child-seat guide with original generated scenes.
- Added the short URL `https://okinawafamilynotes.com/car-seat` and a mobile preview page.
- Kept generated social previews out of Google indexing.

## Recommended 30-Day Plan

Use a sustainable pace:

- 2 new articles per week.
- 1 old article upgrade per week, only when data or a clear content gap supports it.
- 2 short-video or carousel ideas per new article.
- Run one social-format experiment at a time and record the result before changing several variables.
- Add up to 3 to 5 Shopee affiliate products only when they naturally solve the article's problem.
- If the quality gate cannot be met for two consecutive weeks, reduce output instead of lowering standards.

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

## Next Decision Gate

Do not choose the next article from the old wish list alone. First:

1. Pull the missing Search Console query data.
2. Identify pages and queries sitting at positions 5–20.
3. Check whether existing pages already cover the same intent.
4. Update `content/seo-scorecard.md`.
5. Score candidate topics with the operating plan.

If the car-transport cluster still shows an uncovered query, evaluate `沖繩租車取車與還車流程` first. Otherwise compare Kokusai-dori with children, supermarket souvenir selection and airport return-day packing. The highest evidence-backed score wins.

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
2. Read `AI_HANDOFF.md` and continue from its last verified commit.
3. Check `git status --short` before editing and preserve existing changes.
4. Read the target article and nearby internal links.
5. Research externally before factual travel claims.
6. Keep changes within the assigned files.
7. Run `next build` when site output changes.
8. Update `AI_HANDOFF.md`, commit with a clear message, and push.

## Codex Handoff

If Codex takes over:

1. Read `AI_HANDOFF.md` and continue from its last verified commit rather than restarting strategy.
2. Check the worktree and preserve Claude Code or user changes.
3. Use open-seo-advisor and speak-human-tw when drafting SEO articles.
4. Keep the writing human, practical, and parent-focused.
5. Keep technical SEO changes conservative.
6. Update `AI_HANDOFF.md`, run the required checks, commit, and push.

