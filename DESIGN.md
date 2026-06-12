# DESIGN.md

Design system orientation for `d13.github.io`.

## Token system

All visual decisions ladder up to tokens declared in the `props.*` layer files under `src/styles/` (`2-props-color.css`, `2-props-sizing.css`, `3-props-fonts.css`, `3-props-spacing.css`, `3-props-elevation.css`, `3-props-motion.css`). Do not modify token values without a deliberate review. Tokens include:

- **Colour** (`2-props-color.css`) — `--color-raw-*` (raw palette) → semantic aliases (`--color-*-foreground/-background`, link, card, dialog, static-accent). Accent pair `--color-accent-01/--color-accent-02` resolves per `data-accent` (`mix` = red+blue, `red`, `blue`). Light/dark values are declared per `data-scheme`, with `auto` deferring to `prefers-color-scheme`.
- **Type** (`3-props-fonts.css`) — `--font-family-base/-heading` (Acumin Variable via Adobe Fonts) and `--font-family-mono` (Config Mono). Weight tokens (`--font-weight-base/-bold/-bolder/-heading`) are lightened in the dark scheme to offset halation. `--font-width-heading/-base` drive Acumin's `wdth` axis via `font-variation-settings` (the kit's `@font-face` clamps `font-stretch`).
- **Sizing / spacing** (`2-props-sizing.css`, `3-props-spacing.css`) — raw size scale + spacing tokens.
- **Elevation** (`3-props-elevation.css`) — z-index / shadow tokens.
- **Motion** (`3-props-motion.css`) — `--motion-duration-1`…`--motion-duration-4`; `--motion-ease-out`, `--motion-ease-in-out`, `--motion-ease-spring`.

The Adobe Fonts kit stylesheet (`use.typekit.net/dmv6mus.css`) is loaded via `<link>` in `BaseLayout`'s head — not `@import` — so the preload scanner finds it early.

Theme switching is intent-driven via `<html data-scheme="auto|light|dark" data-accent="mix|blue|red">`. `auto` honours `prefers-color-scheme`. `<d-modes-menu>` in the header sets both attributes and persists them to `localStorage` (`d13:scheme`, `d13:accent`); an inline head script in `BaseLayout` re-applies persisted values before first paint.

### Motion tokens

Pick a duration by what the motion _is_, not by how long it should be:

| Token                 | Value | Use for                                                                                     |
| --------------------- | ----- | ------------------------------------------------------------------------------------------- |
| `--motion-duration-1` | 120ms | Micro feedback — focus rings, hover colour/bg flips that should feel instant                |
| `--motion-duration-2` | 220ms | Small UI motion — arrow nudges, underline draws, card hover state                           |
| `--motion-duration-3` | 400ms | Reveals and state changes — scroll-driven entry, view transitions, custom-element FOUC fade |
| `--motion-duration-4` | 700ms | First-impression entrances — hero on initial paint only                                     |

Easing defaults:

- `--motion-ease-out` for anything entering the viewport or reacting to user input.
- `--motion-ease-in-out` for two-way state toggles (open/close, expand/collapse).
- `--motion-ease-spring` sparingly for moments that should feel playful (e.g. focus bounce).

Only transition compositor-friendly properties (`opacity`, `transform`, `translate`, `scale`, `color`, `background`, `box-shadow`). Avoid `width`/`height`/`top`/`left`/`margin` — they trigger layout. Skip transitions entirely when the change is instantaneous by design (theme swap, focus-trap entry, content swap).

Global guards already in place: `prefers-reduced-motion` is honoured via `7-overrides.css`, and `scroll-behavior: smooth` is gated on motion preference in `4-base.css`. New animations don't need their own reduced-motion wrappers — the global override collapses them.

## CSS architecture

One file per cascade-layer concern, imported in order by `BaseLayout`:

- `1-layers.css` declares the layer order: `props`, `base`, `patterns`, `utilities`, `overrides`.
- `2-props-*.css` / `3-props-*.css` — tokens only (see above).
- `4-base.css` — `base.normalize` (incl. the `:not(:defined)` FOUC guard) and `base.content`.
- `5-patterns.css` — all pattern classes, grouped into five sublayers:
  - `patterns.content` — eyebrows, rules, meta strips, prose parts
  - `patterns.controls` — buttons, links, contact actions, modes popover
  - `patterns.nav` — header/footer nav, inline nav, TOC, big CTA nav
  - `patterns.parts` — hero, sections, manifesto/stats, story tease, case cards, dialogs, contact, header/footer chrome
  - `patterns.layout` — page-level grid / flow
- `6-utilities.css` — generic helpers (e.g. `.u-solo`). Unlayered class names with a `u-` prefix.
- `7-overrides.css` — the `prefers-reduced-motion` guard. Deliberately top-level (not in a layer) so it wins everywhere.

Shared sheets also adopted from JS: `src/scripts/styles/shared.css.ts` defines Lit `css` modules (`base.normalize` link styles, `overrides.a11y` visually-hidden helpers `.o-sr-only` / `.o-sr-only-focusable`) that each script entry converts via `litToStyleSheet` and pushes onto `document.adoptedStyleSheets`.

## Page anatomy

`/` is a single-page landing of numbered sections sharing one skeleton: `.section` → `.section__header` (eyebrow index `[ NN ] Label`, headline, lede) → `.section__body`.

- **[ 00 ] Hero** — meta strip (availability/build/coords/index), eyebrow rule, headline, locked intro + sub-line, `<d-hero-image>`.
- **[ 01 ] About** — manifesto quote, stat trio, detail paragraphs.
- **[ 02 ] The Story** — tease lede + chapter list; CTA to `/story` currently disabled ("Full story soon").
- **[ 03 ] Selected Projects** — `.cases` grid of four `.case-card`s. Two are external links (`<a target="_blank">`), two are `<button>`s that open native `<dialog class="dialog" closedby="any">` modals via invoker commands (`command="show-modal"` / `commandfor`) — no JS.
- **[ 04 ] Connect** — contact headline + email/LinkedIn/GitHub action buttons.

`/story` is the long-form story: a sticky chapter TOC (desktop), hero, and chaptered prose. `/404` reuses the home hero skeleton with `<d-error-image>`.

## Component inventory

### Astro UI components (`src/components/*.astro`)

| Component    | Used on                       | Notes                                                                                             |
| ------------ | ----------------------------- | ------------------------------------------------------------------------------------------------- |
| `SkipLinks`  | every page (via `BaseLayout`) | a11y skip-to-content / skip-to-nav                                                                |
| `SiteHeader` | every page                    | brand, nav (About / Story / Work / Connect — anchors on home, routes elsewhere), `<d-modes-menu>` |
| `SiteFooter` | every page                    | big mark, nav columns, colophon, copyright                                                        |

The former `Hero`, `StoryTease`, `WorkTease`, `WorkCard`, and `Connect` components were removed in the redesign — their markup now lives inline in `index.astro` as pattern classes.

### Layouts (`src/layouts/*.astro`)

- `BaseLayout` — the only layout. html / head / chrome / slot. Props: `title`, `description`, `ogTitle`, `ogDescription`, `ogImage`, `bodyClass`, `mode` (initial `data-scheme`), `isHome` (switches header/footer nav between anchors and routes). The head carries meta/OG tags, the Typekit `<link>`, and two inline scripts: theme-prefs hydration and the `data-fonts` FOUT gate.

### Web components (`src/scripts/components/`)

| Element            | Source                                           | Purpose                                                                            |
| ------------------ | ------------------------------------------------ | ---------------------------------------------------------------------------------- |
| `<d-hero-image>`   | `heros/hero-image.ts` (extends `heros/base.ts`)  | Animated SVG hero on `/`. Preserved from the 11ty implementation.                  |
| `<d-error-image>`  | `heros/error-image.ts` (extends `heros/base.ts`) | Animated SVG for `/404`.                                                           |
| `<d-modes-menu>`   | `modes-menu.ts`                                  | Scheme/accent picker. Light-DOM Lit + native popover; persists to `localStorage`.  |
| `<d-icon-library>` | `icons/icon-library.ts`                          | Named-icon renderer. **Currently unreferenced by any page** — kept for future use. |

Registration is split per page-entry: `main.ts` (`/story`) registers only `<d-modes-menu>`; `home.ts` adds `<d-hero-image>`; `error.ts` adds `<d-error-image>`. `src/data/work.ts` and `src/scripts/utils/hero-watcher.ts` are orphaned modules from the previous design — nothing imports them.

## Accessibility conventions

- Every page starts with `SkipLinks` and a labelled `<main id="main">`.
- Decorative custom elements declare `aria-hidden="true"`; decorative `<img>`s use empty `alt`.
- Case-study dialogs are native `<dialog closedby="any">` with `aria-labelledby`, opened/closed by invoker commands — focus and dismissal are platform behaviour, not JS.
- `<d-modes-menu>` renders in light DOM, uses the popover API with `role="dialog"`, `aria-haspopup`, `aria-expanded`.
- Reduced motion is honoured globally via `7-overrides.css`; new animations need no per-case wrappers.
- Body class names (`page`, `page--story`) are for page-specific overrides, not accessibility decisions.

## Web component conventions

- **Lit** for any new component. Decorators (`@customElement`, `@property`, `@state`, `@query`) are fine — `experimentalDecorators` is on.
- **Native registration** via `customElements.define(...)` (or `@customElement('d-foo')`). No wrapping in `.astro`.
- **Lazy-load from the page's script entry** (`home.ts` / `main.ts` / `error.ts`) with a `setTimeout(() => void import(...))` so shared styles adopt before upgrade. Register only what the page uses.
- **Shared styles** via `lit/css` modules in `src/scripts/styles/`, adopted globally through `document.adoptedStyleSheets` in each entry.
- **Light DOM is allowed** when a component should inherit page patterns/tokens directly (see `<d-modes-menu>`'s `createRenderRoot`).
- **Element naming** is the `d-` prefix (D13).
- **No SSR.** Astro renders the custom element tag as unknown HTML; the client upgrades it.

## Future-state hooks

- **Story CTA.** The "[ 02 ] Story" tease CTA on `/` is a placeholder span ("Full story soon") with the real link to `/story` commented out beside it — flip it when the story page copy is final.
- **Work index.** A `work.html` mock exists in `.work/design-2026/mock-site/` and a "See all case studies" CTA is commented out in `index.astro`. If a `/work` index returns, the orphaned `src/data/work.ts` is the starting data shape — and the header/footer off-home "Work" links (currently pointing at the dead `/work` route) get fixed for free.
- **Per-opportunity landings** (`/for/<slug>`) remain possible: add `src/pages/for/<slug>.astro`, reuse `BaseLayout`, link from outside.

## Things deliberately not in this design

- The hub-and-spoke `/work` index and per-case-study pages from the first Astro pass (case studies are now cards + dialogs/external links on `/`).
- The `CaseStudyLayout`, tease/card Astro components, and icon usage that supported them.
- Availability line in the hero meta strip (commented out pending dates).
