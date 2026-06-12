# AGENTS.md

Orientation for future agent runs on `d13.github.io`.

## What this is

Keith Daulton's personal site. Engineering-leader positioning. After the Astro port and the "design-2026" redesign (this branch), the site is a single-page landing at `/` with numbered sections — [00] Hero, [01] About, [02] Story tease, [03] Selected Projects, [04] Connect — plus a long-form `/story` page and a themed `/404`. The earlier hub-and-spoke `/work` pages were removed in the redesign; case studies are now cards on `/` that open native `<dialog>` modals or link out.

## Stack

- **Astro** 6.x — static output, `trailingSlash: 'never'`, directory build format. Pages under `src/pages/`, component-first `.astro` files.
- **Lit** 3.x — convention for any new web component (`<d-hero-image>`, `<d-error-image>`, `<d-modes-menu>`).
- **TypeScript** 5.x. `experimentalDecorators: true` + `useDefineForClassFields: false` to support Lit decorators.
- **Adobe Fonts (Typekit)** — Acumin Variable + Config Mono, loaded via `<link>` in `BaseLayout`'s head.
- **pnpm** for package management. Node ≥ 23.
- **GitHub Pages** target. Repo is a user site (`d13/d13.github.io`) — no base path.

## Repo layout

```
.
├─ astro.config.mjs        # site URL, static output, vite tweaks
├─ tsconfig.json           # extends astro/strict, retains experimentalDecorators
├─ public/                 # passthrough assets (media, meta, favicon, manifest)
├─ src/
│  ├─ data/
│  │  ├─ site.ts                # chrome/contact/identity metadata + build stamp
│  │  └─ work.ts                # case-study index — ORPHANED (no longer imported)
│  ├─ layouts/
│  │  └─ BaseLayout.astro       # html + head (meta/OG/fonts/theme scripts) + chrome + slot
│  ├─ components/          # SiteHeader (nav + <d-modes-menu>), SiteFooter, SkipLinks
│  ├─ pages/
│  │  ├─ index.astro            # / — landing: numbered sections + case-study dialogs
│  │  ├─ story.astro            # /story — long-form story with chapter TOC
│  │  └─ 404.astro              # /404 — themed error page
│  ├─ scripts/             # client-side TS
│  │  ├─ main.ts                # entry for /story — shared styles + <d-modes-menu>
│  │  ├─ home.ts                # entry for / — also registers <d-hero-image>
│  │  ├─ error.ts               # entry for /404 — also registers <d-error-image>
│  │  ├─ components/heros/      # <d-hero-image>, <d-error-image> (Lit)
│  │  ├─ components/icons/      # <d-icon-library> (Lit) — currently unused by pages
│  │  ├─ components/modes-menu.ts # <d-modes-menu> — scheme/accent popover
│  │  ├─ styles/shared.css.ts   # Lit-css shared sheets adopted globally
│  │  ├─ system/                # Disposable / events / function / lit-to-stylesheet utils
│  │  └─ utils/hero-watcher.ts  # ORPHANED — not referenced by any entry
│  └─ styles/              # one file per cascade-layer concern — see DESIGN.md
│     ├─ 1-layers.css           # @layer props, base, patterns, utilities, overrides
│     ├─ 2-props-*.css          # color + sizing tokens
│     ├─ 3-props-*.css          # fonts, spacing, elevation, motion tokens
│     ├─ 4-base.css             # normalize + base content styles
│     ├─ 5-patterns.css         # patterns.{content,controls,nav,parts,layout}
│     ├─ 6-utilities.css        # generic helpers
│     └─ 7-overrides.css        # reduced-motion guard (top-level, unlayered)
└─ .work/
   ├─ astro-port/         # original migration brief, plan, review, persona-review
   └─ design-2026/        # redesign HTML mocks (mock-site/) + screenshots (screens/)
```

## Commands

| Task                       | Command                                                |
| -------------------------- | ------------------------------------------------------ |
| Local dev                  | `pnpm dev` (Astro dev server on http://localhost:4321) |
| Type-check + Astro check   | `pnpm check`                                           |
| Production build           | `pnpm build` → `dist/`                                 |
| Preview built output       | `pnpm preview`                                         |
| Lint (JS/TS)               | `pnpm lint`                                            |
| Lint (CSS, incl. astro/ts) | `pnpm lint:css` / `pnpm lint:css:fix`                  |
| Format                     | `pnpm format`                                          |

## VS Code Run & Debug

`.vscode/launch.json` ships two configs:

- **Launch site (dev)** — runs `pnpm dev` in a node-terminal.
- **Attach to Chrome** — attaches to a running Chrome on port 9222 for client-side debugging.
- **Launch site + Chrome** — compound: starts dev, then attaches Chrome.

To use the compound config, start Chrome with `--remote-debugging-port=9222` or use the "Open Link" command inside VS Code after dev is running.

## Conventions

- **Tokens only.** Components consume CSS custom properties from the `props.*` layers (`2-props-*.css`, `3-props-*.css`). Do not hard-code colours, type sizes, or spacing.
- **Pattern layers.** New patterns go in `5-patterns.css` under an existing sublayer — `patterns.content`, `patterns.controls`, `patterns.nav`, `patterns.parts`, or `patterns.layout`. Layer ordering is declared once in `1-layers.css`: `props` → `base` → `patterns` → `utilities` → `overrides`.
- **Per-page script entries.** Each page imports exactly one entry from `src/scripts/` via an inline `<script>` (`home.ts` on `/`, `main.ts` on `/story`, `error.ts` on `/404`). Entries adopt shared styles first, then lazy-register only the custom elements that page needs.
- **Web components.** New components use Lit. Native registration via `customElements.define` (or `@customElement`). Lazy-imported from the page's script entry so HTML renders before the upgrade.
- **Theme modes.** `<html data-scheme="auto|light|dark" data-accent="mix|blue|red">`. `<d-modes-menu>` (in the header) persists choices to `localStorage` (`d13:scheme`, `d13:accent`); an inline script in `BaseLayout`'s head re-applies them before paint.
- **Routing.** File-based. `/` is the primary surface; in-page nav uses section anchors (`#about`, `#story`, `#work`, `#connect`). `/story` is the only secondary page.
- **Locked copy.** The hero intro + sub-line (now inline in `index.astro`) are positioning-locked. Treat as data, not copy.
- **Accessibility.** Skip-links at the top of every page. Custom elements declare `aria-hidden` where they are decorative. Case-study modals are native `<dialog closedby="any">` opened via invoker commands (`command="show-modal"` / `commandfor`), no JS wiring.

## Common gotchas

- **Lit + Vite + decorators.** If TypeScript complains about field initialisers, confirm `useDefineForClassFields: false` in `tsconfig.json`. Astro's default tsconfig overrides this in strict mode; we override the override.
- **Custom element FOUC.** Use `:not(:defined) { opacity: 0; }` (already in `4-base.css`) to hide pre-upgrade markup.
- **Font FOUT gate.** `<html data-fonts="loading">` flips to `"ready"` via an inline head script once `document.fonts.ready` resolves (1.2s timeout fallback). Entrance animations key off this attribute — don't remove the script or animations never run.
- **Theme flash.** The inline localStorage hydration script must stay in `<head>` so persisted scheme/accent apply before first paint.
- **Type-only imports.** When importing types alongside values from `lit` or local modules, mark them with `import type` or `import { type X, ... }`. The Vite build will warn otherwise.
- **GitHub Pages root.** This is a user site, so `site` is `https://d13.github.io` and the root is `/`. Don't add a base path.
- **Stale `/work` links.** `SiteHeader` and `SiteFooter` still point their off-home "Work" link at `/work`, which no longer exists (404s from `/story`). On `/` the link is the `#work` anchor and works fine.

## Worktree / branch model

The repo uses git worktrees:

- `feature/11ty` — read-only reference to the deprecated 11ty implementation.
- `feature/astro` — this branch; the Astro port.
- `main` — currently live (still 11ty). Do not touch from this branch.

## Where to find things

- Astro-port brief / plan / review / persona audit: `.work/astro-port/`
- Redesign reference mocks (static HTML comps the current pages were built from): `.work/design-2026/mock-site/`
- Redesign screenshots: `.work/design-2026/screens/`
- Smoke screenshots from the original port: `.work/astro-port/screens/`
