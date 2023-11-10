import { type Collection } from 'tinacms';

export const author: Collection = {
  name: 'author',
  label: '作者',
  path: 'src/content/authors',
  format: 'json',
  fields: [
    {
      type: 'string',
      name: 'name',
      label: '昵称',
      isTitle: true,
      required: true,
    },
    {
      type: 'image',
      name: 'avatar',
      label: '头像',
      required: true,
    },
    {
      type: 'string',
      name: 'description',
      label: '描述',
      required: true,
    },
  ],
}