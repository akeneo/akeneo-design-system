import React, { ReactElement } from 'react';
import { HelperProps, InputProps, LocaleProps } from '../../components';
declare type FieldChild = ReactElement<InputProps<unknown>> | ReactElement<HelperProps> | FieldChild[];
declare type FieldProps = {
    label: string;
    incomplete?: boolean;
    locale?: ReactElement<LocaleProps> | string;
    channel?: string;
    children: FieldChild;
};
declare const Field: React.ForwardRefExoticComponent<FieldProps & React.RefAttributes<HTMLDivElement>>;
export { Field };
export type { FieldProps };
