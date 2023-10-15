import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import remarkCodeTitles from 'remark-code-titles';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), sitemap(), prefetch(), tailwind()],
  output: 'server',
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkCodeTitles],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noreferrer noopener'],
          content: {
            type: 'text',
            value: '↗',
          },
        },
      ],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            class: 'heading-link heading-link--hidden---effects',
            'data-heading-link': true,
          },
          behavior: 'wrap',
        },
      ],
    ],
    shikiConfig: {
      theme: 'rose-pine',
      wrap: true,
    },
  },
});
