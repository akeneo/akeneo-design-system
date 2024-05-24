import { DragEvent } from 'react';
declare const useDrop: (tableSize: number, draggedElementIndex: number | null, onReorder: ((reorderedIndices: number[], draggedIndex?: number | undefined, droppedIndex?: number | undefined) => void) | undefined) => readonly [string, (event: DragEvent<HTMLTableSectionElement>) => void, (event: DragEvent<HTMLTableSectionElement>) => void];
export { useDrop };
