# Motion

Motion is minimal. A confident brand doesn't need to bounce, shake, or shimmer to get attention. Content does the work.

## Duration tokens

| Token | Value | Usage |
|-------|-------|-------|
| xs | 80ms | Button press, checkbox toggle |
| sm | 160ms | Hover states, input focus |
| md | 240ms | Menu open/close, tooltip appear |
| lg | 480ms | Scroll reveal, section fade-in |
| xl | 720ms | Page transition, modal entrance |

## Easing tokens

| Token | Value | Usage |
|-------|-------|-------|
| out (default) | cubic-bezier(0.22, 1, 0.36, 1) | Most reveals — fast start, gentle settle |
| in-out | cubic-bezier(0.4, 0, 0.2, 1) | UI state changes (open/close) |
| standard | cubic-bezier(0.4, 0, 0.2, 1) | General purpose |
| linear | linear | Progress bars, loaders only |

## Standard animations

| Pattern | Duration | Easing | Transform | When |
|---------|----------|--------|-----------|------|
| Button press | xs (80ms) | out | scale(0.97) → scale(1) | On click |
| Input focus | sm (160ms) | out | Border color transition | On focus |
| Menu open | md (240ms) | out | translateY(-4px) → 0, opacity 0→1 | On trigger |
| Modal open | md (240ms) | out | translateY(8px) → 0, opacity 0→1 | On trigger |
| Scroll reveal | lg (480ms) | out | translateY(8px) → 0, opacity 0→1 | On viewport enter |
| Page transition | xl (720ms) | out | opacity 0→1 | On route change |
| Hover card lift | sm (160ms) | out | translateY(-2px), shadow none→xs | On hover |

## Acceptable motion components

- **FadeIn** — opacity + small translateY (8px max)
- **Stagger** — children fade in with 60ms delay between them
- **CountUp** — number counter for stats (duration lg)
- **Spotlight** — subtle mouse-following gradient on cards (very subtle)
- **QuietMarquee** — logo band or partner scroll (slow, pausable, no hero)

## We do NOT do

- **Parallax** — anywhere, ever
- **Scroll-jacking** — the user controls their scroll
- **Looping hero video** — including Higgsfield AI-generated videos
- **Marquee on hero section** — the hero should be readable, not a ticker
- **Typewriter effect** — on headlines or any text
- **Text shimmer / gradient animation** — on any text
- **Bounce, wobble, shake** — on any element
- **Confetti, particle effects** — on any page
- **Entrance animations that block reading** — content should be visible immediately, not held hostage by a fade sequence
- **3D transforms** — no perspective, no rotateX/Y, no 3D card flips
- **Auto-playing video with sound** — video may autoplay muted if necessary, but prefer static
- **Exit-intent popups** — never

## Reduced motion

Always respect the user's preference:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
