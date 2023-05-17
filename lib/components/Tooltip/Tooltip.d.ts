import { HTMLAttributes, ReactNode } from 'react';
import { Override } from '../../shared';
declare type Direction = 'top' | 'right' | 'bottom' | 'left';
declare type TooltipProps = Override<HTMLAttributes<HTMLDivElement>, {
    direction?: Direction;
    iconSize?: number;
    children: ReactNode;
    width?: number;
}>;
declare const Tooltip: ({ direction, iconSize, width, children, ...rest }: TooltipProps) => JSX.Element;
export { Tooltip };
