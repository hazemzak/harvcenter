# CLAUDE.md — Harv Brand & Design System Project

Read this file first. It orients you to the full project, not just the design system.

---

## What this project is

**Harv (هارف)** is an educational center in Nasr City, Cairo, preparing students aged 14–18 for thanawiya amma and baccalaureate exams. This repo contains:

1. A complete **design system** (foundations, tokens, components, voice, applications)
2. **Social media assets** — teacher cards, panini-style collectible cards, posting templates
3. A **FIFA-style lineup video** project (Remotion + Seedance 2.0)
4. A **student-facing website** prototype (static HTML, deployed to Netlify)
5. **Competitor research** scraped brand data
6. Reusable **Claude Code skills** for design system creation

---

## File tree (what lives where)

```
002_Harvrd_DesignSystem/
├── CLAUDE.md                    ← YOU ARE HERE
├── design-system/               ← The design system (start with design-system/CLAUDE.md)
│   ├── CLAUDE.md                ← Design rules, load order, non-negotiables
│   ├── BRAND-SUMMARY.md         ← One-page brand identity
│   ├── foundations/             ← Color, typography, voice, imagery, spacing, etc.
│   ├── tokens/                  ← tokens.json, tokens.css, tailwind.preset.js
│   ├── components/              ← React/TSX components (button, card, hero, nav, etc.)
│   ├── applications/            ← Surface-specific guides (Instagram, web, ads, email)
│   ├── logo/                    ← mark.png, wordmark.svg, usage.md
│   └── voice/                   ← Copy examples, homepage copy
├── designs/                     ← Shipped social post HTML files
│   ├── post-01-teacher-card.html
│   ├── post-02-enrollment.html
│   ├── post-03-qr-code.html
│   ├── cover-photo.html
│   ├── student-hub.html         ← Full landing page prototype
│   ├── client-presentation.html
│   └── teachers/                ← 31 teacher photos
├── panini-cards/                ← Collectible teacher cards (World Cup style)
│   ├── rendered/                ← 22 final PNG cards
│   ├── gifs/                    ← 21 animated card GIFs
│   ├── photos/                  ← Source photos and icons
│   ├── video/                   ← Remotion video rendering pipeline
│   └── *.html                   ← Card templates (card-back, post-teaser, download)
├── social-posts/                ← One-off social media posts with captions
├── lineup-video/                ← FIFA-style teacher lineup video (Remotion)
│   ├── src/                     ← React components (FormationBoard, LineupVideo)
│   ├── public/teachers/         ← Teacher photos for video
│   └── SEEDANCE_PROMPTS.md      ← AI video generation prompts per teacher
├── brands/                      ← Competitor research (scraped homepage data)
├── deploy/                      ← Netlify deployment folder
├── archive/                     ← Old brand assets (pre-rebrand)
│   └── old-brand/               ← Retired designs, old Facebook posts, old photos
├── Inspo/                       ← Reference material, logos, teacher info
├── Skills/                      ← Portable Claude Code skills
│   ├── design-system-creator/
│   ├── design-template-skill-creator/
│   └── gstack/                  ← Garry Tan's 23-skill development toolkit
└── .firecrawl/                  ← Scraped web research
```

---

## Non-negotiables (inherited from design-system/CLAUDE.md)

1. **Primary color: #D42027 (red).** Navy ink #1A2744. Paper #FAFAF8. Gold #C9993A only in logo.
2. **One typeface: Cairo.** No exceptions.
3. **Speak to the student (أنت), not the parent (ابنك).** Egyptian Arabic on social, MSA formal.
4. **Real photography only.** No AI humans, no Harvard campus, no stock.
5. **No hype.** Every claim gets a number or a name.
6. **Sentence case.** No Title Case, no ALL CAPS except overlines ≤3 words.
7. **Logo is flat.** No 3D, no glow, no gold borders. Cap + stars + tassel are integral.

---

## When producing any asset

1. Read `design-system/CLAUDE.md` first for the load order.
2. Read the relevant `applications/*.md` file for the surface you're designing.
3. Use `tokens/tokens.json` or `tokens/tokens.css` for exact values.
4. RTL layout for all Arabic content. Logo top-right, text right-aligned, photos left.
5. Every post gets a caption: `.txt` file + embedded in HTML with copy button.
6. After a post is approved, ask whether to render as PNG.

---

## Deployment

- **Netlify site:** `harvcenter.netlify.app`
- **Publish directory:** `deploy/`
- **Site ID:** `43c9686c-3a38-481f-9e6c-9369711bedfd`

---

## Key contacts

- **WhatsApp:** 01064949395
- **Location:** مدينة نصر — المنطقة التاسعة
- **Tagline:** معاك للنهاية

---

## Active workstreams

- **Panini cards:** 22 cards rendered, posting schedule needed
- **Lineup video:** 10/13 teacher photos ready, Seedance prompts written, 1 video rendered
- **Website:** student-hub.html prototype ready, needs deployment
- **Competitor research:** ongoing — Egyptian education market analysis
