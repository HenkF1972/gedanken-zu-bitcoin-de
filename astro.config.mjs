import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://gedanken-zu-bitcoin.de', integrations: [sitemap()] });
