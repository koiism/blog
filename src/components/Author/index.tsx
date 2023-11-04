import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import type { Authors } from '@/schemas';

interface IProps {
  className?: string;
  author: Authors;
}
export function Author(props: IProps) {
  const { author } = props;
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">{author.data.name}</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80" align="start">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={author.data.avatar.src} />
            <AvatarFallback>{author.data.name[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{author.data.name}</h4>
            <p className="text-sm">{author.data.description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
