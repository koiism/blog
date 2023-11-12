import type { PropsWithChildren } from 'react';
import type { Post } from 'tina/__generated__/types';
import { AuthorLink } from '@/components/Author';
import { tinaField, useTina } from 'tinacms/dist/react';
import './index.scss';
import { postWrapper, timeFromNow } from '@/lib/utils';
import { Markdown } from '@/components/Markdonwn';

interface IProps {
  post: Post;
}

export function PostContent(props: PropsWithChildren<IProps>) {
  const { post } = props;
  const postData = useTina(postWrapper(post)).data.post;
  return (
    <div className="post">
      <h1 className='text-6xl font-bold' data-tina-field={tinaField(postData, 'title')}>{postData.title}</h1>
      <div className='flex flex-row items-center justify-between'>
        <div>
          最后编辑于 {timeFromNow(postData.updatedAt)}
        </div>
        <div className='flex flex-row gap-1 items-center'>
          作者：<AuthorLink author={postData.author} />
        </div>
      </div>
      <div data-tina-field={tinaField(postData, 'body')}>
        <Markdown content={postData.body}></Markdown>
      </div>
    </div>
  );
}
