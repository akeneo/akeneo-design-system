import React, { ReactNode } from 'react';
import { Override } from '../../../shared';
import { InputProps } from '../common';
import { VerticalPosition } from '../../../hooks';
type OptionProps = Override<React.HTMLAttributes<HTMLSpanElement>, {
    value: string;
    disabled?: boolean;
}>;
type SelectInputProps = Override<Override<React.InputHTMLAttributes<HTMLDivElement>, InputProps<string>>, ({
    clearable?: false;
    readOnly: true;
    value: string | null;
} | {
    clearable?: false;
    readOnly?: boolean;
    value: string | null;
    onChange: (newValue: string) => void;
} | {
    clearable?: true;
    readOnly?: boolean;
    value: string | null;
    onChange: (newValue: string | null) => void;
}) & {
    placeholder?: string;
    emptyResultLabel: string;
    clearLabel?: string;
    openLabel: string;
    invalid?: boolean;
    children?: ReactNode;
    verticalPosition?: VerticalPosition;
} & ({
    onNextPage?: () => void;
    onSearchChange?: (searchValue: string) => void;
    disableInternalSearch?: false;
} | {
    onNextPage: () => void;
    onSearchChange: (searchValue: string) => void;
    disableInternalSearch: true;
})>;
declare const SelectInput: {
    ({ id, placeholder, invalid, value, emptyResultLabel, children, onChange, clearable, clearLabel, openLabel, readOnly, verticalPosition, onNextPage, onSearchChange, disableInternalSearch, "aria-labelledby": ariaLabelledby, ...rest }: SelectInputProps): React.JSX.Element;
    Option: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, OptionProps>> & string;
};
export { SelectInput };
