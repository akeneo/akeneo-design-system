import React from 'react';
import { AvatarProps } from './types';
declare const Avatar: ({ username, firstName, lastName, avatarUrl, size, ...rest }: AvatarProps) => React.JSX.Element;
export { Avatar };
export type { AvatarProps };
