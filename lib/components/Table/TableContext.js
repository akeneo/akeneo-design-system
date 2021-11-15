"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableContext = void 0;
var react_1 = require("react");
var TableContext = (0, react_1.createContext)({
    isSelectable: false,
    displayCheckbox: false,
    isDragAndDroppable: false,
    onReorder: undefined,
});
exports.TableContext = TableContext;
//# sourceMappingURL=TableContext.js.map