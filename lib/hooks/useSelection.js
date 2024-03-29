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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
        ? __spreadArray(__spreadArray([], selection.collection, true), [elementToSelect], false) : selection.collection.filter(function (element) { return element !== elementToSelect; }) })); };
var unselect = function (selection, elementToUnselect) { return (__assign(__assign({}, selection), { collection: selection.mode === 'in'
        ? selection.collection.filter(function (element) { return element !== elementToUnselect; })
        : __spreadArray(__spreadArray([], selection.collection, true), [elementToUnselect], false) })); };
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
    var _a = (0, react_1.useState)({
        mode: 'in',
        collection: [],
    }), selection = _a[0], setSelection = _a[1];
    var isSelected = (0, react_1.useCallback)(function (item) {
        return selection.mode === 'in' ? selection.collection.includes(item) : !selection.collection.includes(item);
    }, [selection]);
    var onSelectionChange = (0, react_1.useCallback)(function (item, newValue) {
        setSelection(function (selection) { return (newValue ? select(selection, item) : unselect(selection, item)); });
    }, []);
    var onSelectAllChange = (0, react_1.useCallback)(function (newValue) {
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