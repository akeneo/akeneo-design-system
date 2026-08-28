import React, {
  ChangeEvent,
  cloneElement,
  ForwardedRef,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled, {css} from 'styled-components';
import {InputProps} from '../common/InputProps';
import {LockIcon} from '../../../icons/LockIcon';
import {Override} from '../../../shared/override';
import {AkeneoThemedProps, getColor, getFontSize} from '../../../theme/theme';
import {IconButton, IconButtonProps} from '../../IconButton/IconButton';

const TextAreaInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommonStyle = css<{readOnly?: boolean; $invalid?: boolean; isValueHidden?: boolean} & AkeneoThemedProps>`
  border: 1px solid ${({$invalid}) => ($invalid ? getColor('red', 100) : getColor('grey', 80))};
  border-radius: 2px;
  color: ${({readOnly, isValueHidden}) =>
    isValueHidden ? 'transparent' : readOnly ? getColor('grey', 100) : getColor('grey', 140)};
  font-size: ${getFontSize('default')};
  line-height: 20px;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  outline-style: none;
  background: ${({readOnly}) => (readOnly ? getColor('grey', 20) : getColor('white'))};
  cursor: ${({readOnly}) => (readOnly ? 'not-allowed' : 'auto')};

  &:focus-within {
    box-shadow: 0 0 0 2px ${getColor('blue', 40)};
  }

  a.rdw-dropdown-selectedtext > span {
    color: ${({readOnly}) => (readOnly ? getColor('grey', 100) : getColor('grey', 140))};
  }
`;

const Textarea = styled.textarea<{readOnly?: boolean; $invalid?: boolean; $resizable?: boolean} & AkeneoThemedProps>`
  ${CommonStyle}
  resize: ${({$resizable}) => ($resizable ? 'both' : 'none')};
  height: 200px;
  padding: 10px 30px 10px 15px;

  &::placeholder {
    opacity: 1;
    color: ${getColor('grey', 100)};
  }
`;

// CSS highlights cannot reach the textarea's value (browser-internal shadow DOM): they tint this
// transparent copy instead, composed from Textarea so the text metrics match glyph for glyph.
// The copy is inert so the browser's find-in-page (which matches transparent text, but skips
// inert nodes) does not count the value twice; highlight painting is unaffected by inertness.
const ValueMirror = styled(Textarea).attrs({as: 'div', inert: ''})`
  && {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: pre-wrap;
    word-break: break-word;
    resize: none;
    pointer-events: none;
    color: transparent;
    background: none;
    box-shadow: none;
    border-color: transparent;
    mix-blend-mode: multiply;
  }

  ${TextAreaInputContainer}:focus-within & {
    display: none;
  }
`;

const ReadOnlyIcon = styled(LockIcon)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  color: ${getColor('grey', 100)};
`;

const variantColors: Record<Variant, string> = {
  default: 'grey100',
  warning: 'yellow140',
  error: 'red100',
};

const CharacterLeftLabel = styled.div<{$variant: Variant}>`
  font-size: ${getFontSize('small')};
  align-self: flex-end;
  color: ${({$variant}) => getColor(variantColors[$variant])};
`;

const ActionContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 8px;
  color: ${getColor('grey', 100)};
`;

type Variant = 'default' | 'warning' | 'error';

type TextAreaInputProps = Override<
  Override<React.InputHTMLAttributes<HTMLTextAreaElement>, InputProps<string>>,
  (
    | {
        readOnly: true;
      }
    | {
        readOnly?: boolean;
        onChange: (newValue: string) => void;
      }
  ) & {
    /**
     * Value of the input.
     */
    value: string;

    /**
     * Placeholder displayed when the input is empty.
     */
    placeholder?: string;

    /**
     * Defines if the input is valid on not.
     */
    invalid?: boolean;

    /**
     * Label displayed under the field to display the remaining character counter.
     */
    characterLeftLabel?: string;

    /**
     * Color of the characterLeftLabel
     */
    characterLeftLabelVariant?: Variant;

    /**
     * Hide the input value.
     */
    isValueHidden?: boolean;

    /**
     * Allow the user to resize the textarea.
     */
    resizable?: boolean;

    /**
     * Allows text highlights (e.g. tinting the occurrences of a searched text)
     * to be painted over the displayed value.
     */
    highlightable?: boolean;
  }
>;

/**
 * The TextAreaInput component allows the user to enter large text content and can also display a Rich Text Editor.
 */
const TextAreaInput = React.forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
  (
    {
      value,
      invalid,
      onChange,
      readOnly,
      characterLeftLabel,
      children,
      characterLeftLabelVariant = 'default',
      resizable = false,
      highlightable = false,
      ...rest
    }: TextAreaInputProps,
    forwardedRef: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const internalRef = useRef<HTMLTextAreaElement | null>(null);
    const [mirror, setMirror] = useState<HTMLElement | null>(null);
    const handleRef = useCallback(
      (element: HTMLTextAreaElement | null) => {
        internalRef.current = element;
        if (typeof forwardedRef === 'function') {
          forwardedRef(element);
        } else if (forwardedRef) {
          forwardedRef.current = element;
        }
      },
      [forwardedRef]
    );

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (!readOnly && onChange) onChange(event.currentTarget.value);
      },
      [readOnly, onChange]
    );

    // A blurred textarea keeps its scroll position and stays user-resizable: the mirror must follow
    // both, or the highlights land on the wrong lines.
    useEffect(() => {
      const textarea = internalRef.current;
      if (!highlightable || textarea === null || mirror === null) return;

      const syncWithTextarea = () => {
        mirror.style.width = `${textarea.offsetWidth}px`;
        mirror.style.height = `${textarea.offsetHeight}px`;
        mirror.scrollTop = textarea.scrollTop;
      };
      syncWithTextarea();
      textarea.addEventListener('scroll', syncWithTextarea);
      const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(syncWithTextarea);
      resizeObserver?.observe(textarea);

      return () => {
        textarea.removeEventListener('scroll', syncWithTextarea);
        resizeObserver?.disconnect();
      };
    }, [highlightable, mirror]);

    const actions = React.Children.map(children, child => {
      if (isValidElement<IconButtonProps>(child) && IconButton === child.type) {
        return cloneElement(child, {
          level: 'tertiary',
          ghost: 'borderless',
          size: 'small',
        });
      }

      return null;
    });

    return (
      <TextAreaInputContainer>
        <Textarea
          ref={handleRef}
          value={value}
          onChange={handleChange}
          type="text"
          readOnly={readOnly}
          disabled={readOnly}
          aria-invalid={invalid}
          $invalid={invalid}
          $resizable={resizable}
          {...rest}
        />
        {highlightable && !rest.isValueHidden && (
          <ValueMirror ref={setMirror} aria-hidden={true} className={rest.className}>
            {value}
          </ValueMirror>
        )}
        {actions && <ActionContainer>{actions}</ActionContainer>}
        {readOnly && <ReadOnlyIcon size={16} />}
        {characterLeftLabel && (
          <CharacterLeftLabel $variant={characterLeftLabelVariant}>{characterLeftLabel}</CharacterLeftLabel>
        )}
      </TextAreaInputContainer>
    );
  }
);

export {TextAreaInput};
export type {TextAreaInputProps};
