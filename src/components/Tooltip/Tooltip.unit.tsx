import React from 'react';
import {act, fireEvent, render, screen, waitFor} from '../../storybook/test-util';
import {Tooltip} from './Tooltip';

test('it renders its children properly', () => {
  render(<Tooltip data-testid="my_value">Tooltip content</Tooltip>);
  fireEvent.mouseOver(screen.getByTestId('my_value'));
  expect(screen.getByText('Tooltip content')).toBeInTheDocument();
});

test('it triggers tooltip mouse events', async () => {
  render(<Tooltip data-testid="my_value">Tooltip content</Tooltip>);
  fireEvent.mouseOver(screen.getByTestId('my_value'));
  expect(screen.getByText('Tooltip content')).toBeVisible();

  fireEvent.mouseLeave(screen.getByTestId('my_value'));
  await waitFor(() => {
    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
  });
});

test('it delays showing the tooltip when mouseEnterDelay is set', () => {
  jest.useFakeTimers();
  render(
    <Tooltip data-testid="my_value" mouseEnterDelay={1000}>
      Tooltip content
    </Tooltip>
  );

  fireEvent.mouseOver(screen.getByTestId('my_value'));
  expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();

  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(screen.getByText('Tooltip content')).toBeInTheDocument();

  jest.useRealTimers();
});

test('it cancels the delayed tooltip when the pointer leaves before the delay elapses', () => {
  jest.useFakeTimers();
  render(
    <Tooltip data-testid="my_value" mouseEnterDelay={1000}>
      Tooltip content
    </Tooltip>
  );

  fireEvent.mouseOver(screen.getByTestId('my_value'));
  fireEvent.mouseLeave(screen.getByTestId('my_value'));

  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();

  jest.useRealTimers();
});

test('it renders the tooltip with a bottom direction', () => {
  render(
    <Tooltip data-testid="my_value" direction={'bottom'}>
      Tooltip content
    </Tooltip>
  );
  fireEvent.mouseOver(screen.getByTestId('my_value'));
  expect(screen.getByText('Tooltip content')).toBeInTheDocument();
});

test('it renders the tooltip with a left direction', () => {
  render(
    <Tooltip data-testid="my_value" direction={'left'}>
      Tooltip content
    </Tooltip>
  );
  fireEvent.mouseOver(screen.getByTestId('my_value'));
  expect(screen.getByText('Tooltip content')).toBeInTheDocument();
});

test('it renders the tooltip with a right direction', () => {
  render(
    <Tooltip data-testid="my_value" direction={'right'}>
      Tooltip content
    </Tooltip>
  );
  fireEvent.mouseOver(screen.getByTestId('my_value'));
  expect(screen.getByText('Tooltip content')).toBeInTheDocument();
});

test('Tooltip supports ...rest props', () => {
  render(<Tooltip data-testid="my_value">Tooltip content</Tooltip>);
  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});
