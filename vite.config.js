import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        planner: resolve(__dirname, "src/html/planner.html"),
        ideas: resolve(__dirname, "src/html/ideas.html"),
        favorites: resolve(__dirname, "src/html/favorites.html"),
      },
    },
  },
});
