# Okinawa Family Notes Live Handoff

Last updated: 2026-07-21 (Claude Code, after short-video review)

This is the current operational handoff between Codex and Claude Code. Keep it short and update it whenever ownership changes, work pauses, or a task is completed.

## Current State

- Active owner: none; Claude Code finished the short-video review on 2026-07-21 and is waiting for the user's publish decision.
- Shared branch: `main`
- Latest pushed commit: see the preview path-fix commit on `main` (after `b5c8311 Use selected island chill music`).
- Last full site build: passed with Next.js 15.5.20 on 2026-07-21.
- Live site: `https://okinawafamilynotes.com`

## Just Completed

- Published `/blog/okinawa-summer-family-packing-list` and `/blog/okinawa-north-family-day-trip` with article images and internal links.
- Reworded the summer packing article so carry-on liquid rules use concrete examples such as drinks, sunscreen, lotion, toothpaste, and sprays.
- Created the northern itinerary carousel and several short-video preview iterations.
- Current selected preview uses the island-chill music version from commit `b5c8311`.
- Google Analytics check on 2026-07-20 showed 40 active users, 90 page views, and 8 Organic Search sessions in the previous 7 days.
- Search Console showed 5 clicks, 153 impressions, 3.3% CTR, and average position 10.5 for data through 2026-07-18.
- Manual indexing requests were successfully submitted for both new article URLs on 2026-07-20.

## Next Task

Waiting on the user:

- The user must approve or reject the D island-chill northern itinerary short video before any Facebook or Instagram publishing.
- After approval, the publishing agent should use the download link on `https://okinawafamilynotes.com/previews/okinawa-north-video/index.html`.
- If rejected, iterate on music or scenes per user feedback before returning to the next blog article.

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
