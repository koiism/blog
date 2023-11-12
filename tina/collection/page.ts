import { type Collection } from 'tinacms';
import { allBlocks } from '../../src/components/blocks/template';

export const page: Collection = {
  name: 'page',
  label: '页面',
  path: 'src/content/page',
  format: 'mdx',
  fields: [
    {
      type: 'string',
      name: 'title',
      label: '标题',
      isTitle: true,
      required: true,
    },
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: '模块',
      templates: allBlocks,
    },
    {
      type: 'rich-text',
      name: 'body',
      label: '内容',
      isBody: true,
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/page/${document._sys.filename}`;
    },
  },
};