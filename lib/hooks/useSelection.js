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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelection = void 0;
var react_1 = require("react");
var selectAll = function () { return ({
    mode: 'not_in',
    collection: [],
}); };
var unselectAll = function () { return ({
    mode: 'in',
    collection: [],
}); };
var select = function (selection, elementToSelect) { return (__assign(__assign({}, selection), { collection: selection.mode === 'in'
        ? __spreadArrays(selection.collection, [elementToSelect]) : selection.collection.filter(function (element) { return element !== elementToSelect; }) })); };
var unselect = function (selection, elementToUnselect) { return (__assign(__assign({}, selection), { collection: selection.mode === 'in'
        ? selection.collection.filter(function (element) { return element !== elementToUnselect; })
        : __spreadArrays(selection.collection, [elementToUnselect]) })); };
var currentSelectionState = function (selection, totalCount) {
    if (selection.collection.length === totalCount) {
        return selection.mode === 'in';
    }
    else if (selection.collection.length !== 0) {
        return 'mixed';
    }
    else {
        return selection.mode === 'not_in';
    }
};
var useSelection = function (totalCount) {
    var _a = react_1.useState({
        mode: 'in',
        collection: [],
    }), selection = _a[0], setSelection = _a[1];
    var isSelected = react_1.useCallback(function (item) {
        return selection.mode === 'in' ? selection.collection.includes(item) : !selection.collection.includes(item);
    }, [selection]);
    var onSelectionChange = react_1.useCallback(function (item, newValue) {
        setSelection(function (selection) { return (newValue ? select(selection, item) : unselect(selection, item)); });
    }, []);
    var onSelectAllChange = react_1.useCallback(function (newValue) {
        setSelection(newValue ? selectAll() : unselectAll());
    }, []);
    var selectedCount = 'in' === selection.mode ? selection.collection.length : totalCount - selection.collection.length;
    return [
        selection,
        currentSelectionState(selection, totalCount),
        isSelected,
        onSelectionChange,
        onSelectAllChange,
        selectedCount,
    ];
};
exports.useSelection = useSelection;
//# sourceMappingURL=useSelection.js.map