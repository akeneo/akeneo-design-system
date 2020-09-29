var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckIcon = void 0;
    var react_1 = __importDefault(require("react"));
    var CheckIcon = function (_a) {
        var _b = _a.width, width = _b === void 0 ? 18 : _b, _c = _a.height, height = _c === void 0 ? 18 : _c, _d = _a.className, className = _d === void 0 ? '' : _d;
        return (react_1.default.createElement("svg", { width: width, height: height, viewBox: "0 0 18 18" },
            react_1.default.createElement("path", { className: className, stroke: "currentColor", d: "M1.7 8l4.1 4 8-8", fill: "none", strokeLinejoin: "round", strokeWidth: 1, strokeMiterlimit: 10 })));
    };
    exports.CheckIcon = CheckIcon;
});
//# sourceMappingURL=CheckIcon.js.map