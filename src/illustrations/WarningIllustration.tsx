import React from 'react';
import {IllustrationProps} from './IllustrationProps';
import Warning from '../../static/illustrations/Warning.svg';

const WarningIllustration = ({title, size = 256, ...props}: IllustrationProps) => (
  <svg width={size} height={size} viewBox="0 0 256 256" {...props}>
    {title && <title>{title}</title>}
    <image href={Warning} />
  </svg>
);

export {WarningIllustration};
