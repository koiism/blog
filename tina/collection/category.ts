
import { type Collection } from 'tinacms';

export const category: Collection = {
  name: 'category',
  label: '分类',
  path: 'src/content/category',
  format: 'json',
  fields: [
    {
      type: 'string',
      name: 'name',
      label: '分类名',
      isTitle: true,
      required: true,
    },
    {
      type: 'string',
      name: 'color',
      label: '头像',
      required: true,
      ui: {
        component: 'color',
      }
    },
    {
      type: 'string',
      name: 'description',
      label: '描述',
      required: true,
    },
  ],
}