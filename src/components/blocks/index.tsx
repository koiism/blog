import type { Page, PageBlocks } from "tina/__generated__/types";
import { PostBlock } from "./post";
import { tinaField } from "tinacms/dist/react";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
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

const Block = (block: PageBlocks) => {
  switch (block?.__typename) {
    case 'PageBlocksMarkdown':
      return (
        <PostBlock {...block} />
      );
    default:
      return null;
  }
};
