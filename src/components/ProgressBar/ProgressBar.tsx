import React, {forwardRef, HTMLAttributes, Ref} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {AkeneoThemedProps, getColor, getColorForLevel, getFontSize, Level} from '../../theme/theme';
import {useId} from '../../hooks/useId';

const ProgressBarContainer = styled.div`
  overflow: hidden;
`;

const progressBarAnimation = keyframes`
  from { background-position: 0 0; }
  to { background-position: 20px 0; }
`;

const Header = styled.div`
  display: flex;
  font-size: ${getFontSize('default')};
  justify-content: space-between;
`;

const Title = styled.div`
  color: ${getColor('grey', 140)};
  padding-right: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProgressLabel = styled.div`
  color: ${getColor('grey', 120)};
  white-space: nowrap;
`;

const ProgressBarBackground = styled.div<{size: ProgressBarSize} & AkeneoThemedProps>`
  background: ${getColor('grey', 60)};
  height: ${props => getHeightFromSize(props.size)};
  overflow: hidden;
  position: relative;
`;

const ProgressBarFill = styled.div.attrs<{width: number; level: Level; indeterminate: boolean; light: boolean}>(
  props => ({
    style: {width: `${props.width}%`},
  })
)<{width: number; level: Level; light: boolean; indeterminate: boolean} & AkeneoThemedProps>`
  ${({level, light}: {level: Level; light: boolean} & AkeneoThemedProps) => css`
    background: ${getColorForLevel(level, light ? 60 : 100)};
  `}

  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: width 0.3s;

  ${props =>
    props.indeterminate &&
    css`
      background-image: linear-gradient(
        315deg,
        rgba(255, 255, 255, 0.6) 25%,
        rgba(255, 255, 255, 0.4) 25%,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(255, 255, 255, 0.6) 75%,
        rgba(255, 255, 255, 0.4) 75%,
        rgba(255, 255, 255, 0.4) 100%
      );
      background-size: 20px 20px;
      transition: width 200ms ease;
      animation: ${progressBarAnimation} 1s linear infinite;
    `}
`;

const getHeightFromSize = (size: ProgressBarSize): string => {
  switch (size) {
    case 'large':
      return '10px';
    case 'small':
    default:
      return '4px';
  }
};

const computeWidthFromPercent = (percent: ProgressBarPercent): number => {
  if (percent === 'indeterminate' || percent > 100) {
    return 100;
  }

  if (percent < 0) {
    return 0;
  }

  return percent;
};

type ProgressBarSize = 'small' | 'large';
type ProgressBarPercent = number | 'indeterminate';

type ProgressBarProps = {
  /**
   * Define the level of the progress bar.
   */
  level: Level;

  /**
   * The progression of the progress bar in percentage (from 0 to 100) when type is determinate,
   * when type is indeterminate use `indeterminate`.
   */
  percent: ProgressBarPercent;

  /**
   * Whether the style of the progress bar should be light.
   */
  light?: boolean;

  /**
   * The progress bar title.
   */
  title?: string;

  /**
   * Describe the progress with a label (example: 46%, 30 minutes left).
   */
  progressLabel?: string;

  /**
   * Define the size of the progress bar.
   */
  size?: ProgressBarSize;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Progress bar to provide users with feedback on what is going on.
 */
const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {level, percent, title, progressLabel, light = false, size = 'small', ...rest}: ProgressBarProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const labelId = useId('label_');
    const progressBarId = useId('progress_');

    const progressBarProps: HTMLAttributes<HTMLDivElement> = {};

    if (percent !== 'indeterminate' && isNaN(percent)) {
      percent = 'indeterminate';
    }

    if (percent !== 'indeterminate') {
      progressBarProps['aria-valuenow'] = computeWidthFromPercent(percent);
      progressBarProps['aria-valuemin'] = 0;
      progressBarProps['aria-valuemax'] = 100;
    }

    return (
      <ProgressBarContainer ref={forwardedRef} {...rest}>
        {(title || progressLabel) && (
          <Header>
            <Title title={title} id={labelId}>
              {title}
            </Title>
            {progressLabel && <ProgressLabel title={progressLabel}>{progressLabel}</ProgressLabel>}
          </Header>
        )}
        <ProgressBarBackground id={progressBarId} {...progressBarProps} role="progressbar" size={size}>
          <ProgressBarFill
            level={level}
            light={light}
            indeterminate={percent === 'indeterminate'}
            width={computeWidthFromPercent(percent)}
          />
        </ProgressBarBackground>
      </ProgressBarContainer>
    );
  }
);

export {ProgressBar};
export type {ProgressBarPercent};
