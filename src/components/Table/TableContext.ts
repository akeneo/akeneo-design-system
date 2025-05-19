import {createContext} from 'react';
import {DragAndDropMode} from '../../hooks/usePlaceholderPosition';

type TableContextType = {
  isSelectable: boolean;
  hasWarningRows: boolean;
  hasLockedRows: boolean;
  displayCheckbox: boolean;
  isDragAndDroppable: boolean;
  onReorder: ((reorderedIndices: number[], draggedIndex?: number, droppedIndex?: number) => void) | undefined;
  dragAndDropMode: DragAndDropMode;
};

const TableContext = createContext<TableContextType>({
  isSelectable: false,
  hasWarningRows: false,
  hasLockedRows: false,
  displayCheckbox: false,
  isDragAndDroppable: false,
  onReorder: undefined,
  dragAndDropMode: 'reorder',
});

export {TableContext};
