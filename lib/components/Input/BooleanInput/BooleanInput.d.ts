import React from 'react';
declare const BooleanInput: React.ForwardRefExoticComponent<({
    clearable?: true | undefined;
    value: boolean | null;
    onChange?: ((value: boolean | null) => void) | undefined;
    clearLabel: string;
} & {
    readOnly: boolean;
    yesLabel: string;
    noLabel: string;
} & React.RefAttributes<HTMLDivElement>) | ({
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
