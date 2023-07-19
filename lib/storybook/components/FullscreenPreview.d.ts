import React, { ReactNode } from 'react';
declare type FullscreenPreviewProps = {
    title: string;
    src: string;
    onClose: () => void;
    children: ReactNode;
};
declare const FullscreenPreview: ({ title, src, onClose, children }: FullscreenPreviewProps) => React.JSX.Element;
export { FullscreenPreview };
