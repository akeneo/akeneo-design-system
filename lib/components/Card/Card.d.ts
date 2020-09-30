import React, { ReactNode } from 'react';
declare type CardGridProps = {
    size?: 'normal' | 'big';
};
declare const CardGrid: import("styled-components").StyledComponent<"div", any, CardGridProps, never>;
declare type CardProps = {
    src: string;
    fit?: 'cover' | 'contain';
    isSelected?: boolean;
    onSelectCard?: (isSelected: boolean) => void;
    children: ReactNode;
};
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export { Card, CardGrid };
