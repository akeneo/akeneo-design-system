import React from 'react';
import {TextInput} from './TextInput';
import {fireEvent, render, screen} from '../../../storybook/test-util';
import userEvent from '@testing-library/user-event';
import {IconButton} from '../../IconButton/IconButton';
import {CopyIcon} from '../../../icons';

test('it renders and handle changes', () => {
  const handleChange = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <TextInput id="myInput" value="Nice" onChange={handleChange} />
    </>
  );

  expect(screen.getByLabelText('My label')).toBeInTheDocument();
  const input = screen.getByLabelText('My label') as HTMLInputElement;
  fireEvent.change(input, {target: {value: 'Cool'}});
  expect(handleChange).toHaveBeenCalledWith('Cool');
});

test('it handles on submit callback', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  render(
    <>
      <label htmlFor="myInput">My label</label>
      <TextInput id="myInput" value="My value" onChange={handleChange} onSubmit={handleSubmit} />
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
      <TextInput id="myInput" readOnly={true} value="Nice" onChange={handleChange} />
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
      <TextInput
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

test('TextInput supports forwardRef', () => {
  const ref = {current: null};

  render(<TextInput value={'nice'} onChange={jest.fn()} ref={ref} />);
  expect(ref.current).not.toBe(null);
});

test('TextInput supports ...rest props', () => {
  render(<TextInput value={'nice'} onChange={jest.fn()} data-testid="my_value" />);
  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});

test('it does not display invalid children', () => {
  const handleChange = jest.fn();

  render(
    <TextInput value="" onChange={handleChange}>
      <span>not valid child</span>
    </TextInput>
  );

  expect(screen.queryByText(/not valid child/i)).not.toBeInTheDocument();
});

test('it shows children icons', () => {
  const handleChange = jest.fn();

  render(
    <TextInput value="some" onChange={handleChange}>
      <IconButton icon={<CopyIcon />} title="Copy" />
    </TextInput>
  );

  expect(screen.getByTitle(/Copy/i)).toBeInTheDocument();
});
