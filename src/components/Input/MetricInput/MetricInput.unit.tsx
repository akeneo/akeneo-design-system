import React from 'react';
import {MetricInput} from './MetricInput';
import {fireEvent, render, screen} from '../../../storybook/test-util';

test('it handles Amount Change', () => {
  const handleAmountChange = jest.fn();

  render(
    <MetricInput
      amount={'12'}
      onAmountChange={handleAmountChange}
      onUnitChange={jest.fn()}
      unitOptions={[]}
      openLabel={'Open'}
      unit={null}
    />
  );

  fireEvent.change(screen.getByTitle('12'), {target: {value: '4000'}});

  expect(handleAmountChange).toHaveBeenCalledWith('4000');
});

test('it handles Unit Change', () => {
  const handleUnitChange = jest.fn();

  render(
    <MetricInput
      amount={''}
      onAmountChange={jest.fn()}
      onUnitChange={handleUnitChange}
      unitOptions={[
        {value: 'value1', label: 'Value 1'},
        {value: 'value2', label: () => 'Value 2'},
      ]}
      openLabel={'Open'}
      unit={'value1'}
    />
  );

  fireEvent.click(screen.getByTitle('Open'));
  fireEvent.click(screen.getByText('Value 2'));

  expect(handleUnitChange).toHaveBeenCalledWith('value2');
});
