import { PropsWithChildren } from 'react';
import React from 'react';
import { TableProps, TableInputProps } from '../components';
type DraggedElementType = {
    index: number | null;
    onDragStart: (rowIndex: number) => void;
    onDragEnd?: () => void;
};
declare const DraggedElementContext: React.Context<DraggedElementType>;
declare const DraggedElementProvider: ({ children }: PropsWithChildren<TableProps | TableInputProps>) => React.JSX.Element;
export { DraggedElementProvider, DraggedElementContext };
