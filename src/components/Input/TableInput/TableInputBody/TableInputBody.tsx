import React, {Children, cloneElement, ReactNode, Ref, useContext} from 'react';
import {TableInputContext} from '../TableInputContext';
import {TableInputRowProps} from '../TableInputRow/TableInputRow';
import {useDrop} from '../../../../hooks/useDrop';
import {DraggedElementContext} from '../../../../contexts/DraggedElementContext';

type TableInputBodyProps = {
  children?: ReactNode;
};

const TableInputBody = React.forwardRef<HTMLTableSectionElement, TableInputBodyProps>(
  ({children, ...rest}: TableInputBodyProps, forwardedRef: Ref<HTMLTableSectionElement>) => {
    const {isDragAndDroppable, onReorder} = useContext(TableInputContext);
    const {index: draggedElementIndex} = useContext(DraggedElementContext);

    const decoratedChildren = Children.map(children, (child, rowIndex) => {
      if (!React.isValidElement<TableInputRowProps>(child)) {
        return null;
      }

      return isDragAndDroppable
        ? cloneElement(child, {
            rowIndex,
            draggable: rowIndex === draggedElementIndex,
          })
        : cloneElement(child, {
            rowIndex,
          });
    });

    const rowCount = Children.count(decoratedChildren);
    const [tableId, onDrop, onDragOver] = useDrop(rowCount, draggedElementIndex, onReorder);

    return (
      <tbody data-table-id={tableId} onDrop={onDrop} onDragOver={onDragOver} ref={forwardedRef} {...rest}>
        {decoratedChildren}
      </tbody>
    );
  }
);

TableInputBody.displayName = 'TableInput.Body';

export {TableInputBody};
