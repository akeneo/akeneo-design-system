import React, { ReactElement } from 'react';
import { IconProps } from '../../icons';
declare const IconCardGrid: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
declare const IconCard: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "onClick" | "content" | "icon" | "disabled" | "label"> & {
    icon: ReactElement<IconProps>;
    label: string | JSX.Element;
    content?: string | undefined;
    disabled?: boolean | undefined;
    onClick?: (() => void) | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export { IconCard, IconCardGrid };
