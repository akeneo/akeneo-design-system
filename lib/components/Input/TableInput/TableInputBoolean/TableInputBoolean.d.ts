import React from 'react';
import { Override } from '../../../../shared';
declare type TableInputBooleanProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    value: boolean | null;
    onChange: (value: boolean | null) => void;
    yesLabel: string;
    noLabel: string;
    highlighted?: boolean;
    clearLabel: string;
    openDropdownLabel: string;
    inError?: boolean;
}>;
declare const TableInputBoolean: React.FC<TableInputBooleanProps>;
export { TableInputBoolean };
