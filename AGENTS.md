# AGENTS.md

Before working in this repository, read:

1. `AI_COLLABORATION.md`
2. `AI_HANDOFF.md`
3. `content/content-plan.md`
4. `content/seo-growth-roadmap.md`

Treat `origin/main` plus `AI_HANDOFF.md` as the shared source of truth with Claude Code. Check `git status --short` before editing, preserve existing work, do not edit files claimed by Claude Code, and update the handoff before committing and pushing completed work.

## Quick Code

When the user's entire message is exactly `2`, treat it as: sync safely, read `AI_COLLABORATION.md` and `AI_HANDOFF.md`, claim the recorded next task as Codex, continue it without asking the user to repeat context, then update the handoff, run required checks, commit, and push. Do not trigger this rule when `2` appears inside another sentence or list.

## Visible Browser Handoff

- When the user must sign in, enter credentials, fill personal or payment information, solve a CAPTCHA, or inspect a page, bring the target page to the visible foreground in the Codex in-app browser and verify its current URL and title.
- Do not say a page is open when it only exists in a background automation tab. If the user says they cannot see it, navigate the tab they can currently see to the target page and verify again.
- For sensitive information, let the user type directly into the visible page. Do not ask them to paste full personal, banking, password, or verification data into chat.
- When the user is working from a phone, every preview and approval artifact must be phone-accessible. Do not rely on `localhost`, `127.0.0.1`, `file://`, Windows paths, or background-only tabs as the handoff. Show images directly in chat or provide a verified HTTPS URL, and check the mobile viewport before asking for approval.
- If a sign-in or CAPTCHA must be completed while the user is on a phone, first surface the exact page the user can see and confirm that it opens on mobile. Keep all passwords, verification codes, personal details, and payment information user-entered.
