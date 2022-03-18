import React, { ReactElement, ReactNode, SyntheticEvent } from 'react';
import { Override } from '../../shared';
import { IconProps } from '../../icons';
declare type BlockButtonProps = Override<React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>, {
    icon: ReactElement<IconProps>;
    disabled?: boolean;
    onClick?: (event: SyntheticEvent) => void;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    children?: ReactNode;
}>;
declare const BlockButton: React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>, "icon" | "disabled" | "children" | "onClick" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy"> & {
    icon: ReactElement<IconProps>;
    disabled?: boolean | undefined;
    onClick?: ((event: SyntheticEvent) => void) | undefined;
    ariaLabel?: string | undefined;
    ariaLabelledBy?: string | undefined;
    ariaDescribedBy?: string | undefined;
    children?: ReactNode;
} & React.RefAttributes<HTMLButtonElement>>;
export { BlockButton };
export type { BlockButtonProps };
