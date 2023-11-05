import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import type { AuthorPartsFragment } from 'tina/__generated__/types';

interface IProps {
  className?: string;
  author: AuthorPartsFragment;
}
export function AuthorLink(props: IProps) {
  const { author } = props;
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">{author.name}</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80" align="start">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={author.avatar} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{author.name}</h4>
            <p className="text-sm">{author.description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
