import React from 'react';
import { NumberInputProps } from '../../NumberInput/NumberInput';
import { Override } from '../../../../shared';
type TableInputNumberProps = Override<NumberInputProps, {
    highlighted?: boolean;
    inError?: boolean;
}>;
declare const TableInputNumber: ({ children, value, ...rest }: TableInputNumberProps) => React.JSX.Element;
export { TableInputNumber };
