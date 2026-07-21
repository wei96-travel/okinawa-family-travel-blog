# Okinawa Family Notes Live Handoff

Last updated: 2026-07-21

This is the current operational handoff between Codex and Claude Code. Keep it short and update it whenever ownership changes, work pauses, or a task is completed.

## Current State

- Active owner: none; ready for Claude Code to take over when the user sends quick code `1`.
- Shared branch: `main`
- Latest pushed commit: `b5c8311 Use selected island chill music`
- Last full site build: passed with Next.js 15.5.20 on 2026-07-20.
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

Claude Code should take over the northern itinerary short-video review:

- Run `git pull --ff-only origin main` when the worktree is safe, then read this handoff and the latest preview files.
- Review `public/previews/okinawa-north-video/index.html` and the music video added by commit `b5c8311`.
- Verify that the preview loads on desktop and mobile, the selected music plays, all six scenes appear, and no image or audio path is broken.
- Report the preview result to the user first. Do not publish to Facebook or Instagram until the user explicitly approves it.
- Keep social production separate from the next blog-writing task.

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
