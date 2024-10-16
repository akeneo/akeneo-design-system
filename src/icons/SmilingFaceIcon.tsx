import React from 'react';
import {IconProps} from './IconProps';

const SmilingFaceIcon = ({title, size = 24, color = 'currentColor', ...props}: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    {title && <title>{title}</title>}
    <path
      d="M7 12.8333C9.5 17 14.5 17 17 12.8333M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM9.5 8.66667C9.5 9.1269 9.1269 9.5 8.66667 9.5C8.20643 9.5 7.83333 9.1269 7.83333 8.66667C7.83333 8.20643 8.20643 7.83333 8.66667 7.83333C9.1269 7.83333 9.5 8.20643 9.5 8.66667ZM16.1667 8.66667C16.1667 9.1269 15.7936 9.5 15.3333 9.5C14.8731 9.5 14.5 9.1269 14.5 8.66667C14.5 8.20643 14.8731 7.83333 15.3333 7.83333C15.7936 7.83333 16.1667 8.20643 16.1667 8.66667Z"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export {SmilingFaceIcon};
