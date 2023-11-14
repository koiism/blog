import type {
  Page,
  PageBlocks,
  PageBlocksLayout,
  PageBlocksLayoutBlocks,
} from 'tina/__generated__/types';
import { PostBlock } from './post';
import { LayoutBlock } from './layout';
import { tinaField, useTina } from 'tinacms/dist/react';
import { pageWrapper } from '@/lib/utils';
import { TitleBlock } from './title';

export const Blocks = (props: Page) => {
  const pageData = useTina(pageWrapper(props)).data.page;
  return (
    <>
      {pageData.blocks
        ? pageData.blocks.map(function (block, i) {
          if (!block) return null;
          return (
            <div key={i} data-tina-field={tinaField(block)}>
              <Block {...block} />
            </div>
          );
        })
        : null}
    </>
  );
};

export const Block = (block: PageBlocks | PageBlocksLayoutBlocks) => {
  switch (block?.__typename) {
    case 'PageBlocksLayout':
      return <LayoutBlock {...block} />;
    case 'PageBlocksPost':
      return <PostBlock {...block} />;
    case 'PageBlocksTitle':
      return <TitleBlock {...block} />;
    default:
      return null;
  }
};
