import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const beitraege = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/beitraege' }),
  schema: z.object({
    title: z.string().min(1), description: z.string(),
    date: z.coerce.date(), type: z.enum(['gedanke','reflexion','essay','zitat']),
    tags: z.array(z.string()),
    sourceId: z.string().min(1), related: z.array(z.string()),
    author: z.string(),
    draft: z.boolean()
  })
});
export const collections = { beitraege };
