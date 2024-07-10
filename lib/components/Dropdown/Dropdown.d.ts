import React, { HTMLAttributes, ReactNode } from 'react';
import { Override } from '../../shared';
type DropdownProps = Override<HTMLAttributes<HTMLDivElement>, {
    children?: ReactNode;
}>;
declare const Dropdown: {
    ({ children, ...rest }: DropdownProps): React.JSX.Element;
    Overlay: {
        ({ verticalPosition, horizontalPosition, dropdownOpenerVisible, fullWidth, parentRef, onClose, children, ...rest }: Omit<React.HTMLAttributes<HTMLDivElement>, "verticalPosition" | "horizontalPosition" | "children" | "onClose" | "dropdownOpenerVisible" | "fullWidth" | "parentRef"> & {
            verticalPosition?: import("../../hooks/usePosition").VerticalPosition | undefined;
            horizontalPosition?: import("../../hooks/usePosition").HorizontalPosition | undefined;
            dropdownOpenerVisible?: boolean | undefined;
            fullWidth?: boolean | undefined;
            onClose: () => void;
            children: React.ReactNode;
            parentRef?: React.RefObject<HTMLDivElement> | undefined;
        }): React.ReactPortal;
        displayName: string;
    };
    Header: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
        children: React.ReactNode;
    } & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "disabled" | "isActive"> & {
        disabled?: boolean | undefined;
        isActive?: boolean | undefined;
        children: React.ReactNode;
    } & React.RefAttributes<HTMLDivElement>>;
    Section: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
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
        children?: React.ReactNode;
    }>;
};
export { Dropdown };
