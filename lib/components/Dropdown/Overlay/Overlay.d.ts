import React, { ReactNode } from 'react';
import { Override } from '../../../shared';
import { VerticalPosition } from '../../../hooks';
declare type OverlayProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    verticalPosition?: VerticalPosition;
    onClose: () => void;
    children: ReactNode;
}>;
declare const Overlay: {
    ({ verticalPosition, onClose, children, ...rest }: OverlayProps): JSX.Element;
    displayName: string;
};
export { Overlay };
