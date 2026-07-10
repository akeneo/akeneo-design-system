import {RefObject} from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {useVerticalPosition, useHorizontalPosition} from './usePosition';

beforeAll(() => {
  Object.assign(window, {
    innerWidth: 200,
    innerHeight: 200,
  });
});

const getFakeRef = (width: number, height: number, top: number, left: number) =>
  ({
    current: {
      getBoundingClientRect: () => ({
        width,
        height,
        top,
        left,
        bottom: top + height,
        right: 0,
      }),
    },
  } as RefObject<HTMLElement>);

const getAnchorRef = (top: number, bottom: number) =>
  ({
    current: {
      getBoundingClientRect: () => ({width: 0, height: bottom - top, top, left: 0, bottom, right: 0}),
    },
  } as RefObject<HTMLElement>);

test('It returns down when there is enough space above the element', () => {
  const ref = getFakeRef(0, 100, 100, 0);

  const {result} = renderHook(() => useVerticalPosition(ref));

  expect(result.current).toEqual('down');
});

test('It returns down when there is enough space below the element', () => {
  const ref = getFakeRef(0, 100, 50, 0);

  const {result} = renderHook(() => useVerticalPosition(ref));

  expect(result.current).toEqual('down');
});

test('It returns down when there is not enough space below and above the element', () => {
  const ref = getFakeRef(0, 100, 50, 0);

  const {result} = renderHook(() => useVerticalPosition(ref));

  expect(result.current).toEqual('down');
});

test('It returns the forced position when provided', () => {
  const ref = getFakeRef(0, 100, 100, 0);

  const {result} = renderHook(() => useVerticalPosition(ref, undefined, 'down'));

  expect(result.current).toEqual('down');
});

test('It returns down when the overlay fits below the anchor', () => {
  const overlayRef = getFakeRef(0, 50, 0, 0);
  const anchorRef = getAnchorRef(10, 40);

  const {result} = renderHook(() => useVerticalPosition(overlayRef, anchorRef));

  expect(result.current).toEqual('down');
});

test('It returns up when the overlay does not fit below the anchor and there is more room above', () => {
  const overlayRef = getFakeRef(0, 100, 0, 0);
  const anchorRef = getAnchorRef(150, 180);

  const {result} = renderHook(() => useVerticalPosition(overlayRef, anchorRef));

  expect(result.current).toEqual('up');
});

test('It returns down when the overlay fits neither side but there is more room below the anchor', () => {
  const overlayRef = getFakeRef(0, 300, 0, 0);
  const anchorRef = getAnchorRef(30, 60);

  const {result} = renderHook(() => useVerticalPosition(overlayRef, anchorRef));

  expect(result.current).toEqual('down');
});

test('It defers the resize re-evaluation to an animation frame, then flips to up and stays up', () => {
  let overlayHeight = 10;
  const overlayRef = {
    current: {
      getBoundingClientRect: () => ({
        width: 0,
        height: overlayHeight,
        top: 0,
        left: 0,
        bottom: overlayHeight,
        right: 0,
      }),
    },
  } as RefObject<HTMLElement>;
  const anchorRef = getAnchorRef(150, 180);

  let triggerResize = () => {};
  class ResizeObserverMock {
    constructor(callback: () => void) {
      triggerResize = callback;
    }
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  let scheduledFrame: (() => void) | null = null;
  const originalResizeObserver = window.ResizeObserver;
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalCancelAnimationFrame = window.cancelAnimationFrame;
  Object.assign(window, {
    ResizeObserver: ResizeObserverMock,
    requestAnimationFrame: (callback: () => void) => {
      scheduledFrame = callback;
      return 1;
    },
    cancelAnimationFrame: () => {
      scheduledFrame = null;
    },
  });

  const flushFrame = () => {
    const frame = scheduledFrame;
    scheduledFrame = null;
    frame?.();
  };

  try {
    const {result} = renderHook(() => useVerticalPosition(overlayRef, anchorRef));
    expect(result.current).toEqual('down');

    // A resize must not recompute synchronously (that is what triggers the ResizeObserver loop error).
    act(() => {
      overlayHeight = 100;
      triggerResize();
    });
    expect(result.current).toEqual('down');

    act(() => {
      flushFrame();
    });
    expect(result.current).toEqual('up');

    // A further resize keeps it up (stable, no oscillation).
    act(() => {
      triggerResize();
      flushFrame();
    });
    expect(result.current).toEqual('up');
  } finally {
    Object.assign(window, {
      ResizeObserver: originalResizeObserver,
      requestAnimationFrame: originalRequestAnimationFrame,
      cancelAnimationFrame: originalCancelAnimationFrame,
    });
  }
});

test('It coalesces multiple resizes into a single frame and cancels a pending frame on cleanup', () => {
  const overlayRef = getFakeRef(0, 100, 0, 0);
  const anchorRef = getAnchorRef(150, 180);

  let triggerResize = () => {};
  class ResizeObserverMock {
    constructor(callback: () => void) {
      triggerResize = callback;
    }
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  let requestedFrames = 0;
  const cancelledFrames: number[] = [];
  const originalResizeObserver = window.ResizeObserver;
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalCancelAnimationFrame = window.cancelAnimationFrame;
  Object.assign(window, {
    ResizeObserver: ResizeObserverMock,
    requestAnimationFrame: () => {
      requestedFrames += 1;
      return requestedFrames;
    },
    cancelAnimationFrame: (id: number) => {
      cancelledFrames.push(id);
    },
  });

  try {
    const {unmount} = renderHook(() => useVerticalPosition(overlayRef, anchorRef));

    // Two resizes before the frame runs only schedule one recomputation.
    act(() => {
      triggerResize();
      triggerResize();
    });
    expect(requestedFrames).toEqual(1);

    // Unmounting while a frame is pending cancels it.
    unmount();
    expect(cancelledFrames).toEqual([1]);
  } finally {
    Object.assign(window, {
      ResizeObserver: originalResizeObserver,
      requestAnimationFrame: originalRequestAnimationFrame,
      cancelAnimationFrame: originalCancelAnimationFrame,
    });
  }
});

test('It returns left when there is more space on the left of the element', () => {
  const ref = getFakeRef(100, 0, 0, 100);

  const {result} = renderHook(() => useHorizontalPosition(ref));

  expect(result.current).toEqual('left');
});

test('It returns right when there is more space on the right the element', () => {
  const ref = getFakeRef(100, 0, 0, 50);

  const {result} = renderHook(() => useHorizontalPosition(ref));

  expect(result.current).toEqual('right');
});

test('It returns the forced position when provided', () => {
  const ref = getFakeRef(100, 0, 0, 100);

  const {result} = renderHook(() => useHorizontalPosition(ref, 'right'));

  expect(result.current).toEqual('right');
});
