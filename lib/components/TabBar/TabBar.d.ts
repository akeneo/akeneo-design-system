import React, { HTMLAttributes, ReactNode, RefObject } from 'react';
import { Override } from '../../shared';
declare type TabProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    isActive: boolean;
    onClick?: () => void;
    children: ReactNode;
    parentRef?: RefObject<HTMLDivElement>;
    onVisibilityChange?: (newVisibility: boolean) => void;
}>;
declare type TabBarProps = {
    moreButtonTitle: string;
    sticky?: number;
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
declare const TabBar: {
    ({ moreButtonTitle, children, ...rest }: TabBarProps): JSX.Element;
    Tab: ({ children, isActive, parentRef, onVisibilityChange, ...rest }: TabProps) => JSX.Element;
};
export { TabBar };
