import React from 'react';
declare const SubNavigationItem: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLAnchorElement>, "children" | "href" | "active" | "disabled"> & {
    children?: React.ReactNode;
    active?: boolean | undefined;
    disabled?: boolean | undefined;
    href?: string | undefined;
} & React.RefAttributes<HTMLAnchorElement>>;
export { SubNavigationItem };
