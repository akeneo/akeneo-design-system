import React, { ReactNode } from 'react';
import { Override } from '../../../shared';
import { InputProps } from '../InputProps';
declare type VerticalPosition = 'up' | 'down';
declare type SelectInputProps = Override<Override<React.InputHTMLAttributes<HTMLDivElement>, InputProps<string | null>>, ({
    readOnly: true;
} | {
    readOnly?: boolean;
    onChange: (newValue: string | null) => void;
}) & {
    value: string | null;
    placeholder?: string;
    emptyResultLabel: string;
    clearSelectLabel?: string;
    openSelectLabel?: string;
    invalid?: boolean;
    children?: ReactNode;
    verticalPosition?: VerticalPosition;
}>;
declare const SelectInput: {
    ({ id, placeholder, invalid, value, emptyResultLabel, children, onChange, clearSelectLabel, openSelectLabel, readOnly, verticalPosition, "aria-labelledby": ariaLabelledby, ...rest }: SelectInputProps): JSX.Element;
    Option: import("styled-components").StyledComponent<"span", any, {
        value: string;
    }, never>;
};
export { SelectInput };
