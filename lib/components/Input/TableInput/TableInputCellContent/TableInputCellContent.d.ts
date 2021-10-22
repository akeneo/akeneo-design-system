import { DetailedHTMLFactory, HTMLAttributes, ReactNode } from 'react';
import { Override } from '../../../../shared';
declare type TableInputCellContentProps = Override<DetailedHTMLFactory<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    rowTitle?: boolean;
    highlighted?: boolean;
    inError?: boolean;
    children?: ReactNode;
}>;
declare const TableInputCellContent: {
    ({ children, rowTitle, highlighted, inError, ...rest }: TableInputCellContentProps): JSX.Element;
    displayName: string;
};
export { TableInputCellContent };
