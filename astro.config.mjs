// @ts-check
import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://etsii.es',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare(),
});
