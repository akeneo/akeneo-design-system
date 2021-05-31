import React, { ReactNode } from 'react';
declare type Tint = 'green' | 'blue' | 'dark_blue' | 'purple' | 'dark_purple' | 'yellow' | 'red';
declare const Tag: import("styled-components").StyledComponent<"li", any, {
    tint: Tint;
} & React.HTMLAttributes<HTMLLIElement> & Record<string, unknown> & import("styled-components").ThemeProps<import("../../theme/theme").Theme>, never>;
declare type TagsProps = {
    children?: ReactNode;
};
declare const Tags: React.ForwardRefExoticComponent<TagsProps & React.RefAttributes<HTMLUListElement>>;
export { Tags, Tag };
