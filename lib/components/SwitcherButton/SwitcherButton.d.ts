import React, { ReactNode } from 'react';
declare const SwitcherButton: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onClick" | "inline" | "label" | "deletable" | "onDelete"> & {
    label: string;
    onClick?: (() => void) | undefined;
    inline?: boolean | undefined;
    deletable?: boolean | undefined;
    onDelete?: (() => void) | undefined;
    children?: ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export { SwitcherButton };
