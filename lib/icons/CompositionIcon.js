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
exports.CompositionIcon = void 0;
var react_1 = __importDefault(require("react"));
var CompositionIcon = function (_a) {
    var title = _a.title, _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["title", "size", "color"]);
    return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 24 24", width: size, height: size }, props),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
            react_1.default.createElement("path", { d: "M18.5,12.5 L9.5,21.5 L2.5,14.5 L12,5.3 L18.5,5.5 L18.5,12.5 Z M15,10.5 C15.8284271,10.5 16.5,9.82842712 16.5,9 C16.5,8.17157288 15.8284271,7.5 15,7.5 C14.1715729,7.5 13.5,8.17157288 13.5,9 C13.5,9.82842712 14.1715729,10.5 15,10.5 Z M21.5,2.5 L16.5,7.5 M9.5,10.5 L13.5,14.5 M7.5,12.5 L11.5,16.5 M6.5,13.5 L10.5,17.5 M5.5,14.5 L9.5,18.5", stroke: color }))));
};
exports.CompositionIcon = CompositionIcon;
//# sourceMappingURL=CompositionIcon.js.map