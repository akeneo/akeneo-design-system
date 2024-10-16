"use strict";var u=require("react");const n=(e,t=300)=>{const[c,s]=u.useState(e);return u.useEffect(()=>{const r=setTimeout(()=>{s(e)},t);return()=>{clearTimeout(r)}},[e,t]),c};exports.useDebounce=n;
