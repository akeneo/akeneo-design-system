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
exports.HelpIcon = void 0;
var react_1 = __importDefault(require("react"));
var HelpIcon = function (_a) {
    var title = _a.title, _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["title", "size", "color"]);
    return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none" }, props),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("path", { fill: color, fillRule: "evenodd", d: "M11.972 16.465a.748.748 0 1 1-.002 1.496.748.748 0 0 1 .002-1.496ZM11.986 6a3.498 3.498 0 0 1 3.486 3.487c.01 1.507-.883 2.44-1.641 3.159-.38.36-.733.684-.973 1.014-.24.33-.374.649-.374 1.076v.25a.5.5 0 0 1-.749.438.5.5 0 0 1-.247-.438v-.25c0-.658.244-1.215.568-1.661.324-.446.72-.804 1.09-1.154.74-.702 1.34-1.305 1.33-2.426a2.486 2.486 0 0 0-2.49-2.497 2.486 2.486 0 0 0-2.49 2.497.5.5 0 0 1-.749.438.5.5 0 0 1-.247-.438A3.498 3.498 0 0 1 11.986 6Z", clipRule: "evenodd" }),
        react_1.default.createElement("path", { stroke: color, strokeLinecap: "round", strokeLinejoin: "round", d: "M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z" })));
};
exports.HelpIcon = HelpIcon;
//# sourceMappingURL=HelpIcon.js.map