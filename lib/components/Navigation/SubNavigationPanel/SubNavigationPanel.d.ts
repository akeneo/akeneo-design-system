import React, { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
declare type SubNavigationPanelProps = {
    children?: React.ReactNode;
    isOpen?: boolean;
    open: () => void;
    close: () => void;
    closeTitle?: string;
    openTitle?: string;
    noPadding?: boolean;
};
declare type SubNavigationPanelCompoundType = ForwardRefExoticComponent<PropsWithoutRef<SubNavigationPanelProps> & RefAttributes<HTMLDivElement>> & {
    Collapsed?: any;
    Section?: any;
};
declare const SubNavigationPanel: SubNavigationPanelCompoundType;
export { SubNavigationPanel };
