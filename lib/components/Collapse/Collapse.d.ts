import React, { ReactNode } from 'react';
type CollapseProps = {
    label: ReactNode;
    collapseButtonLabel: string;
    isOpen: boolean;
    onCollapse: (isOpen: boolean) => void;
    children?: ReactNode;
};
declare const Collapse: React.ForwardRefExoticComponent<CollapseProps & React.RefAttributes<HTMLDivElement>>;
export { Collapse };
