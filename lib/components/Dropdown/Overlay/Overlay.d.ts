import { ReactNode } from 'react';
declare type VerticalPosition = 'up' | 'down';
declare type OverlayProps = {
    verticalPosition?: VerticalPosition;
    onClose: () => void;
    children: ReactNode;
};
declare const Overlay: {
    ({ verticalPosition: defaultVerticalPosition, onClose, children }: OverlayProps): JSX.Element;
    displayName: string;
};
export { Overlay };
