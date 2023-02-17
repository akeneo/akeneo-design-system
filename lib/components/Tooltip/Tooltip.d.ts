import React from 'react';
declare const Tooltip: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "width" | "direction" | "children" | "zIndex" | "iconSize"> & {
    direction?: "left" | "right" | "bottom" | "top" | undefined;
    zIndex?: number | undefined;
    iconSize?: number | undefined;
    children: React.ReactNode;
    width?: number | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export { Tooltip };
