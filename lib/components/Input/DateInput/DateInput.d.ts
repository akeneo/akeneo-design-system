import React, { InputHTMLAttributes } from 'react';
import { InputProps } from '../common';
import { Override } from '../../../shared';
declare type DateInputProps = Override<Override<InputHTMLAttributes<HTMLInputElement>, InputProps<string>>, ({
    readOnly: true;
} | {
    readOnly?: boolean;
    onChange: (newValue: string) => void;
}) & {
    value?: string;
    invalid?: boolean;
    onSubmit?: () => void;
}>;
declare const DateInput: React.ForwardRefExoticComponent<DateInputProps & React.RefAttributes<HTMLInputElement>>;
export { DateInput };
