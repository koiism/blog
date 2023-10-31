import { z, defineCollection } from 'astro:content';
const postsCollection = defineCollection({
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
  }),
});

export const collections = {
  posts: postsCollection,
};
