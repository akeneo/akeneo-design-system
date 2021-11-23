import React, { ReactElement } from 'react';
import { Override } from '../../shared';
import { IllustrationProps } from '../../illustrations/IllustrationProps';
declare type PlaceholderProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    title: string;
    illustration: ReactElement<IllustrationProps>;
}>;
declare const Placeholder: React.FC<PlaceholderProps>;
export { Placeholder };
