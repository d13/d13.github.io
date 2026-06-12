# TESTING.md

Verification approach for `d13.github.io`.

## What we check

This site is static. There is no business logic to unit-test. Verification is end-to-end:

1. **Astro check** — type + content-collection diagnostics for all `.astro` files.
2. **Lint** — `pnpm lint` (JS/TS) and `pnpm lint:css` (stylelint over `.css`, `.astro`, and Lit-css in `.ts`).
3. **Astro build** — must complete with zero errors and zero warnings.
4. **Playwright smoke** — every route loads in a real browser with no console errors and the expected heading text present.
5. **Design walk-through** — for each route, capture a full-page screenshot at 1280×800 and compare against the redesign mocks in `.work/design-2026/mock-site/`.

## Commands

| Step                  | Command                                            |
| --------------------- | -------------------------------------------------- |
| Type/diagnostic check | `pnpm check`                                       |
| Lint                  | `pnpm lint` / `pnpm lint:css`                      |
| Production build      | `pnpm build`                                       |
| Local preview         | `pnpm preview` (defaults to http://localhost:4321) |

## Playwright (via MCP)

This repo does not commit a Playwright test runner. Smoke checks run through the Playwright MCP server. The minimum smoke pass:

1. Start `pnpm preview` on `http://127.0.0.1:4321`.
2. For each of the routes below, navigate, confirm `Page Title`, and read console messages (expect zero errors / zero warnings):
   - `/`
   - `/story`
   - any unknown URL (renders `/404.html`)
3. On `/`, exercise the interactive surfaces: a case-card `<button>` opens its `<dialog>` (and `closedby="any"` dismisses it), and the header "Modes" popover switches `data-scheme` / `data-accent` on `<html>`.
4. For the visual pass, capture `fullPage: true` PNG screenshots at viewport 1280×800. Save under `.work/design-2026/screens/`.

## What "green" means here

- `pnpm check` reports `0 errors / 0 warnings / 0 hints`.
- `pnpm build` ends with `Complete!` and no Vite warnings.
- Every route in the Playwright pass returns the expected `<title>` and an empty error/warning console.
- The hero on `/` upgrades to `<d-hero-image>`, `/404` upgrades to `<d-error-image>`, and the header's `<d-modes-menu>` upgrades on every page (visible "Modes" trigger, not bare HTML).

## What's deliberately not tested here

- Real content / copy quality — that's a review pass, not a test.
- Cross-browser. Chromium-via-Playwright is the gate. Manual Safari/Firefox checks are a follow-up before deploy — especially `<dialog closedby>`, invoker commands, and the popover API used by the modes menu and case dialogs.
- Performance budgets. Not part of this pass. The token system and small per-page script entries keep the surface small; budgets can be added later.
- Visual regression. The site is too early for a baseline. Screenshots are compared against the design mocks, not pixel diffs.

## Debugging

- **VS Code:** use the "Launch site (dev)" launch config to start `pnpm dev`, then "Attach to Chrome" with `--remote-debugging-port=9222`. Breakpoints in `src/scripts/**/*.ts` work via the dev server's source maps.
- **Console errors in the field:** check the network panel for `404`s on `/media/...` or `/meta/...` — those passthrough assets live under `public/` and are served at the same path. If something 404s, the `public/` move from the 11ty source likely missed it.
- **Hero never upgrades:** confirm the page's script entry is loaded — each page imports one of `src/scripts/home.ts` / `main.ts` / `error.ts` via an inline `<script>`, which should produce a `<script type="module" src="/_astro/...">` in the built HTML. Then confirm `customElements.get('d-hero-image')` (or `d-error-image` / `d-modes-menu`) resolves in the console.
- **Animations never run:** check `<html data-fonts>` — it must flip from `"loading"` to `"ready"` (inline head script in `BaseLayout`). Entrance animations are gated on it.
- **Theme looks wrong on load:** inspect `localStorage` keys `d13:scheme` / `d13:accent` and the matching `data-scheme` / `data-accent` attributes on `<html>`.
