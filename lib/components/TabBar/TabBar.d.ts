import React, { HTMLAttributes, ReactNode, RefObject } from 'react';
import { Override } from '../../shared';
type TabProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    isActive: boolean;
    onClick?: () => void;
    children: ReactNode;
    parentRef?: RefObject<HTMLDivElement>;
    onVisibilityChange?: (newVisibility: boolean) => void;
}>;
type TabBarProps = {
    moreButtonTitle: string;
    sticky?: number;
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
declare const TabBar: {
    ({ moreButtonTitle, children, ...rest }: TabBarProps): React.JSX.Element;
    Tab: ({ children, onClick, isActive, parentRef, onVisibilityChange, ...rest }: TabProps) => React.JSX.Element;
};
export { TabBar };
