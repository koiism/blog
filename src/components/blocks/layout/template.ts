import type { TinaTemplate } from 'tinacms';
import { PostBlockTemplate } from '../post/template';

export const allBlocksWithoutLayout = [PostBlockTemplate];

export const LayoutBlockTemplate: TinaTemplate = {
  name: 'layout',
  label: '布局',
  ui: {
    defaultItem: {},
  },
  fields: [
    {
      name: 'mode',
      label: '布局模式',
      type: 'string',
      options: [
        {
          label: '行',
          value: 'row',
        },
        {
          label: '列',
          value: 'column',
        },
      ],
    },
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: '模块',
      templates: allBlocksWithoutLayout,
    },
  ],
};
