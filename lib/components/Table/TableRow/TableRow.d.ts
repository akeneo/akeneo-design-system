import React, { ReactNode, HTMLAttributes, MouseEvent } from 'react';
import { Override } from '../../../shared';
declare type Level = 'warning';
declare type TableRowProps = Override<HTMLAttributes<HTMLTableRowElement>, {
    children?: ReactNode;
    onSelectToggle?: (isSelected: boolean) => void;
    isSelected?: boolean | 'mixed';
    level?: Level;
    onClick?: (event: MouseEvent<HTMLTableRowElement>) => void;
    rowIndex?: number;
    onDragStart?: (rowIndex: number) => void;
    onDragEnd?: () => void;
}>;
declare const TableRow: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLTableRowElement>, "children" | "onClick" | "onDragEnd" | "onDragStart" | "level" | "isSelected" | "rowIndex" | "onSelectToggle"> & {
    children?: ReactNode;
    onSelectToggle?: ((isSelected: boolean) => void) | undefined;
    isSelected?: boolean | "mixed" | undefined;
    level?: "warning" | undefined;
    onClick?: ((event: MouseEvent<HTMLTableRowElement>) => void) | undefined;
    rowIndex?: number | undefined;
    onDragStart?: ((rowIndex: number) => void) | undefined;
    onDragEnd?: (() => void) | undefined;
} & React.RefAttributes<HTMLTableRowElement>>;
export { TableRow };
export type { TableRowProps };
