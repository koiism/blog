import type { TinaTemplate } from "tinacms";

export const TitleBlockTemplate: TinaTemplate = {
  name: 'title',
  label: '标题模块',
  ui: {
    defaultItem: {
      title: 'Title Here',
      color: 'primary',
      size: '6xl',
    },
  },
  fields: [
    {
      name: 'title',
      label: '标题',
      type: 'string',
      required: true,
    },
    {
      name: 'color',
      label: '颜色',
      type: 'string',
      required: true,
      options: [
        {
          label: '主题色',
          value: 'primary',
        },
        {
          label: '文本色',
          value: 'foreground',
        },
      ]
    },
    {
      name: 'size',
      label: '大小',
      type: 'string',
      required: true,
      options: [
        {
          label: '8xl',
          value: '8xl',
        },
        {
          label: '7xl',
          value: '7xl',
        },
        {
          label: '6xl',
          value: '6xl',
        },
        {
          label: '5xl',
          value: '5xl',
        },
        {
          label: '4xl',
          value: '4xl',
        },
        {
          label: '3xl',
          value: '3xl',
        },
        {
          label: '2xl',
          value: '2xl',
        },
        {
          label: 'xl',
          value: 'xl',
        },
        {
          label: 'lg',
          value: 'lg',
        },
        {
          label: 'base',
          value: 'base',
        },
        {
          label: 'sm',
          value: 'sm',
        },
        {
          label: 'xs',
          value: 'xs',
        },
      ]
    }
  ],
}