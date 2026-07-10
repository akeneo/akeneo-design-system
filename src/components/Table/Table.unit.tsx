import React from 'react';
import 'jest-styled-components';
import {Table} from './Table';
import {render, screen} from '../../storybook/test-util';
import {fireEvent} from '@testing-library/dom';

test('it renders its children properly', () => {
  render(
    <Table>
      <Table.Header>
        <Table.HeaderCell>An header</Table.HeaderCell>
        <Table.HeaderCell>Another header</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>A cell</Table.Cell>
          <Table.Cell>Another cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  expect(screen.getByText('An header')).toBeInTheDocument();
  expect(screen.getByText('Another header')).toBeInTheDocument();
  expect(screen.getByText('A cell')).toBeInTheDocument();
  expect(screen.getByText('Another cell')).toBeInTheDocument();
});

test('it renders table without checkbox when it is selectable but not selected', () => {
  const onSelectToggle = jest.fn();

  render(
    <Table isSelectable={true}>
      <Table.Header>
        <Table.HeaderCell>An header</Table.HeaderCell>
        <Table.HeaderCell>Another header</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row isSelected={false} onSelectToggle={onSelectToggle}>
          <Table.Cell>A cell</Table.Cell>
          <Table.Cell>Another cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
});

test('it renders table with checkbox when it is selectable and display checkbox', () => {
  const onSelectToggle = jest.fn();

  render(
    <Table isSelectable={true} displayCheckbox={true}>
      <Table.Header>
        <Table.HeaderCell>An header</Table.HeaderCell>
        <Table.HeaderCell>Another header</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row isSelected={false} onSelectToggle={onSelectToggle}>
          <Table.Cell>A cell</Table.Cell>
          <Table.Cell>Another cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  expect(screen.queryByRole('checkbox')).toBeInTheDocument();
});

test('it renders table with checkbox when it is selectable and row is selected', () => {
  const onSelectToggle = jest.fn();

  render(
    <Table isSelectable={true}>
      <Table.Header>
        <Table.HeaderCell>An header</Table.HeaderCell>
        <Table.HeaderCell>Another header</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row isSelected={true} onSelectToggle={onSelectToggle}>
          <Table.Cell>A cell</Table.Cell>
          <Table.Cell>Another cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  expect(screen.queryByRole('checkbox')).toBeInTheDocument();
});

test('it renders table with drag and drop', () => {
  const handleReorder = jest.fn();

  render(
    <Table isDragAndDroppable={true} onReorder={handleReorder}>
      <Table.Header>
        <Table.HeaderCell>An header</Table.HeaderCell>
        <Table.HeaderCell>Another header</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>A cell</Table.Cell>
          <Table.Cell>Another cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>A cell</Table.Cell>
          <Table.Cell>Another cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>A cell</Table.Cell>
          <Table.Cell>Another cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  let dataTransferred = '';
  const dataTransfer = {
    getData: (_format: string) => {
      return dataTransferred;
    },
    setData: (_format: string, data: string) => {
      dataTransferred = data;
    },
  };

  fireEvent.mouseDown(screen.getAllByTestId('dragAndDrop')[1]);
  fireEvent.dragStart(screen.getAllByRole('row')[1], {dataTransfer});
  fireEvent.dragEnter(screen.getAllByRole('row')[2], {dataTransfer});
  fireEvent.dragLeave(screen.getAllByRole('row')[2], {dataTransfer});
  fireEvent.dragEnter(screen.getAllByRole('row')[3], {dataTransfer});
  fireEvent.drop(screen.getAllByRole('row')[3], {dataTransfer});
  fireEvent.dragEnd(screen.getAllByRole('row')[1], {dataTransfer});

  expect(handleReorder).toHaveBeenCalledWith([1, 2, 0], 0, 2);
});

test('Table supports ...rest props', () => {
  render(<Table data-testid="my_value" />);

  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});

test('it clips cell content to a single line by default', () => {
  render(
    <Table>
      <Table.Header>
        <Table.HeaderCell>An header</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>A cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  expect(screen.getByText('A cell').closest('td')).toHaveStyleRule('white-space', 'nowrap');
  expect(screen.getByText('A cell').closest('td')).toHaveStyleRule('text-overflow', 'ellipsis');
  expect(screen.getByText('A cell').closest('table')).toHaveStyleRule('width', '100%');
});

test('it wraps cell and header content when wrapText is enabled', () => {
  render(
    <Table wrapText>
      <Table.Header>
        <Table.HeaderCell>An header</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>A cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  expect(screen.getByText('A cell').closest('table')).toHaveStyleRule('width', 'max-content');
  expect(screen.getByText('A cell').closest('table')).toHaveStyleRule('max-width', '100%');
  expect(screen.getByText('A cell').closest('table')).toHaveStyleRule('min-width', 'min-content');
  expect(screen.getByText('A cell').closest('td')).toHaveStyleRule('white-space', 'normal');
  expect(screen.getByText('A cell').closest('td')).toHaveStyleRule('overflow-wrap', 'break-word');
  expect(screen.getByText('A cell').closest('td')).toHaveStyleRule('max-width', '40ch');
  expect(screen.getByText('An header')).toHaveStyleRule('white-space', 'normal');
  expect(screen.getByText('An header')).toHaveStyleRule('overflow-wrap', 'break-word');
  expect(screen.getByText('An header')).toHaveStyleRule('max-width', '40ch');
});

test('it clips header cell content to a single line by default', () => {
  render(
    <Table>
      <Table.Header>
        <Table.HeaderCell>An header</Table.HeaderCell>
      </Table.Header>
    </Table>
  );

  expect(screen.getByText('An header')).toHaveStyleRule('white-space', 'nowrap');
  expect(screen.getByText('An header')).toHaveStyleRule('overflow', 'hidden');
  expect(screen.getByText('An header')).toHaveStyleRule('text-overflow', 'ellipsis');
});

test('its cell inner container lays out as a flex row by default', () => {
  render(
    <Table>
      <Table.Body>
        <Table.Row>
          <Table.Cell>A cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  expect(screen.getByText('A cell')).toHaveStyleRule('display', 'flex');
});

test('its cell inner container lays out as a block so content can wrap when wrapText is enabled', () => {
  render(
    <Table wrapText>
      <Table.Body>
        <Table.Row>
          <Table.Cell>A cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  expect(screen.getByText('A cell')).toHaveStyleRule('display', 'block');
});

test('it breaks long code tokens inside a wrapText cell instead of overflowing', () => {
  render(
    <Table wrapText>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <code>/api/rest/v1/asset-families/assetFamilyCode/assets/assetCode</code>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  const cell = screen.getByText('/api/rest/v1/asset-families/assetFamilyCode/assets/assetCode').closest('td');
  expect(cell).toHaveStyleRule('overflow-wrap', 'break-word', {modifier: 'code'});
});

test('a cell containing code keeps an uncapped width by default (so short code is not clipped)', () => {
  render(
    <Table>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <code>PATCH</code>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  expect(screen.getByText('PATCH').closest('td')).toHaveStyleRule('max-width', 'none', {modifier: ':has(code)'});
});

test('it applies wrapText to every cell, not only the first', () => {
  render(
    <Table wrapText>
      <Table.Body>
        <Table.Row>
          <Table.Cell>First</Table.Cell>
          <Table.Cell>Second</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Third</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  ['First', 'Second', 'Third'].forEach(text => {
    expect(screen.getByText(text).closest('td')).toHaveStyleRule('white-space', 'normal');
    expect(screen.getByText(text).closest('td')).toHaveStyleRule('overflow-wrap', 'break-word');
  });
});

test('a sortable header still wraps its label and keeps its sort arrow when wrapText is enabled', () => {
  render(
    <Table wrapText>
      <Table.Header>
        <Table.HeaderCell isSortable={true} sortDirection="ascending" onDirectionChange={jest.fn()}>
          A very long sortable header label
        </Table.HeaderCell>
      </Table.Header>
    </Table>
  );

  const label = screen.getByText('A very long sortable header label');
  expect(label).toHaveStyleRule('white-space', 'normal');
  expect(label).toHaveStyleRule('overflow-wrap', 'break-word');
  expect(label.closest('th')?.querySelector('svg')).toBeInTheDocument();
});

test('a rowTitle cell keeps its title styling while wrapping when wrapText is enabled', () => {
  render(
    <Table wrapText>
      <Table.Body>
        <Table.Row>
          <Table.Cell rowTitle={true}>A long row title that should wrap</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  const cell = screen.getByText('A long row title that should wrap').closest('td');
  expect(cell).toHaveStyleRule('white-space', 'normal');
  expect(cell).toHaveStyleRule('font-style', 'italic');
});
