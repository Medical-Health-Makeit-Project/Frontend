import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: path.resolve(path.join(__dirname, '/src/assets')),
      },
      {
        find: '@components',
        replacement: path.resolve(path.join(__dirname, '/src/components')),
      },

      {
        find: '@pages',
        replacement: path.resolve(path.join(__dirname, '/src/pages')),
      },

      {
        find: '@sass',
        replacement: path.resolve(path.join(__dirname, '/src/sass')),
      },
      {
        find: '@constants',
        replacement: path.resolve(path.join(__dirname, '/src/constants')),
      },
      {
        find: '@hooks',
        replacement: path.resolve(path.join(__dirname, '/src/hooks')),
      },
      {
        find: '@redux',
        replacement: path.resolve(path.join(__dirname, '/src/redux')),
      },
      {
        find: '@utils',
        replacement: path.resolve(path.join(__dirname, '/src/utils')),
      },
      {
        find: '@services',
        replacement: path.resolve(path.join(__dirname, '/src/services')),
      },
      {
        find: '@routes',
        replacement: path.resolve(path.join(__dirname, '/src/routes')),
      },
    ],
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
