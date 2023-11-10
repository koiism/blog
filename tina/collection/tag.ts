import { type Collection } from 'tinacms';

export const tag: Collection = {
  name: 'tag',
  label: 'Tag',
  path: 'src/content/tags',
  format: 'json',
  fields: [
    {
      type: 'string',
      name: 'name',
      label: 'tag名',
      isTitle: true,
      required: true,
    },
    {
      type: 'string',
      name: 'color',
      label: '颜色',
      ui: {
        component: 'color',
      }
    },
    {
      type: 'string',
      name: 'icon',
      label: 'icon',
    },
    {
      type: 'string',
      name: 'description',
      label: '描述',
    },
  ],
}