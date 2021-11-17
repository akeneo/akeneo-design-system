import { ReactElement, ReactNode } from 'react';
import { IconProps } from '../../icons';
declare type FigureProps = {
    label?: string;
    children: ReactNode;
};
declare type KeyFigureProps = {
    icon: ReactElement<IconProps>;
    title: string;
    children?: ReactNode;
};
declare const KeyFigure: {
    ({ icon, title, children }: KeyFigureProps): JSX.Element;
    Figure: ({ label, children }: FigureProps) => JSX.Element;
};
declare const KeyFigureGrid: import("styled-components").StyledComponent<"div", any, {}, never>;
export { KeyFigure, KeyFigureGrid };
