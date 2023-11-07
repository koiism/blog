import { TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text';
import './index.scss';

interface IProps {
  content: TinaMarkdownContent | TinaMarkdownContent[];

}

export function Markdown({ content }: IProps) {
  return (
    <div className="markdown-body">
      <TinaMarkdown content={content}></TinaMarkdown>
    </div>
  );
}
