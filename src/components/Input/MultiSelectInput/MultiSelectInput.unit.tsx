import React from 'react';
import 'jest-styled-components';
import {MultiSelectInput} from './MultiSelectInput';
import {getColor} from '../../../theme/theme';
import {pimTheme} from '../../../themes';
import {render, screen, fireEvent} from '../../../storybook/test-util';
import userEvent from '@testing-library/user-event';

test('it renders its children properly', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={['en_US']}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.OptionGroup title="Europe">Europe</MultiSelectInput.OptionGroup>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
      <MultiSelectInput.Option value="es_ES">Spanish</MultiSelectInput.Option>
      <MultiSelectInput.OptionGroup title="America">America</MultiSelectInput.OptionGroup>
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.focus(input);

  expect(screen.queryByText('German')).toBeInTheDocument();

  expect(screen.getByTitle('Europe')).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('backdrop'));
  expect(screen.queryByText('German')).not.toBeInTheDocument();

  fireEvent.focus(screen.getByRole('textbox'));
  expect(screen.queryByText('German')).toBeInTheDocument();

  const germanOption = screen.getByText('German');
  expect(germanOption).toBeInTheDocument();
  fireEvent.click(germanOption);
  expect(onChange).toHaveBeenCalledWith(['en_US', 'de_DE']);
});

test('it handles search', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={['en_US']}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.OptionGroup title="Europe">Europe</MultiSelectInput.OptionGroup>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
      <MultiSelectInput.Option value="es_ES">Spanish</MultiSelectInput.Option>
      <MultiSelectInput.OptionGroup title="America">America</MultiSelectInput.OptionGroup>
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'French'}});

  const germanOption = screen.queryByText('German');
  expect(germanOption).not.toBeInTheDocument();
  const frenchOption = screen.getByText('French');
  expect(frenchOption).toBeInTheDocument();
  fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'});
  expect(onChange).toHaveBeenCalledWith(['en_US', 'fr_FR']);

  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'Spani'}});

  const spainOption = screen.getByText('Spanish');
  expect(spainOption).toBeInTheDocument();
  fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'});
  expect(onChange).toHaveBeenCalledWith(['en_US', 'es_ES']);
  expect(onChange).toHaveBeenCalledTimes(2);
});

test('it handles external search', () => {
  const onChange = jest.fn();
  const onNextPage = jest.fn();
  const onSearchChange = jest.fn();

  const observe = jest.fn();
  const unobserve = jest.fn();
  window.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
  })) as unknown as jest.Mock<IntersectionObserver>;

  render(
    <MultiSelectInput
      openLabel="Open"
      value={[]}
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
      onNextPage={onNextPage}
      onSearchChange={onSearchChange}
      optionsFilteredExternally={true}
      removeLabel="Remove"
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
      <MultiSelectInput.Option value="es_ES">Spanish</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'Fr'}});

  const germanOption = screen.queryByText('German');
  expect(germanOption).toBeInTheDocument();
  const usOption = screen.queryByText('English');
  expect(usOption).toBeInTheDocument();
  const spanishOption = screen.queryByText('Spanish');
  expect(spanishOption).toBeInTheDocument();
  const frenchOption = screen.getByText('French');
  expect(frenchOption).toBeInTheDocument();
});

test('it hides already selected options from the dropdown when options are filtered externally', () => {
  render(
    <MultiSelectInput
      openLabel="Open"
      value={['en_US']}
      onChange={jest.fn()}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
      onNextPage={jest.fn()}
      onSearchChange={jest.fn()}
      optionsFilteredExternally={true}
      removeLabel="Remove"
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  fireEvent.focus(screen.getByRole('textbox'));

  const displayedOptions = Array.from(document.querySelectorAll('[data-active]')).map(option => option.textContent);
  expect(displayedOptions).toEqual(['French', 'German']);
});

test('it observes the new last option when a new page of options is loaded', () => {
  const onNextPage = jest.fn();
  const observe = jest.fn();
  const unobserve = jest.fn();
  window.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
  })) as unknown as jest.Mock<IntersectionObserver>;

  const renderOptions = (count: number) =>
    Array.from({length: count}, (_, index) => (
      <MultiSelectInput.Option key={`option_${index}`} value={`option_${index}`}>
        {`Option ${index}`}
      </MultiSelectInput.Option>
    ));

  const props = {
    value: [],
    onChange: jest.fn(),
    placeholder: 'Placeholder',
    removeLabel: 'Remove',
    openLabel: 'Open',
    emptyResultLabel: 'Empty result',
    onNextPage,
  };

  const {rerender} = render(<MultiSelectInput {...props}>{renderOptions(2)}</MultiSelectInput>);

  fireEvent.focus(screen.getByRole('textbox'));

  expect(observe).toHaveBeenCalledTimes(1);
  expect(observe.mock.calls[0][0]).toHaveTextContent('Option 1');

  rerender(<MultiSelectInput {...props}>{renderOptions(4)}</MultiSelectInput>);

  expect(observe.mock.calls[observe.mock.calls.length - 1][0]).toHaveTextContent('Option 3');
});

test('it handles empty cases', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
      <MultiSelectInput.Option value="es_ES">Spanish</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'France 3'}});

  const germanOption = screen.queryByText('German');
  expect(germanOption).not.toBeInTheDocument();
  const frenchOption = screen.queryByText('French');
  expect(frenchOption).not.toBeInTheDocument();
  expect(screen.getByText('Empty result')).toBeInTheDocument();

  fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'});
  expect(onChange).not.toHaveBeenCalled();
});

test('it handles codes that do not have a label', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={['fr_FR', 'unknown']}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const codeWithOption = screen.queryByText('French');
  expect(codeWithOption).toBeInTheDocument();

  const codeWithoutOption = screen.queryByText('unknown');
  expect(codeWithoutOption).toBeInTheDocument();
});

test('it handles removing a Chip', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={['en_US', 'fr_FR']}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
      <MultiSelectInput.Option value="es_ES">Spanish</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const clearButton = screen.getAllByTitle('Remove')[0];
  fireEvent.click(clearButton);

  expect(onChange).toHaveBeenCalledWith(['fr_FR']);
});

test('it handles keyboard events', () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();
  render(
    <MultiSelectInput
      value={['en_US']}
      onChange={onChange}
      onSubmit={onSubmit}
      placeholder="Placeholder"
      removeLabel="Remove"
      emptyResultLabel="Empty result"
      openLabel="open"
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
      <MultiSelectInput.Option value="es_ES">Spanish</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const removeButton = screen.getByTitle('Remove');
  userEvent.type(removeButton, '{enter}');

  expect(onChange).toHaveBeenCalledWith([]);

  const openButton = screen.getByTitle('open');
  userEvent.type(openButton, '{enter}');

  const germanOption = screen.queryByText('German');
  expect(germanOption).toBeInTheDocument();

  const input = screen.getByDisplayValue('');
  userEvent.type(input, '{enter}{enter}');
  expect(onSubmit).toHaveBeenCalled();
});

test('it closes the overlay when hitting Escape', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={['en_US']}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
      <MultiSelectInput.Option value="es_ES">Spanish</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.keyDown(input, {key: 'Escape', code: 'Escape'});

  const germanOption = screen.queryByText('German');
  expect(germanOption).not.toBeInTheDocument();
});

test('it can remove a chip using Backspace', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={['en_US', 'fr_FR']}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
      <MultiSelectInput.Option value="es_ES">Spanish</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  userEvent.type(input, '{backspace}{backspace}');

  expect(onChange).toBeCalledWith(['en_US']);
});

test('it does not remove the chip when the search value is not empty', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={['en_US', 'fr_FR']}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
      <MultiSelectInput.Option value="es_ES">Spanish</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  userEvent.type(input, 'something{backspace}{backspace}');

  expect(screen.getByDisplayValue('somethi')).toBeInTheDocument();
  expect(onChange).not.toHaveBeenCalled();
});

test('MultiSelectInput supports ...rest props', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      data-testid="my_value"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
      onChange={onChange}
    />
  );
  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});

test('MultiSelectInput supports locked values prop', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={['fr_FR', 'en_US']}
      data-testid="my_value"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
      onChange={onChange}
      lockedValues={['fr_FR']}
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="es_ES">Spanish</MultiSelectInput.Option>
    </MultiSelectInput>
  );
  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});

test('MultiSelectInput does not support duplicated options', () => {
  const mockConsole = jest.spyOn(console, 'error').mockImplementation();
  expect(() => {
    const onChange = jest.fn();
    render(
      <MultiSelectInput
        value={['en_US']}
        onChange={onChange}
        removeLabel="Remove"
        openLabel="Open"
        emptyResultLabel="Empty result"
      >
        <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
        <MultiSelectInput.Option value="en_US">French</MultiSelectInput.Option>
      </MultiSelectInput>
    );
  }).toThrowError('Duplicate option value en_US');
  mockConsole.mockRestore();
});

test('It throws when passing non string children', () => {
  const mockConsole = jest.spyOn(console, 'error').mockImplementation();
  expect(() => {
    const onChange = jest.fn();
    render(
      <MultiSelectInput
        value={['en_US']}
        onChange={onChange}
        removeLabel="Remove"
        openLabel="Open"
        emptyResultLabel="Empty result"
      >
        <MultiSelectInput.Option value="en_US">
          {/* @ts-expect-error only accepts string */}
          <span />
        </MultiSelectInput.Option>
      </MultiSelectInput>
    );
  }).toThrowError('Multi select only accepts string as Option');
  mockConsole.mockRestore();
});

test('it supports the copy paste of multiple tags', () => {
  const handleChange = jest.fn();

  render(
    <MultiSelectInput
      value={[]}
      onChange={handleChange}
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="gucci">Gucci</MultiSelectInput.Option>
      <MultiSelectInput.Option value="samsung">Samsung</MultiSelectInput.Option>
      <MultiSelectInput.Option value="apple">Apple</MultiSelectInput.Option>
      <MultiSelectInput.Option value="asus">Asus</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  fireEvent.paste(screen.getByRole('textbox'), {clipboardData: {getData: () => 'gucci,apple\r\nasus'}});

  expect(handleChange).toBeCalledWith(['gucci', 'apple', 'asus']);
});

const renderExternallyFilteredMultiSelectInput = (handleChange: jest.Mock, handleSearchChange: jest.Mock) =>
  render(
    <MultiSelectInput
      value={[]}
      onChange={handleChange}
      onSearchChange={handleSearchChange}
      onNextPage={jest.fn()}
      optionsFilteredExternally={true}
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="gucci">Gucci</MultiSelectInput.Option>
      <MultiSelectInput.Option value="samsung">Samsung</MultiSelectInput.Option>
    </MultiSelectInput>
  );

test('it accepts a pasted list of codes that are not among the currently loaded options when options are filtered externally', () => {
  const handleChange = jest.fn();
  const handleSearchChange = jest.fn();
  renderExternallyFilteredMultiSelectInput(handleChange, handleSearchChange);

  fireEvent.paste(screen.getByRole('textbox'), {clipboardData: {getData: () => 'not-loaded-1,not-loaded-2'}});

  expect(handleChange).toBeCalledWith(['not-loaded-1', 'not-loaded-2']);
  expect(handleSearchChange).toBeCalledWith('');
});

test('it trims the codes of a pasted list', () => {
  const handleChange = jest.fn();
  const handleSearchChange = jest.fn();
  renderExternallyFilteredMultiSelectInput(handleChange, handleSearchChange);

  fireEvent.paste(screen.getByRole('textbox'), {
    clipboardData: {getData: () => 'not-loaded-1, not-loaded-2 ; not-loaded-3'},
  });

  expect(handleChange).toBeCalledWith(['not-loaded-1', 'not-loaded-2', 'not-loaded-3']);
  expect(handleSearchChange).toBeCalledWith('');
});

test('it splits a pasted list on line feeds', () => {
  const handleChange = jest.fn();
  const handleSearchChange = jest.fn();
  renderExternallyFilteredMultiSelectInput(handleChange, handleSearchChange);

  fireEvent.paste(screen.getByRole('textbox'), {clipboardData: {getData: () => 'not-loaded-1\nnot-loaded-2'}});

  expect(handleChange).toBeCalledWith(['not-loaded-1', 'not-loaded-2']);
  expect(handleSearchChange).toBeCalledWith('');
});

test('it splits a pasted list on tabulations', () => {
  const handleChange = jest.fn();
  const handleSearchChange = jest.fn();
  renderExternallyFilteredMultiSelectInput(handleChange, handleSearchChange);

  fireEvent.paste(screen.getByRole('textbox'), {clipboardData: {getData: () => 'not-loaded-1\tnot-loaded-2'}});

  expect(handleChange).toBeCalledWith(['not-loaded-1', 'not-loaded-2']);
  expect(handleSearchChange).toBeCalledWith('');
});

test('it splits a pasted list on carriage returns', () => {
  const handleChange = jest.fn();
  const handleSearchChange = jest.fn();
  renderExternallyFilteredMultiSelectInput(handleChange, handleSearchChange);

  fireEvent.paste(screen.getByRole('textbox'), {clipboardData: {getData: () => 'not-loaded-1\rnot-loaded-2'}});

  expect(handleChange).toBeCalledWith(['not-loaded-1', 'not-loaded-2']);
  expect(handleSearchChange).toBeCalledWith('');
});

test('it does not treat a space as a chip separator', () => {
  const handleChange = jest.fn();
  const handleSearchChange = jest.fn();
  renderExternallyFilteredMultiSelectInput(handleChange, handleSearchChange);

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'Blue Steel'}});

  expect(handleChange).not.toBeCalled();
  expect(handleSearchChange).toBeCalledWith('Blue Steel');
  expect(screen.getByDisplayValue('Blue Steel')).toBeInTheDocument();
});

test('it hands a single pasted term that is not among the currently loaded options to the search', () => {
  const handleChange = jest.fn();
  const handleSearchChange = jest.fn();
  renderExternallyFilteredMultiSelectInput(handleChange, handleSearchChange);

  fireEvent.paste(screen.getByRole('textbox'), {clipboardData: {getData: () => 'Blue Steel'}});

  expect(handleChange).not.toBeCalledWith(['Blue Steel']);
  expect(handleSearchChange).toBeCalledWith('Blue Steel');
  expect(screen.getByDisplayValue('Blue Steel')).toBeInTheDocument();
});

test('it keeps a typed label that contains a separator when options are filtered externally', () => {
  const handleChange = jest.fn();
  const handleSearchChange = jest.fn();
  renderExternallyFilteredMultiSelectInput(handleChange, handleSearchChange);

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'Cleaning;'}});
  fireEvent.change(input, {target: {value: 'Cleaning; maintenance'}});

  expect(handleChange).not.toBeCalledWith(['Cleaning', 'maintenance']);
  expect(handleSearchChange).toBeCalledWith('Cleaning; maintenance');
  expect(screen.getByDisplayValue('Cleaning; maintenance')).toBeInTheDocument();
});

test('it still selects typed terms that match loaded options when options are filtered externally', () => {
  const handleChange = jest.fn();
  const handleSearchChange = jest.fn();
  renderExternallyFilteredMultiSelectInput(handleChange, handleSearchChange);

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'gucci,samsung'}});

  expect(handleChange).toBeCalledWith(['gucci', 'samsung']);
  expect(handleSearchChange).toBeCalledWith('');
});

test('it hands a single typed term followed by a separator to the search when options are filtered externally', () => {
  const handleChange = jest.fn();
  const handleSearchChange = jest.fn();
  renderExternallyFilteredMultiSelectInput(handleChange, handleSearchChange);

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'Blue,'}});

  expect(handleChange).not.toBeCalledWith(['Blue']);
  expect(handleSearchChange).toBeCalledWith('Blue,');
  expect(screen.getByDisplayValue('Blue,')).toBeInTheDocument();
});

test('it does not select an option while the user is typing its exact value', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'en_US'}});

  expect(onChange).not.toHaveBeenCalled();
  expect(screen.getByDisplayValue('en_US')).toBeInTheDocument();
});

test('it selects matching option values when the text contains a separator', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'en_US,fr_FR'}});

  expect(onChange).toHaveBeenCalledWith(['en_US', 'fr_FR']);
});

test('it selects a matching option value when the user types a trailing separator', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'en_US,'}});

  expect(onChange).toHaveBeenCalledWith(['en_US']);
});

test('it keeps the separator the user typed when no option matches', () => {
  const onChange = jest.fn();
  const onSearchChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      onSearchChange={onSearchChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="cleaning_maintenance">Cleaning, maintenance</MultiSelectInput.Option>
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'Cleaning,'}});

  expect(onSearchChange).toHaveBeenCalledWith('Cleaning,');
  expect(screen.getByDisplayValue('Cleaning,')).toBeInTheDocument();
});

test('it keeps the whole text when a label containing a separator is pasted', () => {
  const onChange = jest.fn();
  const onSearchChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      onSearchChange={onSearchChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="cleaning_maintenance">Cleaning; maintenance</MultiSelectInput.Option>
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.paste(input, {clipboardData: {getData: () => 'Cleaning; maintenance'}});

  expect(onSearchChange).toHaveBeenCalledWith('Cleaning; maintenance');
  expect(screen.getByDisplayValue('Cleaning; maintenance')).toBeInTheDocument();
});

test('it selects a matching option value on paste even without separator', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.paste(input, {clipboardData: {getData: () => 'en_US'}});

  expect(onChange).toHaveBeenCalledWith(['en_US']);
});

test('it does not auto-select when disableAutoSelect is true', () => {
  const onChange = jest.fn();
  const onSearchChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      onSearchChange={onSearchChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
      disableAutoSelect={true}
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'en_US'}});

  expect(onChange).not.toHaveBeenCalled();
  expect(onSearchChange).toHaveBeenCalledWith('en_US');
  expect(screen.getByDisplayValue('en_US')).toBeInTheDocument();
});

test('it does not select options on paste when disableAutoSelect is true', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
      disableAutoSelect={true}
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.paste(input, {clipboardData: {getData: () => 'en_US'}});

  expect(onChange).not.toHaveBeenCalled();
});

test('it treats separators as regular text when disableAutoSelect is true', () => {
  const onChange = jest.fn();
  const onSearchChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      onSearchChange={onSearchChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
      disableAutoSelect={true}
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'en_US,fr_FR'}});

  expect(onChange).not.toHaveBeenCalled();
  expect(onSearchChange).toHaveBeenCalledWith('en_US,fr_FR');
  expect(screen.getByDisplayValue('en_US,fr_FR')).toBeInTheDocument();
});

test('it allows manual selection from dropdown when disableAutoSelect is true', () => {
  const onChange = jest.fn();
  const onSearchChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      onSearchChange={onSearchChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
      disableAutoSelect={true}
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'en_US'}});

  const englishOption = screen.getByText('English');
  fireEvent.click(englishOption);

  expect(onChange).toHaveBeenCalledWith(['en_US']);
  expect(onSearchChange).toHaveBeenCalledWith('');
});

test('it calls onOpenChange callback when dropdown state changes', () => {
  const onChange = jest.fn();
  const onOpenChange = jest.fn();

  render(
    <MultiSelectInput
      value={['en_US']}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
      onOpenChange={onOpenChange}
    >
      <MultiSelectInput.Option value="en_US">English</MultiSelectInput.Option>
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  expect(onOpenChange).not.toHaveBeenCalled();

  const input = screen.getByRole('textbox');

  fireEvent.focus(input);
  expect(onOpenChange).toHaveBeenCalledTimes(1);
  expect(onOpenChange).toHaveBeenLastCalledWith(true);

  fireEvent.click(screen.getByTestId('backdrop'));
  expect(onOpenChange).toHaveBeenCalledTimes(2);
  expect(onOpenChange).toHaveBeenLastCalledWith(false);

  fireEvent.focus(input);
  expect(onOpenChange).toHaveBeenCalledTimes(3);
  expect(onOpenChange).toHaveBeenLastCalledWith(true);

  fireEvent.click(screen.getByText('French'));
  expect(onOpenChange).toHaveBeenCalledTimes(4);
  expect(onOpenChange).toHaveBeenLastCalledWith(false);
});

test('it highlights the first filtered option while typing', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.focus(input);
  fireEvent.change(input, {target: {value: 'German'}});

  expect(screen.queryByText('French')).not.toBeInTheDocument();
  const highlightBackground = getColor('grey', 20)({theme: pimTheme});
  expect(screen.getByText('German').parentElement).toHaveStyleRule('background', highlightBackground);
});

test('it highlights the first option when opened', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  fireEvent.focus(screen.getByRole('textbox'));

  const highlightBackground = getColor('grey', 20)({theme: pimTheme});
  expect(screen.getByText('French').parentElement).toHaveStyleRule('background', highlightBackground);
  expect(screen.getByText('German').parentElement).not.toHaveStyleRule('background', highlightBackground);
});

test('it moves the highlight with the down arrow and selects it with Enter', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
      <MultiSelectInput.Option value="es_ES">Spanish</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.focus(input);
  fireEvent.keyDown(input, {key: 'ArrowDown', code: 'ArrowDown'});

  const highlightBackground = getColor('grey', 20)({theme: pimTheme});
  expect(screen.getByText('German').parentElement).toHaveStyleRule('background', highlightBackground);

  fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'});
  expect(onChange).toHaveBeenCalledWith(['de_DE']);
});

test('it moves the highlight back up with the up arrow and clamps at the first option', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.focus(input);
  fireEvent.keyDown(input, {key: 'ArrowDown', code: 'ArrowDown'});
  fireEvent.keyDown(input, {key: 'ArrowUp', code: 'ArrowUp'});
  fireEvent.keyDown(input, {key: 'ArrowUp', code: 'ArrowUp'});

  fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'});
  expect(onChange).toHaveBeenCalledWith(['fr_FR']);
});

test('it opens the dropdown when an arrow key is pressed while closed', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  expect(screen.queryByText('German')).not.toBeInTheDocument();

  fireEvent.keyDown(input, {key: 'ArrowDown', code: 'ArrowDown'});
  expect(screen.getByText('German')).toBeInTheDocument();

  fireEvent.keyDown(input, {key: 'Escape', code: 'Escape'});
  expect(screen.queryByText('German')).not.toBeInTheDocument();

  fireEvent.keyDown(input, {key: 'ArrowUp', code: 'ArrowUp'});
  expect(screen.getByText('German')).toBeInTheDocument();
});

test('it does not select anything when navigating with no matching option', () => {
  const onChange = jest.fn();
  render(
    <MultiSelectInput
      value={[]}
      onChange={onChange}
      placeholder="Placeholder"
      removeLabel="Remove"
      openLabel="Open"
      emptyResultLabel="Empty result"
    >
      <MultiSelectInput.Option value="fr_FR">French</MultiSelectInput.Option>
      <MultiSelectInput.Option value="de_DE">German</MultiSelectInput.Option>
    </MultiSelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.focus(input);
  fireEvent.change(input, {target: {value: 'zzz'}});
  expect(screen.getByText('Empty result')).toBeInTheDocument();

  fireEvent.keyDown(input, {key: 'ArrowDown', code: 'ArrowDown'});
  expect(screen.getByText('Empty result')).toBeInTheDocument();
});
