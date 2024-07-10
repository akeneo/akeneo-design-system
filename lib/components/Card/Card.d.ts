import React, { ReactNode } from 'react';
import { AkeneoThemedProps } from '../../theme';
type CardGridProps = {
    size?: 'normal' | 'big';
};
declare const CardGrid: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, CardGridProps & AkeneoThemedProps>> & string;
type BadgeContainerProps = {
    stacked?: boolean;
} & AkeneoThemedProps;
declare const Card: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onSelect" | "disabled" | "src" | "loading" | "fit" | "isSelected" | "stacked"> & {
    src: string | null;
    fit?: "contain" | "cover" | undefined;
    loading?: "eager" | "lazy" | undefined;
    isSelected?: boolean | undefined;
    disabled?: boolean | undefined;
    onSelect?: ((isSelected: boolean) => void) | undefined;
    stacked?: boolean | undefined;
    children: ReactNode;
} & React.RefAttributes<HTMLDivElement>> & {
    BadgeContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BadgeContainerProps>> & string;
};
export { Card, CardGrid };
