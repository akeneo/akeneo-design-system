import React, { ReactNode } from 'react';
import { Override } from '../../shared';
declare type CardGridProps = {
    size?: 'normal' | 'big';
};
declare const CardGrid: import("styled-components").StyledComponent<"div", any, CardGridProps, never>;
declare type CardProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    src: string | null;
    fit?: 'cover' | 'contain';
    isSelected?: boolean;
    disabled?: boolean;
    onSelect?: (isSelected: boolean) => void;
    children: ReactNode;
}>;
declare const Card: {
    ({ src, fit, isSelected, onSelect, disabled, children, onClick, ...rest }: CardProps): JSX.Element;
    BadgeContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
};
export { Card, CardGrid };
