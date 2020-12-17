import React from 'react';
import { InputProps } from '../InputProps';
declare const BooleanInput: React.ForwardRefExoticComponent<(Pick<InputProps, "id" | "aria-labelledby"> & {
    clearable?: true | undefined;
    value: boolean | null;
    onChange?: ((value: boolean | null) => void) | undefined;
    clearLabel: string;
} & {
    readOnly: boolean;
    yesLabel: string;
    noLabel: string;
} & React.RefAttributes<HTMLDivElement>) | (Pick<InputProps, "id" | "aria-labelledby"> & {
    clearable?: false | undefined;
    value: boolean;
    onChange?: ((value: boolean) => void) | undefined;
    clearLabel?: string | undefined;
} & {
    readOnly: boolean;
    yesLabel: string;
    noLabel: string;
} & React.RefAttributes<HTMLDivElement>)>;
export { BooleanInput };
