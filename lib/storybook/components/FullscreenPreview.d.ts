import React, { ReactNode } from 'react';
type FullscreenPreviewProps = {
    title: string;
    src: string;
    onClose: () => void;
    children: ReactNode;
};
declare const FullscreenPreview: ({ title, src, onClose, children }: FullscreenPreviewProps) => React.JSX.Element;
export { FullscreenPreview };
