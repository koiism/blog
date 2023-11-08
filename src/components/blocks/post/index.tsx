import { Markdown } from '@/components/Markdonwn';
import type { PageBlocks } from 'tina/__generated__/types';

export const PostBlock = (block: PageBlocks) => {
  return (
    <>
      {
        block.post ? <Markdown content={block.post.body}></Markdown> : <></>
      }
    </>
  );
};
