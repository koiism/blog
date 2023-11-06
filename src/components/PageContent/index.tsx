import { pageWrapper } from '@/lib/utils';
import React from 'react';
import type { Page } from 'tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';

interface IProps {
  page: Page;
}

export const PageContent = (props: IProps) => {
  const { page } = props;
  const pageData = useTina(pageWrapper(page)).data.page;
  return (
    <>
      {pageData.blocks
        ? pageData.blocks.map(function (block, i) {
            switch (block?.__typename) {
              case 'PageBlocksHero':
                return (
                  <React.Fragment key={i + block.__typename}>
                    {block.__typename}
                  </React.Fragment>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
