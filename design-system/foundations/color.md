# Color

## Brand scale

The brand color is red — extracted from the existing H logo mark. Primary sits at 600.

| Token | Hex | Usage |
|-------|-----|-------|
| brand-50 | #FEF2F2 | Tinted backgrounds, feature icon chips |
| brand-100 | #FEE2E2 | Hover states on light backgrounds, info banners |
| brand-200 | #FECACA | Borders on brand-tinted elements |
| brand-300 | #FCA5A5 | — |
| brand-400 | #F87171 | — |
| brand-500 | #EF4444 | — |
| **brand-600** | **#D42027** | **Primary — CTAs, logo mark, key accent highlights** |
| brand-700 | #B91C1C | Hover/pressed state on primary buttons |
| brand-800 | #991B1B | — |
| brand-900 | #7F1D1D | Deep emphasis on dark backgrounds |

## Ink scale (navy)

Text and dark UI elements. Derived from the navy backgrounds used across existing social posts.

| Token | Hex | Usage |
|-------|-----|-------|
| ink-100 | #E8EBF0 | Placeholder text on dark backgrounds |
| ink-200 | #C8CED9 | Disabled text, subtle borders |
| ink-300 | #A3ACBC | Caption text, metadata |
| ink-400 | #7D8AA0 | Secondary text |
| ink-500 | #5A6784 | Body text (secondary) |
| ink-600 | #3D4C6B | Body text (primary, lighter contexts) |
| ink-700 | #2B3A56 | Headings on light backgrounds |
| **ink-900** | **#1A2744** | **Primary text, dark backgrounds for social posts, nav bars** |

## Surfaces

| Token | Hex | Description |
|-------|-----|-------------|
| paper | #FAFAF8 | Page background — warm off-white, not clinical pure white |
| surface | #FFFFFF | Cards, modals, inputs — pure white for contrast lift against paper |
| line | #E5E7EB | Dividers, borders on paper |
| line-soft | #F3F4F6 | Subtle separators, alternating row backgrounds |

## Semantic

| Token | Light (100) | Strong (600) |
|-------|-------------|--------------|
| success | #E2F5EC | #1F9D6B |
| warn | #FBF2DC | #C08415 |
| danger | #FAE4E2 | #C8382F |
| info | #FEE2E2 | #D42027 |

## Where primary red goes

- Logo mark (the H)
- Primary CTA buttons (text is white)
- Accent underlines and highlights
- Active/selected states
- Notification badges and counters
- Key stats or numbers that need emphasis
- Overline decorative bars

## Where primary red does NOT go

- Large background fills (a full red-background section feels aggressive — use ink-900 navy instead for dark sections)
- Body text (use ink scale)
- Borders (use line tokens)
- Semantic error states (use danger tokens — they're similar but distinct)
- More than one element per visual hierarchy level (if the CTA is red, the icon next to it shouldn't be)

## Navy as dark background

The navy ink-900 (#1A2744) doubles as the dark background for social posts, hero sections, and premium-feeling layouts. On navy:
- Text is white (#FFFFFF) or ink-100 (#E8EBF0)
- Brand red pops as accent
- Gold (#C9993A) appears only within the logo mark (stars, tassel) — do not use gold as a general accent in layouts or text

## Text contrast

| Combination | Ratio | Pass |
|-------------|-------|------|
| ink-900 on paper | 14.2:1 | AAA |
| ink-700 on paper | 10.1:1 | AAA |
| ink-500 on paper | 5.8:1 | AA |
| ink-400 on paper | 4.1:1 | AA (large text only) |
| white on brand-600 | 5.2:1 | AA |
| white on ink-900 | 14.8:1 | AAA |
| brand-600 on paper | 5.6:1 | AA |
| brand-600 on ink-900 | 2.6:1 | Decorative only |

## Why this palette

The red comes from the existing brand — the H logo has been red since the center opened. It's recognized by students and parents. We kept it.

The navy comes from the dark backgrounds used across all social posts — it was already the brand's instinctive choice for "premium" and "serious." We formalized it as the ink scale.

Gold was removed from general use (layouts, text, borders) because it was the single biggest factor making the brand look dated and identical to every competitor in the Cairo center market. It is retained only within the logo mark itself (stars and tassel at #C9993A). Navy + red + white remains the foundation palette for all surfaces and layouts.

The warm off-white paper (#FAFAF8) replaces the pure white used on some posts. It feels calmer and more inviting — appropriate for a space where students spend their afternoons.
