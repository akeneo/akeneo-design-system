import { ReactNode, HTMLAttributes } from 'react';
import { Override } from '../../shared';
declare type PreviewProps = Override<HTMLAttributes<HTMLDivElement>, {
    title: string;
    children?: ReactNode;
}>;
declare const Preview: {
    ({ title, children, ...rest }: PreviewProps): JSX.Element;
    Highlight: import("styled-components").StyledComponent<"span", any, Record<string, unknown> & import("styled-components").ThemeProps<import("../../theme/theme").Theme>, never>;
};
export { Preview };
