import React, { ReactNode } from 'react';
type TableSortDirection = 'descending' | 'ascending' | 'none';
type TableHeaderCellProps = {
    isSortable?: boolean;
    onDirectionChange?: (direction: TableSortDirection) => void;
    sortDirection?: TableSortDirection;
    children?: ReactNode;
};
declare const TableHeaderCell: React.ForwardRefExoticComponent<TableHeaderCellProps & React.RefAttributes<HTMLTableHeaderCellElement>>;
export { TableHeaderCell };
