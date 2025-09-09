import React from 'react';
import {TextAreaInput} from './TextAreaInput';
import {fireEvent, render, screen} from '../../../storybook/test-util';
import {IconButton} from '../../IconButton/IconButton';
import {CopyIcon} from '../../../icons';

test('it renders and handle changes', () => {
  const handleChange = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <TextAreaInput id="myInput" value="Nice" onChange={handleChange} />
    </>
  );

  expect(screen.getByLabelText('My label')).toBeInTheDocument();
  const input = screen.getByLabelText('My label') as HTMLInputElement;
  fireEvent.change(input, {target: {value: 'Cool'}});
  expect(handleChange).toHaveBeenCalledWith('Cool');
});

test('it renders and does not call onChange if readOnly', () => {
  const handleChange = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <TextAreaInput id="myInput" readOnly={true} value="Nice" onChange={handleChange} />
    </>
  );

  expect(screen.getByLabelText('My label')).toBeInTheDocument();
  const input = screen.getByLabelText('My label') as HTMLInputElement;
  fireEvent.change(input, {target: {value: 'Cool'}});
  expect(handleChange).not.toHaveBeenCalledWith('Cool');
});

test('it renders and displays the character left label', () => {
  const handleChange = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <TextAreaInput
        id="myInput"
        characterLeftLabel="100 character remaining"
        readOnly={true}
        value="Nice"
        onChange={handleChange}
      />
    </>
  );

  expect(screen.getByText('100 character remaining')).toBeInTheDocument();
});

test('TextAreaInput supports forwardRef', () => {
  const ref = {current: null};

  render(<TextAreaInput value="nice" onChange={jest.fn()} ref={ref} />);
  expect(ref.current).not.toBe(null);
});

test('TextAreaInput supports ...rest props', () => {
  render(<TextAreaInput value="nice" onChange={jest.fn()} data-testid="my_value" />);
  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});

test('it does not display invalid children', () => {
  const handleChange = jest.fn();

  render(
    <TextAreaInput value="" onChange={handleChange}>
      <span>not valid child</span>
    </TextAreaInput>
  );

  expect(screen.queryByText(/not valid child/i)).not.toBeInTheDocument();
});

test('it shows children icons', () => {
  const handleChange = jest.fn();

  render(
    <TextAreaInput value="some" onChange={handleChange}>
      <IconButton icon={<CopyIcon />} title="Copy" />
    </TextAreaInput>
  );

  expect(screen.getByTitle(/Copy/i)).toBeInTheDocument();
});
