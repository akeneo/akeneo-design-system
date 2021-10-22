"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFakeTableInput = void 0;
var react_1 = require("react");
var useFakeTableInput = function (linesCount) {
    var _a = react_1.useState(Array.from(Array(linesCount).keys()).map(function (lineIndex) {
        return {
            nutritionScore: "" + ((lineIndex % 3) + 1),
            part: lineIndex * 100 + "g",
            quantity: lineIndex * 10,
            is_allergenic: [true, false, null][lineIndex % 3],
        };
    })), state = _a[0], setState = _a[1];
    var _b = react_1.useState(''), searchValue = _b[0], setSearchValue = _b[1];
    var getValue = function (lineIndex, columnName) {
        return state[lineIndex][columnName];
    };
    var setValue = function (lineIndex, columnName, value) {
        state[lineIndex][columnName] = value;
        setState(__spreadArray([], state));
    };
    return { getValue: getValue, setValue: setValue, searchValue: searchValue, setSearchValue: setSearchValue };
};
exports.useFakeTableInput = useFakeTableInput;
//# sourceMappingURL=useFakeTableInput.js.map