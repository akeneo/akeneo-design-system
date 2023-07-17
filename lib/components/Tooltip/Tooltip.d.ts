import React, { HTMLAttributes, ReactNode } from 'react';
import { Override } from '../../shared';
declare type Direction = 'top' | 'right' | 'bottom' | 'left';
export declare type TooltipProps = Override<HTMLAttributes<HTMLDivElement>, {
    direction?: Direction;
    iconSize?: number;
    children: ReactNode;
    width?: number;
}>;
declare const Tooltip: React.FC<TooltipProps>;
export { Tooltip };
