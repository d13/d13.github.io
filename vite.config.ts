import { ConfigEnv, defineConfig, UserConfig } from 'vite';
import { resolve } from 'path';

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
