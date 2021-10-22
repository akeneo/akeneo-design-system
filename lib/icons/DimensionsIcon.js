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
exports.DimensionsIcon = void 0;
var react_1 = __importDefault(require("react"));
var DimensionsIcon = function (_a) {
    var title = _a.title, _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["title", "size", "color"]);
    return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 24 24", width: size, height: size }, props),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
            react_1.default.createElement("path", { d: "M9.33333333,7.12280702 L16.6666667,5.33333333 L16.6666667,14.877193 L9.33333333,16.6666667 L9.33333333,7.12280702 Z M9.33333333,7 L3.33333333,5 L3.33333333,14.3333333 L9.33333333,16.6666667 M3.33333333,5 L10.6666667,3 M10.6666667,3 L16.6666667,5.33333333 M6.66666667,6 L13,4 M4.66666667,8 L8,9 M20.5,3.5 L20.5,16.5 M16.5,20.5 L3.5,20.5 M19.0857864,4.5 L20.5,3.08578644 L21.9142136,4.5 M21.9142136,15.5 L20.5,16.9142136 L19.0857864,15.5 M4.79289322,21.9142136 L3.37867966,20.5 L4.79289322,19.0857864 M15.7928932,19.0857864 L17.2071068,20.5 L15.7928932,21.9142136", stroke: color }))));
};
exports.DimensionsIcon = DimensionsIcon;
//# sourceMappingURL=DimensionsIcon.js.map