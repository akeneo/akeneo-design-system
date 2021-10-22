declare type TableInputContextType = {
    readOnly: boolean;
    isDragAndDroppable: boolean;
    onReorder: ((reorderedIndices: number[]) => void) | undefined;
};
declare const TableInputContext: import("react").Context<TableInputContextType>;
export { TableInputContext };
