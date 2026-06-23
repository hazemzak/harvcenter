# Harv Design System

**Harv | مركز تعليمي** — معاك للنهاية

The single source of truth for every asset Harv ships: social media posts, website, presentations, WhatsApp broadcasts, flyers, and ads.

---

## File tree

```
design-system/
├── README.md                  ← you are here
├── CLAUDE.md                  ← read-order + rules for LLMs
├── BRAND-SUMMARY.md           ← one-page brand snapshot
├── foundations/
│   ├── brand.md
│   ├── voice.md
│   ├── vocabulary.md
│   ├── color.md
│   ├── typography.md
│   ├── spacing.md
│   ├── radius.md
│   ├── shadow.md
│   ├── motion.md
│   ├── iconography.md
│   └── imagery.md
├── tokens/
│   ├── tokens.json
│   ├── tokens.css
│   └── tailwind.preset.js
├── logo/
│   ├── mark.svg
│   ├── mark-inverse.svg
│   ├── wordmark.svg
│   ├── lockup-horizontal.svg
│   ├── lockup-stacked.svg
│   ├── favicon.svg
│   └── usage.md
├── components/
│   ├── README.md
│   ├── utils.ts
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   ├── feature-card.tsx
│   ├── badge.tsx
│   ├── nav.tsx
│   ├── hero.tsx
│   ├── testimonial.tsx
│   ├── cta-section.tsx
│   ├── stat.tsx
│   └── animated.tsx
├── voice/
│   ├── examples.md
│   └── homepage-copy.md
├── applications/
│   ├── web.md
│   ├── presentations.md
│   ├── social-instagram.md
│   ├── social-linkedin.md
│   ├── email.md
│   ├── infographics.md
│   └── ads.md
└── assets/
    ├── patterns/
    │   ├── grid.svg
    │   └── brand-wash.svg
    └── templates/
        ├── README.md
        ├── social-posts/          ← real shipped assets
        └── marp-theme.css
```

## Quick-start

- **Adding a social media post?** Start with `applications/social-instagram.md` → pick a template → use `tokens/tokens.css` for colors.
- **Building a web page?** Read `applications/web.md` → grab components from `components/`.
- **Writing copy?** Read `foundations/voice.md` → check `voice/examples.md` for do/don't pairs.
- **Making a deck?** Use `applications/presentations.md` and the Marp theme at `assets/templates/marp-theme.css`.
- **Feeding this to an LLM?** Upload the folder and point it to `CLAUDE.md` first.

## Principles

1. **One color, one font.** Red #D42027 and Cairo. That's it.
2. **Speak to the student, not the parent.** Second person, Egyptian Arabic on social, MSA when formal.
3. **Real photos only.** No AI-generated content, no Harvard campus imagery, no stock.
4. **Clean over cluttered.** Whitespace is the new decoration. No gold borders, no 3D renders.
5. **Every claim gets a number.** "ناجح" is banned; "92% نسبة نجاح" is required.
6. **Sentence case.** No Title Case, no ALL CAPS except overlines ≤3 words.
7. **Consistent templates.** Same layout system for every teacher card, every announcement, every schedule post.
8. **The H stands alone.** Flat red H mark — no graduation cap, no stars, no ornamental framing.
