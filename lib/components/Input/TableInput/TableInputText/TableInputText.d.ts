import React from 'react';
import { TextInputProps } from '../../TextInput/TextInput';
import { Override } from '../../../../shared';
type TableInputTextProps = Override<TextInputProps, {
    highlighted?: boolean;
    inError?: boolean;
}>;
declare const TableInputText: ({ children, value, ...rest }: TableInputTextProps) => React.JSX.Element;
export { TableInputText };
