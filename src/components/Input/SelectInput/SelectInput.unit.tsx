import React from 'react';
import 'jest-styled-components';
import {SelectInput} from './SelectInput';
import {Locale} from '../../../components';
import {getColor} from '../../../theme/theme';
import {pimTheme} from '../../../themes';
import {render, screen, fireEvent} from '../../../storybook/test-util';
import userEvent from '@testing-library/user-event';

test('it renders its children properly', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      openLabel="Open"
      value="en_US"
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
    >
      <SelectInput.OptionGroup title="Europe">Europe</SelectInput.OptionGroup>
      <SelectInput.Option value="fr_FR" title="French (France)">
        <Locale code="fr_FR" languageLabel="French" />
      </SelectInput.Option>
      <SelectInput.Option value="de_DE" title="German (Germany)">
        <Locale code="de_DE" languageLabel="German" />
      </SelectInput.Option>
      <SelectInput.Option value="es_ES" title="Spanish (Spain)">
        <Locale code="es_ES" languageLabel="Spanish" />
      </SelectInput.Option>
      <SelectInput.OptionGroup title="America">America</SelectInput.OptionGroup>
      <SelectInput.Option value="en_US" title="English (United States)">
        <Locale code="en_US" languageLabel="English" />
      </SelectInput.Option>
    </SelectInput>
  );

  const input = screen.getByRole('textbox');

  expect(input).toHaveAttribute('title', 'English (United States)');

  fireEvent.click(input);

  expect(screen.queryByText('German')).toBeInTheDocument();

  expect(screen.getByTitle('Europe')).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('backdrop'));
  expect(screen.queryByText('German')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('textbox'));
  expect(screen.queryByText('German')).toBeInTheDocument();

  const germanOption = screen.getByText('German');
  expect(germanOption).toBeInTheDocument();
  fireEvent.click(germanOption);
  expect(onChange).toHaveBeenCalledWith('de_DE');
});

test('it handles search', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      openLabel="Open"
      value="en_US"
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
    >
      <SelectInput.OptionGroup title="Europe">Europe</SelectInput.OptionGroup>
      <SelectInput.Option value="fr_FR" title="French (France)">
        <Locale code="fr_FR" languageLabel="French" />
      </SelectInput.Option>
      <SelectInput.Option value="de_DE" title="German (Germany)">
        <Locale code="de_DE" languageLabel="German" />
      </SelectInput.Option>
      <SelectInput.Option value="es_ES" title="Spanish (Spain)">
        <Locale code="es_ES" languageLabel="Spanish" />
      </SelectInput.Option>
      <SelectInput.OptionGroup title="America">America</SelectInput.OptionGroup>
      <SelectInput.Option value="en_US" title="English (United States)">
        <Locale code="en_US" languageLabel="English" />
      </SelectInput.Option>
    </SelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'French'}});

  const germanOption = screen.queryByText('German');
  expect(germanOption).not.toBeInTheDocument();
  const frenchOption = screen.getByText('French');
  expect(frenchOption).toBeInTheDocument();
  fireEvent.keyDown(input, {key: 'ArrowDown', code: 'ArrowDown'});
  expect(screen.getByTestId('fr_FR')).toHaveFocus();
  fireEvent.keyDown(screen.getByTestId('fr_FR'), {key: 'Enter', code: 'Enter'});
  expect(onChange).toHaveBeenCalledWith('fr_FR');

  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'Spain'}});

  const spainOption = screen.getByText('Spanish');
  expect(spainOption).toBeInTheDocument();
  fireEvent.keyDown(input, {key: 'ArrowDown', code: 'ArrowDown'});
  expect(screen.getByTestId('es_ES')).toHaveFocus();
  fireEvent.keyDown(screen.getByTestId('es_ES'), {key: 'Enter', code: 'Enter'});
  expect(onChange).toHaveBeenCalledWith('es_ES');
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
    <SelectInput
      openLabel="Open"
      value="en_US"
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
      onNextPage={onNextPage}
      onSearchChange={onSearchChange}
      optionsFilteredExternally={true}
    >
      <SelectInput.Option value="en_US" title="English (United States)">
        <Locale code="en_US" languageLabel="English" />
      </SelectInput.Option>
      <SelectInput.Option value="fr_FR" title="French (France)">
        Français
      </SelectInput.Option>
      <SelectInput.Option value="de_DE">
        <Locale code="de_DE" languageLabel="German" />
      </SelectInput.Option>
      <SelectInput.Option value="es_ES" title="Spanish (Spain)">
        <Locale code="es_ES" languageLabel="Spanish" />
      </SelectInput.Option>
    </SelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  fireEvent.change(input, {target: {value: 'Français'}});

  const germanOption = screen.queryByText('German');
  expect(germanOption).toBeInTheDocument();
  const usOption = screen.queryByText('English');
  expect(usOption).toBeInTheDocument();
  const spanishOption = screen.queryByText('Spanish');
  expect(spanishOption).toBeInTheDocument();
  const frenchOption = screen.getByText('Français');
  expect(frenchOption).toBeInTheDocument();
});

test('it handles empty cases', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      openLabel="Open"
      value={null}
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
    >
      <SelectInput.Option value="en_US" title="English (United States)">
        <Locale code="en_US" languageLabel="English" />
      </SelectInput.Option>
      <SelectInput.Option value="fr_FR" title="French (France)">
        <Locale code="fr_FR" languageLabel="French" />
      </SelectInput.Option>
      <SelectInput.Option value="de_DE" title="German (Germany)">
        <Locale code="de_DE" languageLabel="German" />
      </SelectInput.Option>
      <SelectInput.Option value="es_ES" title="Spanish (Spain)">
        <Locale code="es_ES" languageLabel="Spanish" />
      </SelectInput.Option>
    </SelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.focus(input);
  fireEvent.change(input, {target: {value: 'France 3'}});

  const germanOption = screen.queryByText('German');
  expect(germanOption).not.toBeInTheDocument();
  const frenchOption = screen.queryByText('French');
  expect(frenchOption).not.toBeInTheDocument();
  expect(screen.getByText('Empty result')).toBeInTheDocument();

  fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'});
  expect(onChange).not.toHaveBeenCalled();
});

test('it handles clearing the field', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      value="en_US"
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
      clearLabel="clear"
      openLabel="Open"
    >
      <SelectInput.Option value="en_US" title="English (United States)">
        <Locale code="en_US" languageLabel="English" />
      </SelectInput.Option>
      <SelectInput.Option value="fr_FR" title="French (France)">
        <Locale code="fr_FR" languageLabel="French" />
      </SelectInput.Option>
      <SelectInput.Option value="de_DE" title="German (Germany)">
        <Locale code="de_DE" languageLabel="German" />
      </SelectInput.Option>
      <SelectInput.Option value="es_ES" title="Spanish (Spain)">
        <Locale code="es_ES" languageLabel="Spanish" />
      </SelectInput.Option>
    </SelectInput>
  );

  const clearButton = screen.getByTitle('clear');
  fireEvent.click(clearButton);

  expect(onChange).toHaveBeenCalledWith(null);
});

test('it handles non clearable field', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      value="en_US"
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
      clearLabel="clear"
      openLabel="Open"
      clearable={false}
    >
      <SelectInput.Option value="en_US" title="English (United States)">
        <Locale code="en_US" languageLabel="English" />
      </SelectInput.Option>
      <SelectInput.Option value="fr_FR" title="French (France)">
        <Locale code="fr_FR" languageLabel="French" />
      </SelectInput.Option>
      <SelectInput.Option value="de_DE" title="German (Germany)">
        <Locale code="de_DE" languageLabel="German" />
      </SelectInput.Option>
      <SelectInput.Option value="es_ES" title="Spanish (Spain)">
        <Locale code="es_ES" languageLabel="Spanish" />
      </SelectInput.Option>
    </SelectInput>
  );

  expect(screen.queryByTitle('clear')).not.toBeInTheDocument();
});

test('it handles keyboard events', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      value="en_US"
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
      openLabel="open"
      clearLabel="clear"
    >
      <SelectInput.Option value="en_US" title="English (United States)">
        <Locale code="en_US" languageLabel="English" />
      </SelectInput.Option>
      <SelectInput.Option value="fr_FR" title="French (France)">
        <Locale code="fr_FR" languageLabel="French" />
      </SelectInput.Option>
      <SelectInput.Option value="de_DE" title="German (Germany)">
        <Locale code="de_DE" languageLabel="German" />
      </SelectInput.Option>
      <SelectInput.Option value="es_ES" title="Spanish (Spain)">
        <Locale code="es_ES" languageLabel="Spanish" />
      </SelectInput.Option>
    </SelectInput>
  );

  // It should clear the field when typing Enter on clear button
  const clearButton = screen.getByTitle('clear');
  userEvent.type(clearButton, '{enter}');
  expect(onChange).toHaveBeenCalledWith(null);

  // It should get to the next field and clear search when typing Tab on input
  const input = screen.getByRole('textbox');
  fireEvent.focus(input);
  fireEvent.change(input, {target: {value: 'my search'}});
  expect(input).toHaveDisplayValue('my search');
  fireEvent.keyDown(input, {key: 'Tab', code: 'Tab'});
  expect(input).toHaveDisplayValue('');

  // It should get to the next field and clear search when typing Tab on an option
  fireEvent.click(input);
  let englishOption = screen.queryByTestId('en_US');
  expect(englishOption).toHaveFocus();
  fireEvent.keyDown(englishOption as Element, {key: 'Tab', code: 'Tab'});
  expect(screen.queryByTestId('en_US')).not.toBeInTheDocument();

  // It should close the dropdown when typing on Escape
  fireEvent.click(input);
  englishOption = screen.queryByTestId('en_US');
  expect(englishOption).toHaveFocus();
  fireEvent.keyDown(englishOption as Element, {key: 'Escape', code: 'Escape'});
  expect(screen.queryByTestId('en_US')).not.toBeInTheDocument();
  expect(input).toHaveFocus();
});

test('it handles keyboard navigation without initial value', () => {
  const handleInputKeyDown = jest.fn();
  const onChange = jest.fn();
  render(
    <SelectInput
      id="localValue"
      data-testid="selectedOpt"
      value={null}
      onChange={onChange}
      onKeyDown={handleInputKeyDown}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
      openLabel="open"
      clearLabel="clear"
    >
      <SelectInput.Option value="en_US" title="English (United States)">
        <Locale code="en_US" languageLabel="English" />
      </SelectInput.Option>
      <SelectInput.Option value="fr_FR" title="French (France)">
        <Locale code="fr_FR" languageLabel="French" />
      </SelectInput.Option>
      <SelectInput.Option value="de_DE" title="German (Germany)">
        <Locale code="de_DE" languageLabel="German" />
      </SelectInput.Option>
    </SelectInput>
  );

  // Should open the dropdown when pressing Down
  const input = screen.getByRole('textbox');
  fireEvent.focus(input);
  fireEvent.keyDown(input, {key: 'ArrowDown', code: 'ArrowDown'});
  let englishOption = screen.queryByTestId('en_US');
  expect(englishOption).toBeInTheDocument();
  fireEvent.keyDown(input, {key: 'Escape', code: 'Escape'});

  // Should open the dropdown when pressing Up
  fireEvent.focus(input);
  fireEvent.keyDown(input, {key: 'ArrowUp', code: 'ArrowUp'});
  englishOption = screen.queryByTestId('en_US');
  expect(englishOption).toBeInTheDocument();
  fireEvent.keyDown(input, {key: 'Escape', code: 'Escape'});

  fireEvent.click(input);
  englishOption = screen.queryByTestId('en_US');
  const frenchOption = screen.queryByTestId('fr_FR');
  const germanOption = screen.queryByTestId('de_DE');
  expect(englishOption).toBeInTheDocument();
  expect(frenchOption).toBeInTheDocument();
  expect(germanOption).toBeInTheDocument();
  expect(englishOption).toHaveFocus();

  fireEvent.keyDown(englishOption as Element, {key: 'ArrowUp', code: 'ArrowUp'}); // Do nothing
  expect(englishOption).toHaveFocus();
  fireEvent.keyDown(englishOption as Element, {key: 'ArrowDown', code: 'ArrowDown'});
  expect(frenchOption).toHaveFocus();
  fireEvent.keyDown(frenchOption as Element, {key: 'ArrowDown', code: 'ArrowDown'});
  expect(germanOption).toHaveFocus();
  fireEvent.keyDown(germanOption as Element, {key: 'ArrowDown', code: 'ArrowDown'}); // Do nothing
  expect(germanOption).toHaveFocus();
});

test('it handles keyboard navigation with initial value', () => {
  const handleInputKeyDown = jest.fn();
  const onChange = jest.fn();
  render(
    <SelectInput
      id="localValue"
      data-testid="selectedOpt"
      value={'fr_FR'}
      onChange={onChange}
      onKeyDown={handleInputKeyDown}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
      openLabel="open"
      clearLabel="clear"
    >
      <SelectInput.Option value="en_US" title="English (United States)">
        <Locale code="en_US" languageLabel="English" />
      </SelectInput.Option>
      <SelectInput.Option value="fr_FR" title="French (France)">
        <Locale code="fr_FR" languageLabel="French" />
      </SelectInput.Option>
      <SelectInput.Option value="de_DE" title="German (Germany)">
        <Locale code="de_DE" languageLabel="German" />
      </SelectInput.Option>
    </SelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.focus(input);
  fireEvent.click(input);
  const englishOption = screen.queryByTestId('en_US');
  const frenchOption = screen.queryByTestId('fr_FR');
  const germanOption = screen.queryByTestId('de_DE');
  expect(englishOption).toBeInTheDocument();
  expect(frenchOption).toBeInTheDocument();
  expect(germanOption).toBeInTheDocument();
  expect(frenchOption).toHaveFocus();
});

test('SelectInput supports ...rest props', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      openLabel="Open"
      value="noice"
      data-testid="my_value"
      emptyResultLabel="Empty result"
      onChange={onChange}
    />
  );
  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});

test('SelectInput does not support duplicated options', () => {
  const mockConsole = jest.spyOn(console, 'error').mockImplementation();
  expect(() => {
    const onChange = jest.fn();
    render(
      <SelectInput openLabel="Open" value="en_US" onChange={onChange} emptyResultLabel="Empty result">
        <SelectInput.Option value="en_US" title="English (United States)">
          <Locale code="en_US" languageLabel="English" />
        </SelectInput.Option>
        <SelectInput.Option value="en_US" title="French (France)">
          <Locale code="fr_FR" languageLabel="French" />
        </SelectInput.Option>
      </SelectInput>
    );
  }).toThrowError('Duplicate option value en_US');
  mockConsole.mockRestore();
});

test('its children could be disabled', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      openLabel="Open"
      value="fr_FR"
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
    >
      <SelectInput.Option value="en_US" title="English (United States)" disabled={true}>
        <Locale code="en_US" languageLabel="English" />
      </SelectInput.Option>
      <SelectInput.Option value="fr_FR" title="French (France)">
        <Locale code="fr_FR" languageLabel="French" />
      </SelectInput.Option>
    </SelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  const englishOption = screen.getByTestId('en_US');
  expect(englishOption).toBeInTheDocument();
  fireEvent.click(englishOption);

  expect(onChange).not.toHaveBeenCalled();
});

test('it becomes read only when every children are disabled', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      openLabel="Open"
      value="fr_FR"
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
    >
      <SelectInput.Option value="en_US" title="English (United States)" disabled={true}>
        <Locale code="en_US" languageLabel="English" />
      </SelectInput.Option>
      <SelectInput.Option value="fr_FR" title="French (France)" disabled={true}>
        <Locale code="fr_FR" languageLabel="French" />
      </SelectInput.Option>
    </SelectInput>
  );

  const input = screen.getByRole('textbox');
  expect(input).toBeDisabled();
});

test('it displays empty result label when no child and value are provided', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      openLabel="Open"
      value={null}
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
    ></SelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.click(input);
  expect(screen.getByText('Empty result')).toBeInTheDocument();
});

test('it calls onOpenChange callback when dropdown state changes', () => {
  const onChange = jest.fn();
  const onOpenChange = jest.fn();

  render(
    <SelectInput
      openLabel="Open"
      value="en_US"
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
      onOpenChange={onOpenChange}
    >
      <SelectInput.Option value="en_US" title="English">
        English
      </SelectInput.Option>
      <SelectInput.Option value="fr_FR" title="French">
        French
      </SelectInput.Option>
    </SelectInput>
  );

  expect(onOpenChange).not.toHaveBeenCalled();

  const input = screen.getByRole('textbox');

  fireEvent.click(input);
  expect(onOpenChange).toHaveBeenCalledTimes(1);
  expect(onOpenChange).toHaveBeenLastCalledWith(true);

  fireEvent.click(screen.getByTestId('backdrop'));
  expect(onOpenChange).toHaveBeenCalledTimes(2);
  expect(onOpenChange).toHaveBeenLastCalledWith(false);

  fireEvent.click(input);
  expect(onOpenChange).toHaveBeenCalledTimes(3);
  expect(onOpenChange).toHaveBeenLastCalledWith(true);

  fireEvent.click(screen.getByText('French'));
  expect(onOpenChange).toHaveBeenCalledTimes(4);
  expect(onOpenChange).toHaveBeenLastCalledWith(false);
});

test('it keeps the dropdown open after selecting an option when keepDropdownOnSelect is set', () => {
  const onChange = jest.fn();
  const onOpenChange = jest.fn();

  render(
    <SelectInput
      openLabel="Open"
      value={null}
      clearable={false}
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
      onOpenChange={onOpenChange}
      keepDropdownOnSelect={true}
    >
      <SelectInput.Option value="en_US" title="English">
        English
      </SelectInput.Option>
      <SelectInput.Option value="fr_FR" title="French">
        French
      </SelectInput.Option>
    </SelectInput>
  );

  fireEvent.click(screen.getByRole('textbox'));
  expect(onOpenChange).toHaveBeenLastCalledWith(true);

  fireEvent.click(screen.getByText('French'));

  expect(onChange).toHaveBeenCalledWith('fr_FR');
  expect(onOpenChange).toHaveBeenLastCalledWith(true);
  expect(screen.getByText('English')).toBeInTheDocument();
});

test('it truncates a long selected value with an ellipsis and exposes the full label through a title', () => {
  const onChange = jest.fn();
  const longLabel =
    'A very long option label that does not fit on a single line and would otherwise wrap and overlap surrounding elements';

  render(
    <SelectInput
      openLabel="Open"
      value={longLabel}
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
    >
      <SelectInput.Option value="other" title="Other">
        Other
      </SelectInput.Option>
    </SelectInput>
  );

  const selectedValueText = screen.getByText(longLabel);
  expect(selectedValueText).toHaveStyleRule('text-overflow', 'ellipsis');
  expect(selectedValueText).toHaveStyleRule('white-space', 'nowrap');
  expect(selectedValueText).toHaveStyleRule('overflow', 'hidden');

  expect(screen.getByRole('textbox')).toHaveAttribute('title', longLabel);
});

test('it displays a surtitle above each option label when size is big', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      openLabel="Open"
      value={null}
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
      size="big"
    >
      <SelectInput.Option value="colour_roze" title="roze">
        <SelectInput.Surtitle label="colour_roze">roze</SelectInput.Surtitle>
      </SelectInput.Option>
      <SelectInput.Option value="colour_blue" title="blue">
        <SelectInput.Surtitle label="colour_blue">blue</SelectInput.Surtitle>
      </SelectInput.Option>
    </SelectInput>
  );

  fireEvent.click(screen.getByRole('textbox'));

  expect(screen.getByText('colour_roze')).toBeInTheDocument();
  expect(screen.getByText('roze')).toBeInTheDocument();
  expect(screen.getByText('colour_blue')).toBeInTheDocument();
  expect(screen.getByText('blue')).toBeInTheDocument();
});

test('it selects the first filtered option when pressing Enter in the search input', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      openLabel="Open"
      value={null}
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
    >
      <SelectInput.Option value="fr_FR">French</SelectInput.Option>
      <SelectInput.Option value="de_DE">German</SelectInput.Option>
      <SelectInput.Option value="es_ES">Spanish</SelectInput.Option>
    </SelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.focus(input);
  fireEvent.change(input, {target: {value: 'Ger'}});

  fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'});
  expect(onChange).toHaveBeenCalledWith('de_DE');
});

test('it highlights the first filtered option while typing', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      openLabel="Open"
      value={null}
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
    >
      <SelectInput.Option value="fr_FR">French</SelectInput.Option>
      <SelectInput.Option value="de_DE">German</SelectInput.Option>
    </SelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.focus(input);
  fireEvent.change(input, {target: {value: 'e'}});

  const highlightBackground = getColor('grey', 20)({theme: pimTheme});
  expect(screen.getByTestId('fr_FR')).toHaveStyleRule('background', highlightBackground);
  expect(screen.getByTestId('de_DE')).not.toHaveStyleRule('background', highlightBackground);
});

test('it does not select a disabled first option when pressing Enter', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      openLabel="Open"
      value={null}
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
    >
      <SelectInput.Option value="fr_FR" disabled>
        French
      </SelectInput.Option>
      <SelectInput.Option value="de_DE">German</SelectInput.Option>
    </SelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.focus(input);
  fireEvent.change(input, {target: {value: 'Fr'}});

  fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'});
  expect(onChange).not.toHaveBeenCalled();
});

test('it does not select on Enter once the search has been cleared', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      openLabel="Open"
      value={null}
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
    >
      <SelectInput.Option value="fr_FR">French</SelectInput.Option>
      <SelectInput.Option value="de_DE">German</SelectInput.Option>
    </SelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.focus(input);
  fireEvent.change(input, {target: {value: 'Ger'}});
  fireEvent.change(input, {target: {value: ''}});

  fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'});
  expect(onChange).not.toHaveBeenCalled();
});

test('it selects the first enabled option on Enter, skipping a disabled first option', () => {
  const onChange = jest.fn();
  render(
    <SelectInput
      openLabel="Open"
      value={null}
      onChange={onChange}
      placeholder="Placeholder"
      emptyResultLabel="Empty result"
    >
      <SelectInput.Option value="fr_FR" disabled>
        French
      </SelectInput.Option>
      <SelectInput.Option value="de_DE">German</SelectInput.Option>
    </SelectInput>
  );

  const input = screen.getByRole('textbox');
  fireEvent.focus(input);
  fireEvent.change(input, {target: {value: 'e'}});

  fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'});
  expect(onChange).toHaveBeenCalledWith('de_DE');
});
