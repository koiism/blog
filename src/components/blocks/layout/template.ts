import type { TinaTemplate } from 'tinacms';
import { PostBlockTemplate } from '../post/template';
import { TitleBlockTemplate } from '../title/template';

export const allBlocksWithoutLayout = [PostBlockTemplate, TitleBlockTemplate];

export const LayoutBlockTemplate: TinaTemplate = {
  name: 'layout',
  label: '布局',
  ui: {
    defaultItem: {
      mode: 'row',
    },
  },
  fields: [
    {
      name: 'mode',
      label: '布局模式',
      type: 'string',
      required: true,
      options: [
        {
          label: '行',
          value: 'row',
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
