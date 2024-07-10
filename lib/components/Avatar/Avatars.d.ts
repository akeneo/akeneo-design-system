import React from 'react';
import { Override } from '../../shared';
type AvatarsProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    max: number;
    maxTitle?: number;
}>;
declare const Avatars: React.FC<AvatarsProps>;
export { Avatars };
export type { AvatarsProps };
