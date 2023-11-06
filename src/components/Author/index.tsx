import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { authorWrapper } from '@/lib/utils';

import type { Author } from 'tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';

interface IProps {
  className?: string;
  author: Author;
}
export function AuthorLink(props: IProps) {
  const { author } = props;
  const authorData = useTina(authorWrapper(author)).data.author;
  return (
    <div data-tina-field={tinaField(authorData)}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">{authorData.name}</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80" align="start">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src={authorData.avatar} />
              <AvatarFallback>{authorData.name[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{authorData.name}</h4>
              <p className="text-sm">{authorData.description}</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
