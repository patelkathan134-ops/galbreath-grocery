import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'elevated' | 'glass';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-xl border bg-card text-card-foreground',
                    {
                        'bg-white border-stone-200': variant === 'default',
                        'bg-white shadow-lg border-transparent': variant === 'elevated',
                        'bg-white/90 backdrop-blur-sm border-white/20': variant === 'glass',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = 'Card';
