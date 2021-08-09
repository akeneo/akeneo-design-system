import { HTMLAttributes, ReactNode, RefObject } from 'react';
import { Override } from '../../shared';
declare type SearchProps = Override<HTMLAttributes<HTMLDivElement>, {
    children?: ReactNode;
    placeholder?: string;
    title?: string;
    searchValue: string;
    inputRef?: RefObject<HTMLInputElement>;
    sticky?: number;
    onSearchChange: (searchValue: string) => void;
}>;
declare const Search: {
    ({ children, placeholder, title, searchValue, inputRef, onSearchChange, ...rest }: SearchProps): JSX.Element;
    ResultCount: import("styled-components").StyledComponent<"span", any, Record<string, unknown> & import("styled-components").ThemeProps<import("../../theme/theme").Theme>, never>;
    Separator: import("styled-components").StyledComponent<"div", any, Record<string, unknown> & import("styled-components").ThemeProps<import("../../theme/theme").Theme>, never>;
};
export { Search };
