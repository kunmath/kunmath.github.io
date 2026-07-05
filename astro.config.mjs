// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deploying to a GitHub Pages *user* site (kunmath.github.io) needs no
// `base`. If this repo is instead published as a project page
// (<user>.github.io/<repo>), add `base: '/<repo>'` below.
export default defineConfig({
  site: 'https://kunmath.github.io',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
  },
});
