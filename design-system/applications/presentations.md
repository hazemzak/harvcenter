# Presentations — presentations.md

Rules for slide decks — open days, parent meetings, internal presentations.

---

## Defaults

| Property | Value |
|----------|-------|
| Aspect | 16:9 |
| Background options | Off-white (#FAFAF8) or navy (#1A2744) |
| Font | Cairo (all weights) |
| Slide footer | H mark (24px) + "Harv | مركز تعليمي" + slide number |
| Direction | RTL |

## Slide templates

### 1. Title slide
- Navy background
- H mark centered, 80px
- Presentation title: Cairo Bold, 40px, white
- Subtitle/date: Cairo Regular, 18px, white/70%
- No imagery — clean and focused

### 2. Section divider
- Navy background
- Section title: Cairo Bold, 48px, white, right-aligned
- Red horizontal line (4px, 120px wide) above title
- Slide number bottom-left

### 3. Big number
- Off-white background
- Number: Cairo Bold, 96px, red
- Label: Cairo SemiBold, 20px, navy, below number
- Context line: Cairo Regular, 14px, ink-500

### 4. Three-column
- Off-white background
- 3 equal columns
- Each: title (Cairo SemiBold, 18px) + body (Cairo Regular, 14px)
- Optional Lucide icon above each title
- No borders between columns — spacing does the work

### 5. Photo + text
- Split layout: photo left (50%), text right (50%)
- Photo: real classroom/student photo, full bleed to edge
- Text side: off-white background, title + 3–4 bullets

### 6. Quote / testimonial
- Navy background
- Quote: Cairo Regular, 28px, white, italic not used (Arabic doesn't italicize well)
- Attribution: Cairo SemiBold, 16px, red
- Large quotation mark (") as a decorative element, red, 120px, top-right, 10% opacity

### 7. Closing CTA
- Navy background
- "عندك سؤال؟" or main CTA line: Cairo Bold, 36px, white
- WhatsApp number: Cairo SemiBold, 24px, red
- Location: Cairo Regular, 16px, white/70%
- H mark centered, 60px

## Rules

- Maximum 6 bullets per slide
- One idea per slide
- No transitions between slides (or "fade" only, 200ms)
- No clip art, no WordArt, no decorative borders
- Photos must be real — never stock, never AI
- No animations within slides
- Footer on every slide except title and closing

## What we never do in decks

- Walls of text (>40 words per slide)
- Sound effects or auto-advance
- Embedded video that auto-plays
- Branded slide borders or corner ornaments
- Multiple fonts on one slide
- Builds/animations that delay content

---

## Marp theme

See `assets/templates/marp-theme.css` for the complete Marp CSS theme using Harv brand tokens.
