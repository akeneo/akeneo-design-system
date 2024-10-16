"use strict";var f=require("react/jsx-runtime"),_=require("styled-components"),E=require("../../theme/theme.js"),u=require("./PaginationItem.js");function I(t){return t&&t.__esModule?t:{default:t}}var R=I(_);const d=4,S=({currentPage:t,totalItems:s,itemsPerPage:i=25,sticky:a,followPage:p})=>{if(i<=0)throw new Error("Number of items per page cannot be lower or equal than 0");const e=Math.ceil(s/i);if(e<=1)return null;if(t>e)throw new Error("The current page cannot be greater than the total number of pages");const o=O(t,e);return f.jsx(m,{sticky:a,children:o.map((r,A)=>f.jsx(u.PaginationItem,{currentPage:r===t,followPage:p,page:r},A))})},m=R.default.div`
  height: 44px;
  margin: 10px 0 10px 0;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 10px;
  background-color: ${E.getColor("white")};

  ${({sticky:t})=>t!==void 0&&_.css`
      position: sticky;
      top: ${t}px;
      z-index: 9;
    `}
`;function O(t,s){if(s<=d)return Array.from(Array(s).keys()).map(l=>l+1);const i=1,a=2,p=3,e=4,o=s,r=o-1,A=o-2,c=o-3,h=t-1,T=t+1,n=[i];return t>=e&&n.push(u.PAGINATION_SEPARATOR),t>a&&(t===o&&n.push(A),n.push(h)),t!==i&&t!==o&&n.push(t),t<r&&n.push(T),t===i&&n.push(p),t<=c&&n.push(u.PAGINATION_SEPARATOR),n.push(o),n}exports.Pagination=S;
