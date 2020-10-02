(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../common"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onboarderTheme = void 0;
    var common_1 = require("../common");
    var onboarderTheme = {
        color: common_1.color,
        fontSize: common_1.fontSize,
        palette: {
            primary: 'green',
            secondary: 'blue',
            tertiary: 'grey',
            warning: 'yellow',
            danger: 'red',
            brand: '#4CA8E0',
        },
    };
    exports.onboarderTheme = onboarderTheme;
});
//# sourceMappingURL=index.js.map