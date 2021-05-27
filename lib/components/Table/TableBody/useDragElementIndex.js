"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDragElementIndex = void 0;
var react_1 = require("react");
var useDragElementIndex = function () {
    var _a = react_1.useState(null), draggedElementIndex = _a[0], setDraggedElementIndex = _a[1];
    return [
        draggedElementIndex,
        function (index) { return setDraggedElementIndex(index); },
        function () { return setDraggedElementIndex(null); },
    ];
};
exports.useDragElementIndex = useDragElementIndex;
//# sourceMappingURL=useDragElementIndex.js.map