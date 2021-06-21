import React, { ReactNode, RefObject } from 'react';
import { Override } from '../../../shared';
import { VerticalPosition } from '../../../hooks';
declare type OverlayProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    verticalPosition?: VerticalPosition;
    onClose: () => void;
    children: ReactNode;
    parentRef?: RefObject<HTMLDivElement>;
}>;
declare const Overlay: {
    ({ verticalPosition, parentRef, onClose, children, ...rest }: OverlayProps): React.ReactPortal;
    displayName: string;
};
export { Overlay };
