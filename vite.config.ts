import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const pagesBase = "/portfolio";

export default defineConfig({
  base: isGitHubPages ? `${pagesBase}/` : "/",
  resolve: { tsconfigPaths: true },
  plugins: [
    tanstackStart({
      router: { basepath: isGitHubPages ? pagesBase : "/" },
      server: { entry: "server" },
      prerender: {
        enabled: isGitHubPages,
        crawlLinks: false,
        failOnError: true,
      },
      sitemap: isGitHubPages
        ? {
            enabled: true,
            host: `https://rhoanbarioni.github.io${pagesBase}`,
          }
        : { enabled: false },
    }),
    nitro({ defaultPreset: "cloudflare_module" }),
    viteReact(),
    tailwindcss(),
  ],
});
