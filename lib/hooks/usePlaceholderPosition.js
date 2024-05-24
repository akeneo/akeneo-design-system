"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePlaceholderPosition = void 0;
var react_1 = require("react");
var usePlaceholderPosition = function (rowIndex) {
    var _a = (0, react_1.useState)(0), hoveringCount = _a[0], setHoveringCount = _a[1];
    var _b = (0, react_1.useState)('none'), placeholderPosition = _b[0], setPlaceholderPosition = _b[1];
    (0, react_1.useEffect)(function () {
        setHoveringCount(0);
    }, [rowIndex]);
    var dragEnter = (0, react_1.useCallback)(function (draggedElementIndex) {
        setHoveringCount(function (count) { return (draggedElementIndex === rowIndex ? count : count + 1); });
        setPlaceholderPosition(draggedElementIndex >= rowIndex ? 'top' : 'bottom');
    }, [rowIndex]);
    var dragLeave = (0, react_1.useCallback)(function () {
        setHoveringCount(function (count) { return count - 1; });
    }, []);
    var dragEnd = (0, react_1.useCallback)(function () {
        setHoveringCount(0);
    }, []);
    return [hoveringCount === 0 ? 'none' : placeholderPosition, dragEnter, dragLeave, dragEnd];
};
exports.usePlaceholderPosition = usePlaceholderPosition;
//# sourceMappingURL=usePlaceholderPosition.js.map