import { RefObject } from 'react';
type VerticalPosition = 'up' | 'down';
type HorizontalPosition = 'left' | 'right';
declare const useVerticalPosition: (ref: RefObject<HTMLElement>, forcedPosition?: VerticalPosition) => VerticalPosition | undefined;
declare const useHorizontalPosition: (ref: RefObject<HTMLElement>, forcedPosition?: HorizontalPosition) => HorizontalPosition | undefined;
export { useVerticalPosition, useHorizontalPosition };
export type { VerticalPosition, HorizontalPosition };
