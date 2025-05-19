import {createContext, PropsWithChildren, useCallback, useState} from 'react';
import React from 'react';
import {TableProps, TableInputProps} from '../components';

type DraggedElementType = {
  index: number | null;
  isDragging: boolean;
  onDragStart: (rowIndex: number) => void;
  onDragEnd?: () => void;
};

const DraggedElementContext = createContext<DraggedElementType>({
  index: null,
  isDragging: false,
  onDragStart: () => void 0,
  onDragEnd: () => void 0,
});

const DraggedElementProvider = ({children}: PropsWithChildren<TableProps | TableInputProps>) => {
  const [index, setDraggedElementIndex] = useState<number | null>(null);
  const onDragStart = useCallback((index: number) => setDraggedElementIndex(index), []);
  const onDragEnd = useCallback(() => setDraggedElementIndex(null), []);
  const isDragging = null !== index;

  return (
    <DraggedElementContext.Provider value={{index, isDragging, onDragStart, onDragEnd}}>
      {children}
    </DraggedElementContext.Provider>
  );
};

export {DraggedElementProvider, DraggedElementContext};
