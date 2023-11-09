import { type Collection } from 'tinacms';
import { allBlocks } from '../../src/components/Blocks/template';

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
      type: 'boolean',
      name: 'isEntry',
      label: '是否展示在侧边栏上',
      description: '如果勾选，会在侧边栏上展示；同名目录下的其他页面会作为子页面展示在侧边栏上',
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