import React from 'react';
import { Level } from '../../theme';
type ProgressBarSize = 'small' | 'large';
type ProgressBarPercent = number | 'indeterminate';
declare const ProgressBar: React.ForwardRefExoticComponent<{
    level: Level;
    percent: ProgressBarPercent;
    light?: boolean | undefined;
    title?: string | undefined;
    progressLabel?: string | undefined;
    size?: ProgressBarSize | undefined;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { ProgressBar };
export type { ProgressBarPercent };
