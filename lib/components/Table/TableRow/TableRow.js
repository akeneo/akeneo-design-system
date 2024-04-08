"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.TableRow = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../../theme");
var components_1 = require("../../../components");
var TableContext_1 = require("../TableContext");
var TableCell_1 = require("../TableCell/TableCell");
var icons_1 = require("../../../icons");
var usePlaceholderPosition_1 = require("../../../hooks/usePlaceholderPosition");
var RowContainer = styled_components_1.default.tr(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  &:hover > td {\n    opacity: 1;\n    ", "\n  }\n\n  &:hover > td > div {\n    opacity: 1;\n  }\n\n  ", ";\n"], ["\n  ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  &:hover > td {\n    opacity: 1;\n    ", "\n  }\n\n  &:hover > td > div {\n    opacity: 1;\n  }\n\n  ", ";\n"])), function (_a) {
    var isSelected = _a.isSelected;
    return isSelected && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      > td {\n        background-color: ", ";\n      }\n    "], ["\n      > td {\n        background-color: ", ";\n      }\n    "])), (0, theme_1.getColor)('blue', 20));
}, function (_a) {
    var isClickable = _a.isClickable;
    return isClickable && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      &:hover {\n        cursor: pointer;\n      }\n    "], ["\n      &:hover {\n        cursor: pointer;\n      }\n    "])));
}, function (_a) {
    var isDragAndDroppable = _a.isDragAndDroppable;
    return isDragAndDroppable && (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      & > *:first-child {\n        width: 44px;\n      }\n    "], ["\n      & > *:first-child {\n        width: 44px;\n      }\n    "])));
}, function (_a) {
    var placeholderPosition = _a.placeholderPosition;
    return placeholderPosition === 'top' && (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      background: linear-gradient(to bottom, ", " 4px, ", " 0px);\n    "], ["\n      background: linear-gradient(to bottom, ", " 4px, ", " 0px);\n    "])), (0, theme_1.getColor)('blue', 40), (0, theme_1.getColor)('white'));
}, function (_a) {
    var placeholderPosition = _a.placeholderPosition;
    return placeholderPosition === 'bottom' && (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      background: linear-gradient(to top, ", " 4px, ", " 0px);\n    "], ["\n      background: linear-gradient(to top, ", " 4px, ", " 0px);\n    "])), (0, theme_1.getColor)('blue', 40), (0, theme_1.getColor)('white'));
}, function (_a) {
    var isClickable = _a.isClickable;
    return isClickable && (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        background-color: ", ";\n      "], ["\n        background-color: ", ";\n      "])), (0, theme_1.getColor)('grey', 20));
}, function (_a) {
    var level = _a.level;
    return level === 'warning'
        ? (0, styled_components_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n          > td {\n            :first-child {\n              padding: 0 0 0 5px;\n            }\n            background-color: ", ";\n          }\n        "], ["\n          > td {\n            :first-child {\n              padding: 0 0 0 5px;\n            }\n            background-color: ", ";\n          }\n        "])), (0, theme_1.getColor)('yellow', 10)) : level === 'tertiary' && (0, styled_components_1.css)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n          > td {\n            background-color: ", ";\n            color: ", ";\n          }\n        "], ["\n          > td {\n            background-color: ", ";\n            color: ", ";\n          }\n        "])), (0, theme_1.getColor)('grey', 20), (0, theme_1.getColor)('grey', 120));
});
var CheckboxContainer = styled_components_1.default.td(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  background: none !important;\n  opacity: ", ";\n  cursor: auto;\n\n  > div {\n    justify-content: center;\n  }\n"], ["\n  background: none !important;\n  opacity: ", ";\n  cursor: auto;\n\n  > div {\n    justify-content: center;\n  }\n"])), function (_a) {
    var isVisible = _a.isVisible;
    return (isVisible ? 1 : 0);
});
var HandleCell = (0, styled_components_1.default)(TableCell_1.TableCell)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  cursor: grab;\n  width: 20px;\n\n  > div {\n    justify-content: center;\n  }\n\n  :active {\n    cursor: grabbing;\n  }\n"], ["\n  cursor: grab;\n  width: 20px;\n\n  > div {\n    justify-content: center;\n  }\n\n  :active {\n    cursor: grabbing;\n  }\n"])));
var getIcon = function (level) {
    switch (level) {
        case 'warning':
            return react_1.default.createElement(WarningIcon, null);
        case 'tertiary':
            return react_1.default.createElement(icons_1.LockIcon, null);
    }
};
var WarningIcon = (0, styled_components_1.default)(icons_1.DangerIcon)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), (0, theme_1.getColor)('yellow', 120));
var TableRow = (0, react_1.forwardRef)(function (_a, forwardedRef) {
    var _b = _a.rowIndex, rowIndex = _b === void 0 ? 0 : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c, level = _a.level, onSelectToggle = _a.onSelectToggle, onClick = _a.onClick, draggable = _a.draggable, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, children = _a.children, rest = __rest(_a, ["rowIndex", "isSelected", "level", "onSelectToggle", "onClick", "draggable", "onDragStart", "onDragEnd", "children"]);
    var _d = (0, usePlaceholderPosition_1.usePlaceholderPosition)(rowIndex), placeholderPosition = _d[0], placeholderDragEnter = _d[1], placeholderDragLeave = _d[2], placeholderDragEnd = _d[3];
    var _e = (0, react_1.useContext)(TableContext_1.TableContext), isSelectable = _e.isSelectable, displayCheckbox = _e.displayCheckbox, isDragAndDroppable = _e.isDragAndDroppable, hasWarningRows = _e.hasWarningRows, hasLockedRows = _e.hasLockedRows;
    if (isSelectable && (undefined === isSelected || undefined === onSelectToggle)) {
        throw Error('A row in a selectable table should have the prop "isSelected" and "onSelectToggle"');
    }
    var handleCheckboxChange = function (event) {
        event.stopPropagation();
        onSelectToggle === null || onSelectToggle === void 0 ? void 0 : onSelectToggle(!isSelected);
    };
    var handleDragEnter = function (event) {
        placeholderDragEnter(parseInt(event.dataTransfer.getData('text')));
    };
    var handleDragStart = function (event) {
        event.dataTransfer.setData('text', rowIndex.toString());
        onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(rowIndex);
    };
    var handleDragEnd = function () {
        placeholderDragEnd();
        onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd();
    };
    return (react_1.default.createElement(RowContainer, __assign({ ref: forwardedRef, isClickable: undefined !== onClick, isSelected: !!isSelected, level: level, isDragAndDroppable: isDragAndDroppable, onClick: onClick, placeholderPosition: isDragAndDroppable ? placeholderPosition : 'none', draggable: isDragAndDroppable && draggable, "data-draggable-index": rowIndex, onDragEnter: handleDragEnter, onDragLeave: placeholderDragLeave, onDragStart: handleDragStart, onDragEnd: handleDragEnd }, rest),
        isSelectable && (react_1.default.createElement(CheckboxContainer, { "aria-hidden": !displayCheckbox && !isSelected, isVisible: displayCheckbox || !!isSelected, onClick: handleCheckboxChange },
            react_1.default.createElement(components_1.Checkbox, { checked: isSelected, onChange: function (_value, e) {
                    handleCheckboxChange(e);
                } }))),
        isDragAndDroppable && (react_1.default.createElement(HandleCell, { onMouseDown: function () { return onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(rowIndex); }, onMouseUp: onDragEnd, "data-testid": "dragAndDrop" },
            react_1.default.createElement(icons_1.RowIcon, { size: 16 }))),
        hasWarningRows && (react_1.default.createElement(TableCell_1.TableCell, null, level === 'warning' && react_1.default.cloneElement(getIcon(level), { size: 16, 'data-testid': 'warning-icon' }))),
        children,
        hasLockedRows && (react_1.default.createElement(TableCell_1.TableCell, null, level === 'tertiary' && react_1.default.cloneElement(getIcon(level), { size: 16, 'data-testid': 'lock-icon' })))));
});
exports.TableRow = TableRow;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=TableRow.js.map