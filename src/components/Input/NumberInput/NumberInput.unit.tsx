import React, {FC, useEffect, useState} from 'react';
import {NumberInput} from './NumberInput';
import {fireEvent, render, screen} from '../../../storybook/test-util';
import userEvent from '@testing-library/user-event';

test('it renders and handle changes', () => {
  const handleChange = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <NumberInput id="myInput" value="13" onChange={handleChange} />
    </>
  );

  expect(screen.getByLabelText('My label')).toBeInTheDocument();
  const input = screen.getByLabelText('My label') as HTMLInputElement;

  fireEvent.change(input, {target: {value: '12'}});
  expect(handleChange).toHaveBeenCalledWith('12');
});

test('it renders and handle changes on up/down buttons', () => {
  const handleChange = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <NumberInput id="myInput" value="12" onChange={handleChange} />
    </>
  );

  expect(screen.getByTestId('increment-number-input')).toBeInTheDocument();
  const increment = screen.getByTestId('increment-number-input');
  fireEvent.click(increment);
  expect(handleChange).toHaveBeenCalledWith('13');

  expect(screen.getByTestId('decrement-number-input')).toBeInTheDocument();
  const decrement = screen.getByTestId('decrement-number-input');
  fireEvent.click(decrement);
  expect(handleChange).toHaveBeenCalledWith('12');
});

test('it does not display increment/decrement icons when using `any` as step', () => {
  const handleChange = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <NumberInput id="myInput" value="12.4" step="any" onChange={handleChange} />
    </>
  );

  expect(screen.queryByTestId('increment-number-input')).not.toBeInTheDocument();
  expect(screen.queryByTestId('decrement-number-input')).not.toBeInTheDocument();
});

test('it handles on submit callback', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <NumberInput id="myInput" value="12" onChange={handleChange} onSubmit={handleSubmit} />
    </>
  );

  const input = screen.getByLabelText('My label');
  userEvent.type(input, '{enter}');
  expect(handleChange).not.toHaveBeenCalled();
  expect(handleSubmit).toHaveBeenCalled();
});

test('it renders and does not call onChange if readOnly', () => {
  const handleChange = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <NumberInput id="myInput" readOnly={true} value="12" onChange={handleChange} />
    </>
  );

  expect(screen.getByLabelText('My label')).toBeInTheDocument();
  const input = screen.getByLabelText('My label') as HTMLInputElement;
  fireEvent.change(input, {target: {value: 'Cool'}});
  expect(handleChange).not.toHaveBeenCalledWith('Cool');

  expect(screen.queryByTestId('increment-number-input')).not.toBeInTheDocument();
  expect(screen.queryByTestId('decrement-number-input')).not.toBeInTheDocument();
});

test('it blurs the input on wheel to prevent accidental value change', () => {
  const handleChange = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <NumberInput id="myInput" value="12" onChange={handleChange} />
    </>
  );

  const input = screen.getByLabelText('My label') as HTMLInputElement;
  input.focus();
  expect(document.activeElement).toBe(input);

  fireEvent.wheel(input, {deltaY: 100});

  expect(handleChange).not.toHaveBeenCalled();
  expect(document.activeElement).not.toBe(input);
});

test('NumberInput supports forwardRef', () => {
  const ref = {current: null};

  render(<NumberInput value="12" onChange={jest.fn()} ref={ref} />);
  expect(ref.current).not.toBe(null);
});

test('NumberInput supports ...rest props', () => {
  render(<NumberInput value="12" onChange={jest.fn()} data-testid="my_value" />);
  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});

// jsdom does not implement the browser's number-input value sanitization, so `validity.badInput`
// is never set by fireEvent.change alone (real browsers set it to true and reset `.value` to ''
// when the typed text, e.g. "e" or "1e1000", can't be parsed as a number). It's stubbed here to
// exercise that behaviour.
const stubBadInput = (input: HTMLInputElement, badInput: boolean) => {
  Object.defineProperty(input, 'validity', {value: {badInput}, configurable: true});
};

// NumberInput is a controlled component: its `invalid` styling depends on the `value` prop
// actually being fed back after `onChange`, exactly like it is in the app. A static `value` prop
// can't exercise that, so this wrapper mirrors a real parent — including reacting to `value`
// being pushed from outside (e.g. a "discard changes" action), independently of typing.
const ControlledNumberInput: FC<{value: string; onChange: (value: string) => void}> = ({value, onChange}) => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = (newValue: string) => {
    onChange(newValue);
    setInternalValue(newValue);
  };

  return (
    <>
      <label htmlFor="myInput">My label</label>
      <NumberInput id="myInput" value={internalValue} onChange={handleChange} />
    </>
  );
};

test('it still calls onChange and shows invalid when the typed text is not a parseable number', () => {
  const handleChange = jest.fn();

  render(<ControlledNumberInput value="12" onChange={handleChange} />);

  const input = screen.getByLabelText('My label') as HTMLInputElement;
  stubBadInput(input, true);
  fireEvent.change(input, {target: {value: ''}});

  expect(handleChange).toHaveBeenCalledWith('');
  expect(input).toHaveAttribute('aria-invalid', 'true');
});

test('it clears the invalid state once a valid number is typed', () => {
  const handleChange = jest.fn();

  render(<ControlledNumberInput value="12" onChange={handleChange} />);

  const input = screen.getByLabelText('My label') as HTMLInputElement;
  stubBadInput(input, true);
  fireEvent.change(input, {target: {value: ''}});
  expect(input).toHaveAttribute('aria-invalid', 'true');

  stubBadInput(input, false);
  fireEvent.change(input, {target: {value: '42'}});

  expect(handleChange).toHaveBeenCalledWith('42');
  expect(input).toHaveAttribute('aria-invalid', 'false');
});

test('it clears a stale invalid state when the value is reset externally, without the user retyping', () => {
  const handleChange = jest.fn();

  const {rerender} = render(<ControlledNumberInput value="12" onChange={handleChange} />);

  const input = screen.getByLabelText('My label') as HTMLInputElement;
  stubBadInput(input, true);
  fireEvent.change(input, {target: {value: ''}});
  expect(input).toHaveAttribute('aria-invalid', 'true');

  rerender(<ControlledNumberInput value="55" onChange={handleChange} />);

  expect(input).toHaveAttribute('aria-invalid', 'false');
});

test('it mirrors the value into hidden-from-assistive-tech light-DOM text when highlightable', () => {
  render(<NumberInput value="42" onChange={jest.fn()} highlightable={true} />);

  const mirror = screen.getByText('42');
  expect(mirror.tagName).toBe('DIV');
  expect(mirror).toHaveAttribute('aria-hidden', 'true');
  expect(mirror).toHaveAttribute('inert');
});

test('it renders no value mirror by default', () => {
  render(<NumberInput value="42" onChange={jest.fn()} />);

  expect(screen.queryByText('42')).not.toBeInTheDocument();
});
