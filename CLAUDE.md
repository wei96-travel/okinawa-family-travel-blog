# CLAUDE.md

Before working on this repository, read:

1. `AI_COLLABORATION.md`
2. `AI_HANDOFF.md`
3. `content/content-plan.md`
4. `content/seo-growth-roadmap.md`
5. `content/google-seo-status.md`

Key rule: this site is currently in the Traditional Chinese traffic-building phase. Do not prioritize multilingual expansion, affiliate-button optimization, or major redesign before the core content and indexing foundation is stronger.

Always check `git status --short` before editing. Treat `origin/main` plus `AI_HANDOFF.md` as the shared source of truth with Codex. Do not edit files claimed by Codex in the handoff. Update the handoff, run `next build`, commit, and push before returning ownership.

## Staging Rule

The working tree is shared with the user, with Codex, **and with any other Claude Code session the user has open at the same time**. It can therefore hold edits that are unfinished, unapproved, or simply not yours — including edits made by another instance of you, which you have no way to see or ask. A dirty file is not a file that is ready to publish.

1. **Never `git add -A`, `git add .`, or `git commit -a`.** Stage explicit paths only, one by one.
2. **Before every commit run `git status --short` and confirm each staged path is a file you edited in this session.** If anything else is staged, unstage it.
3. **Leave working-tree changes you did not make.** Do not commit them, revert them, or stash them. Say in your reply that they are there and untouched.
4. **You cannot tell "finished but unpushed" from "half-written" by looking.** Never assume dirty means ready. Ask, or leave it.
5. If you publish something you did not write, say so immediately, record it in `AI_HANDOFF.md` with what is and is not known, and do not rewrite history to hide it.

This rule exists because on 2026-09-07 a `git add -A content/` swept fifteen Shopee affiliate links from the working tree into an unrelated commit and pushed them live. They had been written by a second Claude Code session running at the same time, whose approval status this session could not determine — which is exactly why foreign changes must be left alone rather than judged from the outside.

## Quick Code

When the user's entire message is exactly `1`, treat it as: sync safely, read `AI_COLLABORATION.md` and `AI_HANDOFF.md`, claim the recorded next task as Claude Code, continue it without asking the user to repeat context, then update the handoff, run required checks, commit, and push. Do not trigger this rule when `1` appears inside another sentence or list.
