import React, { ReactNode } from 'react';
declare type TableInputSelectProps = {
    value: ReactNode | null;
    onClear: () => void;
    highlighted?: boolean;
    clearLabel: string;
    openDropdownLabel: string;
    onNextPage?: () => void;
    searchValue?: string;
    onSearchChange?: (search: string) => void;
    searchPlaceholder: string;
    searchTitle: string;
    inError?: boolean;
    closeTick?: boolean;
};
declare const TableInputSelect: React.FC<TableInputSelectProps>;
export { TableInputSelect };
