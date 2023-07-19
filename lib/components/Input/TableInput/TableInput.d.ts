import React, { ReactNode } from 'react';
import { Override } from '../../../shared';
declare type TableInputProps = Override<React.HTMLAttributes<HTMLTableElement>, {
    children?: ReactNode;
    readOnly?: boolean;
    isDragAndDroppable?: boolean;
    onReorder?: (updatedIndices: number[]) => void | undefined;
}>;
declare const TableInput: {
    ({ children, readOnly, isDragAndDroppable, onReorder, ...rest }: TableInputProps): React.JSX.Element;
    Header: React.ForwardRefExoticComponent<{
        children?: React.ReactNode;
    } & React.RefAttributes<HTMLTableSectionElement>>;
    HeaderCell: React.ForwardRefExoticComponent<import("./TableInputHeaderCell/TableInputHeaderCell").TableInputHeaderCellProps & React.RefAttributes<HTMLTableHeaderCellElement>>;
    Body: React.ForwardRefExoticComponent<{
        children?: React.ReactNode;
    } & React.RefAttributes<HTMLTableSectionElement>>;
    Row: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLTableRowElement>, "children" | "onDragEnd" | "onDragStart" | "highlighted" | "rowIndex"> & {
        children?: React.ReactNode;
        highlighted?: boolean | undefined;
        rowIndex?: number | undefined;
        onDragStart?: ((rowIndex: number) => void) | undefined;
        onDragEnd?: (() => void) | undefined;
    } & React.RefAttributes<HTMLTableRowElement>>;
    Cell: React.ForwardRefExoticComponent<React.TdHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
    CellContent: {
        ({ children, rowTitle, highlighted, inError, ...rest }: Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children" | "highlighted" | "inError" | "rowTitle"> & {
            rowTitle?: boolean | undefined;
            highlighted?: boolean | undefined;
            inError?: boolean | undefined;
            children?: React.ReactNode;
        }): React.JSX.Element;
        displayName: string;
    };
    Text: ({ children, value, ...rest }: Omit<Override<React.InputHTMLAttributes<HTMLInputElement>, import("../common/InputProps").InputProps<string>>, "highlighted" | "inError"> & {
        highlighted?: boolean | undefined;
        inError?: boolean | undefined;
    }) => React.JSX.Element;
    Number: ({ children, value, ...rest }: Omit<Override<React.InputHTMLAttributes<HTMLInputElement>, import("../common/InputProps").InputProps<string>>, "highlighted" | "inError"> & {
        highlighted?: boolean | undefined;
        inError?: boolean | undefined;
    }) => React.JSX.Element;
    Boolean: React.FC<Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "value" | "clearLabel" | "yesLabel" | "noLabel" | "highlighted" | "inError" | "openDropdownLabel"> & {
        value: boolean | null;
        onChange: (value: boolean | null) => void;
        yesLabel: string;
        noLabel: string;
        highlighted?: boolean | undefined;
        clearLabel: string;
        openDropdownLabel: string;
        inError?: boolean | undefined;
    }>;
    Select: React.FC<{
        value: React.ReactNode;
        onClear: () => void;
        highlighted?: boolean | undefined;
        clearLabel: string;
        openDropdownLabel: string;
        onNextPage?: (() => void) | undefined;
        searchValue?: string | undefined;
        onSearchChange?: ((search: string) => void) | undefined;
        searchPlaceholder: string;
        searchTitle: string;
        inError?: boolean | undefined;
        closeTick?: boolean | undefined;
        bottomHelper?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
        withSearch?: boolean | undefined;
        onOpenChange?: ((isOpen: boolean) => void) | undefined;
    }>;
    Measurement: React.FC<{
        amount: string;
        unit: string;
        emptyResultLabel: string;
        openLabel: string;
        onChange: (amount: string | undefined, unit: string) => void;
        units: {
            value: string;
            label: string;
            symbol?: string | undefined;
        }[];
        highlighted?: boolean | undefined;
        inError?: boolean | undefined;
    }>;
};
export { TableInput };
