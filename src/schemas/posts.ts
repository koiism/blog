import { z, defineCollection, reference } from 'astro:content';
export const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      images: z
        .array(
          z.object({
            src: image(),
            desc: z.string(),
          })
        )
        .optional(),
      cover: image().optional(),
      author: reference('authors'),
    }),
});
