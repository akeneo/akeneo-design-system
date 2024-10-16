import React from 'react';
import {IconProps} from './IconProps';

const MouseClickIcon = ({title, size = 24, color = 'currentColor', ...props}: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    {title && <title>{title}</title>}
    <path
      fill="none"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2.5V7M4 4L7.5 7.5M2.5 10.5H6.5M5 17L8 14M14 6.5L16.5 4M9.5 9.5L13 20.5L15 17L19.5 21.5L21.5 19.5L17 15L20 13L9.5 9.5Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export {MouseClickIcon};
