import React, { ReactElement } from 'react';
import { TableRowProps } from '../TableRow/TableRow';
declare type TableBodyChild = TableBodyChild[] | ReactElement<TableRowProps> | boolean | undefined;
declare type TableBodyProps = {
    children?: TableBodyChild;
};
declare const TableBody: React.ForwardRefExoticComponent<TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
export { TableBody };
export type { TableBodyProps };
