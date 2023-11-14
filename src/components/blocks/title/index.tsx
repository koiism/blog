import type { PageBlocksLayoutBlocksTitle, PageBlocksTitle } from 'tina/__generated__/types';

const fontSize: Record<string, string> = {
  '8xl': 'text-8xl',
  '7xl': 'text-7xl',
  '6xl': 'text-6xl',
  '5xl': 'text-5xl',
  '4xl': 'text-4xl',
  '3xl': 'text-3xl',
  '2xl': 'text-2xl',
  xl: 'text-xl',
  lg: 'text-lg',
  base: 'text-base',
  sm: 'text-sm',
  xs: 'text-xs',
}

const textColor: Record<string, string> = {
  'foreground': 'bg-gradient-to-r from-foreground to-foreground/50',
  'primary': 'bg-gradient-to-r from-primary to-primary/50',
}

const bgColor: Record<string, string> = {
  'foreground': 'bg-foreground',
  'primary': 'bg-primary',
}

export const TitleBlock = (block: PageBlocksTitle | PageBlocksLayoutBlocksTitle) => {
  const { color, title, size } = block;

  return <div className={`${textColor[color]} ${fontSize[size]} font-bold relative bg-clip-text text-transparent`}>
    <div className={`absolute -left-8 z-10 h-12 w-32 rounded-full opacity-50 blur-3xl ${bgColor[color]}`}></div>
    {title}
  </div>;
};
