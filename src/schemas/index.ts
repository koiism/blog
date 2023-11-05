import type { getAuthorById, getAuthors } from './authors';
import type { getPostById, getPosts } from './posts';
export { authors, getAuthorById, getAuthors } from './authors';
export { posts, getPostById } from './posts';

export type Author = Awaited<ReturnType<typeof getAuthorById>>;
export type Post = Awaited<ReturnType<typeof getPostById>>;
