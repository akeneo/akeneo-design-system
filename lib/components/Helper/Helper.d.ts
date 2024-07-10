import React, { ReactElement, ReactNode } from 'react';
import { IconProps } from '../../icons';
type Level = 'info' | 'warning' | 'error' | 'success';
type HelperProps = {
    inline?: boolean;
    level?: Level;
    sticky?: number;
    icon?: ReactElement<IconProps>;
    children: ReactNode;
};
declare const Helper: React.ForwardRefExoticComponent<HelperProps & React.RefAttributes<HTMLDivElement>>;
export { Helper };
export type { HelperProps };
