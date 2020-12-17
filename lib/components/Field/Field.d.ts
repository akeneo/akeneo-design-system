import React, { ReactElement } from 'react';
import { HelperProps, InputProps, LocaleProps } from '../../components';
declare type FieldChild = ReactElement<InputProps> | ReactElement<HelperProps>;
declare type FieldProps = {
    label: string;
    incomplete?: boolean;
    locale?: ReactElement<LocaleProps> | string;
    channel?: string;
    children: FieldChild | FieldChild[];
};
declare const Field: React.ForwardRefExoticComponent<FieldProps & React.RefAttributes<HTMLDivElement>>;
export { Field };
