import React from 'react';
import 'jest-styled-components';
import {TableInputDate} from './TableInputDate';
import {getColor} from '../../../../theme/theme';
import {pimTheme} from '../../../../themes';
import {render, screen} from '../../../../storybook/test-util';
import {TableInput} from '../TableInput';

test('TableInputDate supports ...rest props', () => {
  const handleChange = jest.fn();

  render(
    <TableInputDate id="myInput" value="2024-04-09" onChange={handleChange} data-testid="my_value" highlighted={true} />
  );
  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});

test('it displays input in readonly mode', () => {
  render(
    <TableInput readOnly={true}>
      <tbody>
        <tr>
          <td>
            <TableInputDate value="2024-04-09" />
          </td>
        </tr>
      </tbody>
    </TableInput>
  );

  expect(screen.getByText('2024-04-09')).toBeInTheDocument();
  expect(screen.getByTitle('2024-04-09')).toBeInTheDocument();
});

test('it paints an editable date cell in error', () => {
  render(<TableInputDate value="2024-04-09" onChange={jest.fn()} data-testid="my_value" inError={true} />);

  expect(screen.getByTestId('my_value')).toHaveStyleRule('background', getColor('red', 10)({theme: pimTheme}));
});

test('it paints a highlighted editable date cell', () => {
  render(<TableInputDate value="2024-04-09" onChange={jest.fn()} data-testid="my_value" highlighted={true} />);

  expect(screen.getByTestId('my_value')).toHaveStyleRule('background', getColor('green', 10)({theme: pimTheme}));
});
