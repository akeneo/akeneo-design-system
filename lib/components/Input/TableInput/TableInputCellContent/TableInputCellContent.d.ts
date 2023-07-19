import React, { ReactNode } from 'react';
import { Override } from '../../../../shared';
declare type TableInputCellContentProps = Override<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    rowTitle?: boolean;
    highlighted?: boolean;
    inError?: boolean;
    children?: ReactNode;
}>;
declare const TableInputCellContent: {
    ({ children, rowTitle, highlighted, inError, ...rest }: TableInputCellContentProps): React.JSX.Element;
    displayName: string;
};
export { TableInputCellContent };
