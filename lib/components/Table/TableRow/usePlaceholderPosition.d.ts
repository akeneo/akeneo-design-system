declare type PlaceholderPosition = 'top' | 'bottom' | 'none';
declare const usePlaceholderPosition: (rowIndex: number) => readonly [PlaceholderPosition, (draggedElementIndex: number) => void, () => void];
export { usePlaceholderPosition };
export type { PlaceholderPosition };
