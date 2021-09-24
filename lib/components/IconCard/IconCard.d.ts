import React, { ReactElement } from 'react';
import { IconProps } from '../../icons';
declare const IconCardGrid: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const IconCard: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "label" | "onClick" | "disabled" | "content" | "icon"> & {
    icon: ReactElement<IconProps>;
    label: string;
    content?: string | undefined;
    disabled?: boolean | undefined;
    onClick?: (() => void) | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export { IconCard, IconCardGrid };
