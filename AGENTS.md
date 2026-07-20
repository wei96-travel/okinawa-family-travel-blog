# AGENTS.md

Before working in this repository, read:

1. `AI_COLLABORATION.md`
2. `AI_HANDOFF.md`
3. `content/content-plan.md`
4. `content/seo-growth-roadmap.md`

Treat `origin/main` plus `AI_HANDOFF.md` as the shared source of truth with Claude Code. Check `git status --short` before editing, preserve existing work, do not edit files claimed by Claude Code, and update the handoff before committing and pushing completed work.

## Quick Code

When the user's entire message is exactly `2`, treat it as: sync safely, read `AI_COLLABORATION.md` and `AI_HANDOFF.md`, claim the recorded next task as Codex, continue it without asking the user to repeat context, then update the handoff, run required checks, commit, and push. Do not trigger this rule when `2` appears inside another sentence or list.
