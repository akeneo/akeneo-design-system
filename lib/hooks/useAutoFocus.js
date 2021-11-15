"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutoFocus = void 0;
var react_1 = require("react");
var useAutoFocus = function (ref) {
    var focus = (0, react_1.useCallback)(function () {
        setTimeout(function () {
            if (ref.current !== null)
                ref.current.focus();
        }, 0);
    }, [ref]);
    (0, react_1.useEffect)(focus, []);
    return focus;
};
exports.useAutoFocus = useAutoFocus;
//# sourceMappingURL=useAutoFocus.js.map