import type { PropsWithChildren } from 'react';
import type { Post } from 'tina/__generated__/types';
import { AuthorLink } from '@/components/Author';
import { tinaField, useTina } from 'tinacms/dist/react';
import './index.scss';
import { postWrapper } from '@/lib/utils';
import { Markdown } from '@/components/Markdonwn';

interface IProps {
  post: Post;
}

export function PostContent(props: PropsWithChildren<IProps>) {
  const { post } = props;
  const postData = useTina(postWrapper(post)).data.post;
  return (
    <div className="post">
      <h1 data-tina-field={tinaField(postData)}>{postData.title}</h1>
      <AuthorLink author={postData.author} />
      <div data-tina-field={tinaField(postData)}>
        <Markdown content={postData.body}></Markdown>
      </div>
    </div>
  );
}
