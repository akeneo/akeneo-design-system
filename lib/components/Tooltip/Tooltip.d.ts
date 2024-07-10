import React, { HTMLAttributes, ReactNode } from 'react';
import { Override } from '../../shared';
type Direction = 'top' | 'right' | 'bottom' | 'left';
export type TooltipProps = Override<HTMLAttributes<HTMLDivElement>, {
    direction?: Direction;
    iconSize?: number;
    children: ReactNode;
    width?: number;
}>;
declare const Tooltip: {
    ({ direction, iconSize, width, children, ...rest }: TooltipProps): React.JSX.Element;
    Title: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
};
export { Tooltip };
