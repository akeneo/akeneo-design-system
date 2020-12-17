import React, { ReactElement, ReactNode } from 'react';
import { IllustrationProps } from '../../illustrations/IllustrationProps';
declare const SectionTitle: import("styled-components").StyledComponent<"div", any, {
    size?: "big" | "default" | "small" | undefined;
    color?: string | undefined;
} & Record<string, unknown> & import("styled-components").ThemeProps<import("../../theme/theme").Theme>, never>;
declare const Title: import("styled-components").StyledComponent<"div", any, Record<string, unknown>, never>;
declare type ModalProps = {
    isOpen: boolean;
    illustration?: ReactElement<IllustrationProps>;
    closeTitle: string;
    children?: ReactNode;
    onClose: () => void;
};
declare const Modal: {
    ({ isOpen, onClose, illustration, closeTitle, children, ...rest }: ModalProps): React.ReactPortal | null;
    BottomButtons: import("styled-components").StyledComponent<"div", any, {}, never>;
    TopRightButtons: import("styled-components").StyledComponent<"div", any, {}, never>;
};
export { Modal, SectionTitle, Title };
