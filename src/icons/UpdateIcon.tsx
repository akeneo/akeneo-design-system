import React from 'react';
import {IconProps} from './IconProps';

const UpdateIcon = ({title, size = 24, color = 'currentColor', ...props}: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" {...props}>
    {title && <title>{title}</title>}
    <path
      d="M20.5125 8.74347C19.2075 5.38254 15.9418 3 12.1197 3C7.14914 3 3.11971 7.02944 3.11971 12M3.54747 14.7168C3.59251 14.8504 3.70314 15.153 3.87937 15.6246C5.27376 18.7901 8.43866 21 12.1197 21C17.0903 21 21.1197 16.9706 21.1197 12"
      stroke={color}
      stroke-linecap="round"
    />
    <path
      d="M23.0145 13.621L21.1964 11.4543L19.0297 13.2724"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.27835 10L2.98054 12.2589L5.23942 10.5567"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export {UpdateIcon};
