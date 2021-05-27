import React, { ReactElement } from 'react';
import { IconProps } from '../../icons';
declare const IconCardGrid: import("styled-components").StyledComponent<"div", any, {}, never>;
declare type IconCardProps = {
    icon: ReactElement<IconProps>;
    label: string;
    content?: string;
    disabled?: boolean;
    onClick?: () => void;
};
declare const IconCard: React.ForwardRefExoticComponent<IconCardProps & React.RefAttributes<HTMLDivElement>>;
export { IconCard, IconCardGrid };
