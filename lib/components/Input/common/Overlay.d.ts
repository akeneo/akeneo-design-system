import React, { HTMLAttributes, ReactNode, RefObject } from 'react';
import { VerticalPosition } from '../../../hooks';
import { Override } from '../../../shared';
type OverlayProps = Override<HTMLAttributes<HTMLDivElement>, {
    verticalPosition?: VerticalPosition;
    onClose: () => void;
    children: ReactNode;
    parentRef?: RefObject<HTMLDivElement>;
}>;
declare const Overlay: ({ verticalPosition, parentRef, onClose, children, ...rest }: OverlayProps) => React.ReactPortal;
export { Overlay };
