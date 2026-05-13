# d13.github.io

Personal site for Keith Daulton. Engineering-leader positioning, design-technologist work, independent practice at D13. Currently being ported from 11ty to Astro on the `feature/astro` branch.

## Stack

- Astro 6 (static output)
- Lit 3 (web components)
- TypeScript 5
- pnpm, Node ≥ 23
- GitHub Pages (user site — no base path)

## Run locally

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm check        # astro check (type + a11y diagnostics)
pnpm build        # static output → dist/
pnpm preview      # serve dist/
```

## Documentation

- [`AGENTS.md`](AGENTS.md) — orientation for future agent runs (stack, layout, conventions, gotchas).
- [`DESIGN.md`](DESIGN.md) — tokens, component inventory, web-component conventions, future-state hooks.
- [`TESTING.md`](TESTING.md) — verification approach and Playwright smoke.
- `.work/astro-port/` — the brief, plan, review, and persona audit for the Astro port.
