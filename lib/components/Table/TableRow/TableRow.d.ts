import React, { ReactNode, SyntheticEvent, HTMLAttributes } from 'react';
import { Override } from '../../../shared';
declare type TableRowProps = Override<HTMLAttributes<HTMLTableRowElement>, {
    children?: ReactNode;
    onSelectToggle?: (isSelected: boolean) => void;
    isSelected?: boolean;
    onClick?: (event: SyntheticEvent) => void;
    rowIndex?: number;
    onDragStart?: (rowIndex: number) => void;
    onDragEnd?: () => void;
}>;
declare const TableRow: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLTableRowElement>, "children" | "onClick" | "onDragEnd" | "onDragStart" | "isSelected" | "rowIndex" | "onSelectToggle"> & {
    children?: ReactNode;
    onSelectToggle?: ((isSelected: boolean) => void) | undefined;
    isSelected?: boolean | undefined;
    onClick?: ((event: SyntheticEvent) => void) | undefined;
    rowIndex?: number | undefined;
    onDragStart?: ((rowIndex: number) => void) | undefined;
    onDragEnd?: (() => void) | undefined;
} & React.RefAttributes<HTMLTableRowElement>>;
export { TableRow };
export type { TableRowProps };
