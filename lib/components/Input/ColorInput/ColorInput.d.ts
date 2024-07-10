import React, { InputHTMLAttributes } from 'react';
import { InputProps } from '../common/InputProps';
import { Override } from '../../../shared';
type ColorInputProps = Override<Override<InputHTMLAttributes<HTMLInputElement>, InputProps<string>>, ({
    readOnly?: true;
} | {
    readOnly?: false;
    onChange: (newValue: string) => void;
}) & {
    value: string;
    placeholder?: string;
    invalid?: boolean;
}>;
declare const ColorInput: React.ForwardRefExoticComponent<ColorInputProps & React.RefAttributes<HTMLInputElement>>;
export { ColorInput };
