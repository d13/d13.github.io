# DESIGN.md

Design system orientation for `d13.github.io`.

## Token system

All visual decisions ladder up to tokens declared in `src/styles/base.css`. That file is locked — do not modify token values without a deliberate review. Tokens include:

- **Colour** — `--color-raw-*` (raw palette) → `--color-primary-foreground`, `--color-primary-background`, `--color-link-*`, `--color-elevation-*` (semantic aliases).
- **Type** — `--font-family-heading`, `--font-family-body`; sizes via `--type-h1-size`…`--type-overline-size`, `--type-body-lg-size`…`--type-body-sm-size`.
- **Spacing** — `--spacing-xs`…`--spacing-3xl`; raw size scale via `--size-1`…`--size-12`.
- **Elevation** — `--elevation-sticky`, `--elevation-overlay`, etc.
- **Motion** — `--motion-duration-1`…`--motion-duration-4`; `--motion-ease-out`, `--motion-ease-in-out`, `--motion-ease-spring` (declared in `src/styles/3-props-motion.css` and adopted by `BaseLayout2026`).

Theme switching is intent-driven via `<html data-scheme="auto|light|dark">`. `auto` honours `prefers-color-scheme`.

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

`base.css` declares the cascade-layer order: `props`, `base`, `patterns`, `utilities`, `overrides`. `site.css` only adds **new sublayers under `patterns.*` and `overrides.*`** — it never redefines tokens.

Examples currently in `site.css`:

- `patterns.site-chrome` — header + footer
- `patterns.hero` — landing hero overrides on top of base.css's hero defaults
- `patterns.tease` — story/work tease sections
- `patterns.work` — work card grid + card surface
- `patterns.connect` — connect block (contact + social)
- `patterns.page` — generic hub page chrome (eyebrow, title, prose)
- `patterns.case-study` — case study layout (title, hero slot, body grid, metrics, footer)
- `overrides.a11y` — visually-hidden helpers (`.o-sr-only`, `.o-sr-only-focusable`)

## Component inventory

### Astro UI components (`src/components/*.astro`)

| Component    | Used on                       | Notes                                                                |
| ------------ | ----------------------------- | -------------------------------------------------------------------- |
| `SkipLinks`  | every page (via `BaseLayout`) | a11y skip-to-content / skip-to-nav                                   |
| `SiteHeader` | every page                    | logo, nav (Story / Work / Connect), GitHub link                      |
| `SiteFooter` | every page                    | copyright + back-to-top                                              |
| `Hero`       | `/`                           | locked positioning copy + `<d-hero-image>`                           |
| `StoryTease` | `/`                           | placeholder tease + link to `/story`                                 |
| `WorkTease`  | `/`                           | placeholder + work-card grid                                         |
| `WorkCard`   | `/`, `/work`                  | single case-study card; consumes `CaseStudy` from `src/data/work.ts` |
| `Connect`    | `/`                           | contact + social block; uses `<d-icon-library>`                      |

### Layouts (`src/layouts/*.astro`)

- `BaseLayout` — html / head / chrome / slot. Pass `title`, `description`, `bodyClass`.
- `CaseStudyLayout` — wraps a case-study body with eyebrow/title, hero slot, body+metrics grid, and a back-to-work link.

### Web components (`src/scripts/components/`)

| Element            | Source                                          | Purpose                                                                 |
| ------------------ | ----------------------------------------------- | ----------------------------------------------------------------------- |
| `<d-hero-image>`   | `heros/hero-image.ts` (extends `heros/base.ts`) | Animated SVG hero. **Preserved verbatim from the 11ty implementation.** |
| `<d-icon-library>` | `icons/icon-library.ts`                         | Renders a named icon from the static `icons` map.                       |

The icon library was extended during this port to add `phone`, `bluesky`, `linkedin`, `dribbble`, and `codepen` — the 11ty version referenced these names but the registry was missing them. The new icons are minimal inline SVGs in `icons/icons.ts`.

## Accessibility conventions

- Every page starts with `SkipLinks` and a labelled `<main id="main">`.
- Decorative custom elements declare `aria-hidden="true"`.
- Each `<section>` is `aria-labelledby`ed by its visible heading.
- Focus state on links and cards is non-decorative (uses underline / outline / colour shift). No focus traps.
- Body class names (`page--<slug>`) are available for page-specific overrides, not for accessibility decisions.

## Web component conventions

- **Lit** for any new component. Decorators (`@customElement`, `@property`) are fine — `experimentalDecorators` is on.
- **Native registration** via `customElements.define(...)` (or `@customElement('d-foo')`). No wrapping in `.astro`.
- **Lazy-load from `main.ts`** with a `setTimeout(() => void import(...))` so the registry registers after the HTML has rendered. Avoids upgrade flash.
- **Shared styles** via `lit/css` modules in `src/scripts/styles/`. Adopted globally through `document.adoptedStyleSheets` in `main.ts`.
- **Element naming** is the `d-` prefix (D13).
- **No SSR.** Astro renders the custom element tag as unknown HTML; the client upgrades it.

## Future-state hooks

- **Per-opportunity landings** (`/for/<slug>`) are intentionally not built in this pass. The route layout supports them: add `src/pages/for/<slug>.astro`, reuse `BaseLayout`, and slot in a tailored hero/body. Header navigation does not need to expose them — they are designed to be linked from outside (a recruiter email, a conference profile, etc.).
- **Real copy.** `Hero` is the only positioning-locked text. The Story page, Work index lede, and case-study bodies are placeholders marked with `TODO:` plus a `.placeholder-tag` chip.
- **Proof-points metrics.** The case-study sidebar currently shows three `TODO` rows. The metric format (number + label + source) will be defined when real metrics land — for now the slot is generic `<ul>`.

## Things deliberately not in this port

- The phone-swap section from the deprecated 11ty About area.
- The old single-page anchor-link sections (`#story`, `#about`, `#work` on `/`).
- Any real positioning copy beyond the locked hero pair.
