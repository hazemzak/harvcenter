# Web — web.md

Rules for Harv's website and landing pages.

---

## Global primitives

| Property | Value |
|----------|-------|
| Max container width | 1200px |
| Gutter (desktop) | 24px |
| Gutter (mobile) | 16px |
| Reading max-width | 680px |
| Paper | #FAFAF8 |
| Surface (cards) | #FFFFFF |
| Section padding (desktop) | 96px top/bottom |
| Section padding (mobile) | 64px top/bottom |
| Direction | RTL for Arabic, LTR for English |

## Nav bar

- Sticky top, white background (#FFFFFF), 1px bottom border (#E8E7E4)
- Left: H mark (red, 32px height) + "Harv" wordmark
- Right: navigation links (Cairo SemiBold, 14px, ink-700) + primary CTA button (red, pill)
- Mobile: hamburger → drawer from right (slide-in, 240ms)
- Height: 64px desktop, 56px mobile
- RTL: mark on right, nav on left

## Hero section

- Full-width, navy (#1A2744) background
- Overline: Cairo SemiBold, 11px, red, uppercase, +0.06em tracking
- Headline: Cairo Bold, 40–56px, white, sentence case, max 2 lines
- Subheadline: Cairo Regular, 18px, white/80%, max 2 lines, max-width 520px
- Primary CTA: red pill button, white text
- Secondary CTA: ghost/outline, white border, white text
- Optional: real student photo on the right (desktop only), background-removed
- No gradient overlays, no particle backgrounds, no video heroes

## Section patterns

### 1. Why Harv (features)
3-column grid of feature cards. Each card: Lucide icon in a red/10% chip (40×40, radius-md), Cairo SemiBold title (18px), Cairo Regular body (14px, ink-600). Navy ink text on off-white.

### 2. How it works
3-step horizontal layout. Each step: step number (Cairo Bold, 48px, red/20%), title + 1-line description. Connected by a thin red line.

### 3. Teachers (social proof)
Horizontal scroll or grid of teacher cards. Each: circular photo (120px), name (Cairo SemiBold, 16px), subject (Cairo Regular, 14px, ink-500). No bios — just name and subject.

### 4. Results (stats)
Big number stats in a row: "92%" / "23 طالب فوق 90%" / "14 مدرس". Cairo Bold numbers (48px, red), label below (Cairo Regular, 14px, ink-600).

### 5. Subjects offered
Grid of subject cards. Each: subject name + curriculum (thanawiya/bac) + teacher name. Clean, scannable, no icons.

### 6. Final CTA band
Navy background, full-width. Headline (Cairo Bold, 32px, white) + CTA button (red pill) + WhatsApp link. One line, one action.

## Footer

- Navy background (#1A2744)
- H mark (white variant) + "Harv | مركز تعليمي"
- Contact: WhatsApp number, location address
- Social links: Instagram, Facebook icons
- Copyright line
- No newsletter signup (WhatsApp is the channel)

## Pages every Harv website needs

1. **Home** — hero + why + how + teachers + results + CTA
2. **Subjects (المواد)** — grid of subjects with teacher names and schedules
3. **About (عن Harv)** — story, team, location map
4. **Contact (تواصل معانا)** — WhatsApp link, location, working hours
5. **Results (النتائج)** — historical pass rates, student names (with permission)

## What we never do on web

- Auto-playing video or audio
- Pop-ups or exit-intent overlays
- Parallax scrolling
- Marquee text
- Chat widgets (WhatsApp link is the CTA)
- Stock photography
- AI-generated imagery
- Gradient backgrounds
- More than 2 CTAs visible at once

## Accessibility baseline

- All images have alt text (Arabic)
- Color contrast: 4.5:1 minimum for body text, 3:1 for large text
- Focus-visible on all interactive elements
- Semantic HTML: proper heading hierarchy
- Skip-to-content link
- `lang="ar"` and `dir="rtl"` on the html element for Arabic pages
