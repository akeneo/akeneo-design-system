import React, { ReactNode } from 'react';
declare type CheckboxChecked = 'true' | 'false' | 'mixed';
declare type CheckboxProps = {
    /**
     * State of the Checkbox.
     */
    checked: CheckboxChecked;
    /**
     * Displays the value of the input, but does not allow changes.
     */
    readOnly?: boolean;
    /**
     * The handler called when clicking on Checkbox.
     */
    onChange?: (value: CheckboxChecked) => void;
    /**
     * Label of the checkbox.
     */
    children?: ReactNode;
};
/**
 * The checkboxes are applied when users can select all, several, or none of the options from a given list.
 */
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLDivElement>>;
export { Checkbox };
