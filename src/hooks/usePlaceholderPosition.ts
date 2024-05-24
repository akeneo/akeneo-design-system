import {useCallback, useEffect, useState} from 'react';

type PlaceholderPosition = 'top' | 'bottom' | 'none';

const usePlaceholderPosition = (rowIndex: number) => {
  const [hoveringCount, setHoveringCount] = useState<number>(0);
  const [placeholderPosition, setPlaceholderPosition] = useState<PlaceholderPosition>('none');

  useEffect(() => {
    setHoveringCount(0);
  }, [rowIndex]);

  const dragEnter = useCallback(
    (draggedElementIndex: number) => {
      setHoveringCount(count => (draggedElementIndex === rowIndex ? count : count + 1));
      setPlaceholderPosition(draggedElementIndex >= rowIndex ? 'top' : 'bottom');
    },
    [rowIndex]
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
