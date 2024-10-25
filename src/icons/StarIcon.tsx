import React from 'react';
import {IconProps} from './IconProps';

const StarIcon = ({title, size = 24, color = 'currentColor', fill = 'none', ...props}: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    {title && <title>{title}</title>}
    <path
      d="M11.049 2.92705C11.3483 2.00574 12.6517 2.00574 12.9511 2.92705L14.4697 7.60081C14.6035 8.01284 14.9875 8.2918 15.4207 8.2918H20.335C21.3037 8.2918 21.7065 9.53141 20.9228 10.1008L16.9471 12.9894C16.5966 13.244 16.4499 13.6954 16.5838 14.1074L18.1024 18.7812C18.4017 19.7025 17.3473 20.4686 16.5635 19.8992L12.5878 17.0106C12.2373 16.756 11.7627 16.756 11.4122 17.0106L7.4365 19.8992C6.65278 20.4686 5.5983 19.7025 5.89765 18.7812L7.41625 14.1074C7.55012 13.6954 7.40347 13.244 7.05298 12.9894L3.07724 10.1008C2.29353 9.53141 2.6963 8.2918 3.66502 8.2918H8.57931C9.01253 8.2918 9.39649 8.01284 9.53036 7.60081L11.049 2.92705Z"
      stroke={color}
      fill={fill}
    />
  </svg>
);

export {StarIcon};
