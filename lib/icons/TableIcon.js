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
exports.TableIcon = void 0;
var react_1 = __importDefault(require("react"));
var TableIcon = function (_a) {
    var title = _a.title, _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["title", "size", "color"]);
    return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 24 24", width: size, height: size }, props),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
            react_1.default.createElement("path", { d: "M4,5 L20,5 C20.5522847,5 21,5.44771525 21,6 L21,18 C21,18.5522847 20.5522847,19 20,19 L4,19 C3.44771525,19 3,18.5522847 3,18 L3,6 C3,5.44771525 3.44771525,5 4,5 Z M3,10 L21,10 M3,13 L21,13 M3,16 L21,16 M9,5 L9,19 M15,5 L15,19", stroke: color }))));
};
exports.TableIcon = TableIcon;
//# sourceMappingURL=TableIcon.js.map