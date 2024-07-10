import React from 'react';
import { IconProps } from '../../../icons';
declare const MainNavigationItem: React.ForwardRefExoticComponent<Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href" | "icon" | "active" | "disabled"> & {
    icon: React.ReactElement<IconProps>;
    children: React.ReactNode;
    active?: boolean | undefined;
    disabled?: boolean | undefined;
    href?: string | undefined;
} & React.RefAttributes<HTMLAnchorElement>>;
export { MainNavigationItem };
