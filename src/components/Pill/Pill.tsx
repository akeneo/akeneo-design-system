import React, {HTMLAttributes, Ref} from 'react';
import styled from 'styled-components';
import {AkeneoThemedProps, getColorForLevel} from '../../theme/theme';

const PillContainer = styled.div<{level: PillLevel} & AkeneoThemedProps>`
  width: 10px;
  height: 10px;
  min-width: 10px;
  min-height: 10px;
  background-color: ${({level}) => getColorForLevel(level, 100)};
  border-radius: 50%;
`;

type PillLevel = 'primary' | 'success' | 'warning' | 'danger';

type PillProps = {
  /**
   * The level of the Pill.
   */
  level?: PillLevel;
} & HTMLAttributes<HTMLDivElement>;

const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  ({level = 'warning', ...rest}: PillProps, forwardedRef: Ref<HTMLDivElement>) => {
    return <PillContainer role={'danger' === level ? 'alert' : undefined} level={level} ref={forwardedRef} {...rest} />;
  }
);

export {Pill};
