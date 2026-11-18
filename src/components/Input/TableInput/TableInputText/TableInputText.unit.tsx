import React from 'react';
import 'jest-styled-components';
import {TableInputText} from './TableInputText';
import {getColor} from '../../../../theme/theme';
import {pimTheme} from '../../../../themes';
import {render, screen} from '../../../../storybook/test-util';
import {TableInput} from '../TableInput';

test('TableInputText supports ...rest props', () => {
  const handleChange = jest.fn();

  render(
    <TableInputText id="myInput" value="Nice" onChange={handleChange} data-testid="my_value" highlighted={true} />
  );
  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});

test('it displays input in readonly mode', () => {
  render(
    <TableInput readOnly={true}>
      <tbody>
        <tr>
          <td>
            <TableInputText value="Noice" />
          </td>
        </tr>
      </tbody>
    </TableInput>
  );

  expect(screen.getByText('Noice')).toBeInTheDocument();
  expect(screen.getByTitle('Noice')).toBeInTheDocument();
});

test('it paints an editable text cell in error', () => {
  render(<TableInputText value="Nice" onChange={jest.fn()} data-testid="my_value" inError={true} />);

  expect(screen.getByTestId('my_value')).toHaveStyleRule('background', getColor('red', 10)({theme: pimTheme}));
});

test('it paints a highlighted editable text cell', () => {
  render(<TableInputText value="Nice" onChange={jest.fn()} data-testid="my_value" highlighted={true} />);

  expect(screen.getByTestId('my_value')).toHaveStyleRule('background', getColor('green', 10)({theme: pimTheme}));
});
