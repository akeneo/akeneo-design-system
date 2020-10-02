(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "styled-components"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useTheme = void 0;
    var react_1 = require("react");
    var styled_components_1 = require("styled-components");
    var useTheme = function () { return react_1.useContext(styled_components_1.ThemeContext); };
    exports.useTheme = useTheme;
});
//# sourceMappingURL=useTheme.js.map