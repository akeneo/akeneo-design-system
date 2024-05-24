"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDrop = void 0;
var index_1 = require("./index");
var getDropRow = function (element) {
    if (null === element)
        throw new Error('Draggable parent not found');
    return undefined !== element.dataset.draggableIndex
        ? parseInt(element.dataset.draggableIndex)
        : getDropRow(element.parentElement);
};
var generateReorderedIndices = function (size, draggedIndex, droppedIndex) {
    var originalArray = Array.from(__spreadArray([], Array.from({ length: size }), true).keys());
    var arrayWithoutDraggedItem = originalArray.filter(function (index) { return draggedIndex !== index; });
    arrayWithoutDraggedItem.splice(droppedIndex, 0, draggedIndex);
    return arrayWithoutDraggedItem;
};
var useDrop = function (tableSize, draggedElementIndex, onReorder) {
    var tableId = (0, index_1.useId)('table_');
    var handleDrop = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (event.currentTarget.dataset.tableId === tableId && onReorder && null !== draggedElementIndex) {
            var droppedElementIndex = getDropRow(event.target);
            var newIndices = generateReorderedIndices(tableSize, draggedElementIndex, droppedElementIndex);
            if (onReorder.length === 1) {
                onReorder(newIndices);
            }
            else {
                onReorder(newIndices, draggedElementIndex, droppedElementIndex);
            }
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