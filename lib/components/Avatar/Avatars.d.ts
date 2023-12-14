import React from 'react';
import { Override } from '../../shared';
declare type AvatarsProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    max: number;
}>;
declare const Avatars: ({ max, children, ...rest }: AvatarsProps) => React.JSX.Element;
export { Avatars };
export type { AvatarsProps };
