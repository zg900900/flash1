import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// Optional: used to set base path for deployments (e.g., GitHub Pages /zg900900/flash1)
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
