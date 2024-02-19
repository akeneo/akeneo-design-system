import React, { HTMLAttributes, ReactNode } from 'react';
import { Override } from '../../shared';
declare type Direction = 'top' | 'right' | 'bottom' | 'left';
export declare type TooltipProps = Override<HTMLAttributes<HTMLDivElement>, {
    direction?: Direction;
    iconSize?: number;
    children: ReactNode;
    width?: number;
}>;
declare const Tooltip: {
    ({ direction, iconSize, width, children, ...rest }: TooltipProps): React.JSX.Element;
    Title: import("styled-components").StyledComponent<"div", any, Record<string, unknown> & import("styled-components").ThemeProps<import("../../theme/theme").Theme>, never>;
};
export { Tooltip };
