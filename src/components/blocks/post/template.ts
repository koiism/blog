import type { TinaTemplate } from "tinacms";

export const PostBlockTemplate: TinaTemplate = {
  name: 'markdown',
  label: '文章模块',
  ui: {
    defaultItem: {
      post: '',
      renderType: 'markdown',
    },
  },
  fields: [
    {
      name: 'post',
      label: '文章',
      type: 'reference',
      collections: ['post'],
    },
    {
      name: 'renderType',
      label: '渲染方式',
      type: 'string',
      options: [
        {
          label: '卡片',
          value: 'card',
        },
        {
          label: '链接',
          value: 'link',
        },
        {
          label: '文章',
          value: 'markdown',
        },
      ]
    },
  ],
}