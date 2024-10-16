import React, {Children, cloneElement, forwardRef, HTMLAttributes, isValidElement, ReactNode, Ref} from 'react';
import {Override} from '../../shared/override';
import {ArrowDownIcon} from '../../icons/ArrowDownIcon';
import {Button, ButtonProps} from '../Button/Button';
import {Dropdown} from '../Dropdown/Dropdown';
import {useBooleanState} from '../../hooks/useBooleanState';
import styled from 'styled-components';

type SplitButtonProps = Omit<
  Override<
    ButtonProps,
    {
      /**
       * Label of the button.
       */
      label: string;
    }
  >,
  'href'
>;

/**
 * Buttons express what action will occur when the users clicks.
 * Buttons are used to initialize an action, either in the background or foreground of an experience.
 */

const SplitButton = ({label, children, ...rest}: SplitButtonProps) => {
  const [isOpen, open, close] = useBooleanState();
  const decoratedChildren = Children.map(children, child => {
    if (!isValidElement<ItemProps>(child)) return child;

    return cloneElement<ItemProps>(child, {
      onClick: (...args) => {
        if (child.props.onClick) {
          child.props.onClick(...args);
        }
        close();
      },
    });
  });
  return (
    <Container>
      <CollapsedButton {...rest}>{label}</CollapsedButton>

      <Dropdown>
        <CollapsedDropdownButton {...rest} type="button" onClick={open}>
          <ArrowDownIcon />
        </CollapsedDropdownButton>
        {isOpen && (
          <Dropdown.Overlay verticalPosition="down" onClose={close}>
            <Dropdown.ItemCollection>{decoratedChildren}</Dropdown.ItemCollection>
          </Dropdown.Overlay>
        )}
      </Dropdown>
    </Container>
  );
};

const Container = styled.div`
  display: inline-flex;
`;

const CollapsedButton = styled(Button)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px white solid;
`;

const CollapsedDropdownButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding-left: 10px;
`;

type ItemProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const Item = forwardRef(({children, onClick}: ItemProps, ref: Ref<HTMLDivElement>) => (
  <Dropdown.Item onClick={onClick} ref={ref}>
    {children}
  </Dropdown.Item>
));

Item.displayName = 'SplitButton.Item';

SplitButton.Item = Item;

export {SplitButton};
export type {SplitButtonProps};
