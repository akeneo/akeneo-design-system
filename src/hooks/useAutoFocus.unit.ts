import {renderHook} from '@testing-library/react-hooks';
import {act} from '@testing-library/react';
import {useAutoFocus} from './useAutoFocus';

const button = document.createElement('button');
document.body.appendChild(button);

const ref = {
  current: button,
};

afterEach(() => {
  button.blur();
});

test('It sets automatically the focus on the given ref', () => {
  jest.useFakeTimers();
  renderHook(() => useAutoFocus(ref));
  jest.runAllTimers();

  expect(button).toHaveFocus();
});

test('I can request the focus on the given ref', () => {
  jest.useFakeTimers();
  const {result} = renderHook(() => useAutoFocus(ref));
  const focus = result.current;

  jest.runAllTimers();
  expect(button).toHaveFocus();

  act(() => {
    button.blur();
  });

  jest.runAllTimers();
  expect(button).not.toHaveFocus();

  act(() => {
    focus();
  });

  jest.runAllTimers();
  expect(button).toHaveFocus();
});

test('It does not try to focus if the current ref is null', () => {
  jest.useFakeTimers();
  const ref = {
    current: null,
  };

  renderHook(() => useAutoFocus(ref));
  jest.runAllTimers();
  expect(button).not.toHaveFocus();
});

test('It sets the focus on the first descendant matching the selector', () => {
  jest.useFakeTimers();
  const container = document.createElement('div');
  container.innerHTML = '<span>Title</span><button data-item>First</button><button data-item>Second</button>';
  document.body.appendChild(container);

  renderHook(() => useAutoFocus({current: container}, '[data-item]'));
  jest.runAllTimers();

  expect(container.querySelector('[data-item]')).toHaveFocus();
});
