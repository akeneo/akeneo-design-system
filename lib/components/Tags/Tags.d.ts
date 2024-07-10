import React, { ReactNode } from 'react';
import { AkeneoThemedProps } from '../../theme';
type TagTint = 'green' | 'blue' | 'dark_blue' | 'purple' | 'dark_purple' | 'yellow' | 'red' | 'dark_cyan' | 'forest_green' | 'olive_green' | 'hot_pink' | 'coral_red' | 'orange' | 'chocolate';
declare const Tag: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {
    tint: TagTint;
} & React.HTMLAttributes<HTMLLIElement> & AkeneoThemedProps>> & string;
type TagsProps = {
    children?: ReactNode;
};
declare const Tags: React.ForwardRefExoticComponent<TagsProps & React.RefAttributes<HTMLUListElement>>;
export { Tags, Tag };
export type { TagTint };
