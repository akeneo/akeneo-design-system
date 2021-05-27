import { HTMLAttributes, ReactNode, RefObject } from 'react';
declare type TabProps = {
    isActive: boolean;
    onClick?: () => void;
    children: ReactNode;
    parentRef?: RefObject<HTMLDivElement>;
    onVisibilityChange?: (newVisibility: boolean) => void;
};
declare type TabBarProps = {
    moreButtonTitle: string;
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
declare const TabBar: {
    ({ moreButtonTitle, children, ...rest }: TabBarProps): JSX.Element;
    Tab: ({ children, isActive, parentRef, onVisibilityChange, ...rest }: TabProps) => JSX.Element;
};
export { TabBar };
