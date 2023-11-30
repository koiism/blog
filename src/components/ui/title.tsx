import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const titleVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      size: {
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
      },
      theme: {
        primary: 'bg-gradient-to-r from-primary to-primary/50',
        foreground: 'bg-gradient-to-r from-foreground to-foreground/50',
      },
      bgColor: {
        primary: 'bg-primary',
        foreground: 'bg-foreground',
      },
    },
    defaultVariants: {
      size: '6xl',
      theme: 'primary',
    },
  }
);

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  asChild?: boolean;
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, size, theme, bgColor, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'h1';
    return (
      <div
        className={cn(
          titleVariants({ size, theme, className }),
          'font-bold relative bg-clip-text text-transparent'
        )}
      >
        <div
          className={cn(
            titleVariants({ bgColor: theme }),
            'absolute -left-8 z-10 h-12 w-32 rounded-full opacity-50 blur-3xl'
          )}
        ></div>
        <Comp ref={ref} {...props} />
      </div>
    );
  }
);
Title.displayName = 'Title';

export { Title, titleVariants };
