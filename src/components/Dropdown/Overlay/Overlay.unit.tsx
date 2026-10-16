import React, {RefObject} from 'react';
import {Overlay} from './Overlay';
import {ItemCollection} from '../ItemCollection/ItemCollection';
import {Item} from '../Item/Item';
import {Header} from '../Header/Header';
import {render, screen, fireEvent} from '../../../storybook/test-util';

test('it closes the overlay if escape is hit', () => {
  const onClose = jest.fn();

  render(
    <Overlay onClose={onClose} fullWidth={true}>
      Content
    </Overlay>
  );

  fireEvent.keyDown(window, {key: 'Escape', code: 'Escape'});

  expect(onClose).toBeCalledTimes(1);
});

test('it closes the overlay if backdrop is clicked', () => {
  const onClose = jest.fn();

  render(<Overlay onClose={onClose}>Content</Overlay>);

  fireEvent.click(screen.getByTestId('backdrop'));

  expect(onClose).toBeCalledTimes(1);
});

test('it takes the parent full with if fullWidth props is true', () => {
  const parentRef = {
    current: {
      getBoundingClientRect: () => ({
        width: 100,
      }),
    },
  } as RefObject<HTMLDivElement>;

  render(
    <Overlay onClose={jest.fn()} fullWidth={true} parentRef={parentRef}>
      Content
    </Overlay>
  );

  expect(screen.getByText('Content')).toHaveStyle({
    width: '100px',
  });
});

test('it moves the focus from the header to the first focusable item on arrow down', () => {
  render(
    <Overlay onClose={jest.fn()}>
      <Header>
        <input aria-label="Search" />
      </Header>
      <ItemCollection>
        <div>A section</div>
        <Item disabled={true}>Disabled item</Item>
        <Item>First enabled item</Item>
      </ItemCollection>
    </Overlay>
  );

  fireEvent.keyDown(screen.getByLabelText('Search'), {key: 'ArrowDown', code: 'ArrowDown'});

  expect(screen.getByText('First enabled item').parentNode).toHaveFocus();
});

test('it lets the consumer handle arrow down first', () => {
  render(
    <Overlay onClose={jest.fn()} onKeyDown={event => event.preventDefault()}>
      <Header>
        <input aria-label="Search" />
      </Header>
      <ItemCollection>
        <Item>First item</Item>
      </ItemCollection>
    </Overlay>
  );

  const search = screen.getByLabelText('Search');
  search.focus();
  fireEvent.keyDown(search, {key: 'ArrowDown', code: 'ArrowDown'});

  expect(search).toHaveFocus();
});

test('it does not move the focus on arrow down outside of the header', () => {
  render(
    <Overlay onClose={jest.fn()}>
      <input aria-label="Quantity" type="number" />
      <ItemCollection>
        <Item>First item</Item>
      </ItemCollection>
    </Overlay>
  );

  const quantity = screen.getByLabelText('Quantity');
  quantity.focus();
  fireEvent.keyDown(quantity, {key: 'ArrowDown', code: 'ArrowDown'});

  expect(quantity).toHaveFocus();
});

test('it does not move the focus on arrow down from the header of a nested overlay', () => {
  render(
    <Overlay onClose={jest.fn()}>
      <Overlay onClose={jest.fn()}>
        <Header>
          <input aria-label="Nested search" />
        </Header>
      </Overlay>
      <ItemCollection>
        <Item>Outer item</Item>
      </ItemCollection>
    </Overlay>
  );

  const nestedSearch = screen.getByLabelText('Nested search');
  nestedSearch.focus();
  fireEvent.keyDown(nestedSearch, {key: 'ArrowDown', code: 'ArrowDown'});

  expect(nestedSearch).toHaveFocus();
});
