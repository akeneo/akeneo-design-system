import React from 'react';
type Fit = 'cover' | 'contain';
type Background = 'white' | 'checkerboard';
declare const Image: React.ForwardRefExoticComponent<Omit<React.ImgHTMLAttributes<HTMLImageElement>, "height" | "width" | "alt" | "src" | "fit" | "isStacked" | "background"> & {
    src: string | null;
    alt: string;
    width?: number | undefined;
    height?: number | undefined;
    fit?: Fit | undefined;
    isStacked?: boolean | undefined;
    background?: Background | undefined;
} & React.RefAttributes<HTMLImageElement>>;
export { Image };
