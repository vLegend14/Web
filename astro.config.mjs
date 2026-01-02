// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://vLegend14.github.io',
  base: '/Web/',
  vite: {
    plugins: [tailwindcss()],
  },
});