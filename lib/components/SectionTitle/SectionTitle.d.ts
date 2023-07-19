import React, { HTMLAttributes, ReactNode } from 'react';
import { Override } from '../../shared';
declare type TitleProps = Override<HTMLAttributes<HTMLHeadingElement>, {
    level?: 'primary' | 'secondary';
}>;
declare type SectionTitleProps = Override<HTMLAttributes<HTMLDivElement>, {
    sticky?: number;
    children?: ReactNode;
}>;
declare const SectionTitle: {
    ({ children, ...rest }: SectionTitleProps): React.JSX.Element;
    Title: ({ level, ...rest }: TitleProps) => React.JSX.Element;
    Spacer: import("styled-components").StyledComponent<"div", any, {}, never>;
    Separator: import("styled-components").StyledComponent<"div", any, Record<string, unknown> & import("styled-components").ThemeProps<import("../../theme/theme").Theme>, never>;
    Information: import("styled-components").StyledComponent<"div", any, Record<string, unknown> & import("styled-components").ThemeProps<import("../../theme/theme").Theme>, never>;
};
export { SectionTitle };
