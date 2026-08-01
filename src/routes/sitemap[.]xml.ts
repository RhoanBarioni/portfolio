import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const PATHS = ["/", "/about", "/projects", "/experience", "/stack", "/github", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...PATHS.map((path) =>
            [
              `  <url>`,
              `    <loc>${origin}${path}</loc>`,
              `    <changefreq>monthly</changefreq>`,
              `    <priority>${path === "/" ? "1.0" : "0.8"}</priority>`,
              `  </url>`,
            ].join("\n"),
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
