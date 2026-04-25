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
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        tutorials: resolve(__dirname, 'tutorials.html'),
        download: resolve(__dirname, 'download.html'),
        thankyou: resolve(__dirname, 'thankyou.html'),
        error: resolve(__dirname, 'error.html'),
        appLanding: resolve(__dirname, 'app-landing.html'),
        dolphinAlternative: resolve(__dirname, 'dolphin-alternative.html'),
        partyGames: resolve(__dirname, 'party-games.html')
      }
    }
  },
});
