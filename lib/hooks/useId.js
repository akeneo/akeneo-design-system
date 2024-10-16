"use strict";var r=require("react"),t=require("../shared/uuid.js");const s=(e="")=>{const[u]=r.useState(`${e}${t.uuid()}`);return u};exports.useId=s;
