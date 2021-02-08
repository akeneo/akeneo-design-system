import React, { ReactNode } from 'react';
import { Override } from '../../shared';
declare type SectionTitleProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    children?: ReactNode;
}>;
declare const SectionTitle: {
    ({ children, ...rest }: SectionTitleProps): JSX.Element;
    Title: import("styled-components").StyledComponent<"h2", any, Record<string, unknown>, never>;
    Spacer: import("styled-components").StyledComponent<"div", any, {}, never>;
    Separator: import("styled-components").StyledComponent<"div", any, Record<string, unknown>, never>;
    Information: import("styled-components").StyledComponent<"div", any, Record<string, unknown>, never>;
};
export { SectionTitle };
