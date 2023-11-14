import type { PageBlocksLayout } from 'tina/__generated__/types';
import { Block } from '..';
import { tinaField } from 'tinacms/dist/react';

const cls: Record<string, string> = {
  row: 'flex flex-row items-center justify-between',
}

export const LayoutBlock = (block: PageBlocksLayout) => {
  const mode = block.mode || 'row'
  const applyLayout = cls[mode];
  return (
    <div className={applyLayout}>
      {block.blocks?.map((block, i) => {
        return block && (<div key={i} data-tina-field={tinaField(block)} className='flex-1'>
          <Block {...block} __typename={block.__typename?.replace('LayoutBlocks', '') as 'PageBlocksPost'} />
        </div>)
      })}
    </div>
  );
};
