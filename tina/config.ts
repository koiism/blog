import { Form, TinaCMS, defineConfig } from 'tinacms';
import { PostBlock } from './templates';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'src/assets',
      publicFolder: '/',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: '文章',
        path: 'src/content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: '标题',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: '内容',
            isBody: true,
          },
          {
            type: 'reference',
            collections: ['author'],
            name: 'author',
            label: '作者',
            required: true,
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
      },
      {
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
        ui: {
          router: ({ document }) => {
            return `/posts/${document._sys.filename}`;
          },
        },
      },
      {
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
            templates: [PostBlock],
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
      },
    ],
  },
});
