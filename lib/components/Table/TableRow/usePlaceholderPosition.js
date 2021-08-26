"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePlaceholderPosition = void 0;
var react_1 = require("react");
var usePlaceholderPosition = function (rowIndex) {
    var _a = react_1.useState(0), overingCount = _a[0], setOveringCount = _a[1];
    var _b = react_1.useState('none'), placeholderPosition = _b[0], setPlaceholderPosition = _b[1];
    react_1.useEffect(function () {
        setOveringCount(0);
    }, [rowIndex]);
    var dragEnter = react_1.useCallback(function (draggedElementIndex) {
        setOveringCount(function (count) { return count + 1; });
        setPlaceholderPosition(draggedElementIndex >= rowIndex ? 'top' : 'bottom');
    }, [rowIndex]);
    var dragLeave = react_1.useCallback(function () {
        setOveringCount(function (count) { return count - 1; });
    }, []);
    return [overingCount === 0 ? 'none' : placeholderPosition, dragEnter, dragLeave];
};
exports.usePlaceholderPosition = usePlaceholderPosition;
//# sourceMappingURL=usePlaceholderPosition.js.map