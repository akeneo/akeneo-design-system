import React from 'react';
import {Tree} from './Tree';
import {render, screen, fireEvent} from '../../storybook/test-util';

test('it renders tree with children properly and is loading', () => {
  render(
    <Tree value={'master'} label={'Master'} selected={true} selectable={true}>
      <Tree value={'camcorders'} label={'Camcorders'} isLoading={true} readOnly={true} />
      <Tree value={'radio'} label={'Radio'} isLeaf={true} selected={true} selectable={true} />
    </Tree>
  );

  expect(screen.getByText('Master')).toBeInTheDocument();
  expect(screen.getByText('Camcorders')).toBeInTheDocument();
});

test("it set selected to 'mixed' when a children is selected ", () => {
  render(
    <Tree value={'master'} label={'Master'} selected={true} selectable={true}>
      <Tree value={'camcorders'} label={'Camcorders'} />
      <Tree value={'radio'} label={'Radio'} isLeaf={true} selected={true} selectable={true} />
    </Tree>
  );

  const masterTree = screen.getByText('Master');
  expect(masterTree).toBeInTheDocument();
  expect(masterTree.getAttribute('aria-selected')).toBe('true');
});

test("it set selected to 'true' when all children are selected ", () => {
  render(
    <Tree value={'master'} label={'Master'} selected={true} selectable={true}>
      <Tree value={'camcorders'} label={'Camcorders'} selected={true} selectable={true} />
      <Tree value={'radio'} label={'Radio'} isLeaf={true} selected={true} selectable={true} />
    </Tree>
  );

  const masterTree = screen.getByText('Master');
  expect(masterTree).toBeInTheDocument();
  expect(masterTree.getAttribute('aria-selected')).toBe('true');
});

test('Tree supports ...rest props', () => {
  render(<Tree value={'master'} label={'Master'} data-testid="my_value" />);
  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});

test('it triggers onOpen/onClose/onSelect callback', () => {
  const handleOpen = jest.fn();
  const handleClose = jest.fn();
  const handleChange = jest.fn();

  render(
    <Tree
      value={'master'}
      label={'Master'}
      selectable={true}
      onOpen={handleOpen}
      onClose={handleClose}
      onChange={handleChange}
    />
  );

  fireEvent.click(screen.getAllByRole('button')[0]); // Open
  fireEvent.click(screen.getAllByRole('button')[0]); // Close
  fireEvent.click(screen.getAllByRole('button')[1]); // Open
  fireEvent.click(screen.getAllByRole('button')[1]); // Close
  fireEvent.click(screen.getByRole('checkbox')); // Change

  expect(handleOpen).toBeCalledTimes(2);
  expect(handleOpen).toBeCalledWith('master');

  expect(handleClose).toBeCalledTimes(2);
  expect(handleClose).toBeCalledWith('master');

  expect(handleChange).toBeCalledTimes(1);
  expect(handleChange).toBeCalledWith('master', true, expect.anything());
});

test('it triggers onClick callback', () => {
  const handleOpen = jest.fn();
  const handleClose = jest.fn();
  const handleClick = jest.fn();

  render(
    <Tree
      value={'master'}
      label={'Master'}
      selectable={true}
      onOpen={handleOpen}
      onClose={handleClose}
      onClick={handleClick}
    />
  );

  fireEvent.click(screen.getAllByRole('button')[1]);

  expect(handleOpen).toBeCalledTimes(0);
  expect(handleClose).toBeCalledTimes(0);
  expect(handleClick).toBeCalledTimes(1);
  expect(handleClick).toBeCalledWith('master');
});

test('it does not trigger any callback when its a leaf', () => {
  const handleOpen = jest.fn();

  render(<Tree value={'master'} label={'Master'} isLeaf={true} onOpen={handleOpen} />);

  fireEvent.click(screen.getAllByRole('button')[0]);
  fireEvent.click(screen.getAllByRole('button')[1]);

  expect(handleOpen).toBeCalledTimes(0);
});

test('It throws with an unknown status', () => {
  const mockConsole = jest.spyOn(console, 'error').mockImplementation();

  expect(() => {
    render(
      <Tree value={'master'} label={'Master'}>
        WrongNode
      </Tree>
    );
  }).toThrow();

  mockConsole.mockRestore();
});

test('it does not throw any error with condition on the child', () => {
  const isOpen = false;
  render(
    <Tree value={'master'} label={'Master'}>
      {isOpen && <Tree value={'test'} label={'test'} />}
    </Tree>
  );

  expect(screen.getByText('Master')).toBeInTheDocument();
});

test('it opens the tree when children are provided with delay and defaultOpen is true', async () => {
  const Wrapper = () => {
    const [children, setChildren] = React.useState<string[]>([]);

    React.useEffect(() => {
      setTimeout(() => {
        setChildren(['camcorders', 'radio']);
      }, 200);
    }, []);

    return (
      <Tree value={'master'} label={'Master'} defaultOpen={true}>
        {children.map(child => (
          <Tree key={child} value={child} label={child} />
        ))}
      </Tree>
    );
  };

  render(<Wrapper />);

  expect(screen.getByText('Master')).toBeInTheDocument();
  expect(await screen.findByText('camcorders')).toBeInTheDocument();
});

test('it renders a tree with a value label', () => {
  render(<Tree value={'master'} label={'Master'} valueLabel={'[master]'} />);
  expect(screen.getByText('[master]')).toBeInTheDocument();
});
