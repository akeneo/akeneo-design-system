import React, { ReactNode } from 'react';
import { Override } from '../../shared';
declare type BlockProps = Override<Override<React.ButtonHTMLAttributes<HTMLButtonElement>, React.AnchorHTMLAttributes<HTMLAnchorElement>>, {
    title: string;
    actions?: ReactNode;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    children?: ReactNode;
} & ({
    isOpen: boolean;
    collapseButtonLabel: string;
    onCollapse: (isOpen: boolean) => void;
} | {
    isOpen?: undefined;
    collapseButtonLabel?: undefined;
    onCollapse?: undefined;
})>;
declare const Block: React.ForwardRefExoticComponent<BlockProps & React.RefAttributes<HTMLButtonElement>>;
export { Block };
export type { BlockProps };
