import React, { ReactNode } from 'react';
declare type CheckboxChecked = 'true' | 'false' | 'mixed';
declare type CheckboxProps = {
    checked: CheckboxChecked;
    readOnly?: boolean;
    onChange?: (value: CheckboxChecked) => void;
    children?: ReactNode;
};
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLDivElement>>;
export { Checkbox };
