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
exports.UploadIcon = void 0;
var react_1 = __importDefault(require("react"));
var UploadIcon = function (_a) {
    var title = _a.title, _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["title", "size", "color"]);
    return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", width: size, height: size }, props),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("g", { stroke: color, fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
            react_1.default.createElement("path", { d: "M12 18.5V2M7 7.5L12 2l5 5.5m-1.813 9H20.5v5h-17v-5h5.313" }))));
};
exports.UploadIcon = UploadIcon;
//# sourceMappingURL=UploadIcon.js.map