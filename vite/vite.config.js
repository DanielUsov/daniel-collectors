export default {
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
};
