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
var lengthUnits = [
    { label: 'Millimeter', value: 'MILLIMETER', symbol: 'mm' },
    { label: 'Centimeter', value: 'CENTIMETER', symbol: 'cm' },
    { label: 'Decimeter', value: 'DECIMETER', symbol: 'dm' },
    { label: 'Meter', value: 'METER', symbol: 'm' },
    { label: 'Decameter', value: 'DECAMETER', symbol: 'dam' },
    { label: 'Kilometer', value: 'KILOMETER', symbol: 'km' },
];
var useFakeTableInput = function (linesCount) {
    var _a = (0, react_1.useState)(Array.from(Array(linesCount).keys()).map(function (lineIndex) {
        return {
            nutritionScore: "" + ((lineIndex % 3) + 1),
            part: lineIndex * 100 + "g",
            quantity: lineIndex * 10,
            is_allergenic: [true, false, null][lineIndex % 3],
            origin: ['french', 'english', 'german', null][lineIndex % 4],
            length: { unit: lengthUnits[lineIndex].value, amount: "" + lineIndex * 1.5 },
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
    var match = function (text) {
        return text.toLowerCase().includes(searchValue.toLowerCase());
    };
    return { getValue: getValue, setValue: setValue, searchValue: searchValue, setSearchValue: setSearchValue, match: match, lengthUnits: lengthUnits };
};
exports.useFakeTableInput = useFakeTableInput;
//# sourceMappingURL=useFakeTableInput.js.map