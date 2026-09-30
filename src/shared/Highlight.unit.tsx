import React from 'react';
import {Highlight} from './Highlight';
import {render, screen} from '../storybook/test-util';

test('it highlights nothing if search does not match content', () => {
  render(<Highlight highlight={'steven'}>gregoire</Highlight>);

  expect(screen.getByText('gregoire')).toBeInTheDocument();
});

test('it highlights string if it matches it', () => {
  render(<Highlight highlight={'ev'}>steven</Highlight>);

  expect(screen.getByText('st')).toBeInTheDocument();
  expect(screen.getByText('ev')).toBeInTheDocument();
  expect(screen.getByText('en')).toBeInTheDocument();
});

test('it highlights string if it matches it case insensitive', () => {
  render(<Highlight highlight={'eV'}>stEven</Highlight>);

  expect(screen.getByText('st')).toBeInTheDocument();
  expect(screen.getByText('Ev')).toBeInTheDocument();
  expect(screen.getByText('en')).toBeInTheDocument();
});

test('it does not render a highlighted element when the highlight is empty', () => {
  const {container} = render(<Highlight highlight={''}>steven</Highlight>);

  expect(screen.getByText('steven')).toBeInTheDocument();
  expect(container.innerHTML).toBe('<span>steven</span>');
});

const translatePage = (root: Node) => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode as Text);
  }

  textNodes.forEach(textNode => {
    const translation = document.createElement('font');
    translation.textContent = `translated ${textNode.textContent}`;
    textNode.parentNode?.replaceChild(translation, textNode);
  });
};

test('it keeps working when the browser translates the page', () => {
  const {container, rerender} = render(<Highlight highlight={'ev'}>steven</Highlight>);

  translatePage(container);

  expect(() => {
    rerender(<Highlight highlight={'nomatch'}>steven</Highlight>);
    rerender(<Highlight highlight={'st'}>steven</Highlight>);
    rerender(<Highlight highlight={'en'}>steven</Highlight>);
    rerender(<Highlight highlight={''}>steven</Highlight>);
  }).not.toThrow();
});
