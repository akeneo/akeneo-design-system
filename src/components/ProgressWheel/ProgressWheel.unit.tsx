import React from 'react';
import {ProgressWheel} from './ProgressWheel';
import {render} from '../../storybook/test-util';
import '@testing-library/jest-dom/extend-expect';
import {screen} from '@testing-library/react';

test('it renders a progress wheel', () => {
  render(<ProgressWheel percent={50} level="primary" />);

  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});

test('it renders a progress wheel with sanitized percent', () => {
  const {rerender} = render(<ProgressWheel percent={-1} level="primary" />);
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');

  rerender(<ProgressWheel percent={0} level="primary" />);
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');

  rerender(<ProgressWheel percent={50} level="primary" />);
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');

  rerender(<ProgressWheel percent={100} level="primary" />);
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');

  rerender(<ProgressWheel percent={101} level="primary" />);
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
});

test('it renders a progress wheel with NaN percent as 0', () => {
  render(<ProgressWheel percent={NaN} level="primary" />);
  expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
});

test('it renders a progress wheel with a title', () => {
  render(<ProgressWheel percent={50} level="primary" title="Loading progress" />);

  expect(screen.getByText('Loading progress')).toBeInTheDocument();
});

test('ProgressWheel supports forwardRef', () => {
  const ref = {current: null};

  render(<ProgressWheel level="primary" percent={50} ref={ref} />);
  expect(ref.current).not.toBe(null);
});

test('ProgressWheel supports ...rest props', () => {
  const {container} = render(<ProgressWheel level="primary" percent={50} data-my-attribute="my_value" />);
  expect(container.querySelector('[data-my-attribute="my_value"]')).toBeInTheDocument();
});

test('it renders a progress wheel with brand level', () => {
  render(<ProgressWheel percent={50} level="brand" />);

  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});

test.each<number>([32, 48, 64])('it renders a progress wheel with size %s', (size: number) => {
  render(<ProgressWheel percent={50} level="primary" size={size} />);

  const wheel = screen.getByRole('progressbar');
  expect(wheel).toHaveAttribute('width', String(size));
  expect(wheel).toHaveAttribute('height', String(size));
});
