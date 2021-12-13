import React, { ReactNode } from 'react';
import { IllustrationProps } from '../../../illustrations/IllustrationProps';
declare const ItemCollection: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onNextPage" | "noResultIllustration" | "noResultTitle"> & {
    onNextPage?: (() => void) | undefined;
    children?: ReactNode;
    noResultIllustration?: React.ReactElement<IllustrationProps, string | React.JSXElementConstructor<any>> | undefined;
    noResultTitle?: string | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export { ItemCollection };
