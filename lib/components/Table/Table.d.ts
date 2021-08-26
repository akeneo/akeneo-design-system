import React, { ReactNode } from 'react';
import { Override } from '../../shared';
declare type TableProps = Override<React.HTMLAttributes<HTMLTableElement>, {
    isSelectable?: boolean;
    displayCheckbox?: boolean;
    children?: ReactNode;
} & ({
    isDragAndDroppable?: false;
    onReorder?: undefined;
} | {
    isDragAndDroppable: boolean;
    onReorder: (updatedIndices: number[]) => void;
})>;
declare const Table: {
    ({ isSelectable, displayCheckbox, isDragAndDroppable, onReorder, children, ...rest }: TableProps): JSX.Element;
    Header: React.ForwardRefExoticComponent<import("./TableHeader/TableHeader").TableHeaderProps & React.RefAttributes<HTMLTableSectionElement>>;
    HeaderCell: React.ForwardRefExoticComponent<{
        isSortable?: boolean | undefined;
        onDirectionChange?: ((direction: "none" | "ascending" | "descending") => void) | undefined;
        sortDirection?: ("none" | "ascending" | "descending") | undefined;
        children?: React.ReactNode;
    } & React.RefAttributes<HTMLTableHeaderCellElement>>;
    Body: React.ForwardRefExoticComponent<import("./TableBody/TableBody").TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
    Row: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLTableRowElement>, "children" | "onClick" | "onDragEnd" | "onDragStart" | "isSelected" | "onSelectToggle" | "rowIndex"> & {
        children?: React.ReactNode;
        onSelectToggle?: ((isSelected: boolean) => void) | undefined;
        isSelected?: boolean | undefined;
        onClick?: ((event: React.SyntheticEvent<Element, Event>) => void) | undefined;
        rowIndex?: number | undefined;
        onDragStart?: ((rowIndex: number) => void) | undefined;
        onDragEnd?: (() => void) | undefined;
    } & React.RefAttributes<HTMLTableRowElement>>;
    Cell: React.ForwardRefExoticComponent<Omit<React.TdHTMLAttributes<HTMLTableCellElement>, "children" | "rowTitle"> & {
        children?: React.ReactNode;
        rowTitle?: boolean | undefined;
    } & React.RefAttributes<HTMLTableCellElement>>;
    ActionCell: React.ForwardRefExoticComponent<{
        children?: React.ReactNode;
    } & React.RefAttributes<HTMLTableCellElement>>;
};
export { Table };
