import React, {ReactNode, useMemo} from 'react';
import styled from 'styled-components';
import {TableCell} from './TableCell/TableCell';
import {TableHeader} from './TableHeader/TableHeader';
import {TableHeaderCell} from './TableHeaderCell/TableHeaderCell';
import {TableActionCell} from './TableActionCell/TableActionCell';
import {TableRow} from './TableRow/TableRow';
import {TableContext} from './TableContext';
import {TableBody} from './TableBody/TableBody';
import {Override} from '../../shared/override';
import {DraggedElementProvider} from '../../contexts/DraggedElementContext';
import {DragAndDropMode} from '../../hooks/usePlaceholderPosition';

const TableContainer = styled.table<{$wrapText: boolean}>`
  border-collapse: collapse;
  ${({$wrapText}) => ($wrapText ? 'width: max-content; max-width: 100%; min-width: min-content;' : 'width: 100%;')}
`;

type TableProps = Override<
  React.HTMLAttributes<HTMLTableElement>,
  {
    /**
     * Define if rows can be selected.
     */
    isSelectable?: boolean;

    /**
     * Define if the table has some warning.
     */
    hasWarningRows?: boolean;

    /**
     * Define if the table has some locked rows.
     */
    hasLockedRows?: boolean;

    /**
     * Define if the checkbox should be always displayed or displayed on hover.
     * This props should be true when one element is checked.
     */
    displayCheckbox?: boolean;

    /**
     * Let cell content wrap onto multiple lines instead of clipping to a single line.
     */
    wrapText?: boolean;

    /**
     * The content of the table.
     */
    children?: ReactNode;
  } & (
    | {
        /**
         * Define if rows can be reordered with drag and drop.
         */
        isDragAndDroppable?: false;

        onReorder?: undefined;

        dragAndDropMode?: undefined;
      }
    | {
        /**
         * Define if rows can be reordered with drag and drop.
         */
        isDragAndDroppable: boolean;

        /**
         * Called when an element has been dragged and dropped on the table.
         */
        onReorder: (updatedIndices: number[], draggedIndex?: number, droppedIndex?: number) => void;

        /**
         * Define the mode of the drag and drop. It affects the way the placeholder is displayed.
         * Available mode are 'reorder' (default) and 'hierarchy'.
         */
        dragAndDropMode?: DragAndDropMode;
      }
  )
>;

/**
 * Tables allow users to analyze and manipulate data.
 */
const Table = ({
  isSelectable = false,
  hasWarningRows = false,
  hasLockedRows = false,
  displayCheckbox = false,
  isDragAndDroppable = false,
  dragAndDropMode = 'reorder',
  wrapText = false,
  onReorder = undefined,
  children,
  ...rest
}: TableProps) => {
  const providerValue = useMemo(
    () => ({
      isSelectable,
      hasWarningRows,
      hasLockedRows,
      displayCheckbox,
      isDragAndDroppable,
      onReorder,
      dragAndDropMode,
      wrapText,
    }),
    [
      isSelectable,
      hasWarningRows,
      hasLockedRows,
      displayCheckbox,
      isDragAndDroppable,
      onReorder,
      dragAndDropMode,
      wrapText,
    ]
  );

  return (
    <TableContext.Provider value={providerValue}>
      <DraggedElementProvider>
        <TableContainer $wrapText={wrapText} {...rest}>
          {children}
        </TableContainer>
      </DraggedElementProvider>
    </TableContext.Provider>
  );
};

TableHeader.displayName = 'Table.Header';
TableHeaderCell.displayName = 'Table.HeaderCell';
TableBody.displayName = 'Table.Body';
TableRow.displayName = 'Table.Row';
TableCell.displayName = 'Table.Cell';
TableActionCell.displayName = 'Table.ActionCell';

Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.ActionCell = TableActionCell;

export {Table};
export type {TableProps};
