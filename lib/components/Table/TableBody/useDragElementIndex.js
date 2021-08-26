"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDragElementIndex = void 0;
var react_1 = require("react");
var useDragElementIndex = function () {
    var _a = react_1.useState(null), draggedElementIndex = _a[0], setDraggedElementIndex = _a[1];
    var onDragStart = react_1.useCallback(function (index) { return setDraggedElementIndex(index); }, []);
    var onDragEnd = react_1.useCallback(function () { return setDraggedElementIndex(null); }, []);
    return [draggedElementIndex, onDragStart, onDragEnd];
};
exports.useDragElementIndex = useDragElementIndex;
//# sourceMappingURL=useDragElementIndex.js.map