import React, { ReactNode, ReactElement } from 'react';
import { IconProps } from '../../icons';
type MessageBarLevel = 'info' | 'success' | 'warning' | 'error';
declare const AnimateMessageBar: ({ children }: {
    children: ReactElement<MessageBarProps>;
}) => React.JSX.Element;
type FlashMessage = {
    level?: MessageBarLevel;
    title: string;
    icon?: ReactElement<IconProps>;
    children?: ReactNode;
};
type MessageBarProps = FlashMessage & {
    dismissTitle: string;
    onClose: () => void;
};
declare const MessageBar: ({ level, title, icon, dismissTitle, onClose, children }: MessageBarProps) => React.JSX.Element;
export { MessageBar, AnimateMessageBar };
export type { MessageBarLevel, FlashMessage };
