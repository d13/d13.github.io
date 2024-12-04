import * as esbuild from 'esbuild';
import { createBuildSettings } from './settings.js';

console.time('Build completed');

const settings = createBuildSettings({ minify: true });

try {
  const result = await esbuild.build(settings);

  console.log(result);
} catch (e) {
  console.error(e);
  process.exit(1);
}

console.timeEnd('Build completed');
