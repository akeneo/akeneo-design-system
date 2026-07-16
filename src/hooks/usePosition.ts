import {RefObject, useState, useEffect} from 'react';

type VerticalPosition = 'up' | 'down';
type HorizontalPosition = 'left' | 'right';

/**
 * This hook provides the vertical position that an overlay should have.
 * The preferred position is only a hint: when an anchor is provided, the overlay opens in that
 * direction as long as it fits there, and flips to the opposite side when it does not fit and the
 * opposite side has more room. The decision is re-evaluated on resize, so it stays correct even
 * when the overlay grows after opening (e.g. asynchronously loaded options).
 */
const useVerticalPosition = (
  ref: RefObject<HTMLElement>,
  anchorRef?: RefObject<HTMLElement>,
  preferredPosition?: VerticalPosition
) => {
  const [verticalPosition, setVerticalPosition] = useState<VerticalPosition | undefined>(preferredPosition);

  useEffect(() => {
    const element = ref.current;
    if (null === element) {
      return;
    }

    const anchor = anchorRef?.current ?? null;

    const computeVerticalPosition = () => {
      if (null !== anchor) {
        const overlayHeight = element.getBoundingClientRect().height;
        const {top: spaceAbove, bottom: anchorBottom} = anchor.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const spaceBelow = windowHeight - anchorBottom;

        const preferred = preferredPosition ?? 'down';
        const opposite: VerticalPosition = 'up' === preferred ? 'down' : 'up';
        const spaceInPreferred = 'up' === preferred ? spaceAbove : spaceBelow;
        const spaceInOpposite = 'up' === preferred ? spaceBelow : spaceAbove;
        const overlayDoesNotFitInPreferred = overlayHeight > spaceInPreferred;

        setVerticalPosition(overlayDoesNotFitInPreferred && spaceInOpposite > spaceInPreferred ? opposite : preferred);
        return;
      }

      if (undefined !== preferredPosition) {
        setVerticalPosition(preferredPosition);
        return;
      }

      const {height: elementHeight, top: distanceToTop} = element.getBoundingClientRect();

      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const distanceToBottom = windowHeight - (elementHeight + distanceToTop);

      const elementIsOverlappingBottom = distanceToBottom < 0;
      const elementIsOverlappingTop = distanceToTop < 0;

      setVerticalPosition(elementIsOverlappingBottom ? (elementIsOverlappingTop ? 'down' : 'up') : 'down');
    };

    computeVerticalPosition();

    if (typeof ResizeObserver === 'undefined') {
      return;
    }

    // Defer the recomputation to the next frame: reacting synchronously to the ResizeObserver
    // would relayout within the same observation cycle and trigger a "ResizeObserver loop" error.
    let scheduledFrame: number | null = null;
    const resizeObserver = new ResizeObserver(() => {
      if (null !== scheduledFrame) {
        return;
      }
      scheduledFrame = window.requestAnimationFrame(() => {
        scheduledFrame = null;
        computeVerticalPosition();
      });
    });
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
      if (null !== scheduledFrame) {
        window.cancelAnimationFrame(scheduledFrame);
      }
    };
  }, [preferredPosition, ref.current, anchorRef?.current]);

  return verticalPosition;
};

/**
 * This hook provides the horizontal position that an overlay should have. It's a pretty naive one:
 * It takes the biggest distance to the left or the right.
 */
const useHorizontalPosition = (ref: RefObject<HTMLElement>, forcedPosition?: HorizontalPosition) => {
  const [horizontalPosition, setHorizontalPosition] = useState<HorizontalPosition | undefined>(forcedPosition);

  useEffect(() => {
    if (null !== ref.current && undefined === forcedPosition) {
      const {width: elementWidth, left: distanceToLeft} = ref.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const distanceToRight = windowWidth - (elementWidth + distanceToLeft);

      setHorizontalPosition(distanceToLeft > distanceToRight ? 'left' : 'right');
    }
  }, [forcedPosition, ref.current]);

  return horizontalPosition;
};

export {useVerticalPosition, useHorizontalPosition};
export type {VerticalPosition, HorizontalPosition};
