import React from 'react';
import {Subtitle} from './Subtitle';
import {render, screen} from '../../../storybook/test-util';

test('it renders its children properly', () => {
  render(<Subtitle label="Item caption">Item child</Subtitle>);

  expect(screen.getByText('Item caption')).toBeInTheDocument();
  expect(screen.getByText('Item child')).toBeInTheDocument();
});

test('it renders the caption after its children', () => {
  render(<Subtitle label="Item caption">Item child</Subtitle>);

  expect(screen.getByText('Item child').compareDocumentPosition(screen.getByText('Item caption'))).toBe(
    Node.DOCUMENT_POSITION_FOLLOWING
  );
});

test('Subtitle supports ...rest props', () => {
  render(<Subtitle label="Icon button" data-testid="my_value" />);
  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});
