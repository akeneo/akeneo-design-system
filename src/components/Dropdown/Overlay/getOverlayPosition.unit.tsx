import {RefObject} from 'react';
import {getOverlayPosition} from './Overlay';

const rectRef = (rect: Partial<DOMRect>) =>
  ({current: {getBoundingClientRect: () => rect as DOMRect}} as RefObject<HTMLDivElement>);

const overlay = rectRef({width: 400, height: 300});
const opener = rectRef({top: 400, bottom: 440, left: 200, right: 600, width: 400, height: 40});

describe('getOverlayPosition', () => {
  describe('when covering the opener', () => {
    test('it anchors a "down" overlay to the opener top edge', () => {
      expect(getOverlayPosition('down', undefined, false, opener, overlay)).toEqual([398, 200]);
    });

    test('it anchors an "up" overlay to the opener top edge, growing upwards', () => {
      expect(getOverlayPosition('up', undefined, false, opener, overlay)).toEqual([100, 200]);
    });
  });

  describe('when the opener stays visible', () => {
    test('it places a "down" overlay below the opener', () => {
      expect(getOverlayPosition('down', undefined, true, opener, overlay)).toEqual([441, 200]);
    });

    test('it anchors an "up" overlay to the opener top edge, growing upwards', () => {
      expect(getOverlayPosition('up', undefined, true, opener, overlay)).toEqual([100, 200]);
    });
  });

  describe('horizontal alignment', () => {
    test('it right-aligns the overlay to the opener when horizontalPosition is "left"', () => {
      const narrow = rectRef({width: 350, height: 300});
      expect(getOverlayPosition('down', 'left', false, opener, narrow)).toEqual([398, 250]);
    });

    test('it left-aligns the overlay to the opener by default', () => {
      expect(getOverlayPosition('down', undefined, false, opener, overlay)).toEqual([398, 200]);
    });
  });

  describe('stable anchoring', () => {
    const grownOpener = rectRef({top: 400, bottom: 520, left: 200, right: 600, width: 400, height: 120});
    const lowOpener = rectRef({top: 760, bottom: 800, left: 200, right: 600, width: 400, height: 40});

    test('it keeps a "down" overlay in place when the opener grows taller', () => {
      expect(getOverlayPosition('down', undefined, false, grownOpener, overlay)).toEqual(
        getOverlayPosition('down', undefined, false, opener, overlay)
      );
    });

    test('it keeps an "up" overlay in place when the opener grows taller', () => {
      expect(getOverlayPosition('up', undefined, false, grownOpener, overlay)).toEqual(
        getOverlayPosition('up', undefined, false, opener, overlay)
      );
    });

    test('it anchors a "down" overlay to the opener top edge even with little room below', () => {
      expect(getOverlayPosition('down', undefined, false, lowOpener, overlay)).toEqual([758, 200]);
    });
  });

  describe('edge cases', () => {
    test('it clamps the top to the top of the viewport', () => {
      const highOpener = rectRef({top: 1, bottom: 41, left: 200, right: 600, width: 400, height: 40});
      expect(getOverlayPosition('up', undefined, false, highOpener, overlay)).toEqual([0, 200]);
    });

    test('it returns [0, 0] when the refs are missing', () => {
      expect(getOverlayPosition('down', undefined, false, undefined, undefined)).toEqual([0, 0]);
    });
  });
});
