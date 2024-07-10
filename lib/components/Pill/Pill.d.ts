import React from 'react';
type PillLevel = 'primary' | 'warning' | 'danger';
declare const Pill: React.ForwardRefExoticComponent<{
    level?: PillLevel | undefined;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { Pill };
