# Okinawa Family Notes Live Handoff

Last updated: 2026-07-21 (Claude Code, published two travel-gear/car-transport articles)

This is the current operational handoff between Codex and Claude Code. Keep it short and update it whenever ownership changes, work pauses, or a task is completed.

## Current State

- Active owner: none; Claude Code published two new articles on 2026-07-21. The northern short video is still awaiting the user's publish decision (separate track).
- Shared branch: `main`
- Latest pushed commit: see the two-article commit on `main` (after `26fe1ab`); exact hash recorded in the follow-up documentation commit.
- Last full site build: passed with Next.js 15.5.20 on 2026-07-21 (44 static pages).
- Live site: `https://okinawafamilynotes.com`

## Just Completed

- Published two new articles on 2026-07-21 (Claude Code, no images yet, text-only like other image-less posts):
  - `/blog/okinawa-family-medicine-sunscreen-repellent` (旅遊用品): medicine carry limits (MHLW + Japan Customs), reef-safe sunscreen, mosquito-repellent age tiers (Taiwan CDC). Internal links to summer packing list, beach packing list, convenience-store guide.
  - `/blog/okinawa-family-parking-guide` (租車交通): free lots at Churaumi/Kouri, three coin-parking types, Naha hotel fees, Kokusai-dori Sunday transit-mall restriction. Internal links to rental-car, refueling, drive-toilet, last-day, north-day-trip, Churaumi, Kouri.
- Updated `content/content-plan.md`: marked #21 done; added #28 parking as a car-transport cluster fill (not an original numbered item, user-approved).
- Content audit (strict) passed: 0 critical issues. `next build` passed (44 static pages).
- Earlier on 2026-07-21: fixed the northern short-video preview media 404 (absolute paths).
- Prior context: summer packing list and north day-trip articles published with images; GA on 2026-07-20 showed 40 active users / 90 page views / 8 organic sessions (7 days); Search Console 5 clicks, 153 impressions, 3.3% CTR, avg position 10.5 through 2026-07-18; manual indexing submitted for the two prior article URLs on 2026-07-20.

## Next Task

Two open tracks:

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
