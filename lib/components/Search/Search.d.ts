import React, { HTMLAttributes, ReactNode, RefObject } from 'react';
import { Override } from '../../shared';
type SearchProps = Override<HTMLAttributes<HTMLDivElement>, {
    children?: ReactNode;
    placeholder?: string;
    title?: string;
    searchValue: string;
    inputRef?: RefObject<HTMLInputElement>;
    sticky?: number;
    onSearchChange: (searchValue: string) => void;
}>;
declare const Search: {
    ({ children, placeholder, title, searchValue, inputRef, onSearchChange, ...rest }: SearchProps): React.JSX.Element;
    ResultCount: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;
    Separator: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
};
export { Search };
export type { SearchProps };
