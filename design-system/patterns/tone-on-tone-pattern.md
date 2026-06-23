# Tone-on-Tone Logo Pattern

The standard Harvard brand texture used as a subtle background. Two variants.

## Source asset
`design-system/logo/mark.png`

---

## Variant 1: Small Texture (social posts, print)

Tight repeating pattern for a fabric/textile feel. Best for static images like social posts.

```css
.brand-pattern-small {
  position: absolute;
  inset: -30%;
  background-image: url("../logo/mark.png");
  background-size: 90px auto;
  background-repeat: repeat;
  transform: rotate(-12deg);
  opacity: 0.025;
  filter: brightness(10);
  pointer-events: none;
}
```

**Usage:** Social media posts, flyers, presentation backgrounds.

---

## Variant 2: Large Watermark (video, hero sections)

Only 2-3 partial logos visible across the frame. Luxury brand watermark effect.

```css
.brand-pattern-large {
  position: absolute;
  inset: -20%;
  background-image: url("../logo/mark.png");
  background-size: 700px auto;
  background-repeat: repeat;
  background-position: center center;
  transform: rotate(-8deg);
  opacity: 0.012;
  filter: brightness(10);
  pointer-events: none;
}
```

**Usage:** Video backgrounds, hero banners, full-screen sections. Preferred for motion/video — cleaner, less crowded than the small variant.

---

## Variant 2 is the preferred default for video and motion graphics.

---

## Rules for both variants
- **Dark surfaces (#1A2744):** use `filter: brightness(10)` to make the colored logo appear as faint white
- **Light surfaces (#FAFAF8):** opacity 0.04, no brightness filter
- Never increase opacity above 0.04
- Always use negative inset to prevent edge gaps from rotation
- Always pair with a subtle radial gradient overlay for depth:
```css
.brand-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 35%, rgba(212,32,39,0.04) 0%, transparent 65%);
}
```
