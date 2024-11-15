import * as esbuild from 'esbuild';
import { createBuildSettings } from './settings.js';

const settings = createBuildSettings({ minify: true });

try {
  const result = await esbuild.build(settings);

  console.log(result);
} catch (e) {
  console.error(e);
  process.exit(1);
}
