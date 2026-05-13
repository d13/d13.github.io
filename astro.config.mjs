import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://d13.github.io',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  vite: {
    esbuild: {
      // Lit decorators are TS experimental decorators; let TS handle them via tsconfig.
      // Avoid Vite/esbuild silently transforming class fields.
      target: 'es2022',
    },
  },
});
