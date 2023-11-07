import type { TinaTemplate } from 'tinacms'

export const heroBlock: TinaTemplate = {
  name: 'hero',
  label: 'Hero',
  ui: {
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: 'This Big Text is Totally Awesome',
      text: 'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Tagline',
      name: 'tagline',
    },
    {
      type: 'string',
      label: 'Headline',
      name: 'headline',
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      ui: {
        component: 'textarea',
      },
    },
  ],
}
export const MDBlock: TinaTemplate = {
  name: 'markdown',
  label: 'Markdown',
  ui: {
    defaultItem: {
      markdown: '',
    },
  },
  fields: [
    {
      type: 'reference',
      collections: ['post'],
      name: 'markdown',
      label: 'Markdown',
    },
  ],
}