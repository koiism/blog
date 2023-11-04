
import { z, defineCollection, reference } from 'astro:content';
export const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    images: z.optional(
      z.array(
        z.object({
          src: z.string(),
          desc: z.string(),
        })
      )
    ),
    author: reference('authors'),
  }),
});