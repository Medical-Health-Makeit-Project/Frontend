import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@assets', replacement: path.resolve(__dirname, '/src/assets') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, '/src/components'),
      },

      { find: '@pages', replacement: path.resolve(__dirname, '/src/pages') },

      { find: '@sass', replacement: path.resolve(__dirname, '/src/sass') },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, '/src/constants'),
      },
      { find: '@hooks', replacement: path.resolve(__dirname, '/src/hooks') },
    ],
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
