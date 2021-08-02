import React, { ReactNode, SyntheticEvent, HTMLAttributes } from 'react';
import { Override } from '../../../shared';
declare type TableRowProps = Override<HTMLAttributes<HTMLTableRowElement>, {
    children?: ReactNode;
    onSelectToggle?: (isSelected: boolean) => void;
    isSelected?: boolean;
    onClick?: (event: SyntheticEvent) => void;
    rowIndex?: number;
    onDragStart?: (rowIndex: number) => void;
    draggedElementIndex?: number | null;
}>;
declare const TableRow: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLTableRowElement>, "children" | "onClick" | "onDragStart" | "isSelected" | "onSelectToggle" | "rowIndex" | "draggedElementIndex"> & {
    children?: ReactNode;
    onSelectToggle?: ((isSelected: boolean) => void) | undefined;
    isSelected?: boolean | undefined;
    onClick?: ((event: SyntheticEvent) => void) | undefined;
    rowIndex?: number | undefined;
    onDragStart?: ((rowIndex: number) => void) | undefined;
    draggedElementIndex?: number | null | undefined;
} & React.RefAttributes<HTMLTableRowElement>>;
export { TableRow };
export type { TableRowProps };
