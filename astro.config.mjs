import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://deckingayrshire.co.uk',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  publicDir: './static',
  build: {
    format: 'file'
  },
  trailingSlash: 'never',
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
