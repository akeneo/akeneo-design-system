import React from 'react';
declare const Image: React.ForwardRefExoticComponent<{
    src: string;
    alt: string;
    width?: number | undefined;
    height?: number | undefined;
    fit?: "cover" | "contain" | undefined;
    isStacked?: boolean | undefined;
} & React.ImgHTMLAttributes<HTMLImageElement> & React.RefAttributes<HTMLImageElement>>;
export { Image };
