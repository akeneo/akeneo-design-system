import React from 'react';
import { Level } from '../../theme';
declare type BadgeProps = {
    level?: Level;
    children?: string;
};
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
export { Badge };
export type { BadgeProps };
