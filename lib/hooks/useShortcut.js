"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useShortcut = void 0;
var react_1 = require("react");
var useShortcut = function (key, callback, externalRef) {
    if (externalRef === void 0) { externalRef = null; }
    var memoizedCallback = react_1.useCallback(function (event) { return (key === event.code ? callback() : null); }, [
        key,
        callback,
    ]);
    var internalRef = react_1.useRef(null);
    var ref = null === externalRef ? internalRef : externalRef;
    react_1.useEffect(function () {
        if (typeof ref !== 'function' && null !== ref.current) {
            var element_1 = ref.current;
            element_1.addEventListener('keydown', memoizedCallback);
            return function () { return element_1.removeEventListener('keydown', memoizedCallback); };
        }
        else {
            document.addEventListener('keydown', memoizedCallback);
            return function () { return document.removeEventListener('keydown', memoizedCallback); };
        }
    }, [memoizedCallback, ref]);
    return ref;
};
exports.useShortcut = useShortcut;
//# sourceMappingURL=useShortcut.js.map