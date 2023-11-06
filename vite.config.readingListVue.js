import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.NODE_ENV': '"production"', // avoids 'process is undefined' error
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/js/readingList/vue/index.ts'),
      formats: ['iife'], //can be es, cjs, umd or iife 
      name: 'readingListVue',
      fileName: (format) => `readingListVue.js`,
    },
    emptyOutDir: false,
    outDir: 'src/assets/js',
    sourcemap: true,
  }
});
