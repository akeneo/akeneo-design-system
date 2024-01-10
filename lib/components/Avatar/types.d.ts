import { Override } from '../../shared';
import React from 'react';
export declare type User = {
    username: string;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
};
export declare type AvatarProps = Override<React.HTMLAttributes<HTMLSpanElement>, User & {
    size?: 'default' | 'big';
}>;
