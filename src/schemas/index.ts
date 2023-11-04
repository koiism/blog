import type { CollectionEntry } from 'astro:content';
export { authors } from './authors';
export { posts } from './posts';

export type Authors = CollectionEntry<'authors'>;
export type Posts = CollectionEntry<'posts'>;
