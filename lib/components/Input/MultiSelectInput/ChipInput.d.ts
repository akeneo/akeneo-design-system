import React from 'react';
type ChipValue = {
    code: string;
    label: string;
};
type ChipInputProps = {
    id?: string;
    value: ChipValue[];
    invalidValue: string[];
    invalid?: boolean;
    placeholder?: string;
    readOnly?: boolean;
    searchValue: string;
    removeLabel: string;
    onRemove: (chipCode: string) => void;
    onSearchChange: (searchValue: string) => void;
    onFocus?: () => void;
    lockedValues?: string[];
};
declare const ChipInput: React.ForwardRefExoticComponent<ChipInputProps & React.RefAttributes<HTMLInputElement>>;
export { ChipInput };
export type { ChipValue };
