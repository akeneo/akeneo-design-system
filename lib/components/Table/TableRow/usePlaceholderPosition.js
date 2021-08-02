"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePlaceholderPosition = void 0;
var react_1 = require("react");
var usePlaceholderPosition = function (rowIndex, draggedElement) {
    var _a = react_1.useState(0), overingCount = _a[0], setOveringCount = _a[1];
    var _b = react_1.useState('none'), placeholderPosition = _b[0], setPlaceholderPosition = _b[1];
    var dragEnter = react_1.useCallback(function () {
        if (null === draggedElement)
            return;
        setOveringCount(function (count) { return count + 1; });
        setPlaceholderPosition(draggedElement >= rowIndex ? 'top' : 'bottom');
    }, [draggedElement, rowIndex]);
    var dragLeave = react_1.useCallback(function () {
        if (null === draggedElement)
            return;
        setOveringCount(function (count) { return count - 1; });
    }, [draggedElement]);
    var dragEnd = react_1.useCallback(function () {
        setOveringCount(0);
    }, []);
    return [overingCount === 0 ? 'none' : placeholderPosition, dragEnter, dragLeave, dragEnd];
};
exports.usePlaceholderPosition = usePlaceholderPosition;
//# sourceMappingURL=usePlaceholderPosition.js.map