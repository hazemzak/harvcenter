# Typography

## Typeface

**Cairo** — Google Fonts, free, open-source. Designed for Arabic with excellent Latin support. Modern geometric sans-serif with a warm, approachable feel.

Cairo replaces the mixed bag of decorative Arabic fonts used across previous posts. One family for everything.

```
Font:    Cairo
Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
Source:  Google Fonts — https://fonts.google.com/specimen/Cairo
License: SIL Open Font License
```

## Type scale

| Token | Size | Line height | Weight | Letter spacing | Notes |
|-------|------|-------------|--------|----------------|-------|
| display-xl | 72px | 80px | 600 | -0.02em | Hero headlines (Latin only — Arabic doesn't use negative tracking) |
| display-lg | 56px | 64px | 600 | -0.02em | Secondary hero |
| h1 | 40px | 48px | 600 | -0.015em | Page titles |
| h2 | 32px | 40px | 600 | -0.015em | Section headings |
| h3 | 24px | 32px | 600 | -0.015em | Card titles, subsections |
| h4 | 20px | 28px | 600 | -0.015em | Small headings |
| body-lg | 18px | 28px | 400 | — | Lead paragraphs, hero subcopy |
| body-md | 16px | 24px | 400 | — | Default body text |
| body-sm | 14px | 20px | 400 | — | Captions, metadata |
| caption | 12px | 16px | 500 | — | Labels, timestamps |
| overline | 11px | 16px | 600 | +0.06em | Section kickers (Latin: uppercase; Arabic: no transform) |
| code | 14px | 20px | 400 | — | Mono (JetBrains Mono) |

## Weights used

| Weight | Value | When |
|--------|-------|------|
| Regular | 400 | Body text, descriptions |
| Medium | 500 | Captions, labels, UI elements |
| SemiBold | 600 | Headings, CTAs, emphasis |
| Bold | 700 | Hero headlines, key stats |

Never use 300 (Light) or 800/900 (Black). Cairo's Regular is already clean enough for body; going lighter reduces legibility on screens. Going heavier than Bold creates visual noise.

## 7 typography rules

### 1. Sentence case for Latin headlines
"How it works" — never "How It Works" or "HOW IT WORKS." The only exception: overline kickers of ≤3 words get uppercase with +0.06em tracking.

### 2. Arabic headlines stay natural
Arabic doesn't have a case distinction. Don't add letter-spacing to Arabic text — it breaks the connected letterforms. Arabic overlines use SemiBold weight instead of uppercase.

### 3. Maximum 3 sizes per composition
A social post, slide, or card should use at most 3 type sizes from the scale. Heading + body + caption. If you need a 4th, something is wrong with the hierarchy.

### 4. Line length
Body text maxes out at 680px (or ~65–75 characters). Arabic text can go slightly wider (~700px) due to character density. Never let text run full-width on desktop.

### 5. Weight creates hierarchy, not size
Within body text, use SemiBold (600) to emphasize, not a bigger font size. Size jumps are for structural hierarchy (heading vs. body), not inline emphasis.

### 6. No text shadows, no outlined text, no gradient text
Text is ink-900 on paper, or white on ink-900. Brand-600 for accent links. That's it. No glow, no stroke, no fill-gradient, no 3D text effects.

### 7. Heading spacing
Space above a heading = 2× the heading's line-height. Space below = 0.5× the heading's line-height. This creates a clear "belongs to what's below" rhythm.

## RTL considerations

- Cairo supports Arabic natively — no fallback needed
- Set `dir="rtl"` on Arabic content blocks
- Text alignment defaults to `start` (right for RTL, left for LTR) — never force `text-align: right` globally
- Numbers in Arabic text remain LTR — use `unicode-bidi: isolate` on number spans if needed
- For bilingual layouts (Arabic heading, English subtext), use `dir="auto"` on individual elements

## Pairings by context

| Context | Heading | Body | Overline |
|---------|---------|------|----------|
| Social post (Arabic) | h3 Bold | body-md Regular | overline SemiBold |
| Social post (Latin) | h3 SemiBold | body-md Regular | overline Uppercase |
| Marketing hero | display-lg Bold | body-lg Regular | overline Uppercase |
| Card | h4 SemiBold | body-sm Regular | caption Medium |
| Slide | h2 SemiBold | body-lg Regular | overline Uppercase |
| Instagram carousel | h3 Bold | body-md Medium | — |

## Font loading (web)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## When not to use Cairo

- Code blocks: use JetBrains Mono
- Legal/contract long-form PDFs: may use a serif (Noto Serif Arabic + Georgia) for readability at length — but this is rare and requires explicit override
- Embedded third-party widgets: match their font if Cairo isn't available
