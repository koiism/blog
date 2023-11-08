import { defineConfig } from 'tinacms';
import { post } from './collection/post';
import { author } from './collection/author';
import { page } from './collection/page';

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: null,
  token: null,

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
      post,
      author,
      page,
    ],
  },
});
