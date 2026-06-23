# Iconography

## Library

**Lucide** — the only icon library used across the system.

```
Library:  Lucide (https://lucide.dev)
Stroke:   1.5px
Style:    Outline only (no filled variants)
Corners:  Default rounding (Lucide default)
License:  ISC (free, commercial use)
```

No mixing icon libraries. No emoji in marketing materials. No custom icon illustrations unless Lucide doesn't have the concept — and even then, follow the fallback order below.

## Size table

| Context | Icon size | Pairs with text | Notes |
|---------|-----------|----------------|-------|
| Inline with body-sm (14px) | 14px | body-sm | Tight, metadata |
| Inline with body-md (16px) | 16px | body-md | Default inline |
| Inline with body-lg (18px) | 18px | body-lg | — |
| Button icon | 18px | button label | space-2 gap to label |
| Nav icon | 20px | nav label | — |
| Feature icon (in chip) | 20px | h4 heading | Inside 40×40 chip |
| Hero icon | 24px | — | Rare |
| Empty state | 48px | h3 + body-md | Centered, ink-300 |

## Color rules

| Context | Icon color |
|---------|-----------|
| Default | currentColor (inherits from text) |
| Feature chip | brand-600 icon on brand-50 background |
| Nav (default) | ink-500 |
| Nav (active) | brand-600 |
| On dark background | white or ink-100 |
| Disabled | ink-300 |
| Danger context | danger-600 |
| Success context | success-600 |

## The feature icon pattern

Used in feature cards and benefit lists:

```
┌──────────────────────────┐
│  ┌────────┐              │
│  │ 🔍 20px │  h4 Title   │
│  │ brand-600│             │
│  │ on       │  body-sm    │
│  │ brand-50 │  description│
│  │ r: md    │             │
│  └────────┘              │
│  40×40px chip             │
└──────────────────────────┘
```

Chip: 40×40px, background brand-50 (#FEF2F2), radius-md (10px). Icon: 20px, brand-600 (#D42027), centered.

## What we don't use

- **Emoji on marketing surfaces.** No 🚀🔥💪 in headlines, cards, or CTAs. Emoji is acceptable in Instagram stories, WhatsApp messages, and casual social captions only.
- **Other icon libraries.** No Font Awesome, no Heroicons, no Material Icons. Lucide only.
- **Filled icon variants.** Outline at 1.5 stroke, always.
- **Custom icon illustrations** unless absolutely necessary (see fallback below).
- **Animated icons.** Icons don't spin, bounce, or pulse.

## Custom icon fallback order

When Lucide doesn't have an icon for a concept:

1. **Find the closest Lucide icon** and use it. "Book" for textbook, "GraduationCap" for graduation, "Users" for class. Most concepts map.
2. **Compose from two Lucide icons** if a single one doesn't work (rare).
3. **Create a custom SVG** matching Lucide's style: 24×24 viewBox, 1.5px stroke, round joins, round caps, no fill. This is the last resort.
4. **Never use a raster icon.** Always SVG.

## Commonly used Lucide icons for Harv

| Concept | Icon name |
|---------|-----------|
| Subject/book | `Book`, `BookOpen` |
| Teacher | `User`, `GraduationCap` |
| Schedule/time | `Clock`, `Calendar` |
| Location | `MapPin` |
| Phone/contact | `Phone`, `MessageCircle` |
| WhatsApp | Custom (brand icon, not Lucide) |
| Achievement | `Award`, `Trophy` |
| Class/group | `Users` |
| Registration | `ClipboardList`, `UserPlus` |
| Subject: math | `Calculator` |
| Subject: science | `FlaskConical`, `Atom` |
| Subject: languages | `Languages`, `Globe` |
| Arrow/CTA | `ArrowRight`, `ChevronRight` |
