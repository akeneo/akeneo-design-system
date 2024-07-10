import React, { HTMLAttributes, ReactNode } from 'react';
import { Override } from '../../../../shared';
export type TableInputRowProps = Override<HTMLAttributes<HTMLTableRowElement>, {
    children?: ReactNode;
    highlighted?: boolean;
    rowIndex?: number;
}>;
declare const TableInputRow: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLTableRowElement>, "children" | "highlighted" | "rowIndex"> & {
    children?: ReactNode;
    highlighted?: boolean | undefined;
    rowIndex?: number | undefined;
} & React.RefAttributes<HTMLTableRowElement>>;
export { TableInputRow };
