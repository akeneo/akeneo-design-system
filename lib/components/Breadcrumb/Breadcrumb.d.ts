import React, { ReactElement } from 'react';
import { LinkProps } from '../../components/Link/Link';
type BreadcrumbChild = ReactElement<LinkProps> | null | boolean | undefined | BreadcrumbChild[];
type BreadcrumbProps = {
    children: BreadcrumbChild;
};
declare const Breadcrumb: {
    ({ children, ...rest }: BreadcrumbProps): React.JSX.Element;
    Step: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<{
        disabled?: boolean | undefined;
        decorated?: boolean | undefined;
        children: React.ReactNode;
        target?: string | undefined;
        href?: string | undefined;
    } & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>, never>> & string & Omit<React.ForwardRefExoticComponent<{
        disabled?: boolean | undefined;
        decorated?: boolean | undefined;
        children: React.ReactNode;
        target?: string | undefined;
        href?: string | undefined;
    } & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>>, keyof React.Component<any, {}, any>>;
};
export { Breadcrumb };
