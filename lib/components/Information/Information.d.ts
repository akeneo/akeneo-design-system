import React, { ReactNode } from 'react';
import { AkeneoThemedProps } from '../../theme';
type InformationProps = {
    illustration: ReactNode;
    title: ReactNode;
    children: ReactNode;
};
declare const Information: React.ForwardRefExoticComponent<InformationProps & React.RefAttributes<HTMLDivElement>>;
declare const HighlightTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, AkeneoThemedProps>> & string;
export { Information, HighlightTitle };
