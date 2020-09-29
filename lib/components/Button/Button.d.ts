import React, { ReactNode } from 'react';
declare const Button: React.ForwardRefExoticComponent<{
    level?: "primary" | "secondary" | "tertiary" | "warning" | "danger" | undefined;
    ghost?: boolean | undefined;
    disabled?: boolean | undefined;
    size?: "small" | "default" | undefined;
    onClick: () => void;
    ariaLabel?: string | undefined;
    ariaLabelledBy?: string | undefined;
    ariaDescribedBy?: string | undefined;
    children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
export { Button };
