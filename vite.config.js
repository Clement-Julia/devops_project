import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: 'jsdom',
    exclude: ['main.js', 'test-playwright/*'],
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3000,
  }
})