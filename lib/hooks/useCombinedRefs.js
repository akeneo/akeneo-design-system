"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCombinedRefs = void 0;
var react_1 = require("react");
var useCombinedRefs = function () {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    var targetRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        refs.forEach(function (ref) {
            if (!ref)
                return;
            if (typeof ref === 'function') {
                ref(targetRef.current);
            }
            else {
                ref.current = targetRef.current;
            }
        });
    }, [refs]);
    return targetRef;
};
exports.useCombinedRefs = useCombinedRefs;
//# sourceMappingURL=useCombinedRefs.js.map