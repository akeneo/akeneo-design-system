declare type PlaceholderPosition = 'top' | 'bottom' | 'none';
declare const usePlaceholderPosition: (rowIndex: number, draggedElement: number | null) => readonly [PlaceholderPosition, () => void, () => void, () => void];
export { usePlaceholderPosition };
export type { PlaceholderPosition };
