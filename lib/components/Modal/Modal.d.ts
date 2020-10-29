import React, { ReactElement, ReactNode } from 'react';
import { IllustrationProps } from '../../illustrations/IllustrationProps';
declare const SectionTitle: import("styled-components").StyledComponent<"div", any, {
    size?: "big" | "small" | "default" | undefined;
    color?: string | undefined;
} & Record<string, unknown> & import("styled-components").ThemeProps<import("../../theme/theme").Theme>, never>;
declare const Title: import("styled-components").StyledComponent<"div", any, Record<string, unknown>, never>;
declare type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    illustration?: ReactElement<IllustrationProps>;
    children?: ReactNode;
};
declare const Modal: {
    ({ isOpen, onClose, illustration, children, ...rest }: ModalProps): React.ReactPortal | null;
    BottomButtons: import("styled-components").StyledComponent<"div", any, {}, never>;
};
export { Modal, SectionTitle, Title };
