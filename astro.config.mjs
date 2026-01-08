import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://vlegend14.github.io",
  base: "/",
  trailingSlash: "always",
  vite: { plugins: [tailwindcss()] },
});