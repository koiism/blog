import { Form, TinaCMS, type Collection } from 'tinacms';
import { TagSelector } from '../fields/TagSelector';

export const post: Collection = {
  name: 'post',
  label: '文章',
  path: 'src/content/posts',
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
    beforeSubmit: async ({
      form,
      values,
    }: {
      form: Form
      cms: TinaCMS
      values: Record<string, any>
    }) => {
      if (form.crudType === 'create') {
        return {
          ...values,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
      } else {
        return {
          ...values,
          updatedAt: new Date().toISOString(),
        }
      }
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: '标题',
      isTitle: true,
      required: true,
    },
    {
      type: 'reference',
      collections: ['author'],
      name: 'author',
      label: '作者',
      required: true,
    },
    {
      type: 'reference',
      collections: ['category'],
      name: 'category',
      label: '分类',
    },
    {
      type: 'string',
      name: 'tags',
      label: 'Tags',
      list:true,
      ui: {
        component: TagSelector,
      }
    },
    {
      type: 'rich-text',
      name: 'body',
      label: '内容',
      isBody: true,
    },
    {
      name: 'createdAt',
      label: '创建时间',
      type: 'datetime',
    },
    {
      name: 'updatedAt',
      label: '编辑时间',
      type: 'datetime',
    },
  ],
};