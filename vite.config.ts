import { ConfigEnv, defineConfig, UserConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const isProd = mode === "production";
  console.log("isProd", isProd);

  const config = {
    build: {
      outDir: "docs",
      minify: isProd,
      sourcemap: !isProd,
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
