"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableInputBody = void 0;
var react_1 = __importStar(require("react"));
var TableInputContext_1 = require("../TableInputContext");
var useDragElementIndex_1 = require("../../../../hooks/useDragElementIndex");
var useDrop_1 = require("../../../../hooks/useDrop");
var TableInputBody = react_1.default.forwardRef(function (_a, forwardedRef) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var _b = useDragElementIndex_1.useDragElementIndex(), draggedElementIndex = _b[0], onDragStart = _b[1], onDragEnd = _b[2];
    var _c = react_1.useContext(TableInputContext_1.TableInputContext), isDragAndDroppable = _c.isDragAndDroppable, onReorder = _c.onReorder;
    var decoratedChildren = react_1.Children.map(children, function (child, rowIndex) {
        if (!react_1.default.isValidElement(child)) {
            return null;
        }
        return isDragAndDroppable
            ? react_1.cloneElement(child, {
                rowIndex: rowIndex,
                draggable: rowIndex === draggedElementIndex,
                onDragStart: onDragStart,
                onDragEnd: onDragEnd,
            })
            : react_1.cloneElement(child, {
                rowIndex: rowIndex,
            });
    });
    var rowCount = react_1.Children.count(decoratedChildren);
    var _d = useDrop_1.useDrop(rowCount, draggedElementIndex, onReorder), tableId = _d[0], onDrop = _d[1], onDragOver = _d[2];
    return (react_1.default.createElement("tbody", __assign({ "data-table-id": tableId, onDrop: onDrop, onDragOver: onDragOver, ref: forwardedRef }, rest), decoratedChildren));
});
exports.TableInputBody = TableInputBody;
TableInputBody.displayName = 'TableInput.Body';
//# sourceMappingURL=TableInputBody.js.map