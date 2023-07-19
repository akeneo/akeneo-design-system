import React from 'react';
import { Override } from '../../../../shared';
import { InputProps } from '../../common/InputProps';
declare type TableInputNumberProps = Override<Override<React.InputHTMLAttributes<HTMLInputElement>, InputProps<string>>, {
    highlighted?: boolean;
    inError?: boolean;
}>;
declare const TableInputNumber: ({ children, value, ...rest }: TableInputNumberProps) => React.JSX.Element;
export { TableInputNumber };
