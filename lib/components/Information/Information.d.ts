import React, { ReactNode } from 'react';
declare type InformationProps = {
    illustration: ReactNode;
    title: ReactNode;
    children: ReactNode;
};
declare const Information: React.ForwardRefExoticComponent<InformationProps & React.RefAttributes<HTMLDivElement>>;
declare const HighlightTitle: import("styled-components").StyledComponent<"span", any, import("styled-components").ThemedStyledProps<Record<string, unknown>, import("../../theme/theme").Theme>, never>;
export { Information, HighlightTitle };
