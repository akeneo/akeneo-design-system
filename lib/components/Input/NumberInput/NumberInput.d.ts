import React from 'react';
import { InputProps } from '../common/InputProps';
import { Override } from '../../../shared';
declare type NumberInputProps = Override<Override<React.InputHTMLAttributes<HTMLInputElement>, InputProps<string>>, ({
    readOnly: true;
} | {
    readOnly?: boolean;
    onChange: (newValue: string) => void;
}) & {
    value: string;
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
    invalid?: boolean;
    onSubmit?: () => void;
    withIncrementIcons?: boolean;
}>;
declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLInputElement>>;
export { NumberInput };
export type { NumberInputProps };
