import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { copyFileSync } from 'fs';

export default defineConfig({
  base: '/',
  plugins: [react(),
    {
      name: 'copy-404',
      apply: 'build',
      generateBundle() {
        copyFileSync(
          resolve(__dirname, 'public/404.html'),
          resolve(__dirname, 'dist/404.html')
        )
      }
    }
  ],
  resolve: {
    alias: {
      '@/components': resolve(__dirname, './src/components'),
      '@/fonts': resolve(__dirname, './src/fonts'),
      '@/hooks': resolve(__dirname, './src/hooks'),
      '@/pages': resolve(__dirname, './src/pages'),
      '@/styles': resolve(__dirname, './src/styles'),
    }
  },
  build: {
    outDir: 'dist'
  }
})