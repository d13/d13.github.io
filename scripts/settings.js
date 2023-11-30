import esbuildPluginTsc from 'esbuild-plugin-tsc';

export function createBuildSettings(options) {
  return {
    entryPoints: ['src/main.ts'],
    outfile: 'assets/bundle.js',
    bundle: true,
    plugins: [
      esbuildPluginTsc({
        force: true,
      }),
    ],
    ...options,
  };
}
