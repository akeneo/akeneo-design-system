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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodIcon = void 0;
var react_1 = __importDefault(require("react"));
var FoodIcon = function (_a) {
    var title = _a.title, _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["title", "size", "color"]);
    return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 24 24", width: size, height: size }, props),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
            react_1.default.createElement("path", { d: "M8,13 C8,11.8954305 7.1045695,11 6,11 C4.8954305,11 4,11.8954305 4,13 M21,13 C21,10.790861 19.209139,9 17,9 C16.6441363,9 16.2991266,9.04647111 15.9707082,9.13367587 M8,16 C8,18.209139 9.790861,20 12,20 C14.209139,20 16,18.209139 16,16 M2,13 L22,13 L22,22 L2,22 L2,13 Z M8,6 L11,6 L11,13 L8,13 L8,6 Z M9.5,4 L11,6 L8,6 L9.5,4 Z M14.5,4 L16,6 L14.5,4 Z M9.5,2 L14.5,2 L14.5,4 L9.5,4 L9.5,2 Z M11,6 L16,6 L16,13 L11,13 L11,6 Z M6.5,15.5 L9.5,15.5 M14.5,15.5 L17.5,15.5", stroke: color }))));
};
exports.FoodIcon = FoodIcon;
//# sourceMappingURL=FoodIcon.js.map