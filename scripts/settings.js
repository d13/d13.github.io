import esbuildPluginTsc from 'esbuild-plugin-tsc';
// import { minifyHTMLLiteralsPlugin } from 'esbuild-plugin-minify-html-literals';

export function createBuildSettings(options) {
  const plugins = [
    esbuildPluginTsc({
      force: true,
    }),
  ];

  // if (options?.minify === true) {
  //   plugins.push(minifyHTMLLiteralsPlugin());
  // }

  return {
    entryPoints: ['src/main.ts'],
    outfile: 'assets/bundle.js',
    bundle: true,
    plugins: plugins,
    ...options,
  };
}
