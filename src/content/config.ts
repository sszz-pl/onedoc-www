import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    lang: z.enum(['pl', 'en']),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    lang: z.enum(['pl', 'en']),
    client: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, portfolio };
