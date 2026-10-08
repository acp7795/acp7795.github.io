// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     VITE_* env injection, @ path alias, React/TanStack dedupe, error logger plugins,
//     and sandbox detection (port/host/strictPort).
//
// GitHub Pages only serves static files, so the site is prerendered to plain
// HTML/JS (output: dist/client) and the server runtime (nitro) is disabled.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    prerender: { enabled: true, crawlLinks: true, failOnError: true },
  },
});
