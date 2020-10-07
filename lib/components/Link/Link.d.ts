import React, { ReactNode } from 'react';
declare const Link: React.ForwardRefExoticComponent<{
    disabled?: boolean | undefined;
    children: ReactNode;
    target?: string | undefined;
    href?: string | undefined;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>>;
export { Link };
