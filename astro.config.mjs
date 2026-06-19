import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://nomsai.app',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        if (item.url === 'https://nomsai.app/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else if (item.url.includes('/articles/')) {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        } else {
          item.changefreq = 'weekly';
          item.priority = 0.6;
        }
        return item;
      },
    }),
    react(),
  ],
  output: 'static',
});
