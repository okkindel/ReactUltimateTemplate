import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@shared/utils';
import React, { JSX } from 'react';
import { ClassValue } from 'clsx';

interface ITypographyProps extends VariantProps<typeof typographyVariants> {
  element?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  children: React.ReactNode;
  className?: ClassValue;
}

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-semibold lg:text-5xl',
      h2: 'text-3xl font-light',
      h3: 'text-2xl font-light',
      h4: 'text-xl font-light',
      h5: 'text-base',
      p: 'text-sm',
      small: 'text-xs',
    },
    color: {
      secondary: 'text-foreground',
      muted: 'text-muted-foreground',
      white: 'text-white',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

export const Typography = ({
  className,
  children,
  element,
  variant,
  color,
  ...props
}: ITypographyProps): JSX.Element => {
  const TypographyElement = element || variant || 'p';

  return (
    <TypographyElement
      className={cn(typographyVariants({ variant, color }), className)}
      {...props}
    >
      {children}
    </TypographyElement>
  );
};
