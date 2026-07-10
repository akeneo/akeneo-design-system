import React from 'react';
import {IconProps} from './IconProps';

const ChecklistIcon = ({title, size = 24, color = 'currentColor', ...props}: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    {title && <title>{title}</title>}
    <g stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6l2 2 4-4" />
      <path d="M10 6h12M10 12h12M10 18h12" />
    </g>
    <path
      d="M3.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM3.5 18a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
      fill={color}
      fillRule="evenodd"
    />
  </svg>
);

export {ChecklistIcon};
