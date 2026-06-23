# Components

React + Tailwind starters. Pair them with [`../tokens/tailwind.preset.js`](../tokens/tailwind.preset.js).

Intentionally thin — accessibility primitives, Harv styling, no bloat. Drop into a Next.js / Vite project, extend as needed.

## Dependencies

```bash
npm install react lucide-react class-variance-authority clsx tailwind-merge
```

Tailwind config:

```js
// tailwind.config.js
const brand = require('./design-system/tokens/tailwind.preset.js')
module.exports = {
  presets: [brand],
  content: ['./app/**/*.{ts,tsx,mdx}', './design-system/components/**/*.tsx'],
}
```

## Inventory

| Component | Use |
|-----------|-----|
| [button.tsx](button.tsx) | Primary / secondary / ghost / link |
| [input.tsx](input.tsx) | Text input + textarea, with label and error |
| [card.tsx](card.tsx) | Default card surface |
| [feature-card.tsx](feature-card.tsx) | Icon-chip + title + body card |
| [badge.tsx](badge.tsx) | Small status / category pill |
| [nav.tsx](nav.tsx) | Top navigation bar with mark + links + CTA |
| [hero.tsx](hero.tsx) | Marketing hero section |
| [testimonial.tsx](testimonial.tsx) | Case study / quote block |
| [cta-section.tsx](cta-section.tsx) | Closing CTA band |
| [stat.tsx](stat.tsx) | Big-number stat block |
| [animated.tsx](animated.tsx) | Motion primitives (spotlight, counter, reveal) |
| [utils.ts](utils.ts) | `cn()` helper (clsx + tailwind-merge) |

## Conventions

- Every interactive component has a visible focus ring: `focus-visible:ring-2 focus-visible:ring-brand-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper`.
- Every component forwards `className` so it can be extended without monkey-patching.
- Motion uses the `motion-*` preset durations and easings.
- Components respect `prefers-reduced-motion` via the global CSS reset.
