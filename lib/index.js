import objectAssign from 'object-assign';
import 'prop-types/checkPropTypes';
import styled, { keyframes, css } from 'styled-components';
import { getColor, getFontSize, getColorForLevel } from 'theme';
import { CheckIcon as CheckIcon$1, PartialCheckIcon as PartialCheckIcon$1 } from 'icons';
import { useShortcut } from 'hooks';
import { uuid, Key } from 'shared';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState");};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}var I=H.prototype=new G;I.constructor=H;objectAssign(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h;}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return {$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return {result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a);}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e);}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++);}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a));}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b);}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:objectAssign};var Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b);},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
var Component=F;var Fragment=r;var Profiler=u;var PureComponent=H;var StrictMode=t;var Suspense=y;var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
var cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=objectAssign({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h]);}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f;}return {$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};var createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};var createElement=M;var createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};var createRef=function(){return {current:null}};var forwardRef=function(a){return {$$typeof:x,render:a}};var isValidElement=O;
var lazy=function(a){return {$$typeof:A,_ctor:a,_status:-1,_result:null}};var memo=function(a,b){return {$$typeof:z,type:a,compare:void 0===b?null:b}};var useCallback=function(a,b){return Z().useCallback(a,b)};var useContext=function(a,b){return Z().useContext(a,b)};var useDebugValue=function(){};var useEffect=function(a,b){return Z().useEffect(a,b)};var useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
var useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};var useMemo=function(a,b){return Z().useMemo(a,b)};var useReducer=function(a,b,c){return Z().useReducer(a,b,c)};var useRef=function(a){return Z().useRef(a)};var useState=function(a){return Z().useState(a)};var version="16.13.1";

var react_production_min = {
	Children: Children,
	Component: Component,
	Fragment: Fragment,
	Profiler: Profiler,
	PureComponent: PureComponent,
	StrictMode: StrictMode,
	Suspense: Suspense,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	cloneElement: cloneElement,
	createContext: createContext,
	createElement: createElement,
	createFactory: createFactory,
	createRef: createRef,
	forwardRef: forwardRef,
	isValidElement: isValidElement,
	lazy: lazy,
	memo: memo,
	useCallback: useCallback,
	useContext: useContext,
	useDebugValue: useDebugValue,
	useEffect: useEffect,
	useImperativeHandle: useImperativeHandle,
	useLayoutEffect: useLayoutEffect,
	useMemo: useMemo,
	useReducer: useReducer,
	useRef: useRef,
	useState: useState,
	version: version
};

var react_development = createCommonjsModule(function (module, exports) {
});
var react_development_1 = react_development.Children;
var react_development_2 = react_development.Component;
var react_development_3 = react_development.Fragment;
var react_development_4 = react_development.Profiler;
var react_development_5 = react_development.PureComponent;
var react_development_6 = react_development.StrictMode;
var react_development_7 = react_development.Suspense;
var react_development_8 = react_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var react_development_9 = react_development.cloneElement;
var react_development_10 = react_development.createContext;
var react_development_11 = react_development.createElement;
var react_development_12 = react_development.createFactory;
var react_development_13 = react_development.createRef;
var react_development_14 = react_development.forwardRef;
var react_development_15 = react_development.isValidElement;
var react_development_16 = react_development.lazy;
var react_development_17 = react_development.memo;
var react_development_18 = react_development.useCallback;
var react_development_19 = react_development.useContext;
var react_development_20 = react_development.useDebugValue;
var react_development_21 = react_development.useEffect;
var react_development_22 = react_development.useImperativeHandle;
var react_development_23 = react_development.useLayoutEffect;
var react_development_24 = react_development.useMemo;
var react_development_25 = react_development.useReducer;
var react_development_26 = react_development.useRef;
var react_development_27 = react_development.useState;
var react_development_28 = react_development.version;

var react = createCommonjsModule(function (module) {

{
  module.exports = react_production_min;
}
});
var react_1 = react.Children;
var react_2 = react.Component;
var react_3 = react.Fragment;
var react_4 = react.Profiler;
var react_5 = react.PureComponent;
var react_6 = react.StrictMode;
var react_7 = react.Suspense;
var react_8 = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var react_9 = react.cloneElement;
var react_10 = react.createContext;
var react_11 = react.createElement;
var react_12 = react.createFactory;
var react_13 = react.createRef;
var react_14 = react.forwardRef;
var react_15 = react.isValidElement;
var react_16 = react.lazy;
var react_17 = react.memo;
var react_18 = react.useCallback;
var react_19 = react.useContext;
var react_20 = react.useDebugValue;
var react_21 = react.useEffect;
var react_22 = react.useImperativeHandle;
var react_23 = react.useLayoutEffect;
var react_24 = react.useMemo;
var react_25 = react.useReducer;
var react_26 = react.useRef;
var react_27 = react.useState;
var react_28 = react.version;

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 400;\n  font-size: 15px;\n  padding-left: 10px;\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent;\n  height: 20px;\n  width: 20px;\n  border: 1px solid ", ";\n  border-radius: 3px;\n  overflow: hidden;\n  background-color: ", ";\n  transition: background-color 0.2s ease-out;\n  box-sizing: border-box;\n  color: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " 0.2s ease-in forwards;\n  opacity: 0;\n  stroke-dasharray: 17px;\n  stroke-dashoffset: 0;\n  transition-delay: 0.2s;\n  transition: opacity 0.1s ease-out;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var checkTick = keyframes(["to{stroke-dashoffset:0;}"]);
var uncheckTick = keyframes(["to{stroke-dashoffset:17px;}"]);
var Container = styled.div(_templateObject());
var TickIcon = styled(CheckIcon$1)(_templateObject2(), uncheckTick);
var CheckboxContainer = styled.div(_templateObject3(), getColor('grey80'), getColor('grey20'), getColor('white'), function (props) {
  return props.checked && css(["background-color:", ";border-color:", ";", "{animation-delay:0.2s;animation:", " 0.2s ease-out forwards;stroke-dashoffset:17px;opacity:1;transition-delay:0s;}"], getColor('blue100'), getColor('blue100'), TickIcon, checkTick);
}, function (props) {
  return props.checked && props.readOnly && css(["background-color:", ";border-color:", ";"], getColor('blue20'), getColor('blue40'));
}, function (props) {
  return !props.checked && props.readOnly && css(["background-color:", ";border-color:", ";"], getColor('grey60'), getColor('grey100'));
});
var LabelContainer = styled.label(_templateObject4(), getColor('grey140'), function (props) {
  return props.readOnly && css(["color:", ";"], getColor('grey100'));
});

/**
 * The checkboxes are applied when users can select all, several, or none of the options from a given list.
 */
var Checkbox = /*#__PURE__*/react.forwardRef(function (_ref, forwardedRef) {
  var checked = _ref.checked,
      onChange = _ref.onChange,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["checked", "onChange", "readOnly", "children"]);

  var _useState = react_27("checkbox_".concat(uuid())),
      _useState2 = _slicedToArray(_useState, 1),
      checkboxId = _useState2[0];

  var _useState3 = react_27("label_".concat(uuid())),
      _useState4 = _slicedToArray(_useState3, 1),
      labelId = _useState4[0];

  var isChecked = 'true' === checked;
  var isMixed = 'mixed' === checked;

  var handleChange = function handleChange() {
    if (!onChange || readOnly) return;

    switch (checked) {
      case 'true':
        onChange('false');
        break;

      case 'mixed':
      case 'false':
        onChange('true');
        break;
    }
  };

  var ref = useShortcut(Key.Space, handleChange);
  var forProps = children ? {
    'aria-labelledby': labelId,
    id: checkboxId
  } : {};
  return /*#__PURE__*/react.createElement(Container, _extends({
    ref: forwardedRef
  }, rest), /*#__PURE__*/react.createElement(CheckboxContainer, _extends({
    checked: isChecked || isMixed,
    readOnly: readOnly,
    role: "checkbox",
    ref: ref,
    "aria-checked": isChecked,
    tabIndex: readOnly ? -1 : 0,
    onClick: handleChange
  }, forProps), isMixed ? /*#__PURE__*/react.createElement(PartialCheckIcon$1, {
    height: 20,
    width: 20
  }) : /*#__PURE__*/react.createElement(TickIcon, {
    height: 20,
    width: 20
  })), children ? /*#__PURE__*/react.createElement(LabelContainer, {
    onClick: handleChange,
    id: labelId,
    readOnly: readOnly,
    htmlFor: checkboxId
  }, children) : null);
});

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  height: 18px;\n  line-height: 16px;\n  border: 1px solid;\n  padding: 0 6px;\n  border-radius: 2px;\n  text-transform: uppercase;\n  box-sizing: border-box;\n  background-color: ", ";\n  font-size: ", ";\n\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var BadgeContainer = styled.span(_templateObject$1(), getColor('white'), getFontSize('small'), function (_ref) {
  var _ref$level = _ref.level,
      level = _ref$level === void 0 ? 'primary' : _ref$level;
  return css(["color:", ";border-color:", ";"], getColorForLevel(level, 140), getColorForLevel(level, 100));
});

/**
 * Badges are used for items that must be: tagged, categorized, organized by keywords, or to highlight information.
 */
var Badge = /*#__PURE__*/react.forwardRef(function (_ref2, forwardedRef) {
  var _ref2$level = _ref2.level,
      level = _ref2$level === void 0 ? 'primary' : _ref2$level,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["level", "children"]);

  return /*#__PURE__*/react.createElement(BadgeContainer, _extends({
    level: level,
    ref: forwardedRef
  }, rest), children);
});

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  border-width: 1px;\n  border-style: ", ";\n  font-size: ", ";\n  font-weight: 400;\n  text-transform: uppercase;\n  padding: ", ";\n  border-radius: 16px;\n  height: ", ";\n\n  ", "\n\n  cursor: pointer;\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

var getColorStyle = function getColorStyle(props) {
  var level = props.level,
      ghost = props.ghost,
      disabled = props.disabled;

  if (ghost) {
    return css(["color:", ";background-color:white;border-color:", ";&:hover{color:", ";background-color:", ";border-color:", ";}&:active{color:", ";border-color:", ";}"], getColorForLevel(level, disabled ? 80 : 120), getColorForLevel(level, disabled ? 60 : 100), getColorForLevel(level, 140), getColorForLevel(level, 20), getColorForLevel(level, 120), getColorForLevel(level, 140), getColorForLevel(level, 140));
  }

  return css(["color:white;background-color:", ";&:hover{background-color:", ";}&:active{background-color:", ";}"], getColorForLevel(level, disabled ? 40 : 100), getColorForLevel(level, 120), getColorForLevel(level, 140));
};

var Container$1 = styled.button(_templateObject$2(), function (props) {
  return props.ghost ? 'solid' : 'none';
}, getFontSize('default'), function (props) {
  return props.size === 'small' ? '0 10px' : '0 15px';
}, function (props) {
  return props.size === 'small' ? '24px' : '32px';
}, getColorStyle);
/**
 * Buttons express what action will occur when the users clicks.
 * Buttons are used to initialize an action, either in the background or foreground of an experience.
 */

var Button = /*#__PURE__*/react.forwardRef(function (_ref, forwardedRef) {
  var _ref$level = _ref.level,
      level = _ref$level === void 0 ? 'primary' : _ref$level,
      _ref$ghost = _ref.ghost,
      ghost = _ref$ghost === void 0 ? false : _ref$ghost,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'default' : _ref$size,
      ariaDescribedBy = _ref.ariaDescribedBy,
      ariaLabel = _ref.ariaLabel,
      ariaLabelledBy = _ref.ariaLabelledBy,
      children = _ref.children,
      onClick = _ref.onClick,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      rest = _objectWithoutProperties(_ref, ["level", "ghost", "disabled", "size", "ariaDescribedBy", "ariaLabel", "ariaLabelledBy", "children", "onClick", "type"]);

  var ref = useShortcut(Key.Enter, disabled ? function () {
    return null;
  } : onClick, forwardedRef);
  return /*#__PURE__*/react.createElement(Container$1, _extends({
    level: level,
    ghost: ghost,
    disabled: disabled,
    size: size,
    "aria-describedby": ariaDescribedBy,
    "aria-disabled": disabled,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    ref: ref,
    role: "button",
    type: type,
    onClick: disabled ? null : onClick
  }, rest), children);
});

var CheckIcon = function CheckIcon(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 18 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 18 : _ref$height,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/react.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, /*#__PURE__*/react.createElement("path", {
    className: className,
    stroke: "currentColor",
    d: "M1.7 8l4.1 4 8-8",
    fill: "none",
    strokeLinejoin: "round",
    strokeWidth: 1,
    strokeMiterlimit: 10
  }));
};

var PartialCheckIcon = function PartialCheckIcon(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 27 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 27 : _ref$height,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/react.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 27 27"
  }, /*#__PURE__*/react.createElement("path", {
    className: className,
    d: "M2 12.5h20",
    stroke: "currentColor",
    strokeWidth: 2,
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

export { Badge, Button, CheckIcon, Checkbox, PartialCheckIcon };
//# sourceMappingURL=index.js.map
