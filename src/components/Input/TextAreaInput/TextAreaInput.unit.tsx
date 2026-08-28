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

test('TextAreaInput supports callback forwardRef', () => {
  const ref = jest.fn();

  render(<TextAreaInput value="nice" onChange={jest.fn()} ref={ref} />);
  expect(ref).toHaveBeenCalledWith(expect.any(HTMLTextAreaElement));
});

test('it is not resizable by default', () => {
  render(<TextAreaInput value="nice" onChange={jest.fn()} data-testid="my_value" />);
  expect(screen.getByTestId('my_value')).toHaveStyle('resize: none');
});

test('it is resizable when the resizable prop is set', () => {
  render(<TextAreaInput value="nice" onChange={jest.fn()} resizable={true} data-testid="my_value" />);
  expect(screen.getByTestId('my_value')).toHaveStyle('resize: both');
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

const findValueMirror = (value: string) => screen.queryAllByText(value).find(element => element.tagName === 'DIV');

test('it mirrors the value into hidden-from-assistive-tech light-DOM text when highlightable', () => {
  render(<TextAreaInput value="Nice" onChange={jest.fn()} highlightable={true} />);

  const mirror = findValueMirror('Nice');
  expect(mirror).toBeInTheDocument();
  expect(mirror).toHaveAttribute('aria-hidden', 'true');
  expect(mirror).toHaveAttribute('inert');
});

test('it renders no value mirror by default', () => {
  render(<TextAreaInput value="Nice" onChange={jest.fn()} />);

  expect(findValueMirror('Nice')).toBeUndefined();
});

test('it renders no value mirror when the value is hidden', () => {
  render(<TextAreaInput value="Nice" onChange={jest.fn()} highlightable={true} isValueHidden={true} />);

  expect(findValueMirror('Nice')).toBeUndefined();
});

test('it keeps the value mirror scrolled like the textarea', () => {
  render(
    <>
      <label htmlFor="myInput">My label</label>
      <TextAreaInput id="myInput" value="Nice" onChange={jest.fn()} highlightable={true} />
    </>
  );

  const textarea = screen.getByLabelText('My label');
  textarea.scrollTop = 42;
  fireEvent.scroll(textarea);

  expect(findValueMirror('Nice')?.scrollTop).toBe(42);
});

test('it syncs a value mirror revealed after starting hidden', () => {
  const {rerender} = render(
    <>
      <label htmlFor="myInput">My label</label>
      <TextAreaInput id="myInput" value="Nice" onChange={jest.fn()} highlightable={true} isValueHidden={true} />
    </>
  );

  rerender(
    <>
      <label htmlFor="myInput">My label</label>
      <TextAreaInput id="myInput" value="Nice" onChange={jest.fn()} highlightable={true} isValueHidden={false} />
    </>
  );

  const textarea = screen.getByLabelText('My label');
  textarea.scrollTop = 42;
  fireEvent.scroll(textarea);

  expect(findValueMirror('Nice')?.scrollTop).toBe(42);
});

test('it re-attaches the sync to the new value mirror after a hide/reveal cycle', () => {
  const observe = jest.fn();
  const disconnect = jest.fn();
  window.ResizeObserver = jest.fn().mockImplementation(() => ({observe, disconnect}));

  try {
    const renderInput = (isValueHidden: boolean) => (
      <>
        <label htmlFor="myInput">My label</label>
        <TextAreaInput
          id="myInput"
          value="Nice"
          onChange={jest.fn()}
          highlightable={true}
          isValueHidden={isValueHidden}
        />
      </>
    );
    const {rerender} = render(renderInput(false));

    rerender(renderInput(true));
    expect(disconnect).toHaveBeenCalled();

    rerender(renderInput(false));
    const textarea = screen.getByLabelText('My label');
    textarea.scrollTop = 42;
    fireEvent.scroll(textarea);

    expect(findValueMirror('Nice')?.scrollTop).toBe(42);
  } finally {
    delete (window as {ResizeObserver?: unknown}).ResizeObserver;
  }
});

test('it resizes the value mirror with the textarea', () => {
  const observe = jest.fn();
  const disconnect = jest.fn();
  let observedResizeCallback = () => {};
  window.ResizeObserver = jest.fn().mockImplementation((callback: () => void) => {
    observedResizeCallback = callback;

    return {observe, disconnect};
  });

  try {
    const {unmount} = render(
      <>
        <label htmlFor="myInput">My label</label>
        <TextAreaInput id="myInput" value="Nice" onChange={jest.fn()} highlightable={true} />
      </>
    );

    expect(observe).toHaveBeenCalledWith(screen.getByLabelText('My label'));
    observedResizeCallback();
    expect(findValueMirror('Nice')).toHaveStyle({width: '0px', height: '0px'});

    unmount();
    expect(disconnect).toHaveBeenCalled();
  } finally {
    delete (window as {ResizeObserver?: unknown}).ResizeObserver;
  }
});
