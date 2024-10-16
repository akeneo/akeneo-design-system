"use strict";var t=require("react");const c=u=>{const s=t.useCallback(()=>{setTimeout(()=>{u.current!==null&&u.current.focus()},0)},[u]);return t.useEffect(s,[]),s};exports.useAutoFocus=c;
