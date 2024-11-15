# Contributing

> [!WARNING]
> This is purely a testbed for trying out ideas and experimenting with newer APIs and techniques. Consider everything experimental and not recommended for production use.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/), `>= 2.7.2`
- [NodeJS](https://nodejs.org/), `>= v20.11.1`
- [Yarn](https://yarnpkg.com/), `4.1.0` (this repository does **not** commit the cache)

For those using [nvm](https://github.com/nvm-sh/nvm), simply run the following command to install the required version of NodeJS:

```bash
nvm use
```

### Dependencies

From a terminal, where you have cloned the repository, execute the following command to install the required dependencies:

```bash
yarn install
```

## Developing

Running locally (defaults to `http://127.0.0.1:5500`)

```bash
yarn start
```

Check and fix code style

```bash
yarn lint
```

Optimize images from `assets/media` and `assets/favicon` and saves the optimized versions to `assets/media-opt` and `assets/favicon-opt` respectively:

```bash
yarn images
```

Build and bundle files in `src` to `assets/bundle`

```bash
yarn build
```

To analyze the bundle

```bash
yarn analyze
```
