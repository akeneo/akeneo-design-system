import React from 'react';
import {IllustrationProps} from './IllustrationProps';
import Common from '../../static/illustrations/Common.svg';

const CommonIllustration = ({title, size = 256, ...props}: IllustrationProps) => (
  <svg width={size} height={size} viewBox="0 0 254 254" {...props}>
    {title && <title>{title}</title>}
    <image href={Common} />
  </svg>
);

export {CommonIllustration};
