# Contributing

> [!WARNING]
> This is purely a testbed for trying out ideas and experimenting with newer APIs and techniques. Consider everything experimental and not recommended for production use.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/), `>= 2.7.2`
- [NodeJS](https://nodejs.org/), `>= v22.0.0`
- [pnpm](https://pnpm.io/), `>= 9.6.0`

For those using [nvm](https://github.com/nvm-sh/nvm), simply run the following command to install the required version of NodeJS:

```bash
nvm use
```

### Dependencies

From a terminal, where you have cloned the repository, execute the following command to install the required dependencies:

```bash
pnpm install
```

## Developing

Running locally (defaults to `http://localhost:5173`)

```bash
pnpm dev
```

Check and fix code style

```bash
pnpm lint
```

## Release

Build and bundle files in `src` to `docs`

```bash
pnpm build
```

Preview the production build locally

```bash
pnpm preview
```

The built files are deployed to GitHub Pages at https://d13.github.io/.
