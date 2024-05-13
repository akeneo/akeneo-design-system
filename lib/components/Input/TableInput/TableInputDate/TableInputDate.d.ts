import React from 'react';
import { Override } from '../../../../shared';
import { InputProps } from '../../common/InputProps';
declare type TableInputDateProps = Override<Override<React.InputHTMLAttributes<HTMLInputElement>, InputProps<string>>, {
    highlighted?: boolean;
    inError?: boolean;
}>;
declare const TableInputDate: ({ children, value, ...rest }: TableInputDateProps) => React.JSX.Element;
export { TableInputDate };
