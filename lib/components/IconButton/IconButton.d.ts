import React, { ReactElement } from 'react';
import { IconProps } from '../../icons';
import { ButtonProps } from '../../components/Button/Button';
import { Override } from '../../shared';
type IconButtonProps = Override<Omit<ButtonProps, 'children'>, {
    ghost?: boolean | 'borderless';
    icon: ReactElement<IconProps>;
    title: string;
}>;
declare const IconButton: React.ForwardRefExoticComponent<Omit<Omit<ButtonProps, "children">, "title" | "icon" | "ghost"> & {
    ghost?: boolean | "borderless" | undefined;
    icon: ReactElement<IconProps>;
    title: string;
} & React.RefAttributes<HTMLButtonElement>>;
export { IconButton };
export type { IconButtonProps };
