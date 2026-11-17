import React from 'react';
import {IconProps} from './IconProps';

const MinusIcon = ({title, size = 24, color = 'currentColor', ...props}: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    {title && <title>{title}</title>}
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <line vectorEffect="non-scaling-stroke" stroke={color} x1="6" y1="12" x2="18" y2="12" />
    </g>
  </svg>
);

export {MinusIcon};
