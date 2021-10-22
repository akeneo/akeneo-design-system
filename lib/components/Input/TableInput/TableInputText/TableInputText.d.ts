import React from 'react';
import { Override } from '../../../../shared';
import { InputProps } from '../../common/InputProps';
declare type TableInputTextProps = Override<Override<React.InputHTMLAttributes<HTMLInputElement>, InputProps<string>>, {
    highlighted?: boolean;
    inError?: boolean;
}>;
declare const TableInputText: ({ children, value, ...rest }: TableInputTextProps) => JSX.Element;
export { TableInputText };
