# Spacing

Base unit: **4px**. Every spacing value in the system is a multiple of 4.

## Scale

| Token | Value | Common use |
|-------|-------|-----------|
| space-0 | 0px | Reset |
| space-0.5 | 2px | Hairline gaps (icon to label in tight UI) |
| space-1 | 4px | Inline padding, icon gaps |
| space-1.5 | 6px | Badge padding |
| space-2 | 8px | Button icon gap, input padding-y |
| space-3 | 12px | Card padding (compact), button padding-x (small) |
| space-4 | 16px | Card padding (default), gutter mobile, input padding-x |
| space-5 | 20px | — |
| space-6 | 24px | Card padding (large), gutter desktop |
| space-8 | 32px | Section sub-gap, card gap in grid |
| space-10 | 40px | Section heading to content |
| space-12 | 48px | Section spacing (mobile) |
| space-16 | 64px | Section spacing (desktop) |
| space-20 | 80px | Large section spacing |
| space-24 | 96px | Hero padding, major section breaks |
| space-32 | 128px | — |
| space-40 | 160px | Page top/bottom padding |

## Section rhythm

A standard marketing section follows this vertical rhythm:

```
overline          ← space-3 below
h2 heading        ← space-4 below
body paragraph    ← space-10 below
[content block]   ← space-16 below (desktop) / space-12 (mobile)
[next section]
```

## Grid and container

| Token | Value | Description |
|-------|-------|-------------|
| container-max | 1200px | Maximum content width |
| container-reading | 680px | Maximum width for long-form text |
| gutter-mobile | 16px | Horizontal padding on mobile |
| gutter-desktop | 24px | Horizontal padding on desktop |

Grid: 12-column on desktop (1024px+), collapses to single-column below. No complex grid systems — keep layouts simple.

## Internal padding per element

| Element | Padding | Notes |
|---------|---------|-------|
| Button (default) | 10px 20px | Vertical center, enough click area |
| Button (small) | 6px 12px | Compact contexts |
| Button (large) | 14px 28px | Hero CTA |
| Input | 10px 16px | Match button height |
| Card | 24px | All sides equal |
| Card (compact) | 16px | Dense layouts |
| Badge | 4px 10px | Tight |
| Modal | 24px | Body area; header/footer may differ |
| Nav | 0 24px | Horizontal only; vertical handled by height |
| Social post (Instagram) | 48px | Safe area for 1080×1350 |

## Gap conventions

| Context | Gap | Token |
|---------|-----|-------|
| Cards in a grid | 24px | space-6 |
| Items in a list | 12px | space-3 |
| Form fields | 16px | space-4 |
| Buttons in a row | 12px | space-3 |
| Icon + label (inline) | 8px | space-2 |
| Section content blocks | 32px | space-8 |

## 4 core rules

1. **Never use arbitrary spacing.** Every gap is a token from the scale. No "13px because it looked right."
2. **Vertical rhythm beats horizontal.** Get the vertical spacing right first; horizontal usually handles itself via flex/grid.
3. **Mobile first.** Spacing compresses on mobile — sections go from space-16 to space-12, card padding from 24px to 16px. Don't keep desktop spacing on mobile.
4. **Consistency within a composition.** If cards in a grid use space-6 gaps, every grid on the page uses space-6 gaps. Don't mix.
