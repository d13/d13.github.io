import { ConfigEnv, defineConfig, UserConfig } from 'vite';
import { resolve } from 'node:path';
import license from 'rollup-plugin-license';
// import { ViteFaviconsPlugin } from 'vite-plugin-favicon';
import ogPlugin from 'vite-plugin-open-graph';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const isProd = mode === 'production';
  console.log('isProd', isProd);

  const config = {
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
      // https://github.com/josh-hemphill/vite-plugin-favicon?tab=readme-ov-file#advanced-usage
      // ViteFaviconsPlugin({
      //   logo: './assets/media/branding/logo-square.png',
      //   inject: true,
      //   // https://github.com/itgalaxy/favicons#usage
      //   favicons: {
      //     appName: 'Keith Daulton Portfolio',
      //     appShortName: 'Keith Daulton',
      //     appDescription: 'Keith Daulton | Design Technologist, User Experience Engineer, Technical Leader',
      //     developerName: 'Keith Daulton',
      //     developerURL: null,
      //     background: '#ffffff',
      //     theme_color: '#ffffff',
      //     icons: {
      //       android: true,
      //       appleIcon: true,
      //       appleStartup: true,
      //       favicons: true,
      //       firefox: true,
      //       windows: true,
      //       yandex: true,
      //     },
      //     path: '/', // Ensure paths are relative to root
      //     manifestRelativePaths: true, // Use relative paths in manifest
      //   },
      //   cache: false,
      // }),
      // https://github.com/Lmmmmmm-bb/vite-plugin-open-graph?tab=readme-ov-file#types
      ogPlugin({
        basic: {
          title: 'Keith Daulton | Design Technologist, User Experience Engineer, Technical Leader',
          description: 'Principal front-end web developer and designer, Keith Daulton.',
          image: '/media/social/og-image.png',
        },
      }),
    ],
    build: {
      outDir: 'docs',
      minify: isProd,
      sourcemap: !isProd,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          404: resolve(__dirname, '404.html'),
        },
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
