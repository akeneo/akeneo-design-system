import React, { ReactNode, HTMLAttributes, MouseEvent } from 'react';
import { Override } from '../../../shared';
declare type Level = 'warning' | 'tertiary';
declare type TableRowProps = Override<HTMLAttributes<HTMLTableRowElement>, {
    children?: ReactNode;
    onSelectToggle?: (isSelected: boolean) => void;
    isSelected?: boolean | 'mixed';
    level?: Level;
    onClick?: (event: MouseEvent<HTMLTableRowElement>) => void;
    rowIndex?: number;
}>;
declare const TableRow: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLTableRowElement>, "children" | "onClick" | "level" | "isSelected" | "rowIndex" | "onSelectToggle"> & {
    children?: ReactNode;
    onSelectToggle?: ((isSelected: boolean) => void) | undefined;
    isSelected?: boolean | "mixed" | undefined;
    level?: Level | undefined;
    onClick?: ((event: MouseEvent<HTMLTableRowElement>) => void) | undefined;
    rowIndex?: number | undefined;
} & React.RefAttributes<HTMLTableRowElement>>;
export { TableRow };
export type { TableRowProps };
