"use strict";var e=require("react");const s=()=>{const t=e.useRef(!0),u=e.useCallback(()=>t.current,[]);return e.useEffect(()=>()=>{t.current=!1},[]),u};exports.useIsMounted=s;
