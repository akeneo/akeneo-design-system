import React, { ReactElement } from 'react';
import { Override } from '../../../shared';
import { InputProps } from '../common';
import { VerticalPosition } from '../../../hooks';
declare type OptionProps = {
    value: string;
    children: string;
} & React.HTMLAttributes<HTMLSpanElement>;
declare type MultiMultiSelectInputProps = Override<Override<React.InputHTMLAttributes<HTMLDivElement>, InputProps<string[]>>, ({
    readOnly: true;
} | {
    readOnly?: boolean;
    onChange: (newValue: string[]) => void;
}) & {
    value: string[];
    invalidValue?: string[];
    placeholder?: string;
    emptyResultLabel: string;
    openLabel: string;
    removeLabel: string;
    invalid?: boolean;
    children?: ReactElement<OptionProps>[] | ReactElement<OptionProps>;
    verticalPosition?: VerticalPosition;
    lockedValues?: string[];
    onSubmit?: () => void;
} & ({
    onNextPage?: () => void;
    onSearchChange?: (searchValue: string) => void;
    disableInternalSearch?: false;
} | {
    onNextPage: () => void;
    onSearchChange: (searchValue: string) => void;
    disableInternalSearch: true;
})>;
declare const MultiSelectInput: {
    ({ id, placeholder, invalid, value, invalidValue, emptyResultLabel, children, onChange, removeLabel, onSubmit, openLabel, readOnly, verticalPosition, onNextPage, onSearchChange, disableInternalSearch, lockedValues, "aria-labelledby": ariaLabelledby, ...rest }: MultiMultiSelectInputProps): React.JSX.Element;
    Option: {
        ({ children, ...rest }: OptionProps): React.JSX.Element;
        displayName: string;
    };
};
export { MultiSelectInput };
