// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://smyej7.github.io/portfolio-amina",
  base: process.env.NODE_ENV === "production" ? "/portfolio-amina/" : "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
