import {renderHook} from '@testing-library/react-hooks';
import {usePagination} from './usePagination';
import {RefObject} from 'react';

type EntryCallback = (entries: {isIntersecting: boolean}[]) => void;

let entryCallback: EntryCallback | undefined = undefined;
const intersectionObserverMock = (callback: EntryCallback) => ({
  observe: jest.fn(() => (entryCallback = callback)),
  unobserve: jest.fn(),
});
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

test('it calls the next page handler when the last element is almost reached', () => {
  const handleNextPage = jest.fn();
  const containerRef = {
    current: {},
  } as RefObject<HTMLElement>;
  const lastItemRef = {
    current: {},
  } as RefObject<HTMLElement>;

  renderHook(() => usePagination(containerRef, lastItemRef, handleNextPage, true));

  entryCallback?.([{isIntersecting: true}]);

  expect(handleNextPage).toHaveBeenCalled();
});

test('it re-attaches the observer when data changes', () => {
  const handleNextPage = jest.fn();
  const containerRef = {
    current: {},
  } as RefObject<HTMLElement>;
  const lastItemRef = {
    current: {},
  } as RefObject<HTMLElement>;

  (window.IntersectionObserver as jest.Mock).mockClear();

  const {rerender} = renderHook(({data}) => usePagination(containerRef, lastItemRef, handleNextPage, true, data), {
    initialProps: {data: [1]},
  });

  expect(window.IntersectionObserver).toHaveBeenCalledTimes(1);

  rerender({data: [1, 2]});

  expect(window.IntersectionObserver).toHaveBeenCalledTimes(2);
});
