import React, { ReactElement, ReactNode } from 'react';
import { HelperProps, InputProps, LocaleProps } from '../../components';
type FieldChild = ReactElement<InputProps<unknown>> | ReactElement<HelperProps> | FieldChild[] | false | null | undefined;
type FieldProps = {
    label: string;
    incomplete?: boolean;
    locale?: ReactElement<LocaleProps> | string | null;
    channel?: string | null;
    requiredLabel?: string;
    fullWidth?: boolean;
    children?: FieldChild;
    actions?: ReactNode;
};
declare const Field: React.ForwardRefExoticComponent<FieldProps & React.RefAttributes<HTMLDivElement>>;
export { Field };
export type { FieldProps };
