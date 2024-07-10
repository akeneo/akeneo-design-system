import React, { ReactNode } from 'react';
import { Override } from '../../shared';
type BlockProps = Override<React.HTMLAttributes<HTMLDivElement>, {
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
declare const Block: React.ForwardRefExoticComponent<BlockProps & React.RefAttributes<HTMLDivElement>>;
export { Block };
export type { BlockProps };
