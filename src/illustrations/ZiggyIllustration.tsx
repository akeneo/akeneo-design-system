import React from 'react';
import {IllustrationProps} from './IllustrationProps';
import Ziggy from '../../static/illustrations/Ziggy.svg';

const ZiggyIllustration = ({title, size = 130, ...props}: IllustrationProps) => (
  <svg width={size} height={size} viewBox="0 0 130 130" {...props}>
    {title && <title>{title}</title>}
    <image href={Ziggy} />
  </svg>
);

export {ZiggyIllustration};
