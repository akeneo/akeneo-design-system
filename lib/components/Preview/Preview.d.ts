import React, { ReactNode, HTMLAttributes, ReactElement } from 'react';
import { Override } from '../../shared';
import { IconButtonProps } from '../IconButton/IconButton';
declare type RowProps = Override<HTMLAttributes<HTMLDivElement>, {
    action?: ReactElement<IconButtonProps>;
    children?: ReactNode;
}>;
declare type PreviewProps = Override<HTMLAttributes<HTMLDivElement>, {
    title: string;
    children?: ReactNode;
} & ({
    isOpen: boolean;
    collapseButtonLabel: string;
    onCollapse: (isOpen: boolean) => void;
} | {
    isOpen?: undefined;
    collapseButtonLabel?: undefined;
    onCollapse?: undefined;
})>;
declare const Preview: {
    ({ title, isOpen, collapseButtonLabel, onCollapse, children, ...rest }: PreviewProps): React.JSX.Element;
    Highlight: import("styled-components").StyledComponent<"span", any, Record<string, unknown> & import("styled-components").ThemeProps<import("../../theme/theme").Theme>, never>;
    Row: {
        ({ action, children }: RowProps): React.JSX.Element;
        displayName: string;
    };
};
export { Preview };
