import { DragEvent } from 'react';
declare const useDrop: (tableSize: number, draggedElementIndex: number | null) => readonly [string, (event: DragEvent<HTMLTableSectionElement>) => void, (event: DragEvent<HTMLTableSectionElement>) => void];
export { useDrop };
