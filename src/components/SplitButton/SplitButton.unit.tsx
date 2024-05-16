import React from 'react';
import {fireEvent, render, screen} from '../../storybook/test-util';
import {SplitButton} from './SplitButton';
import userEvent from '@testing-library/user-event';

test('it calls onClick handler when user clicks on button', () => {
  const onClick = jest.fn();
  render(
    <SplitButton size="small" onClick={onClick} label={'My button'}>
      <SplitButton.Item onClick={onClick}>Item 1</SplitButton.Item>
    </SplitButton>
  );

  const button = screen.getAllByRole('button')[0];
  fireEvent.click(button);

  expect(onClick).toBeCalled();
});

test('it opens dropdown on arrow icon', () => {
  const onClick = jest.fn();
  render(
    <SplitButton size="small" onClick={onClick} label={'My button'}>
      <SplitButton.Item onClick={onClick}>Item 1</SplitButton.Item>
    </SplitButton>
  );

  const button = screen.getAllByRole('button')[1];
  fireEvent.click(button);

  expect(screen.getByText('Item 1')).toBeInTheDocument();
});

test('it closes dropdown on item click', () => {
  const onClick = jest.fn();
  const onClickChild = jest.fn();
  render(
    <SplitButton size="small" onClick={onClick} label={'My button'}>
      <SplitButton.Item onClick={onClickChild}>Item 1</SplitButton.Item>
      <div onClick={onClickChild}>Item 2</div>
      An invalid element
    </SplitButton>
  );

  const dropdownButton = screen.getAllByRole('button')[1];
  fireEvent.click(dropdownButton);

  const item1 = screen.getByText('Item 1');
  expect(item1).toBeInTheDocument();

  fireEvent.click(item1);
  expect(onClickChild).toBeCalled();
  expect(item1).not.toBeInTheDocument();

  fireEvent.click(dropdownButton);

  const item2 = screen.getByText('Item 2');
  expect(item2).toBeInTheDocument();

  fireEvent.click(item2);
  expect(onClickChild).toBeCalled();
  expect(item2).not.toBeInTheDocument();
});

test('it calls onClick handler when user hits enter key on button', () => {
  const onClick = jest.fn();
  render(
    <SplitButton ghost={true} onClick={onClick} label={'My button'}>
      <SplitButton.Item onClick={onClick}>Item 1</SplitButton.Item>
    </SplitButton>
  );

  const button = screen.getAllByRole('button')[0];
  button.focus();
  userEvent.type(button, '{enter}');

  expect(onClick).toBeCalled();
});

test('it does not call onClick handler when user clicks on a disabled button', () => {
  const onClick = jest.fn();
  render(
    <SplitButton disabled={true} ghost={true} onClick={onClick} label={'My button'}>
      <SplitButton.Item onClick={onClick}>Item 1</SplitButton.Item>
    </SplitButton>
  );

  const button = screen.getAllByRole('button')[0];
  fireEvent.click(button);

  expect(onClick).not.toBeCalled();
});

test('it does not call onClick handler when user hits enter key on a disabled button', () => {
  const onClick = jest.fn();
  render(
    <SplitButton disabled={true} onClick={onClick} label={'My button'}>
      <SplitButton.Item onClick={onClick}>Item 1</SplitButton.Item>
    </SplitButton>
  );

  const button = screen.getAllByRole('button')[0];
  fireEvent.keyDown(button, {key: 'Enter', code: 'Enter'});

  expect(onClick).not.toBeCalled();
});

test('it does not trigger onClick when disabled', () => {
  const onClick = jest.fn();
  render(
    <SplitButton disabled={true} onClick={onClick} label={'My button'}>
      <SplitButton.Item onClick={onClick}>Item 1</SplitButton.Item>
    </SplitButton>
  );

  const button = screen.getAllByRole('button')[0];
  fireEvent.click(button);

  expect(onClick).not.toBeCalled();
});

test('it does not trigger onClick when onClick is undefined', () => {
  const onClick = jest.fn();
  render(
    <SplitButton onClick={undefined} label={'My button'}>
      <SplitButton.Item onClick={onClick}>Item 1</SplitButton.Item>
    </SplitButton>
  );

  fireEvent.click(screen.getAllByRole('button')[0]);

  expect(onClick).not.toBeCalled();
});

test('Button supports ...rest props', () => {
  render(
    <SplitButton onClick={jest.fn()} data-testid="my_value" label={'My button'}>
      <SplitButton.Item onClick={jest.fn()}>Item 1</SplitButton.Item>
    </SplitButton>
  );

  expect(screen.getAllByTestId('my_value')[0]).toBeInTheDocument();
});
