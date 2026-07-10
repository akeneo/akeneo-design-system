import React, {forwardRef, Ref, SVGAttributes} from 'react';
import styled, {css} from 'styled-components';
import {AkeneoThemedProps, getColor, getColorForLevel, Level} from '../../theme/theme';

type ProgressWheelLevel = Level | 'brand';

const RADIUS = 6;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const getProgressWheelColor = (level: ProgressWheelLevel) => {
  if (level === 'brand') {
    return getColor('purple', 100);
  }
  return getColorForLevel(level, 100);
};

const ProgressWheelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ProgressWheelPercentage = styled.div<{$size: number}>`
  color: ${getColor('grey', 120)};
  font-size: ${props => props.$size - 5}px;
`;

const ColoredRing = styled.circle<{level: ProgressWheelLevel} & AkeneoThemedProps>`
  ${({level}: {level: ProgressWheelLevel} & AkeneoThemedProps) => css`
    stroke: ${getProgressWheelColor(level)};
  `}
`;

const RemainingArc = styled.circle`
  stroke: white;
`;

const clampPercent = (percent: number): number => Math.min(100, Math.max(0, isNaN(percent) ? 0 : percent));

type ProgressWheelProps = {
  /**
   * Define the level of the progress wheel which changes its color.
   */
  level: ProgressWheelLevel;

  /**
   * The progression of the progress wheel in percentage (from 0 to 100).
   */
  percent: number;

  /**
   * The size (width and height) of the progress wheel in pixels.
   */
  size?: number;

  /**
   * The progress wheel title.
   */
  title?: string;
} & SVGAttributes<SVGSVGElement>;

/**
 * Circular progress wheel to provide users with feedback on what is going on.
 */
const ProgressWheel = forwardRef<SVGSVGElement, ProgressWheelProps>(
  ({level, percent, size = 16, title, ...props}: ProgressWheelProps, forwardedRef: Ref<SVGSVGElement>) => {
    const clampedPercent = clampPercent(percent);
    const remaining = CIRCUMFERENCE * (1 - clampedPercent / 100);

    return (
      <ProgressWheelContainer>
        <svg
          ref={forwardedRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width={size}
          height={size}
          role="progressbar"
          aria-valuenow={clampedPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          {...props}
          fill="none"
        >
          {title && <title>{title}</title>}
          <g fill="none" fillRule="evenodd">
            <ColoredRing cx="8" cy="8" r={RADIUS} strokeWidth="4" level={level} />
            {remaining !== 0 && (
              <RemainingArc
                cx="8"
                cy="8"
                r={RADIUS}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={`${remaining} ${CIRCUMFERENCE - remaining}`}
                strokeDashoffset={remaining}
                transform="rotate(-90 8 8)"
              />
            )}
          </g>
        </svg>
        <ProgressWheelPercentage $size={size}>{percent}%</ProgressWheelPercentage>
      </ProgressWheelContainer>
    );
  }
);

export {ProgressWheel};
export type {ProgressWheelLevel};
