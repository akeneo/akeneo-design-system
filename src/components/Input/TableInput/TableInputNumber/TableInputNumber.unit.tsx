import React from 'react';
import 'jest-styled-components';
import {TableInputNumber} from './TableInputNumber';
import {getColor} from '../../../../theme/theme';
import {pimTheme} from '../../../../themes';
import {render, screen} from '../../../../storybook/test-util';
import {TableInput} from '../TableInput';

test('TableInputNumber supports ...rest props', () => {
  const handleChange = jest.fn();

  render(
    <TableInputNumber id="myInput" value="12" onChange={handleChange} data-testid="my_value" highlighted={true} />
  );
  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});

test('it displays input in readonly mode', () => {
  render(
    <TableInput readOnly={true}>
      <tbody>
        <tr>
          <td>
            <TableInputNumber value="42" />
          </td>
        </tr>
      </tbody>
    </TableInput>
  );

  expect(screen.getByText('42')).toBeInTheDocument();
  expect(screen.getByTitle('42')).toBeInTheDocument();
});

test('it paints an editable number cell in error', () => {
  render(<TableInputNumber value="12" onChange={jest.fn()} data-testid="my_value" inError={true} />);

  expect(screen.getByTestId('my_value')).toHaveStyleRule('background', getColor('red', 10)({theme: pimTheme}));
});

test('it paints a highlighted editable number cell', () => {
  render(<TableInputNumber value="12" onChange={jest.fn()} data-testid="my_value" highlighted={true} />);

  expect(screen.getByTestId('my_value')).toHaveStyleRule('background', getColor('green', 10)({theme: pimTheme}));
});
