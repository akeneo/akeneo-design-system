import React from 'react';
import { Level } from 'theme';
declare type BadgeProps = {
    /**
     * Level of the Badge defining it's color and outline.
     */
    level?: Level;
    /**
     * Children of the Badge, can only be string for a Badge.
     */
    children?: string;
};
/**
 * Badges are used for items that must be: tagged, categorized, organized by keywords, or to highlight information.
 */
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
export { Badge };
