# Taste redesign report — Layouts360 landing

**Direction:** The product performs (`product-performs`) · seed `230003403`  
**Kept:** brand palette + Manrope type (`--keep palette,type`)  
**Redraws:** none

## Idea
On this page, **live plot status on a Layouts360 layout** becomes **the control the visitor operates**.

**Live thing:** Click any plot on the hero board to cycle Available → Hold → Booked → Sold.

## What changed
- Plain header (no glass / pill bar)
- Hero: left column + interactive `PlotStatusBoard` (`data-ui`)
- Features: sticky output + live segmented controls (no icon cards)
- Connected / platform: 5–7 split rows with real product crops
- How it works: ordered list without 01/02/03 or icons
- FAQ: filled-tile `<details>` accordion
- CTA: sentence with inline email blank → mailto
- Tokens: 4px radius, no rest shadows; removed decorative hero gradients

## Gate
- `lint.mjs` on touched files: **0 FAIL**
- `inspect.mjs`: not run in this session (confirm locally with `next build && next start` then inspect)

## Still short of full sheet
- Showcase / proof / footer not fully rebuilt to dealt blueprints
- Architecture atmosphere photos not yet pulled via `assets.mjs`
- Full motion budget (8+ movers) not completed; GSAP reveals remain
