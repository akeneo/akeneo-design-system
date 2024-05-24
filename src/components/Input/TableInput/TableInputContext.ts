import {createContext} from 'react';

type TableInputContextType = {
  readOnly: boolean;
  isDragAndDroppable: boolean;
  onReorder: ((reorderedIndices: number[], draggedIndex?: number, droppedIndex?: number) => void) | undefined;
};

const TableInputContext = createContext<TableInputContextType>({
  readOnly: false,
  isDragAndDroppable: false,
  onReorder: undefined,
});

export {TableInputContext};
