"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraggedElementContext = exports.DraggedElementProvider = void 0;
var react_1 = require("react");
var react_2 = __importDefault(require("react"));
var DraggedElementContext = (0, react_1.createContext)({
    index: null,
    onDragStart: function () { return void 0; },
    onDragEnd: function () { return void 0; },
});
exports.DraggedElementContext = DraggedElementContext;
var DraggedElementProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(null), index = _b[0], setDraggedElementIndex = _b[1];
    var onDragStart = (0, react_1.useCallback)(function (index) { return setDraggedElementIndex(index); }, []);
    var onDragEnd = (0, react_1.useCallback)(function () { return setDraggedElementIndex(null); }, []);
    return (react_2.default.createElement(DraggedElementContext.Provider, { value: { index: index, onDragStart: onDragStart, onDragEnd: onDragEnd } }, children));
};
exports.DraggedElementProvider = DraggedElementProvider;
//# sourceMappingURL=DraggedElementContext.js.map