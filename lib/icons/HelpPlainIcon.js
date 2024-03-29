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
exports.HelpPlainIcon = void 0;
var react_1 = __importDefault(require("react"));
var HelpPlainIcon = function (_a) {
    var title = _a.title, _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, props = __rest(_a, ["title", "size", "color"]);
    return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none" }, props),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("path", { cx: "8.5", cy: "8", r: "8", fill: "#5992C7", d: "M23.294 11.294A11.294 11.294 0 0 1 12 22.588A11.294 11.294 0 0 1 0.706 11.294A11.294 11.294 0 0 1 23.294 11.294z" }),
        react_1.default.createElement("path", { d: "M9.059 6.583C9.232 6.424 9.42 6.273 9.623 6.129C9.832 5.986 10.056 5.861 10.295 5.754C10.534 5.648 10.793 5.566 11.073 5.507C11.353 5.444 11.655 5.412 11.981 5.412C12.423 5.412 12.825 5.476 13.186 5.603C13.553 5.731 13.865 5.914 14.125 6.153C14.384 6.387 14.585 6.671 14.728 7.006C14.87 7.341 14.941 7.715 14.941 8.13C14.941 8.534 14.885 8.884 14.773 9.182C14.661 9.474 14.519 9.729 14.346 9.947C14.178 10.165 13.995 10.354 13.797 10.513C13.598 10.672 13.41 10.824 13.232 10.967C13.054 11.105 12.899 11.244 12.767 11.382C12.64 11.515 12.563 11.666 12.538 11.836L12.362 13H11.073L10.943 11.701C10.938 11.674 10.936 11.653 10.936 11.637C10.936 11.616 10.936 11.592 10.936 11.565C10.936 11.331 10.992 11.129 11.104 10.959C11.215 10.784 11.355 10.622 11.523 10.473C11.691 10.319 11.872 10.17 12.065 10.027C12.258 9.883 12.439 9.729 12.607 9.564C12.774 9.394 12.914 9.203 13.026 8.991C13.138 8.778 13.194 8.528 13.194 8.241C13.194 8.05 13.158 7.88 13.087 7.731C13.021 7.577 12.927 7.447 12.805 7.341C12.683 7.229 12.535 7.144 12.362 7.086C12.195 7.027 12.011 6.998 11.813 6.998C11.523 6.998 11.276 7.032 11.073 7.102C10.875 7.165 10.704 7.24 10.562 7.325C10.425 7.404 10.308 7.479 10.211 7.548C10.114 7.612 10.028 7.644 9.952 7.644C9.768 7.644 9.636 7.564 9.555 7.404L9.059 6.583ZM10.501 15.981C10.501 15.816 10.529 15.659 10.585 15.511C10.646 15.362 10.727 15.234 10.829 15.128C10.936 15.022 11.06 14.937 11.203 14.873C11.345 14.809 11.498 14.777 11.661 14.777C11.818 14.777 11.968 14.809 12.111 14.873C12.253 14.937 12.375 15.022 12.477 15.128C12.579 15.234 12.66 15.362 12.721 15.511C12.782 15.659 12.813 15.816 12.813 15.981C12.813 16.151 12.782 16.31 12.721 16.459C12.66 16.602 12.579 16.727 12.477 16.834C12.375 16.94 12.253 17.022 12.111 17.081C11.968 17.145 11.818 17.176 11.661 17.176C11.498 17.176 11.345 17.145 11.203 17.081C11.06 17.022 10.936 16.94 10.829 16.834C10.727 16.727 10.646 16.602 10.585 16.459C10.529 16.31 10.501 16.151 10.501 15.981Z", fill: "white" })));
};
exports.HelpPlainIcon = HelpPlainIcon;
//# sourceMappingURL=HelpPlainIcon.js.map