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

const protocol = 'http';
const { host, port } = await ctx.serve({
  host: 'localhost',
  port: 5500,
  servedir: '.',
  fallback: '.index.html',
  onRequest: ({
    remoteAddress,
    method,
    path,
    status,
    /** The time to generate the response, not to send it */
    timeInMS,
  }) => {
    console.log(`${remoteAddress} ${method} ${path} ${status} ${timeInMS}ms`);
  },
});

console.log(`Serving app at: ${protocol}://${host}:${port}`);
