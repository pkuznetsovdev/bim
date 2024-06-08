import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'node:path';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'src',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@elements',
        replacement: path.resolve(__dirname, 'src/components/elements'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, 'src/constants'),
      },
      {
        find: '@types',
        replacement: path.resolve(__dirname, 'src/types'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks'),
      },
      {
        find: '@api',
        replacement: path.resolve(__dirname, 'src/api'),
      },
      {
        find: '@store',
        replacement: path.resolve(__dirname, 'src/store'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
