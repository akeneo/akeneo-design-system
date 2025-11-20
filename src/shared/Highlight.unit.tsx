import React from 'react';
import {Highlight} from './Highlight';
import {render, screen} from '../storybook/test-util';

test('it highlights nothing if search does not match content', () => {
  render(<Highlight highlight={'steven'}>gregoire</Highlight>);

  expect(screen.getByText('gregoire')).toBeInTheDocument();
});

test('it highlights string if it matches it', () => {
  render(<Highlight highlight={'ev'}>steven</Highlight>);

  expect(screen.getByText('ev')).toBeInTheDocument();
  expect(screen.getByText(content => content.startsWith('st') && content.endsWith('en'))).toBeInTheDocument();
});

test('it highlights string if it matches it case insensitive', () => {
  render(<Highlight highlight={'eV'}>stEven</Highlight>);

  expect(screen.getByText('Ev')).toBeInTheDocument();
  expect(screen.getByText(content => content.startsWith('st') && content.endsWith('en'))).toBeInTheDocument();
});
