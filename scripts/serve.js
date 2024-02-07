import esbuild from 'esbuild';
import { createBuildSettings } from './settings.js';

const settings = createBuildSettings({
  sourcemap: 'inline',
  banner: {
    js: `if (window.esBuildListener != null) window.esBuildListener = new EventSource('/esbuild').addEventListener('change', () => location.reload());`,
  },
});

const ctx = await esbuild.context(settings);

await ctx.watch();

const { host, port } = await ctx.serve({
  port: 5500,
  servedir: '.',
  fallback: '.index.html',
});

console.log(`Serving app at ${host}:${port}.`);
