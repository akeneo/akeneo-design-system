import React, { ReactNode } from 'react';
declare type DropdownProps = {
    children?: ReactNode;
};
declare const Dropdown: {
    ({ children, ...rest }: DropdownProps): JSX.Element;
    Overlay: {
        ({ verticalPosition, onClose, children, ...rest }: Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "verticalPosition" | "onClose"> & {
            verticalPosition?: import("../../hooks/usePosition").VerticalPosition | undefined;
            onClose: () => void;
            children: React.ReactNode;
        }): JSX.Element;
        displayName: string;
    };
    Header: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
        children: React.ReactNode;
    } & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "disabled"> & {
        disabled?: boolean | undefined;
        children: React.ReactNode;
    } & React.RefAttributes<HTMLDivElement>>;
    Section: import("styled-components").StyledComponent<"div", any, Record<string, unknown> & import("styled-components").ThemeProps<import("../../theme/theme").Theme>, never>;
    Title: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
        children: React.ReactNode;
    } & React.RefAttributes<HTMLDivElement>>;
    ItemCollection: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onNextPage"> & {
        onNextPage?: (() => void) | undefined;
        children: React.ReactNode;
    } & React.RefAttributes<HTMLDivElement>>;
};
export { Dropdown };
