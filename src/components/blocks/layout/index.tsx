import type { PageBlocksLayout } from 'tina/__generated__/types';
import { Blocks } from '..';

export const LayoutBlock = (block: PageBlocksLayout) => {
  console.log(block.blocks);
  return (
    <div>
    </div>
  );
};
