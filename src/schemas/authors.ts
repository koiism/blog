import { defineCollection, z } from 'astro:content';

export const authors = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      description: z.string(),
    }),
});
