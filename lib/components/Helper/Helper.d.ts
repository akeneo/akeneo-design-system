import React, { ReactNode } from 'react';
declare type Level = 'info' | 'warning' | 'error';
declare type HelperProps = {
    inline?: boolean;
    level: Level;
    children: ReactNode;
};
declare const Helper: React.ForwardRefExoticComponent<HelperProps & React.RefAttributes<HTMLDivElement>>;
export { Helper };
