import React, {ReactNode, Ref, SyntheticEvent} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {AkeneoThemedProps, getColor, getFontSize} from '../../theme/theme';
import {CheckIcon} from '../../icons/CheckIcon';
import {CheckPartialIcon} from '../../icons/CheckPartialIcon';
import {useId} from '../../hooks/useId';
import {useShortcut} from '../../hooks/useShortcut';
import {Key} from '../../shared/key';
import {Override} from '../../shared/override';

const checkTick = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const uncheckTick = keyframes`
  to {
    stroke-dashoffset: 27px;
  }
`;

const Container = styled.div`
  display: flex;
  line-height: 20px;
`;

const TickIcon = styled(CheckIcon)`
  animation: ${uncheckTick} 0.2s ease-in forwards;
  opacity: 0;
  stroke-dasharray: 27px;
  stroke-dashoffset: 0;
  transition-delay: 0.2s;
  transition: opacity 0.1s ease-out;
`;

const CheckboxContainer = styled.div<{checked: boolean; readOnly: boolean} & AkeneoThemedProps>`
  background-color: transparent;
  height: 20px;
  width: 20px;
  border: 1px solid ${getColor('grey80')};
  border-radius: 3px;
  overflow: hidden;
  background-color: ${getColor('grey20')};
  transition: background-color 0.2s ease-out;
  box-sizing: border-box;
  color: ${getColor('white')};
  flex-shrink: 0;

  ${props =>
    props.checked &&
    css`
      background-color: ${getColor('blue100')};
      border-color: ${getColor('blue100')};

      ${TickIcon} {
        animation-delay: 0.2s;
        animation: ${checkTick} 0.2s ease-out forwards;
        stroke-dashoffset: 27px;
        opacity: 1;
        transition-delay: 0s;
      }
    `}

  ${props =>
    props.checked &&
    props.readOnly &&
    css`
      background-color: ${getColor('blue20')};
      border-color: ${getColor('blue40')};
    `}

  ${props =>
    !props.checked &&
    props.readOnly &&
    css`
      background-color: ${getColor('grey60')};
      border-color: ${getColor('grey100')};
    `}
`;

const LabelContainer = styled.label<{readOnly: boolean} & AkeneoThemedProps>`
  color: ${getColor('grey140')};
  font-weight: 400;
  font-size: ${getFontSize('big')};
  padding-left: 10px;

  ${props =>
    props.readOnly &&
    css`
      color: ${getColor('grey100')};
    `}
`;

type CheckboxChecked = boolean | 'mixed';

type CheckboxProps = Override<
  React.HTMLAttributes<HTMLDivElement>,
  {
    /**
     * State of the Checkbox.
     */
    checked: CheckboxChecked;

    /**
     * Displays the value of the input, but does not allow changes.
     */
    readOnly?: boolean;

    /**
     * The handler called when clicking on Checkbox.
     */
    onChange?: (value: boolean, event: SyntheticEvent) => void;

    /**
     * Label of the checkbox.
     */
    children?: ReactNode;
  }
>;

/**
 * The checkboxes are applied when users can select all, several, or none of the options from a given list.
 */
const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  (
    {
      checked = false,
      onChange,
      readOnly = false,
      children,
      title,
      'aria-label': ariaLabel,
      tabIndex,
      ...rest
    }: CheckboxProps,
    forwardedRef: Ref<HTMLDivElement>
  ): React.ReactElement => {
    const checkboxId = useId('checkbox_');
    const labelId = useId('label_');

    const isChecked = true === checked;
    const isMixed = 'mixed' === checked;

    const handleChange = (event: SyntheticEvent) => {
      if (!onChange || readOnly) return;

      switch (checked) {
        case true:
          onChange(false, event);
          break;
        case 'mixed':
        case false:
          onChange(true, event);
          break;
      }

      event.preventDefault();
      event.stopPropagation();
    };
    const ref = useShortcut(Key.Space, handleChange, forwardedRef);
    const forProps = children
      ? {
          'aria-labelledby': labelId,
          id: checkboxId,
        }
      : {};

    return (
      <Container {...rest}>
        <CheckboxContainer
          checked={isChecked || isMixed}
          readOnly={readOnly}
          title={title}
          role="checkbox"
          ref={ref}
          aria-checked={isChecked}
          tabIndex={undefined !== tabIndex ? tabIndex : readOnly ? -1 : 0}
          onClick={handleChange}
          aria-label={ariaLabel}
          {...forProps}
        >
          {isMixed ? <CheckPartialIcon size={18} /> : <TickIcon size={18} />}
        </CheckboxContainer>
        {children ? (
          <LabelContainer onClick={handleChange} id={labelId} readOnly={readOnly} htmlFor={checkboxId}>
            {children}
          </LabelContainer>
        ) : null}
      </Container>
    );
  }
);

export {Checkbox};
export type {CheckboxChecked};
