import React, { ReactNode } from 'react';
type TableHeaderProps = {
    sticky?: number;
    children?: ReactNode;
};
declare const TableHeader: React.ForwardRefExoticComponent<TableHeaderProps & React.RefAttributes<HTMLTableSectionElement>>;
export { TableHeader };
export type { TableHeaderProps };
