import React, { ButtonHTMLAttributes, ReactElement, ReactNode, SyntheticEvent } from 'react';
import { Override } from '../../shared';
import { IconProps } from '../../icons';
type BlockButtonProps = Override<ButtonHTMLAttributes<HTMLButtonElement>, {
    icon: ReactElement<IconProps>;
    disabled?: boolean;
    onClick?: (event: SyntheticEvent) => void;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    children?: ReactNode;
}>;
declare const BlockButton: React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onClick" | "icon" | "disabled" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy"> & {
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
