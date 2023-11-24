import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  server: {
    open: true,
    host: 'localhost',
    port: 3000,
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: true,
    emptyOutDir: true,
  },
  css: {
    modules: true,
  },
});
