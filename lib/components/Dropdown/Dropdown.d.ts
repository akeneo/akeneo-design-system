import React, { ReactNode } from 'react';
declare type DropdownProps = {
    children?: ReactNode;
};
declare const Dropdown: {
    ({ children, ...rest }: DropdownProps): JSX.Element;
    Overlay: {
        ({ verticalPosition, horizontalPosition, dropdownOpenerVisible, parentRef, onClose, children, ...rest }: Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "verticalPosition" | "horizontalPosition" | "dropdownOpenerVisible" | "onClose" | "parentRef"> & {
            verticalPosition?: import("../../hooks/usePosition").VerticalPosition | undefined;
            horizontalPosition?: import("../../hooks/usePosition").HorizontalPosition | undefined;
            dropdownOpenerVisible?: boolean | undefined;
            onClose: () => void;
            children: React.ReactNode;
            parentRef?: React.RefObject<HTMLDivElement> | undefined;
        }): React.ReactPortal;
        displayName: string;
    };
    Header: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
        children: React.ReactNode;
    } & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "disabled" | "children" | "isActive"> & {
        disabled?: boolean | undefined;
        isActive?: boolean | undefined;
        children: React.ReactNode;
    } & React.RefAttributes<HTMLDivElement>>;
    Section: import("styled-components").StyledComponent<"div", any, Record<string, unknown> & import("styled-components").ThemeProps<import("../../theme/theme").Theme>, never>;
    Title: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
        children: React.ReactNode;
    } & React.RefAttributes<HTMLDivElement>>;
    ItemCollection: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onNextPage" | "noResultIllustration" | "noResultTitle"> & {
        onNextPage?: (() => void) | undefined;
        children?: React.ReactNode;
        noResultIllustration?: React.ReactElement<import("../../illustrations/IllustrationProps").IllustrationProps, string | React.JSXElementConstructor<any>> | undefined;
        noResultTitle?: string | undefined;
    } & React.RefAttributes<HTMLDivElement>>;
    Surtitle: React.FC<{
        label: string;
    }>;
};
export { Dropdown };
