import React from 'react';
import userEvent from '@testing-library/user-event';
import {act, render, screen} from '../../storybook/test-util';
import {IconButton} from '../IconButton/IconButton';
import {RefreshIcon} from '../../icons';
import {Preview} from './Preview';

jest.useFakeTimers();

describe('A preview with icon', () => {
  it('it renders a info preview', () => {
    render(
      <Preview title="Nice preview" level="info" icon={<RefreshIcon data-testid="refresh-icon" />}>
        <Preview.Highlight>Name</Preview.Highlight>
        Preview content
      </Preview>
    );

    expect(screen.getByText('Nice preview')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Preview content')).toBeInTheDocument();
    expect(screen.getByTestId('refresh-icon')).toBeInTheDocument();
  });

  it('it renders a warning preview', () => {
    render(
      <Preview title="Nice preview" level="warning" icon={<RefreshIcon data-testid="refresh-icon" />}>
        <Preview.Highlight>Name</Preview.Highlight>
        Preview content
      </Preview>
    );

    expect(screen.getByText('Nice preview')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Preview content')).toBeInTheDocument();
    expect(screen.getByTestId('refresh-icon')).toBeInTheDocument();
  });

  it('it renders a error preview', () => {
    render(
      <Preview title="Nice preview" level="error" icon={<RefreshIcon data-testid="refresh-icon" />}>
        <Preview.Highlight>Name</Preview.Highlight>
        Preview content
      </Preview>
    );

    expect(screen.getByText('Nice preview')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Preview content')).toBeInTheDocument();
    expect(screen.getByTestId('refresh-icon')).toBeInTheDocument();
  });

  it('it renders a success preview', () => {
    render(
      <Preview title="Nice preview" level="success" icon={<RefreshIcon data-testid="refresh-icon" />}>
        <Preview.Highlight>Name</Preview.Highlight>
        Preview content
      </Preview>
    );

    expect(screen.getByText('Nice preview')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Preview content')).toBeInTheDocument();
    expect(screen.getByTestId('refresh-icon')).toBeInTheDocument();
  });
});

test('it renders its title & its children properly', () => {
  render(
    <Preview title="Nice preview">
      <Preview.Highlight>Name</Preview.Highlight>
      Preview content
    </Preview>
  );

  expect(screen.getByText('Nice preview')).toBeInTheDocument();
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Preview content')).toBeInTheDocument();
});

test('it renders its row subcomponent properly', () => {
  const handleRefresh = jest.fn();

  render(
    <Preview title="Nice preview">
      <Preview.Row action={<IconButton icon={<RefreshIcon />} title="Refresh" onClick={handleRefresh} />}>
        A row
      </Preview.Row>
    </Preview>
  );

  expect(screen.getByText('A row')).toBeInTheDocument();

  userEvent.click(screen.getByTitle('Refresh'));

  expect(handleRefresh).toHaveBeenCalled();
});

test('it renders with icon', () => {
  render(
    <Preview title="Nice preview" icon={<RefreshIcon data-testid="refresh-icon" />}>
      <Preview.Highlight>Name</Preview.Highlight>
      Preview content
    </Preview>
  );

  expect(screen.getByText('Nice preview')).toBeInTheDocument();
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Preview content')).toBeInTheDocument();
  expect(screen.getByTestId('refresh-icon')).toBeInTheDocument();
});

test('it can be collapsed if it is collapsable', () => {
  const handleCollapse = jest.fn();

  render(
    <Preview title="Nice preview" isOpen={true} collapseButtonLabel="Collapse" onCollapse={handleCollapse}>
      Content
    </Preview>
  );

  act(() => {
    jest.runAllTimers();
  });

  userEvent.click(screen.getByTitle('Collapse'));

  expect(handleCollapse).toHaveBeenCalled();
});

test('content is hidden when collapsed', () => {
  const handleCollapse = jest.fn();

  render(
    <Preview title="Nice preview" isOpen={false} collapseButtonLabel="Collapse" onCollapse={handleCollapse}>
      Content
    </Preview>
  );

  expect(screen.getByText('Content')).toHaveAttribute('aria-hidden', 'true');
});

test('Preview supports ...rest props', () => {
  render(<Preview title="Hello" data-testid="my_value" />);

  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});
