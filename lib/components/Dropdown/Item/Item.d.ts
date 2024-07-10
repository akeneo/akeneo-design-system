import React, { ReactNode } from 'react';
declare const ItemLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;
declare const Item: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "disabled" | "isActive"> & {
    disabled?: boolean | undefined;
    isActive?: boolean | undefined;
    children: ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export { Item, ItemLabel };
