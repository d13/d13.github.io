# TESTING.md

Verification approach for `d13.github.io`.

## What we check
This site is static. There is no business logic to unit-test. Verification is end-to-end:

1. **Astro check** — type + content-collection diagnostics for all `.astro` files.
2. **Astro build** — must complete with zero errors and zero warnings.
3. **Playwright smoke** — every route loads in a real browser with no console errors and the expected heading text present.
4. **Persona walk-through** — for each route, capture a full-page screenshot at 1280×800 and audit against three personas (see `.work/astro-port/persona-review.md`).

## Commands
| Step | Command |
|---|---|
| Type/diagnostic check | `pnpm check` |
| Production build | `pnpm build` |
| Local preview | `pnpm preview` (defaults to http://localhost:4321) |

## Playwright (via MCP)
This repo does not commit a Playwright test runner. Smoke checks run through the Playwright MCP server. The minimum smoke pass:

1. Start `pnpm preview` on `http://127.0.0.1:4321`.
2. For each of the routes below, navigate, confirm `Page Title`, and read console messages (expect zero errors / zero warnings):
   - `/`
   - `/story`
   - `/work`
   - `/work/inspect-view`
   - `/work/gitlens-growth`
   - `/work/chewy-design-system`
   - `/work/web-components-ai-tools`
   - any unknown URL (renders `/404.html`)
3. For the persona pass, capture `fullPage: true` PNG screenshots at viewport 1280×800. Save under `.work/astro-port/screens/`.

## What "green" means here
- `pnpm check` reports `0 errors / 0 warnings / 0 hints`.
- `pnpm build` ends with `Complete!` and no Vite warnings.
- Every route in the Playwright pass returns the expected `<title>` and an empty error/warning console.
- The hero on `/` upgrades to `<d-hero-image>` (visible animated mark, not bare HTML).

## What's deliberately not tested here
- Real content / copy quality — that's the persona-review pass, not a test.
- Cross-browser. Chromium-via-Playwright is the gate. Manual Safari/Firefox checks are a follow-up before deploy.
- Performance budgets. Not part of this port. The locked tokens and the single client-entry script keep the surface small; budgets can be added later.
- Visual regression. The site is too early for a baseline. Screenshots are captured for the persona audit, not pixel diffs.

## Debugging
- **VS Code:** use the "Launch site (dev)" launch config to start `pnpm dev`, then "Attach to Chrome" with `--remote-debugging-port=9222`. Breakpoints in `src/scripts/**/*.ts` work via the dev server's source maps.
- **Console errors in the field:** check the network panel for `404`s on `/media/...` or `/meta/...` — those passthrough assets live under `public/` and are served at the same path. If something 404s, the `public/` move from the 11ty source likely missed it.
- **Hero never upgrades:** confirm `src/scripts/main.ts` is loaded (the inline `<script>` in `BaseLayout` should produce a `<script type="module" src="/_astro/...">` in the built HTML). Then confirm `customElements.get('d-hero-image')` resolves in the console.
