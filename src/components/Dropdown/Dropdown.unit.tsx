import React from 'react';
import {Dropdown} from './Dropdown';
import {Link, Image, Button} from '../../components';
import {render, screen, fireEvent} from '../../storybook/test-util';
import {Checkbox} from '../Checkbox/Checkbox';
import {Surtitle} from './Surtitle/Surtitle';
import {Subtitle} from './Subtitle/Subtitle';
import {GroupsIllustration} from '../../illustrations';
import {getStaticImage} from '../../storybook/util';

test('it renders its children properly', () => {
  render(
    <Dropdown>
      <Button>Dropdown</Button>
      <Dropdown.Overlay verticalPosition="down" onClose={jest.fn()}>
        <Dropdown.Header>
          <Dropdown.Title>Elements</Dropdown.Title>
        </Dropdown.Header>
        <Dropdown.ItemCollection>
          <Dropdown.Item>
            <Link>Item 1</Link>
          </Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
          <Dropdown.Item>Item 4</Dropdown.Item>
        </Dropdown.ItemCollection>
      </Dropdown.Overlay>
    </Dropdown>
  );

  expect(screen.getByText('Dropdown')).toBeInTheDocument();
  expect(screen.getByText('Item 1')).toBeInTheDocument();
  expect(screen.getByText('Elements')).toBeInTheDocument();
});

test('it renders no result information', () => {
  render(
    <Dropdown>
      <Button>Dropdown</Button>
      <Dropdown.Overlay verticalPosition="down" onClose={jest.fn()}>
        <Dropdown.Header>
          <Dropdown.Title>Elements</Dropdown.Title>
        </Dropdown.Header>
        <Dropdown.ItemCollection
          noResultIllustration={<GroupsIllustration />}
          noResultTitle="Sorry, there is no results."
        />
      </Dropdown.Overlay>
    </Dropdown>
  );

  expect(screen.getByText('Sorry, there is no results.')).toBeInTheDocument();
});

test('it renders selectable item', () => {
  const onChange = jest.fn();

  render(
    <Dropdown>
      <Button>Dropdown</Button>
      <Dropdown.Overlay verticalPosition="down" onClose={jest.fn()}>
        <Dropdown.Header>
          <Dropdown.Title>Elements</Dropdown.Title>
        </Dropdown.Header>
        <Dropdown.ItemCollection>
          <Dropdown.Item>
            <Checkbox checked={false} onChange={onChange} />
            Selectable Item
          </Dropdown.Item>
        </Dropdown.ItemCollection>
      </Dropdown.Overlay>
    </Dropdown>
  );

  fireEvent.click(screen.getByText('Selectable Item'));
  expect(onChange).toBeCalledTimes(1);
});

test('it renders Image item', () => {
  render(
    <Dropdown>
      <Button>Dropdown</Button>
      <Dropdown.Overlay verticalPosition="down" onClose={jest.fn()}>
        <Dropdown.Header>
          <Dropdown.Title>Elements</Dropdown.Title>
        </Dropdown.Header>
        <Dropdown.ItemCollection>
          <Dropdown.Item>
            <Image src={getStaticImage('akeneo_200_140.jpg')} alt="An image" />
            Item with Image
          </Dropdown.Item>
          <Dropdown.Item>Simple Item</Dropdown.Item>
        </Dropdown.ItemCollection>
      </Dropdown.Overlay>
    </Dropdown>
  );

  expect(screen.getByAltText('An image')).toHaveProperty('width', 34);
  expect(screen.getByAltText('An image')).toHaveProperty('height', 34);
});

test('it renders Surtitle item', () => {
  render(
    <Dropdown>
      <Button>Dropdown</Button>
      <Dropdown.Overlay verticalPosition="down" onClose={jest.fn()}>
        <Dropdown.Header>
          <Dropdown.Title>Elements</Dropdown.Title>
        </Dropdown.Header>
        <Dropdown.ItemCollection>
          <Dropdown.Item data-testid="item_with_surtitle">
            <Image src="image.png" alt="my image" />
            <Surtitle label="Item label">Item</Surtitle>
          </Dropdown.Item>
          <Dropdown.Item>Simple Item</Dropdown.Item>
        </Dropdown.ItemCollection>
      </Dropdown.Overlay>
    </Dropdown>
  );

  expect(screen.getByTestId('item_with_surtitle')).toHaveStyle({height: '64px'});
});

test('it renders Subtitle item as tall as a Surtitle one', () => {
  render(
    <Dropdown>
      <Button>Dropdown</Button>
      <Dropdown.Overlay verticalPosition="down" onClose={jest.fn()}>
        <Dropdown.ItemCollection>
          <Dropdown.Item data-testid="item_with_subtitle">
            <Subtitle label="Item caption">Item</Subtitle>
          </Dropdown.Item>
        </Dropdown.ItemCollection>
      </Dropdown.Overlay>
    </Dropdown>
  );

  expect(screen.getByTestId('item_with_subtitle')).toHaveStyle({height: '44px'});
});

test('it sets the active item in italics unless told otherwise', () => {
  render(
    <Dropdown>
      <Button>Dropdown</Button>
      <Dropdown.Overlay verticalPosition="down" onClose={jest.fn()}>
        <Dropdown.ItemCollection>
          <Dropdown.Item isActive={true} data-testid="italic">
            Italic
          </Dropdown.Item>
          <Dropdown.Item isActive={true} italicWhenActive={false} data-testid="upright">
            Upright
          </Dropdown.Item>
        </Dropdown.ItemCollection>
      </Dropdown.Overlay>
    </Dropdown>
  );

  expect(screen.getByTestId('italic')).toHaveStyle({fontStyle: 'italic', fontWeight: '700'});
  expect(screen.getByTestId('upright')).toHaveStyle({fontStyle: 'normal', fontWeight: '700'});
});

test('Dropdown supports ...rest props', () => {
  render(<Dropdown data-testid="my_value" />);
  expect(screen.getByTestId('my_value')).toBeInTheDocument();
});
