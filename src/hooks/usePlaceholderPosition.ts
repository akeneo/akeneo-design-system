import {useCallback, useContext, useEffect, useState} from 'react';
import {DraggedElementContext} from '../contexts/DraggedElementContext';

type PlaceholderPosition = 'top' | 'bottom' | 'full_row' | 'none';
export type DragAndDropMode = 'reorder' | 'hierarchy';

const usePlaceholderPosition = (rowIndex: number, dragAndDropMode: DragAndDropMode = 'reorder') => {
  const [hoveringCount, setHoveringCount] = useState<number>(0);
  const [placeholderPosition, setPlaceholderPosition] = useState<PlaceholderPosition>('none');
  const {isDragging} = useContext(DraggedElementContext);

  useEffect(() => {
    if (!isDragging) {
      setPlaceholderPosition('none');
      setHoveringCount(count => Math.max(0, count - 1));
    }
  }, [isDragging]);

  useEffect(() => {
    setHoveringCount(0);
  }, [rowIndex]);

  const dragEnter = useCallback(
    (draggedElementIndex: number) => {
      setHoveringCount(count => (draggedElementIndex === rowIndex ? count : count + 1));
      if ('hierarchy' === dragAndDropMode) {
        setPlaceholderPosition('full_row');
      } else {
        setPlaceholderPosition(draggedElementIndex >= rowIndex ? 'top' : 'bottom');
      }
    },
    [rowIndex, dragAndDropMode]
  );

  const dragLeave = useCallback(() => {
    setHoveringCount(count => count - 1);
  }, []);

  const dragEnd = useCallback(() => {
    setHoveringCount(0);
  }, []);

  return [hoveringCount === 0 ? 'none' : placeholderPosition, dragEnter, dragLeave, dragEnd] as const;
};

export {usePlaceholderPosition};
export type {PlaceholderPosition};
