import { reactRouter } from "@react-router/dev/vite";
import { env } from "process";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    eslint({
      fix: true,
      lintOnStart: true,
    }),
  ],
  ...(env.APP_HTTP_BASE
    ? {
      base: env.APP_HTTP_BASE,
    }
    : {}
  )
});
