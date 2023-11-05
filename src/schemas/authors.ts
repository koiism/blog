import { defineCollection, z } from 'astro:content';
import client from 'tina/__generated__/client';

export const authors = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      description: z.string(),
    }),
});

export const getAuthorById = async (id: string) => {
  return await client.queries.author({ relativePath: id });
};

export const getAuthors = async () => {
  return await client.queries.authorConnection();
};
