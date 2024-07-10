import React, { ReactElement, ReactNode } from 'react';
import { AkeneoThemedProps } from '../../theme';
import { IllustrationProps } from '../../illustrations/IllustrationProps';
import { Override } from '../../shared';
import { useInModal } from './ModalContext';
declare const SectionTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    size?: "big" | "default" | "small" | undefined;
    color?: string | undefined;
} & AkeneoThemedProps>> & string;
declare const Title: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
declare const BottomButtons: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
declare const TopRightButtons: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, never>> & string;
declare const TopLeftButtons: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, never>> & string;
type ModalProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    illustration?: ReactElement<IllustrationProps>;
    closeTitle: string;
    children?: ReactNode;
    onClose: () => void;
}>;
declare const Modal: React.FC<ModalProps> & {
    BottomButtons: typeof BottomButtons;
    TopRightButtons: typeof TopRightButtons;
    TopLeftButtons: typeof TopLeftButtons;
    SectionTitle: typeof SectionTitle;
    Title: typeof Title;
};
export { Modal, useInModal };
