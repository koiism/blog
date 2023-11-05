import type { PropsWithChildren } from 'react';
import type { Post } from '@/schemas';
import { AuthorLink } from '@/components/Author';
import { tinaField, useTina } from 'tinacms/dist/react';
import './index.scss';

interface IProps {
  post: Post;
}

export function PostContent(props: PropsWithChildren<IProps>) {
  const { post, children } = props;
  const postData = useTina(post).data;
  return (
    <div className="post">
      <h1 data-tina-field={tinaField(postData, 'post')}>
        {postData.post.title}
      </h1>
      <AuthorLink data-tina-field={tinaField(postData, 'post')} author={postData.post.author} />
      {children}
    </div>
  );
}
