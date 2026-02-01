import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// Default '/' ; for GitHub repository Pages, use PUBLIC_PATH="/flash1"
const PUBLIC_PATH = process.env.PUBLIC_PATH || '/';

export default defineConfig({
  server: {
    host: '::',
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [react()],
  base: PUBLIC_PATH,
  build: { outDir: 'build' },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: 'lib', replacement: resolve(__dirname, 'lib') },
    ],
  },
});
