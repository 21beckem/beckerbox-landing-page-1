import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [devtools(), solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        tutorials: resolve(__dirname, 'tutorials.html')
      }
    }
  },
});
