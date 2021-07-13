import React, { ReactNode, RefObject } from 'react';
import { VerticalPosition } from '../../../../hooks';
declare type OverlayProps = {
    verticalPosition?: VerticalPosition;
    onClose: () => void;
    children: ReactNode;
    parentRef?: RefObject<HTMLDivElement>;
};
declare const Overlay: ({ verticalPosition, parentRef, onClose, children }: OverlayProps) => React.ReactPortal;
export { Overlay };
