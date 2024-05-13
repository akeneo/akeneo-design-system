import React from 'react';
import {TableInputDate} from './TableInputDate';
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
