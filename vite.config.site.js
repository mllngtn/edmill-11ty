import { defineConfig } from 'vite'

const path = require('path')

export default defineConfig({
  define: {
    'process.env.NODE_ENV': '"production"', // avoids 'process is undefined' error
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/js/site/site.js'),
      formats: ['iife'], //can be es, cjs, umd or iife 
      name: 'site',
      fileName: (format) => `site.js`,
    },
    emptyOutDir: false,
    outDir: 'src/assets/js',
    sourcemap: true,
  }
});
