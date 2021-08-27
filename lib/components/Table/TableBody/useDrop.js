"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDrop = void 0;
var hooks_1 = require("../../../hooks");
var react_1 = require("react");
var TableContext_1 = require("../TableContext");
var getDropRow = function (element) {
    if (null === element)
        throw new Error('Draggable parent not found');
    return undefined !== element.dataset.draggableIndex
        ? parseInt(element.dataset.draggableIndex)
        : getDropRow(element.parentElement);
};
var generateReorderedIndices = function (size, draggedIndex, droppedIndex) {
    var originalArray = Array.from(__spreadArray([], Array.from({ length: size })).keys());
    var arrayWithoutDraggedItem = originalArray.filter(function (index) { return draggedIndex !== index; });
    arrayWithoutDraggedItem.splice(droppedIndex, 0, draggedIndex);
    return arrayWithoutDraggedItem;
};
var useDrop = function (tableSize, draggedElementIndex) {
    var tableId = hooks_1.useId('table_');
    var onReorder = react_1.useContext(TableContext_1.TableContext).onReorder;
    var handleDrop = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (event.currentTarget.dataset.tableId === tableId && onReorder && null !== draggedElementIndex) {
            var droppedElementIndex = getDropRow(event.target);
            var newIndices = generateReorderedIndices(tableSize, draggedElementIndex, droppedElementIndex);
            onReorder(newIndices);
        }
    };
    var handleDragOver = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    return [tableId, handleDrop, handleDragOver];
};
exports.useDrop = useDrop;
//# sourceMappingURL=useDrop.js.map