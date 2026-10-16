import React from 'react';
import {ItemCollection} from './ItemCollection';
import {render, screen, fireEvent} from '../../../storybook/test-util';
import {Item, ITEM_SELECTOR} from '../Item/Item';
import {Checkbox} from '../../Checkbox/Checkbox';

test('it handles arrow navigation', () => {
  jest.useFakeTimers();

  render(
    <ItemCollection>
      <Item>First item</Item>
      <Item>Second item</Item>
      An invalid element
    </ItemCollection>
  );

  jest.runAllTimers();

  expect(screen.getByText('First item').parentNode).toHaveFocus();
  fireEvent.keyDown(screen.getByText('First item'), {key: 'ArrowDown', code: 'ArrowDown'});
  expect(screen.getByText('Second item').parentNode).toHaveFocus();
  fireEvent.keyDown(screen.getByText('Second item'), {key: 'ArrowUp', code: 'ArrowUp'});
  expect(screen.getByText('First item').parentNode).toHaveFocus();
});

test('it ignores keys other than arrows and arrows pressed outside an item', () => {
  jest.useFakeTimers();

  render(
    <ItemCollection>
      <Item>First item</Item>
      <Item>Second item</Item>
    </ItemCollection>
  );

  jest.runAllTimers();

  fireEvent.keyDown(screen.getByText('First item'), {key: 'Enter', code: 'Enter'});
  expect(screen.getByText('First item').parentNode).toHaveFocus();
  fireEvent.keyDown(screen.getByRole('listbox'), {key: 'ArrowDown', code: 'ArrowDown'});
  expect(screen.getByText('First item').parentNode).toHaveFocus();
});

test('it skips elements that cannot be focused during arrow navigation', () => {
  jest.useFakeTimers();

  render(
    <ItemCollection>
      <Item>First item</Item>
      <div>A section</div>
      <Item disabled={true}>Disabled item</Item>
      <Item>Last item</Item>
    </ItemCollection>
  );

  jest.runAllTimers();

  fireEvent.keyDown(screen.getByText('First item'), {key: 'ArrowDown', code: 'ArrowDown'});
  expect(screen.getByText('Last item').parentNode).toHaveFocus();
  fireEvent.keyDown(screen.getByText('Last item'), {key: 'ArrowUp', code: 'ArrowUp'});
  expect(screen.getByText('First item').parentNode).toHaveFocus();
});

test('it navigates through items wrapped in fragments', () => {
  jest.useFakeTimers();

  render(
    <ItemCollection>
      <>
        <Item>First item</Item>
        <Item>Second item</Item>
      </>
      {[<Item key="third">Third item</Item>]}
    </ItemCollection>
  );

  jest.runAllTimers();

  expect(screen.getByText('First item').parentNode).toHaveFocus();
  fireEvent.keyDown(screen.getByText('First item'), {key: 'ArrowDown', code: 'ArrowDown'});
  expect(screen.getByText('Second item').parentNode).toHaveFocus();
  fireEvent.keyDown(screen.getByText('Second item'), {key: 'ArrowDown', code: 'ArrowDown'});
  expect(screen.getByText('Third item').parentNode).toHaveFocus();
});

test('it focuses the first item when the collection starts with a section', () => {
  jest.useFakeTimers();

  render(
    <ItemCollection>
      <div>A section</div>
      <Item>First item</Item>
    </ItemCollection>
  );

  jest.runAllTimers();

  expect(screen.getByText('First item').parentNode).toHaveFocus();
});

test('it navigates through items holding a checkbox', () => {
  jest.useFakeTimers();

  const {rerender} = render(
    <ItemCollection>
      <Item>
        <Checkbox checked={false} onChange={jest.fn()} /> First item
      </Item>
      <Item>
        <Checkbox checked={false} onChange={jest.fn()} /> Second item
      </Item>
    </ItemCollection>
  );
  rerender(
    <ItemCollection>
      <Item>
        <Checkbox checked={true} onChange={jest.fn()} /> First item
      </Item>
      <Item>
        <Checkbox checked={false} onChange={jest.fn()} /> Second item
      </Item>
    </ItemCollection>
  );

  jest.runAllTimers();

  const [firstItem, secondItem] = screen
    .getAllByRole('checkbox')
    .map(checkbox => checkbox.closest(ITEM_SELECTOR) as HTMLElement);
  firstItem.focus();
  fireEvent.keyDown(firstItem, {key: 'ArrowDown', code: 'ArrowDown'});
  expect(secondItem).toHaveFocus();
});
