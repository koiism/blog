import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Post, Author } from 'tina/__generated__/types';
import {
  AuthorDocument,
  PostDocument,
  type Maybe,
} from 'tina/__generated__/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function tinaWrapperGenerator<T extends object>(key: string, query: string) {
  return function (
    data: T extends { _sys: { relativePath: string } }
      ? T
      : T & { _sys: { relativePath: string } }
  ) {
    return {
      data: {
        [key]: data,
      },
      query,
      variables: {
        relativePath: data._sys.relativePath,
      },
    };
  };
}

export const authorWrapper = tinaWrapperGenerator<Author>(
  'author',
  AuthorDocument
);
export const postWrapper = tinaWrapperGenerator<Post>('post', PostDocument);
