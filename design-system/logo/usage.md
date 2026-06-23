# Logo usage

## File inventory

| File | Variant | When to use |
|------|---------|-------------|
| `mark.png` | Full mark on transparent — the **authoritative master file** | Social avatars, app icons, hero sections, watermarks, all branded surfaces |
| `wordmark.svg` | "Harv" text in Cairo Bold, ink color | Minimal contexts where the mark is already visible nearby |

> **Vector versions needed.** SVG / AI / EPS versions of the mark should be traced from `mark.png` in Illustrator or Figma. Once created, add them here (mark.svg, mark-inverse.svg, lockup-horizontal.svg, lockup-stacked.svg, favicon.svg).

## Construction

The Harv mark is a **flowing ribbon-style H letterform** composed of two thick vertical strokes that **interweave at the crossbar**. The left stroke passes in front of the right stroke, separated by a **white edge line** at the overlap. Each stroke's bottom curves dramatically outward into a **sweeping tail** — left tail curves left, right tail curves right.

**The full mark is a single composition containing:**
- The ribbon H letterform (red, #D42027)
- A **graduation cap** tilted on the top-left of the H (navy, #1A2744) with a **white edge border** around it
- A gold **tassel** (#C9993A) hanging to the left — rendered with visible brush-like strands
- **7 gold 5-pointed stars** (#C9993A) arranged in an arc above the H, sweeping from the tassel area toward the upper-right

**Key design element — white edge lines.** The crossbar overlap and the cap border both use white strokes to separate layers. These lines are structural; do not remove them.

**The mark has no circle border.** The previous gold ring on black circle badge is retired. The mark sits directly on its background.

## Clear space

Minimum clear space around the mark = the width of one H column (roughly 22% of mark width on each side). No text, imagery, or other elements may intrude into this zone.

## Minimum sizes

| Variant | Web | Print |
|---------|-----|-------|
| Full mark | 32px | 10mm |
| Lockup (when vector versions exist) | 80px wide | 20mm wide |

## Color variants

| Context | H color | Cap color | Stars / tassel |
|---------|---------|-----------|---------------|
| On paper (#FAFAF8) | brand/600 (#D42027) | ink/900 (#1A2744) | gold (#C9993A) |
| On ink/900 (#1A2744) | brand/600 (#D42027) | white (#FFFFFF) | gold (#C9993A) |
| On brand/600 | white (#FFFFFF) | white, 85% opacity | white, 70% opacity |
| On photography | white with scrim behind | white with scrim behind | white with scrim behind |
| Single-color (fax/embroidery) | ink/900 (#1A2744) | ink/900 | ink/900 |

## Inverse logo (on brand red backgrounds)

When placing the logo on the brand red (#D42027) background — such as contact strips, CTAs, or red banners — use the inverse variant where all colors become white.

**CSS implementation (quick method using mark.png):**
```css
.logo-inverse {
  filter: brightness(0) invert(1);
}
```

This converts the full-color mark to pure white, suitable for any colored background. For production assets, a dedicated `mark-inverse.png` (white on transparent) should be exported from the master file.

## One-color rendering

When printing in a single color (black-only documents, embroidery, fax), use ink/900 for the entire mark. The stars, cap, tassel, and H become a single uniform color. Never use brand/600 as a single-color option — it won't reproduce accurately in single-color processes.

## What NOT to do

- No stretching or squashing. The mark must maintain its original proportions.
- No rotating. The mark is always upright.
- No color changes beyond the documented variants above.
- No drop shadows, glows, gradients, or outline strokes on the mark.
- No animation of the mark itself (surrounding elements may animate).
- No placing on busy photographic backgrounds without a scrim or solid backing.
- **No adding a circle border, gold ring, or badge shape around the mark.** The circle badge is retired.
- **No 3D rendering.** The mark is flat. No glossy effects, no metallic textures, no gradients on the H.
- **No removing the cap, stars, or tassel from the full mark.** These are integral to the identity.
- **No removing or altering the white edge lines** at the crossbar overlap and cap border.
- **No changing the interweaving order.** The left stroke always passes in front of the right stroke at the crossbar.
- **No replacing the gold stars with other shapes or colors.** Stars are gold (#C9993A), 5-pointed, arranged in an arc.
- **No adding extra decorative elements** (books, pens, torches, laurel wreaths, ornamental borders, sparkles).

## Usage per surface

| Surface | Recommended variant | Placement |
|---------|-------------------|-----------|
| Website nav | Mark + wordmark side by side | Top-left, mark height ~28px |
| Instagram avatar | Mark only | Centered, on white or dark background |
| Instagram post | Mark only | Bottom-center or bottom-right, 10% of post width |
| Facebook cover | Mark above wordmark | Centered |
| WhatsApp status | Mark only | Corner watermark |
| Print flyer | Mark + wordmark side by side | Top header area |
| Email signature | Mark + wordmark side by side | Below name block, max 120px wide |
| Slide deck title | Mark above wordmark | Centered on title slide |
| Slide deck body | Mark only (small) | Bottom-right corner |
