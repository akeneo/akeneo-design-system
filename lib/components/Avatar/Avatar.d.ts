import React from 'react';
import { Override } from '../../shared';
declare type AvatarProps = Override<React.HTMLAttributes<HTMLSpanElement>, {
    username: string;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    size?: 'default' | 'big';
}>;
declare const Avatar: ({ username, firstName, lastName, avatarUrl, size, ...rest }: AvatarProps) => React.JSX.Element;
export { Avatar };
export type { AvatarProps };
