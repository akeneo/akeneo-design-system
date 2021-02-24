"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayUnique = void 0;
var arrayUnique = function (arrayWithDuplicatedItems, comparator) {
    if (undefined === comparator)
        return Array.from(new Set(arrayWithDuplicatedItems));
    return arrayWithDuplicatedItems.reduce(function (uniqueItems, current) {
        if (uniqueItems.some(function (item) { return comparator(item, current); })) {
            return uniqueItems;
        }
        return __spreadArrays(uniqueItems, [current]);
    }, []);
};
exports.arrayUnique = arrayUnique;
//# sourceMappingURL=array.js.map