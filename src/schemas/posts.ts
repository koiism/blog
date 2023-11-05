import { z, defineCollection, reference } from 'astro:content';
import client from 'tina/__generated__/client';
export const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // tags: z.array(z.string()),
      images: z
        .array(
          z.object({
            src: image(),
            desc: z.string(),
          })
        )
        .optional(),
      cover: image().optional(),
      author: z.string().optional(),
    }),
});

export const getPostById = async (id: string) => {
  return await client.queries.post({ relativePath: id });
};

export const getPosts = async () => {
  return await client.queries.postConnection();
};