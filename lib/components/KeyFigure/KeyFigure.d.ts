import React, { ReactElement, ReactNode } from 'react';
import { IconProps } from '../../icons';
type FigureProps = {
    label?: string;
    children: ReactNode;
};
type KeyFigureProps = {
    icon: ReactElement<IconProps>;
    title: string;
    children?: ReactNode;
};
declare const KeyFigure: {
    ({ icon, title, children, ...props }: KeyFigureProps): React.JSX.Element;
    Figure: ({ label, children }: FigureProps) => React.JSX.Element;
};
declare const KeyFigureGrid: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export { KeyFigure, KeyFigureGrid };
