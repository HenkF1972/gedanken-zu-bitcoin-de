import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const beitraege = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/beitraege' }),
  schema: z.object({
    title: z.string(), description: z.string().optional(),
    date: z.coerce.date(), type: z.enum(['gedanke','reflexion','essay']),
    tags: z.array(z.string()).default([]),
    sourceId: z.string().optional(), related: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});
export const collections = { beitraege };
