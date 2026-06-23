# Radius

## Scale

| Token | Value | Usage |
|-------|-------|-------|
| none | 0px | Tables, full-bleed images, inline code |
| xs | 4px | Badges, small chips, tooltips |
| sm | 6px | Inputs, compact buttons |
| md | 10px | Default buttons, cards, modals, dropdowns |
| lg | 16px | Feature cards, image containers on paper |
| xl | 24px | Large hero cards, prominent CTAs |
| full | 9999px | Avatars, status dots, pill badges |

## Rules

### 1. Marketing CTAs use md (10px)
Not pill (full). The existing brand uses structured, rectangular-leaning buttons. Pill buttons feel too casual for an educational center that needs parent trust. md gives enough softness to feel modern without losing authority.

### 2. Product UI buttons also use md
Consistency across marketing and product. No split between "marketing uses pill, app uses square."

### 3. Consistency within a composition
If a card has radius-md, everything inside it (images, inner cards, buttons) uses md or smaller. Never put a radius-lg element inside a radius-sm container.

### 4. Exceptions
- **Avatars** (teacher photos in circles): always `full`
- **Logo mark**: no radius — the H shape defines its own edges
- **Images on paper background**: `lg` — the extra rounding lifts them off the page
- **Social post backgrounds**: `none` — they're full-bleed
