import React, { ReactNode } from 'react';
import { Override } from '../../shared';
declare type BlockProps = Override<Override<React.ButtonHTMLAttributes<HTMLButtonElement>, React.AnchorHTMLAttributes<HTMLAnchorElement>>, {
    action?: ReactNode;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    children?: ReactNode;
}>;
declare const Block: React.ForwardRefExoticComponent<Omit<Override<React.ButtonHTMLAttributes<HTMLButtonElement>, React.AnchorHTMLAttributes<HTMLAnchorElement>>, "children" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "action"> & {
    action?: ReactNode;
    ariaLabel?: string | undefined;
    ariaLabelledBy?: string | undefined;
    ariaDescribedBy?: string | undefined;
    children?: ReactNode;
} & React.RefAttributes<HTMLButtonElement>>;
export { Block };
export type { BlockProps };
