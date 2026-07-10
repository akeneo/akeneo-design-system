import React, {RefObject} from 'react';
import {DateInput} from './DateInput';
import {fireEvent, render, screen} from '../../../storybook/test-util';
import userEvent from '@testing-library/user-event';
import {IconButton} from '../../IconButton/IconButton';
import {CopyIcon} from '../../../icons';

test('it renders and handle changes', () => {
  const handleChange = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <DateInput id="myInput" value="2023-03-01" onChange={handleChange} />
    </>
  );

  fireEvent.change(screen.getByLabelText('My label'), {target: {value: '2023-03-02'}});

  expect(handleChange).toHaveBeenCalledWith('2023-03-02');
});

test('it does not force-open the picker on click so the field stays typeable', () => {
  const showPicker = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <DateInput id="myInput" value="2023-03-01" onChange={jest.fn()} />
    </>
  );

  const input = screen.getByLabelText('My label') as HTMLInputElement & {showPicker: () => void};
  input.showPicker = showPicker;
  fireEvent.click(input);

  expect(showPicker).not.toHaveBeenCalled();
});

test('it renders action buttons passed as children', () => {
  render(
    <DateInput value="2023-03-01" onChange={jest.fn()}>
      <IconButton icon={<CopyIcon />} title="Copy" />
    </DateInput>
  );

  expect(screen.getByTitle(/Copy/i)).toBeInTheDocument();
});

test('it ignores children that are not icon buttons', () => {
  render(
    <DateInput value="2023-03-01" onChange={jest.fn()}>
      <span>Not a button</span>
    </DateInput>
  );

  expect(screen.queryByText('Not a button')).not.toBeInTheDocument();
});

test('it copies the ISO value to the clipboard', () => {
  render(
    <>
      <label htmlFor="myInput">My label</label>
      <DateInput id="myInput" value="2023-03-01" onChange={jest.fn()} />
    </>
  );

  const setData = jest.fn();
  fireEvent.copy(screen.getByLabelText('My label'), {clipboardData: {setData}});

  expect(setData).toHaveBeenCalledWith('text/plain', '2023-03-01');
});

test('it parses a pasted date and emits the ISO value', () => {
  const handleChange = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <DateInput id="myInput" value="" onChange={handleChange} />
    </>
  );

  fireEvent.paste(screen.getByLabelText('My label'), {clipboardData: {getData: () => '2050-01-01'}});

  expect(handleChange).toHaveBeenCalledWith('2050-01-01');
});

test('it does not emit a change when the pasted value is not a date', () => {
  const handleChange = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <DateInput id="myInput" value="" onChange={handleChange} />
    </>
  );

  fireEvent.paste(screen.getByLabelText('My label'), {clipboardData: {getData: () => 'not a date'}});

  expect(handleChange).not.toHaveBeenCalled();
});

test('it does not paste when readOnly', () => {
  const handleChange = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <DateInput id="myInput" readOnly={true} value="" onChange={handleChange} />
    </>
  );

  fireEvent.paste(screen.getByLabelText('My label'), {clipboardData: {getData: () => '2050-01-01'}});

  expect(handleChange).not.toHaveBeenCalled();
});

test('it handles on submit callback', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <DateInput id="myInput" value="2023-03-01" onChange={handleChange} onSubmit={handleSubmit} />
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
      <DateInput id="myInput" readOnly={true} value="2023-01-01" onChange={handleChange} />
    </>
  );

  expect(screen.getByLabelText('My label')).toBeInTheDocument();
  const input = screen.getByLabelText('My label') as HTMLInputElement;
  fireEvent.change(input, {target: {value: '2023-01-02'}});
  expect(handleChange).not.toHaveBeenCalledWith('2023-01-02');
});

test('it supports forwardRef', () => {
  const ref = {current: null};

  render(<DateInput value={'2023-03-01'} onChange={jest.fn()} ref={ref} />);
  expect(ref.current).not.toBe(null);
});

test('it supports ...rest props', () => {
  render(<DateInput value={'nice'} onChange={jest.fn()} data-testid="my_value" />);
  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});

test('it supports formatted value yyyy-mm-dd', () => {
  const ref = {current: null} as RefObject<HTMLInputElement>;

  render(<DateInput value={'not a date'} onChange={jest.fn()} ref={ref} />);
  expect(ref.current?.value).toBe('');

  render(<DateInput value={'2023-03-01'} onChange={jest.fn()} ref={ref} />);
  expect(ref.current?.value).toBe('2023-03-01');
});

test('it updates the onChange handler on rerender', () => {
  const handleChange = jest.fn();
  const refreshedHandleChange = jest.fn();
  const props = {id: 'myInput', value: '2023-03-01', 'data-testid': 'myInput'};

  const {rerender} = render(<DateInput {...props} onChange={handleChange} />);
  rerender(<DateInput {...props} onChange={refreshedHandleChange} />);

  fireEvent.change(screen.getByTestId('myInput'), {target: {value: '2023-03-02'}});

  expect(handleChange).not.toHaveBeenCalled();
  expect(refreshedHandleChange).toHaveBeenCalledWith('2023-03-02');
});
