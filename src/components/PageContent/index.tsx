import { pageWrapper } from '@/lib/utils';
import React from 'react';
import type { Page } from 'tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';
import { Markdown } from '../Markdonwn';

interface IProps {
  page: Page;
}

export const PageContent = (props: IProps) => {
  const { page } = props;
  const pageData = useTina(pageWrapper(page)).data.page;
  console.log(pageData.blocks);
  return (
    <>
      {pageData.blocks
        ? pageData.blocks.map(function (block, i) {
          switch (block?.__typename) {
            case 'PageBlocksMarkdown':
              return (
                <React.Fragment key={i + block.__typename}>
                  {
                    block.markdown ? <Markdown content={block.markdown.body}></Markdown> : <></>
                  }
                </React.Fragment>
              );
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
