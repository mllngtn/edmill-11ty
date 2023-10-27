import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"development"', // avoids 'process is undefined' error
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/js/readingListReact/index.jsx'),
      formats: ['iife'], //can be es, cjs, umd or iife 
      name: 'readingListReact',
      fileName: (format) => `readingListReact.js`,
    },
    emptyOutDir: false,
    outDir: 'src/assets/js',
    sourcemap: true,
  }
});
