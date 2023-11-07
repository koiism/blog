import { Form, TinaCMS, defineConfig } from 'tinacms';
import { heroBlock, MDBlock } from './templates';

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
        label: 'Posts',
        path: 'src/content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
          {
            type: 'reference',
            collections: ['author'],
            name: 'author',
            label: 'Author',
            required: true,
          },
          {
            name: 'createdAt',
            label: 'Created At',
            type: 'datetime',
          },
          {
            name: 'updatedAt',
            label: 'Updated At',
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
        label: 'Authors',
        path: 'src/content/authors',
        format: 'json',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Name',
            isTitle: true,
            required: true,
          },
          {
            type: 'image',
            name: 'avatar',
            label: 'Avatar',
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
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
        label: 'Page',
        path: 'src/content/page',
        format: 'json',
        fields: [
          {
            type: 'object',
            list: true,
            name: 'blocks',
            label: 'Sections',
            templates: [heroBlock, MDBlock],
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
