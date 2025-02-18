import React, {ChangeEvent, useCallback, useRef} from 'react';
import styled, {css} from 'styled-components';
import {InputProps} from '../common/InputProps';
import {ArrowDownIcon} from '../../../icons/ArrowDownIcon';
import {ArrowUpIcon} from '../../../icons/ArrowUpIcon';
import {LockIcon} from '../../../icons/LockIcon';
import {Override} from '../../../shared/override';
import {Key} from '../../../shared/key';
import {AkeneoThemedProps, getColor, getFontSize} from '../../../theme/theme';
import {useShortcut} from '../../../hooks/useShortcut';

const NumberInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input<{readOnly?: boolean; invalid?: boolean} & AkeneoThemedProps>`
  width: 100%;
  height: 40px;
  border: 1px solid ${({invalid}) => (invalid ? getColor('red', 100) : getColor('grey', 80))};
  border-radius: 2px;
  background: ${({readOnly}) => (readOnly ? getColor('grey', 20) : getColor('white'))};
  color: ${({readOnly}) => (readOnly ? getColor('grey', 100) : getColor('grey', 140))};
  font-size: ${getFontSize('default')};
  line-height: 40px;
  padding: 0 ${({readOnly}) => (readOnly ? '35px' : '15px')} 0 15px;
  box-sizing: border-box;
  outline-style: none;
  appearance: textfield;
  ${({readOnly}) =>
    readOnly &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${getColor('blue', 40)};
  }

  &::placeholder {
    opacity: 1;
    color: ${getColor('grey', 100)};
  }
`;

const ReadOnlyIcon = styled(LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${getColor('grey', 100)};
`;

const IncrementIconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  cursor: pointer;
  color: ${getColor('grey', 100)};
`;

type NumberInputProps = Override<
  Override<React.InputHTMLAttributes<HTMLInputElement>, InputProps<string>>,
  (
    | {
        readOnly: true;
      }
    | {
        readOnly?: boolean;
        onChange?: (newValue: string) => void;
      }
  ) & {
    /**
     * Value of the input (it's a string to be able to manage weird cases externally)
     */
    value: string;

    /**
     * Placeholder displayed when the input is empty.
     */
    placeholder?: string;

    /**
     * The minimum value to accept for this input.
     * This attribute is not used to validate the field nor constriant user input.
     */
    min?: number;

    /**
     * The maximum value to accept for this input.
     * This attribute is not used to validate the field nor constriant user input.
     */
    max?: number;

    /**
     * A stepping interval to use when using up and down arrows to adjust the value, as well as for validation.
     * Use `any` for decimal values.
     */
    step?: number | 'any';

    /**
     * Defines if the input is valid on not.
     */
    invalid?: boolean;

    /**
     * Callback called when the user hit enter on the field.
     */
    onSubmit?: () => void;

    /**
     * @internal
     */
    withIncrementIcons?: boolean;
  }
>;

/**
 * Number input allows the user to enter content and data when the expected user input is only numbers.
 */
const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {invalid, onChange, readOnly, step, value, onSubmit, withIncrementIcons = true, ...rest}: NumberInputProps,
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLInputElement | null>(null);
    forwardedRef = forwardedRef ?? internalRef;

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (!readOnly && onChange) onChange(event.currentTarget.value);
      },
      [readOnly, onChange]
    );

    const handleEnter = () => {
      !readOnly && onSubmit?.();
    };
    useShortcut(Key.Enter, handleEnter, forwardedRef);

    const handleIncrement = useCallback(() => {
      if (
        forwardedRef &&
        'function' !== typeof forwardedRef &&
        forwardedRef.current &&
        !readOnly &&
        onChange &&
        'any' !== step
      ) {
        forwardedRef.current.stepUp(step);
        onChange(forwardedRef.current.value);
      }
    }, [forwardedRef, step, readOnly, value, onChange]);
    const handleDecrement = useCallback(() => {
      if (
        forwardedRef &&
        'function' !== typeof forwardedRef &&
        forwardedRef.current &&
        !readOnly &&
        onChange &&
        'any' !== step
      ) {
        forwardedRef.current.stepDown(step);
        onChange(forwardedRef.current.value);
      }
    }, [forwardedRef, step, readOnly, value, onChange]);

    return (
      <NumberInputContainer>
        <Input
          ref={forwardedRef}
          onChange={handleChange}
          type="number"
          readOnly={readOnly}
          disabled={readOnly}
          aria-invalid={invalid}
          invalid={invalid}
          autoComplete="off"
          value={value}
          title={value}
          step={step}
          {...rest}
        />
        {readOnly && <ReadOnlyIcon size={16} />}
        {!readOnly && withIncrementIcons && 'any' !== step && (
          <IncrementIconContainer>
            <ArrowUpIcon size={16} data-testid="increment-number-input" onClick={handleIncrement} />
            <ArrowDownIcon size={16} data-testid="decrement-number-input" onClick={handleDecrement} />
          </IncrementIconContainer>
        )}
      </NumberInputContainer>
    );
  }
);

export {NumberInput};
export type {NumberInputProps};
