import React, { HTMLAttributes, ReactNode } from 'react';
import { Override } from '../../shared';
type TitleProps = Override<HTMLAttributes<HTMLHeadingElement>, {
    level?: 'primary' | 'secondary';
}>;
type SectionTitleProps = Override<HTMLAttributes<HTMLDivElement>, {
    sticky?: number;
    children?: ReactNode;
}>;
declare const SectionTitle: {
    ({ children, ...rest }: SectionTitleProps): React.JSX.Element;
    Title: ({ level, ...rest }: TitleProps) => React.JSX.Element;
    Spacer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    Separator: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    Information: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
};
export { SectionTitle };
