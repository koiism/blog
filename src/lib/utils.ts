import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Post, Author, Page, PageConnectionEdges } from 'tina/__generated__/types';
import {
  AuthorDocument,
  PageDocument,
  PostDocument,
} from 'tina/__generated__/types';
import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear' // 导入插件
import calendar from 'dayjs/plugin/calendar' // 导入插件
import relativeTime from 'dayjs/plugin/relativeTime' // 导入插件
import 'dayjs/locale/zh-cn' // 导入本地化语言
import client from 'tina/__generated__/client';

dayjs.extend(isLeapYear) // 使用插件
dayjs.extend(calendar) // 使用插件
dayjs.extend(relativeTime) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言

export function timeCalendar(date: dayjs.ConfigType) {
  return dayjs().calendar(dayjs(date));
}
export function timeFromNow(date: dayjs.ConfigType) {
  return dayjs(date).fromNow();
}

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
export const pageWrapper = tinaWrapperGenerator<Page>('page', PageDocument);
