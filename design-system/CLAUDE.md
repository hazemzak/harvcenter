# CLAUDE.md — Harv Design System

Read this file before anything else when consuming this design system.

---

## Load order

1. **BRAND-SUMMARY.md** — who Harv is, what it feels like, the 5-second impression.
2. **foundations/voice.md** + **foundations/vocabulary.md** — how Harv sounds.
3. **The right application file** for the asset you're producing (see cheat sheet below).
4. **tokens/tokens.json** or **tokens/tokens.css** — exact color, type, spacing values.
5. **components/** — if producing web/React output.
6. **logo/usage.md** — if the asset includes the logo.
7. **voice/examples.md** — for copy do/don't pairs.

---

## Non-negotiables

These rules override any styling defaults. Violating them means the output is off-brand.

1. **One primary color: #D42027 (red).** The primary brand hue. Everything else is navy ink (#1A2744), warm off-white paper (#FAFAF8), and semantic feedback colors. Gold (#C9993A) appears only in the logo mark (stars, tassel) — it is not used as a general accent color elsewhere.

2. **One typeface: Cairo.** Arabic-first, works beautifully in Latin. Use Cairo at every size. No Kufam, no decorative Arabic scripts, no serif.

3. **Warm off-white paper (#FAFAF8).** Never pure white for marketing surfaces. Pure white is reserved for cards/modals (surface).

4. **Sentence case for all headlines.** "مراجعة ليلة الامتحان" not "مراجعة ليلة الإمتحان" in all caps. Only overlines ≤3 words get uppercase.

5. **No hype vocabulary.** Banned everywhere: طريق التفوق والنجاح, مستقبلك يبدأ من هنا بثقة, revolutionary, game-changing, cutting-edge, supercharge. Replace with specific claims.

6. **Voice: speak to the student.** "أنت" not "ابنك." Egyptian Arabic on social media, MSA on formal materials. Short sentences. Name their world (امتحان, مذاكرة, درجات, حصة) not ours (منظومة, منصة, برنامج متكامل).

7. **Real photography only.** Real students, real teachers, real classrooms. No AI-generated humans. No Harvard University campus imagery. No stock "students around a laptop." No Higgsfield AI videos.

8. **No 3D logo renders, no gold borders, no ornamental frames.** The H mark is a flat ribbon-style letterform in red, with a navy graduation cap, 7 gold (#C9993A) stars in arc, and white edge lines at the interweave. The cap and stars are integral parts of the mark. No 3D rendering, no glossy/metallic effects, no gradients on the H.

9. **Motion is minimal.** Fade + translate, 160/240ms. No parallax, no confetti, no scroll-jacking, no animated text reveals.

10. **Every claim gets a number or a name.** "أحسن مدرسين" is banned. "14 مدرس متخصص في 8 مواد" is required.

---

## Defaults when ambiguous

| Setting | Default |
|---------|---------|
| Background | #FAFAF8 (warm off-white) |
| Text case | Sentence case |
| Body size | 16px |
| CTA shape | Pill (full radius) for marketing; md radius for UI |
| Section spacing | 96px (desktop), 64px (mobile) |
| Instagram post aspect | 4:5 (1080×1350) |
| Instagram story aspect | 9:16 (1080×1920) |
| Slide aspect | 16:9 |
| Email width | 600px |
| Language | Egyptian Arabic for social; MSA for formal/print |
| Text direction | RTL for Arabic content; LTR for English-only |

---

## Asset-type cheat sheet

| User request | Read this file |
|-------------|---------------|
| Instagram post / story / reel cover | `applications/social-instagram.md` |
| Facebook post / ad | `applications/ads.md` + `applications/social-instagram.md` |
| Teacher announcement card | `applications/social-instagram.md` → Teacher card template |
| Exam review session card | `applications/social-instagram.md` → Review session template |
| World Cup lineup / creative concept | `applications/social-instagram.md` → Creative concepts |
| WhatsApp broadcast | `applications/email.md` |
| Website / landing page | `applications/web.md` |
| Slide deck / presentation | `applications/presentations.md` |
| Flyer / poster | `applications/ads.md` |
| Infographic | `applications/infographics.md` |
| LinkedIn post | `applications/social-linkedin.md` |
| Email | `applications/email.md` |
| Any copy | `foundations/voice.md` → `voice/examples.md` |

---

## Quality bar

Before delivering any asset, ask yourself:

1. **Is the primary color exactly #D42027?** Not a darker red, not maroon, not orange-red.
2. **Is Cairo the only typeface?** No fallback to Arial or system fonts in the visible design.
3. **Does the copy speak to a 16-year-old student?** Not their parent. Not a university admissions board.
4. **Is every claim specific?** Numbers, names, or dates — no vague promises.
5. **Is the layout clean?** Could I remove any element and improve it? If yes, remove it.
6. **Is this a real photo?** No AI-generated imagery, no Harvard campus, no stock.
7. **Does the H mark appear flat and clean?** Ribbon H with cap, stars, and white interweave lines present. No 3D, no glow, no glossy/metallic effects.
