import esbuildPluginTsc from 'esbuild-plugin-tsc';
// import { minifyHTMLLiteralsPlugin } from 'esbuild-plugin-minify-html-literals';

export function createBuildSettings(options) {
  const plugins = [
    esbuildPluginTsc({
      force: false,
    }),
  ];

  // if (options?.minify === true) {
  //   plugins.push(minifyHTMLLiteralsPlugin());
  // }

  return {
    entryPoints: ['src/main.ts', 'src/styles.ts'],
    outdir: 'assets/bundle',
    chunkNames: 'chunks/[name]-[hash]',
    format: 'esm',
    bundle: true,
    splitting: true,
    legalComments: 'linked',
    plugins: plugins,
    ...options,
  };
}
