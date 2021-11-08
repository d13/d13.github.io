# d13.github.io

My personal website and general dumping ground to try out my ideas. 

I'd don't claim any of these techniques to be the "right way", I just want to learn the good, bad and ugly from them. If you have any feedback, I'd love to chat about it.

In this latest incarnation, my current goals are:
- learn about the differences in Yarn 3 from Yarn 1.x
- themeing and dark-mode with CSS Custom Properties
- build my website using various component libraries, in one repo, with all of them reusing a common set of CSS, JavaScript and images

## Structure

This repository is a monorepo built using [Yarn Workspaces](https://yarnpkg.com/features/workspaces).

### Packages

| Name                                     | Description                                    |
|------------------------------------------|------------------------------------------------|
| [`@d13/content`](./packages/content)     | Common site content, assets, etc               |
| [`@d13/scripts`](./packages/scripts)     | Common JavaScript functionality                |
| [`@d13/styles`](./packages/styles)       | Common Sass styles and utilities               |
| [`@d13/portfolio`](./packages/portfolio) | Website built with plain(-ish) HTML            |
| `@d13/portfolio-react`                   | (pending) Website built with react and next.js |
| `@d13/portfolio-vue3`                    | (pending) Website built with vue and nuxt 3.x  |
| `@d13/portfolio-vue2`                    | (pending) Website built with vue and nuxt 2.x  |

## Local setup

Be sure to set the correct version of node using [NVM](https://github.com/nvm-sh/nvm):

```bash
nvm use
```

Make sure [`yarn`](https://yarnpkg.com/getting-started/install) is installed and run it.

```bash
# if you don't have yarn
npm install -g yarn

# install cache
yarn
```

## Quick commands

```bash

# launches the portfolio site
yarn start

# builds the website and copies to ./docs
yarn build
```
