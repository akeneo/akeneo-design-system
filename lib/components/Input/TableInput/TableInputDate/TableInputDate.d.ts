import React from 'react';
import { DateInputProps } from '../../DateInput/DateInput';
import { Override } from '../../../../shared';
type TableInputDateProps = Override<DateInputProps, {
    highlighted?: boolean;
    inError?: boolean;
}>;
declare const TableInputDate: ({ children, value, ...rest }: TableInputDateProps) => React.JSX.Element;
export { TableInputDate };
