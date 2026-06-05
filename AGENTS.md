# AGENTS.md

Orientation for future agent runs on `d13.github.io`.

## What this is

Keith Daulton's personal site. Engineering-leader positioning. After the Astro port (this branch), the site is a hub-and-spoke multi-page build, not the old 11ty single-page anchor-link layout.

## Stack

- **Astro** 6.x — static output. Pages under `src/pages/`, component-first `.astro` files.
- **Lit** 3.x — convention for any new web component. Existing `<d-hero-image>` is preserved verbatim.
- **TypeScript** 5.x. `experimentalDecorators: true` + `useDefineForClassFields: false` to support Lit decorators.
- **pnpm** for package management. Node ≥ 23.
- **GitHub Pages** target. Repo is a user site (`d13/d13.github.io`) — no base path.

## Repo layout

```
.
├─ astro.config.mjs        # site URL, static output, vite tweaks
├─ tsconfig.json           # extends astro/strict, retains experimentalDecorators
├─ public/                 # passthrough assets (media, meta, favicon, manifest)
├─ src/
│  ├─ data/                # site + work case-study metadata (TS modules)
│  ├─ layouts/
│  │  ├─ BaseLayout.astro       # html + head + chrome + slot
│  │  └─ CaseStudyLayout.astro  # wraps a case-study body with hero/metrics/back-link
│  ├─ components/          # SiteHeader, SiteFooter, SkipLinks, Hero, *Tease, Connect, WorkCard
│  ├─ pages/
│  │  ├─ index.astro            # /
│  │  ├─ story.astro            # /story
│  │  ├─ work/index.astro       # /work
│  │  ├─ work/<slug>.astro      # /work/<slug> — one per case study
│  │  └─ 404.astro              # /404
│  ├─ scripts/             # client-side TS
│  │  ├─ main.ts                # entry — adopts shared styles, registers custom elements
│  │  ├─ components/heros/      # <d-hero-image> (Lit) — PRESERVED VERBATIM
│  │  ├─ components/icons/      # <d-icon-library> (Lit)
│  │  ├─ styles/shared.css.ts   # Lit-css shared sheets adopted globally
│  │  ├─ system/                # Disposable / events / function utilities
│  │  └─ utils/hero-watcher.ts  # adds data attrs based on hero position
│  └─ styles/
│     ├─ base.css         # LOCKED design tokens + normalize — do not modify
│     └─ site.css         # hub-and-spoke pattern layers built on base.css tokens
└─ .work/astro-port/       # this migration's brief, plan, review, persona-review
```

## Commands

| Task                     | Command                                                |
| ------------------------ | ------------------------------------------------------ |
| Local dev                | `pnpm dev` (Astro dev server on http://localhost:4321) |
| Type-check + Astro check | `pnpm check`                                           |
| Production build         | `pnpm build` → `dist/`                                 |
| Preview built output     | `pnpm preview`                                         |
| Lint                     | `pnpm lint`                                            |
| Format                   | `pnpm format`                                          |

## VS Code Run & Debug

`.vscode/launch.json` ships two configs:

- **Launch site (dev)** — runs `pnpm dev` in a node-terminal.
- **Attach to Chrome** — attaches to a running Chrome on port 9222 for client-side debugging.
- **Launch site + Chrome** — compound: starts dev, then attaches Chrome.

To use the compound config, start Chrome with `--remote-debugging-port=9222` or use the "Open Link" command inside VS Code after dev is running.

## Conventions

- **Tokens only.** Components consume CSS custom properties from `base.css`. Do not hard-code colours, type sizes, or spacing.
- **Pattern layers.** New patterns go in `site.css` under `@layer patterns.<name>`. Layer ordering: `base` → `patterns` → `utilities` → `overrides`.
- **Web components.** New components use Lit. Native registration via `customElements.define`. Lazy-imported from `scripts/main.ts` so HTML renders before the upgrade.
- **Routing.** File-based. New top-level sections become `src/pages/<slug>.astro`. Per-opportunity landings, if added later, slot in as `src/pages/for/<slug>.astro` — see `DESIGN.md`.
- **Locked copy.** Hero headline + sub-line in `Hero.astro` are positioning-locked. Treat as data, not copy. Other bodies are placeholder until real copy lands.
- **Accessibility.** Skip-links at the top of every page. Custom elements declare `aria-hidden` where they are decorative. `<html data-scheme="auto">` honours the user's OS preference.

## Common gotchas

- **Lit + Vite + decorators.** If TypeScript complains about field initialisers, confirm `useDefineForClassFields: false` in `tsconfig.json`. Astro's default tsconfig overrides this in strict mode; we override the override.
- **Custom element FOUC.** Use `:not(:defined) { opacity: 0; }` (already in `base.css`) to hide pre-upgrade markup.
- **Type-only imports.** When importing types alongside values from `lit` or local modules, mark them with `import type` or `import { type X, ... }`. The Vite build will warn otherwise.
- **GitHub Pages root.** This is a user site, so `site` is `https://d13.github.io` and the root is `/`. Don't add a base path.

## Worktree / branch model

The repo uses git worktrees:

- `feature/11ty` — read-only reference to the deprecated 11ty implementation.
- `feature/astro` — this branch; the Astro port.
- `main` — currently live (still 11ty). Do not touch from this branch.

## Where to find things

- Live brief for this migration: `.work/astro-port/brief.md`
- Plan and decisions: `.work/astro-port/plan.md`
- What was done + deferred items: `.work/astro-port/review.md`
- Positioning audit: `.work/astro-port/persona-review.md`
- Smoke screenshots: `.work/astro-port/screens/`
