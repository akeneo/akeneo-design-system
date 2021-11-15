"use strict";
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
exports.useFakeTableInput = void 0;
var react_1 = require("react");
var useFakeTableInput = function (linesCount) {
    var _a = (0, react_1.useState)(Array.from(Array(linesCount).keys()).map(function (lineIndex) {
        return {
            nutritionScore: "" + ((lineIndex % 3) + 1),
            part: lineIndex * 100 + "g",
            quantity: lineIndex * 10,
            is_allergenic: [true, false, null][lineIndex % 3],
        };
    })), state = _a[0], setState = _a[1];
    var _b = (0, react_1.useState)(''), searchValue = _b[0], setSearchValue = _b[1];
    var getValue = function (lineIndex, columnName) {
        return state[lineIndex][columnName];
    };
    var setValue = function (lineIndex, columnName, value) {
        state[lineIndex][columnName] = value;
        setState(__spreadArray([], state, true));
    };
    return { getValue: getValue, setValue: setValue, searchValue: searchValue, setSearchValue: setSearchValue };
};
exports.useFakeTableInput = useFakeTableInput;
//# sourceMappingURL=useFakeTableInput.js.map