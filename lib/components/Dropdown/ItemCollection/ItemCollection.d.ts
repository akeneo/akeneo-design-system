import React, { ReactNode } from 'react';
declare const ItemCollection: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onNextPage"> & {
    onNextPage?: (() => void) | undefined;
    children: ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export { ItemCollection };
