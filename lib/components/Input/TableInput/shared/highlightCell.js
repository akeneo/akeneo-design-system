"use strict";var e=require("../../../../theme/theme.js"),o=require("styled-components");const s=o.css`
  ${({highlighted:r,inError:g})=>r&&!g&&o.css`
      background: ${e.getColor("green",10)};
      box-shadow: 0 0 0 1px ${e.getColor("green",80)};
    `};

  ${({inError:r})=>r&&o.css`
      background: ${e.getColor("red",10)};
      box-shadow: 0 0 0 1px ${e.getColor("red",80)};
    `};
`;exports.highlightCell=s;
