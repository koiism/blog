import type { PageBlocksLayoutBlocksTitle, PageBlocksTitle } from 'tina/__generated__/types';
import { Title } from '@/components/ui/title';

export const TitleBlock = (block: PageBlocksTitle | PageBlocksLayoutBlocksTitle) => {
  const { color, title, size } = block;

  return <Title theme={color as 'primary'} size={size as '6xl'}>
    {title}
  </Title>
};
