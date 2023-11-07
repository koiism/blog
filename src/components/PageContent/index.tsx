import { pageWrapper } from '@/lib/utils';
import React from 'react';
import type { Page } from 'tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
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
                <div data-tina-field={tinaField(block)} key={i + block.__typename}>
                  {
                    block.post ? <Markdown content={block.post.body}></Markdown> : <></>
                  }
                </div>
              );
            default:
              return null;
          }
        })
        : null}
    </>
  );
};
