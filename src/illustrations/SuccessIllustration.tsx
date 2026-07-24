import React from 'react';
import {IllustrationProps} from './IllustrationProps';
import Success from '../../static/illustrations/Success.svg';

const SuccessIllustration = ({title, size = 128, ...props}: IllustrationProps) => (
  <svg width={size} height={size} viewBox="0 0 128 128" {...props}>
    {title && <title>{title}</title>}
    <image href={Success} />
  </svg>
);

export {SuccessIllustration};
