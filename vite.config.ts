import { ConfigEnv, defineConfig, UserConfig } from 'vite';
import { resolve } from 'node:path';
import license from 'rollup-plugin-license';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const isProd = mode === 'production';
  console.log('isProd', isProd);

  const config = {
    build: {
      outDir: 'docs',
      minify: isProd,
      sourcemap: !isProd,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          404: resolve(__dirname, '404.html'),
        },
        plugins: [
          license({
            thirdParty: {
              output: {
                file: resolve(__dirname, 'docs/assets/vendor.LICENSE.txt'),
              },
            },
            sourcemap: true,
            banner: {
              content: '',
              commentStyle: 'none',
            },
          }),
        ],
      },
      //   cssCodeSplit: true,
      //   // rollupOptions: {
      //   //   output: {
      //   //     manualChunks: isProd
      //   //       ? {
      //   //           vendor: ['lit'],
      //   //         }
      //   //       : undefined,
      //   //   },
      //   // },
    },
    esbuild: {
      legalComments: 'none',
      banner: `/**
* Copyright Keith Daulton ${new Date().getFullYear()}
* See /assets/vendor.LICENSE.txt for 3rd party license information.
**/`,
    },
    // css: {
    //   devSourcemap: true,
    // },
    server: {
      port: 5173,
      // open: true,
    },
  } satisfies UserConfig;

  return config;
});
