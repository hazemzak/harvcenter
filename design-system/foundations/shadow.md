# Shadow

All shadows use low-opacity ink-900 (#1A2744). No colored shadows, no brand-tinted glows.

## Scale

| Token | Value | Usage |
|-------|-------|-------|
| none | none | Default — most elements have no shadow |
| xs | 0 1px 2px rgba(26, 39, 68, 0.04) | Subtle lift on hover |
| sm | 0 1px 3px rgba(26, 39, 68, 0.06), 0 1px 2px rgba(26, 39, 68, 0.04) | Cards resting on surface |
| md | 0 4px 12px rgba(26, 39, 68, 0.06), 0 2px 4px rgba(26, 39, 68, 0.04) | Dropdowns, popovers |
| lg | 0 12px 32px rgba(26, 39, 68, 0.08), 0 4px 8px rgba(26, 39, 68, 0.04) | Modals, dialogs |
| xl | 0 24px 48px rgba(26, 39, 68, 0.10), 0 8px 16px rgba(26, 39, 68, 0.06) | Toast notifications, floating panels |

## 5 rules

1. **Default is none.** Most elements don't need shadow. The lift between paper (#FAFAF8) and surface (#FFFFFF) already creates visual separation for cards.
2. **Add xs on hover** for interactive cards — gives tactile feedback without being dramatic.
3. **Reserve md and above** for elements that float above the page (dropdowns, modals, toasts). Cards sitting in a grid don't need md shadow.
4. **No colored shadows.** No `box-shadow: 0 4px 12px rgba(212, 32, 39, 0.3)`. Shadows are always neutral ink.
5. **No inner shadows.** No `inset` shadows on inputs or cards. Use borders (line token) instead.
