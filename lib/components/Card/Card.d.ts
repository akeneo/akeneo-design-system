import React, { ReactNode } from 'react';
declare type CardGridProps = {
    size?: 'normal' | 'big';
};
declare const CardGrid: import("styled-components").StyledComponent<"div", any, CardGridProps & Record<string, unknown> & import("styled-components").ThemeProps<import("../../theme/theme").Theme>, never>;
declare const Card: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "disabled" | "children" | "onSelect" | "src" | "loading" | "fit" | "isSelected" | "stacked"> & {
    src: string | null;
    fit?: "contain" | "cover" | undefined;
    loading?: "eager" | "lazy" | undefined;
    isSelected?: boolean | undefined;
    disabled?: boolean | undefined;
    onSelect?: ((isSelected: boolean) => void) | undefined;
    stacked?: boolean | undefined;
    children: ReactNode;
} & React.RefAttributes<HTMLButtonElement>> & {
    BadgeContainer: import("styled-components").StyledComponent<"div", any, {
        stacked: boolean;
    } & Record<string, unknown> & import("styled-components").ThemeProps<import("../../theme/theme").Theme>, never>;
};
export { Card, CardGrid };
