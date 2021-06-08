import React from 'react';
declare type PillLevel = 'primary' | 'warning' | 'danger';
declare type PillProps = {
    level?: PillLevel;
};
declare const Pill: React.ForwardRefExoticComponent<PillProps & React.RefAttributes<HTMLDivElement>>;
export { Pill };
