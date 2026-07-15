# Shopee Affiliate Product Workflow

Updated: 2026-07-15

This file defines how Okinawa Family Notes handles product research, affiliate placement, and short-video product angles. The goal is to avoid random product stuffing and make affiliate links useful for family travelers.

## Core Principle

Do not start from products. Start from a family-travel problem.

Good flow:

Problem -> practical article -> product category as solution -> optional affiliate link

Bad flow:

Product -> forced article -> sales pitch -> weak trust

## Roles

| Role | Owner | Responsibility |
| --- | --- | --- |
| Strategy lead | Codex | Decide weekly topics, SEO angle, article structure, product category fit, final review |
| Research helper | Claude Code | Build candidate product category list, gather Shopee search keywords, note pros/cons, avoid final claims without review |
| Human owner | wei96 | Pick actual Shopee affiliate links from candidate categories, confirm products are acceptable, publish videos |
| Final checker | Codex | Check tone, article usefulness, product placement, internal links, build, commit, push |

Codex is the main controller. Claude Code is auxiliary. Claude Code should not independently redesign the site, change monetization strategy, or push affiliate-heavy content without review.

## Product Research Workflow

### Step 1: Codex chooses article topic

For each article, Codex defines:

- Main reader pain point
- Search intent
- 3 to 5 product categories that naturally solve the problem
- Short-video hooks

Example:

Article: `沖繩便利商店親子採買攻略`

Pain point:
- Kids get hungry, hands get sticky, trash piles up, wet clothes have nowhere to go, parents need a quick reset stop.

Product categories:
- Snack container
- Small wet wipes
- Waterproof trash bag / zip bag
- Wet bag
- Packing cubes

### Step 2: Claude Code builds a candidate table

Claude Code should create or update a table like this:

| Problem | Product category | Shopee search keyword | Why it fits | Risk / avoid |
| --- | --- | --- | --- | --- |
| Snacks spill in the rental car | Kids snack container | `兒童零食盒 防漏` | Keeps snacks portioned and easier to clean | Avoid saying it is leak-proof unless product page proves it |
| Trash piles up in the car | Waterproof small trash bag / zip bag | `旅行垃圾袋 防水` | Temporary storage for wrappers and wet wipes | Avoid encouraging trash left in rental car |
| Wet swimwear has nowhere to go | Wet bag | `濕衣袋 防水 旅行` | Useful after beach, pool, or rain | Avoid claiming every bag is fully waterproof |

Claude Code should not choose one final product as `best`. It only prepares candidates.

### Step 3: wei96 picks actual products

The human owner chooses actual Shopee affiliate items based on:

- Price not too high
- Product photos clear
- Reviews look normal
- Seller looks reliable
- Product really matches the article problem

Do not pick medical, safety-critical, or legally sensitive products without extra checking.

### Step 4: Codex writes placement copy

Affiliate placement should sound like this:

Good:

> 如果你是租車自駕，我會把小包濕紙巾、夾鏈袋、零食分裝盒先放在車上。這些不是必買神器，但真的能讓後座少亂一次。

Avoid:

> 這款超好用一定要買，沒買會後悔。

## Product Category Pool

Use this as the starting pool. Add only when the product solves a clear travel problem.

| Travel problem | Product category | Article fit | Short-video angle |
| --- | --- | --- | --- |
| Snacks spill in car | Kids snack container | Convenience store, rental car, packing list | `不要讓後座變成餅乾屑現場` |
| Sticky hands / messy seats | Small wet wipes | Convenience store, packing list, beach | `小孩吃完東西，沒有濕紙巾真的會崩潰` |
| Trash from snacks / tissues | Small trash bag / zip bag | Rental car, convenience store, last day | `租車最怕不是開錯路，是車上垃圾失控` |
| Wet swimwear / dirty clothes | Wet bag | Beach, rainy day, packing list | `海邊玩完，濕衣服不要直接丟行李箱` |
| Phone near water | Waterproof phone pouch | Beach, rainy day, packing list | `去海邊手機最怕這件事` |
| Messy suitcase | Packing cubes / compression bags | Packing list, last day, family hotel | `一家人的行李不要全部混在一起` |
| Kid sleeps in car | Kids neck pillow | Rental car, itinerary, long drive | `北部車程長，小孩睡著頭亂晃怎麼辦` |
| Navigation battery drain | Car charger / power bank | Rental car, last day | `導航開整天，手機沒電會很麻煩` |
| Rainy travel | Kids raincoat / foldable umbrella | Rainy day, packing list | `沖繩下雨，不要只靠飯店借傘` |
| Beach sun exposure | Rash guard / sun hat | Beach guide, packing list | `海邊不是只有擦防曬` |

## Article Product Placement Rules

- Max 3 to 5 product categories per article.
- Put product suggestions after useful guidance, not in the opening paragraph.
- Mention categories first, affiliate links second.
- Use plain wording: `可以考慮`, `我會準備`, `比較不狼狽`.
- Avoid fake certainty: `最強`, `必買`, `保證`, `第一名`.
- Do not recommend food, medicine, sunscreen, safety seats, or legal/safety-critical items casually. These need source-backed care.

## Short Video Product Script Formula

Use product as the solution, not as the opening sales pitch.

Template:

```text
Hook:
帶小孩去沖繩自駕，最怕的不是喊餓，是後座開始失控。

Problem:
餅乾屑、濕紙巾、包裝紙，一下子就把車弄亂。

Product solution:
我會先準備三個小物：零食分裝盒、小包濕紙巾、夾鏈袋。

Why it helps:
東西不貴，但可以讓車上少亂一次，也比較不怕還車前收不完。

CTA:
完整親子自駕和採買清單，我整理在網站。
```

## Weekly Operating Rhythm

| Day | Codex | Claude Code | wei96 |
| --- | --- | --- | --- |
| Monday | Pick 3 topics and product categories | Prepare candidate keyword table | Confirm which topic feels most useful |
| Tuesday-Thursday | Draft / edit articles | Gather product candidate notes | Pick actual Shopee links |
| Friday | Review affiliate placement and scripts | Fix requested details | Prepare video materials |
| Weekend | Check metrics and decide next week | No independent strategy changes | Publish / repost / collect numbers |

## What To Ask Claude Code

Use this prompt:

```text
Read CLAUDE.md and AI_COLLABORATION.md first.
For the next article topic, do not write the article yet.
Create a product candidate table only.
For each family-travel pain point, suggest 3 to 5 Shopee search keywords, explain why the category fits, and list risks or claims to avoid.
Do not pick final products. Do not add affiliate links. Do not change site code.
```

## What To Bring Back To Codex

After Claude Code creates the candidate table, bring it back to Codex for:

- Filtering weak product ideas
- Turning product categories into natural article sections
- Writing short-video scripts
- Checking SEO and tone
- Deciding whether links belong in the article
