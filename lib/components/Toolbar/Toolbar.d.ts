import React, { ReactNode } from 'react';
import { Override } from '../../shared';
type ToolbarProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    isVisible?: boolean;
    children?: ReactNode;
}>;
declare const Toolbar: {
    ({ isVisible, children, ...rest }: ToolbarProps): React.JSX.Element;
    LabelContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    SelectionContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    ActionsContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
};
export { Toolbar };
