import { Markdown } from '@/components/Markdonwn';
import type { PageBlocksLayoutBlocksPost, PageBlocksPost } from 'tina/__generated__/types';

export const PostBlock = (block: PageBlocksPost | PageBlocksLayoutBlocksPost) => {
  return (
    <>{block.post ? <Markdown content={block.post.body}></Markdown> : <></>}</>
  );
};
