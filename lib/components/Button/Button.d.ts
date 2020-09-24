import React, { ReactNode } from 'react';
/**
 * Buttons express what action will occur when the users clicks.
 * Buttons are used to initialize an action, either in the background or foreground of an experience.
 */
declare const Button: React.ForwardRefExoticComponent<{
    /**
     * Level of the button defining it's color and outline.
     * Possible values are: primary, secondary, tertiary, danger and ghost.
     */
    level?: "primary" | "secondary" | "tertiary" | "warning" | "danger" | undefined;
    /**
     * When an action does not require primary dominance on the page.
     */
    ghost?: boolean | undefined;
    /**
     * Use when the user cannot proceed or until an input is collected.
     */
    disabled?: boolean | undefined;
    /**
     * Define the size of a button.
     */
    size?: "small" | "default" | undefined;
    /**
     * Function called when the user clicks on the button or hit enter when focused.
     */
    onClick: () => void;
    /**
     * Accessibility label to describe shortly the button.
     */
    ariaLabel?: string | undefined;
    /**
     * Define which element is the label of this button for accessibility purposes. Expect a DOM node id.
     */
    ariaLabelledBy?: string | undefined;
    /**
     * Define what element is describing this button for accessibility purposes. Expect a DOM node id.
     */
    ariaDescribedBy?: string | undefined;
    /**
     * Children of the button.
     */
    children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
export { Button };
