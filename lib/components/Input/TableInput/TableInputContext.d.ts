declare type TableInputContextType = {
    readOnly: boolean;
    isDragAndDroppable: boolean;
    onReorder: ((reorderedIndices: number[], draggedIndex?: number, droppedIndex?: number) => void) | undefined;
};
declare const TableInputContext: import("react").Context<TableInputContextType>;
export { TableInputContext };
