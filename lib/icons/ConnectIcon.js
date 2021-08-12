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
exports.ConnectIcon = void 0;
var react_1 = __importDefault(require("react"));
var ConnectIcon = function (_a) {
    var title = _a.title, _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["title", "size", "color"]);
    return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", width: size, height: size }, props),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
            react_1.default.createElement("path", { d: "M19.198 4.394a3.716 3.716 0 00-2.52-.975c-1 0-1.94.389-2.646 1.095L11.707 6.84a1 1 0 000 1.414l4.46 4.459a1 1 0 001.414 0l2.325-2.325h0a3.746 3.746 0 00.12-5.165l-.828-.828zm.471.189l1.912-1.84M6.894 11.091a1 1 0 011.414 0h0l1.393 1.392 1.816 1.816.848.849.544.544a1 1 0 010 1.414h0l-2.398 2.398a3.808 3.808 0 01-2.71 1.123 3.805 3.805 0 01-2.58-.999h0l-.849-.849a3.837 3.837 0 01.124-5.29h0zm3.863-.584l-1.284 1.356m4.01 1.336l-1.397 1.379m-9.319 6.649l1.74-1.736", stroke: color, id: "Combined-Shape" }))));
};
exports.ConnectIcon = ConnectIcon;
//# sourceMappingURL=ConnectIcon.js.map