import React, { HTMLAttributes, ReactNode } from 'react';
import { Override } from '../../../../shared';
export declare type TableInputRowProps = Override<HTMLAttributes<HTMLTableRowElement>, {
    children?: ReactNode;
    highlighted?: boolean;
    rowIndex?: number;
    onDragStart?: (rowIndex: number) => void;
    onDragEnd?: () => void;
}>;
declare const TableInputRow: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLTableRowElement>, "children" | "onDragEnd" | "onDragStart" | "highlighted" | "rowIndex"> & {
    children?: ReactNode;
    highlighted?: boolean | undefined;
    rowIndex?: number | undefined;
    onDragStart?: ((rowIndex: number) => void) | undefined;
    onDragEnd?: (() => void) | undefined;
} & React.RefAttributes<HTMLTableRowElement>>;
export { TableInputRow };
