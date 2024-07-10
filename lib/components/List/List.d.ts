import React, { ReactNode } from 'react';
import { AkeneoThemedProps } from '../../theme';
import { Override } from '../../shared';
type RemoveCellProps = React.HTMLAttributes<HTMLDivElement>;
type RowProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    isMultiline?: boolean;
    isSelected?: boolean;
}>;
type CellProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    width: 'auto' | number;
}>;
type ActionCellProps = React.HTMLAttributes<HTMLDivElement>;
type ListProps = {
    children?: ReactNode;
};
declare const List: {
    ({ children, ...rest }: ListProps): React.JSX.Element;
    Row: {
        ({ children, isMultiline, isSelected, ...rest }: RowProps): React.JSX.Element;
        displayName: string;
    };
    Cell: {
        ({ title, width, children, ...rest }: CellProps): React.JSX.Element;
        displayName: string;
    };
    TitleCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "width" | "theme"> & {
        width?: number | "auto" | undefined;
    } & AkeneoThemedProps, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, never>> & string;
    ActionCell: {
        ({ children, ...rest }: ActionCellProps): React.JSX.Element;
        displayName: string;
    };
    RemoveCell: {
        ({ children, ...rest }: RemoveCellProps): React.JSX.Element;
        displayName: string;
    };
    RowHelpers: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
};
export { List };
