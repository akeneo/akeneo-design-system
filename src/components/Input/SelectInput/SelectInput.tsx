import React, {
  ReactNode,
  useEffect,
  useMemo,
  useState,
  useRef,
  isValidElement,
  ReactElement,
  KeyboardEvent,
  useCallback,
  SyntheticEvent,
  NamedExoticComponent,
} from 'react';
import styled, {css} from 'styled-components';
import {Override} from '../../../shared/override';
import {Key} from '../../../shared/key';
import {InputProps} from '../common/InputProps';
import {Overlay} from '../common/Overlay';
import {IconButton} from '../../../components/IconButton/IconButton';
import {TextInput} from '../../../components/Input/TextInput/TextInput';
import {useBooleanState} from '../../../hooks/useBooleanState';
import {useShortcut} from '../../../hooks/useShortcut';
import {VerticalPosition} from '../../../hooks/usePosition';
import {AkeneoThemedProps, getColor} from '../../../theme/theme';
import {ArrowDownIcon} from '../../../icons/ArrowDownIcon';
import {CloseIcon} from '../../../icons/CloseIcon';
import {LockIcon} from '../../../icons/LockIcon';
import {usePagination} from '../../../hooks/usePagination';

const areEveryChildrenDisabled = (children: ReactElement<OptionProps>[]) =>
  children.length > 0 && children.every(option => option.props?.disabled ?? false);

const SelectInputContainer = styled.div<{value: string | null; readOnly: boolean} & AkeneoThemedProps>`
  width: 100%;

  & input[type='text'] {
    cursor: ${({readOnly}) => (readOnly ? 'not-allowed' : 'pointer')};
    background: ${({value, readOnly}) => (null === value && readOnly ? getColor('grey', 20) : 'transparent')};

    &:focus {
      z-index: 2;
    }
  }
`;

const InputContainer = styled.div`
  position: relative;
  background: ${getColor('white')};
`;

const SearchInput = styled(TextInput)<{isPlaceholderVisible: boolean}>`
  &::placeholder {
    opacity: ${({isPlaceholderVisible}) => (isPlaceholderVisible ? 1 : 0)};
  }
`;

const ActionContainer = styled.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 2;
`;

const SelectedOptionContainer = styled.div<{readOnly: boolean; clearable: boolean} & AkeneoThemedProps>`
  position: relative;
  margin-bottom: -34px;
  top: 3px;
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  padding: 0 ${({clearable}) => (clearable ? 68 : 38)}px 0 16px;
  background: ${({readOnly}) => (readOnly ? getColor('grey', 20) : getColor('white'))};
  box-sizing: border-box;
  color: ${({readOnly}) => (readOnly ? getColor('grey', 100) : getColor('grey', 140))};
`;

const OptionContainer = styled.div<{disabled: boolean} & AkeneoThemedProps>`
  background: ${getColor('white')};
  padding: 0 20px;
  align-items: center;
  gap: 10px;
  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'pointer')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({disabled}) => (disabled ? getColor('grey', 100) : getColor('grey', 120))};
  line-height: 34px;
  display: flex;
  justify-content: space-between;

  ${({disabled}) =>
    !disabled &&
    css`
      &:focus {
        background: ${getColor('grey', 20)};
        color: ${getColor('brand', 140)};
      }
      &:hover {
        background: ${getColor('grey', 20)};
        color: ${getColor('brand', 140)};
      }
      &:active {
        color: ${getColor('brand', 100)};
        font-weight: 700;
      }
    `}
`;

const EmptyResultContainer = styled.div`
  background: ${getColor('white')};
  height: 20px;
  padding: 0 20px;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${getColor('grey', 100)};
  line-height: 20px;
  text-align: center;
`;

const OptionCollection = styled.div<{withGroups: boolean}>`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({withGroups}) => (withGroups ? '20px' : '0')};
`;

type OptionProps = Override<
  React.HTMLAttributes<HTMLSpanElement>,
  {
    value: string;
    disabled?: boolean;
  }
>;

const optionStyle = css`
  display: block;
  line-height: 34px;
  min-height: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Option = styled.span<OptionProps>`
  ${optionStyle};
`;

const OptionGroup = styled.span`
  ${optionStyle};
`;

const OptionGroupContainer = styled.div`
  background: ${getColor('white')};
  height: 34px;
  padding: 0 20px 0 0;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${getColor('grey', 100)};
  line-height: 34px;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
`;

type SelectInputProps = Override<
  Override<React.InputHTMLAttributes<HTMLDivElement>, InputProps<string>>,
  (
    | {
        clearable?: false;
        readOnly: true;
        value: string | null;
      }
    | {
        clearable?: false;
        readOnly?: boolean;
        value: string | null;
        onChange: (newValue: string) => void;
      }
    | {
        clearable?: true;
        readOnly?: boolean;
        value: string | null;
        onChange: (newValue: string | null) => void;
      }
  ) & {
    /**
     * The placeholder displayed when no option is selected.
     */
    placeholder?: string;

    /**
     * The text displayed when no result was found.
     */
    emptyResultLabel: string;

    /**
     * Accessibility text for the clear button
     */
    clearLabel?: string;

    /**
     * Accessibility text for the open dropdown button
     */
    openLabel: string;

    /**
     * Defines if the input is valid on not.
     */
    invalid?: boolean;

    /**
     * The options.
     */
    children?: ReactNode;

    /**
     * Force the vertical position of the overlay.
     */
    verticalPosition?: VerticalPosition;
  } & (
      | {
          /**
           * Handler called when the next page is almost reached.
           */
          onNextPage?: () => void;
          /**
           * Handler called when the search value changed
           */
          onSearchChange?: (searchValue: string) => void;
          disableInternalSearch?: false;
        }
      | {
          onNextPage: () => void;
          onSearchChange: (searchValue: string) => void;
          disableInternalSearch: true;
        }
    )
>;

const isOptionGroup = (component: ReactElement<OptionProps, NamedExoticComponent>): boolean =>
  component?.type.displayName === 'SelectInput.OptionGroup';

const isOption = (component: ReactElement<OptionProps, NamedExoticComponent>): boolean =>
  component?.type.displayName === 'SelectInput.Option';

/**
 * Select input allows the user to select content and data when the expected user input is composed of one option value.
 */
const SelectInput = ({
  id,
  placeholder,
  invalid,
  value,
  emptyResultLabel,
  children,
  onChange,
  clearable = true,
  clearLabel = '',
  openLabel,
  readOnly = false,
  verticalPosition,
  onNextPage,
  onSearchChange,
  disableInternalSearch = false,
  'aria-labelledby': ariaLabelledby,
  ...rest
}: SelectInputProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [withGroups, setWithGroups] = useState<boolean>(false);
  const [dropdownIsOpen, openOverlay, closeOverlay] = useBooleanState();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstOptionRef = useRef<HTMLDivElement | null>(null);
  const lastOptionRef = useRef<HTMLDivElement | null>(null);
  const selectedOptionRef = useRef<HTMLDivElement | null>(null);

  const validChildren = useMemo(
    () =>
      React.Children.toArray(children).filter((child): child is ReactElement<OptionProps, NamedExoticComponent> =>
        isValidElement<OptionProps>(child)
      ),
    [children]
  );

  readOnly = readOnly || areEveryChildrenDisabled(validChildren);

  validChildren.reduce<string[]>((optionCodes: string[], child) => {
    if (isOptionGroup(child)) {
      return optionCodes;
    }

    if (optionCodes.includes(child.props.value)) {
      throw new Error(`Duplicate option value ${child.props.value}`);
    }

    optionCodes.push(child.props.value);

    return optionCodes;
  }, []);

  const filteredChildren = useMemo(
    () =>
      disableInternalSearch
        ? validChildren
        : validChildren.filter(child => {
            const content = typeof child.props.children === 'string' ? child.props.children : '';
            const title = child.props.title ?? '';
            const value = child.props.value;
            const optionValue = value + content + title;

            return isOptionGroup(child) || optionValue.toLowerCase().includes(searchValue.toLowerCase());
          }),
    [disableInternalSearch, validChildren, searchValue]
  );

  const hasChildren = useMemo(() => {
    return filteredChildren.some(child => isOption(child));
  }, [filteredChildren]);

  const firstOptionIndex = useMemo(() => {
    return filteredChildren.findIndex(child => isOption(child));
  }, [filteredChildren]);

  const currentValueElement =
    validChildren.find(child => {
      const childrenValue = child.props.value;

      return value === childrenValue;
    }) ?? value;

  const handleSearch = (value: string) => {
    onSearchChange?.(value);
    setSearchValue(value);
    openOverlay();
  };

  const handleOptionClick = (value: string, isOptionDisabled: boolean) => () => {
    if (isOptionDisabled) {
      return;
    }
    onChange?.(value);
    handleEscape();
  };

  const handleClear = (e: SyntheticEvent) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onChange?.(null);
    e.preventDefault();
    inputRef.current?.focus();
  };

  const handleEscape = () => {
    setSearchValue('');
    closeOverlay();
    inputRef.current?.focus();
  };

  useShortcut(Key.Escape, handleEscape, inputRef);

  const handleInputKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (null !== event.currentTarget) {
        if (event.key === Key.Tab) {
          setSearchValue('');
          closeOverlay();
        }
        if (event.key === Key.ArrowDown) {
          event.preventDefault();
          if (!dropdownIsOpen) {
            openOverlay();
          } else {
            (firstOptionRef.current || selectedOptionRef.current)?.focus();
          }
        } else if (event.key === Key.ArrowUp) {
          event.preventDefault();
          openOverlay();
        } else if (event.key === Key.Enter) {
          event.preventDefault();
          if (!dropdownIsOpen) {
            openOverlay();
          }
        }
      }
    },
    [value, dropdownIsOpen]
  );

  useEffect(() => {
    if (dropdownIsOpen && searchValue === '') {
      (selectedOptionRef.current || firstOptionRef.current)?.focus();
    }
  }, [dropdownIsOpen]);

  useEffect(() => {
    if (filteredChildren.some(child => isOptionGroup(child))) {
      setWithGroups(true);
    }
  }, [filteredChildren]);

  const handleOptionKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>, isOptionDisabled: boolean) => {
      if (null !== event.currentTarget) {
        if (event.key === Key.Tab) {
          setSearchValue('');
          closeOverlay();
        }
        if (([Key.ArrowDown, Key.ArrowUp, Key.Enter, Key.Escape] as string[]).includes(event.key)) {
          if (event.key === Key.ArrowDown) {
            const nextSibling = (event.currentTarget as HTMLElement).nextSibling as HTMLElement;
            nextSibling?.focus();
            event.preventDefault();
          }
          if (event.key === Key.ArrowUp) {
            const previousSibling = (event.currentTarget as HTMLElement).previousSibling as HTMLElement;
            previousSibling?.focus();
            event.preventDefault();
          }
          if (event.key === Key.Enter && !isOptionDisabled) {
            const value = (event.currentTarget.firstChild as HTMLElement)?.getAttribute('value') as string;
            onChange?.(value);
            handleEscape();
          }
          if (event.key === Key.Escape) {
            handleEscape();
          }
        } else {
          inputRef.current?.focus();
        }
      }
    },
    [onChange, value]
  );

  usePagination(containerRef, lastOptionRef, onNextPage, dropdownIsOpen, filteredChildren);

  return (
    <SelectInputContainer readOnly={readOnly} value={value} {...rest}>
      <InputContainer>
        {null !== value && '' === searchValue && (
          <SelectedOptionContainer readOnly={readOnly} clearable={clearable}>
            {currentValueElement}
          </SelectedOptionContainer>
        )}
        <SearchInput
          id={id}
          ref={inputRef}
          value={searchValue}
          readOnly={readOnly}
          invalid={invalid}
          placeholder={placeholder}
          isPlaceholderVisible={null === value}
          onChange={handleSearch}
          onClick={event => {
            openOverlay();
            event.preventDefault();
          }}
          aria-labelledby={ariaLabelledby}
          onKeyDown={handleInputKeyDown}
          data-form-type={'other'}
          size={1}
        />
        {!readOnly && (
          <ActionContainer>
            {!dropdownIsOpen && null !== value && clearable && (
              <IconButton
                ghost="borderless"
                level="tertiary"
                size="small"
                icon={<CloseIcon />}
                title={clearLabel}
                onClick={handleClear}
                tabIndex={0}
              />
            )}
            <IconButton
              ghost="borderless"
              level="tertiary"
              size="small"
              icon={<ArrowDownIcon />}
              title={openLabel}
              onClick={openOverlay}
              onFocus={handleEscape}
              tabIndex={-1}
            />
          </ActionContainer>
        )}
      </InputContainer>
      {dropdownIsOpen && !readOnly && (
        <Overlay parentRef={inputRef} verticalPosition={verticalPosition} onClose={handleEscape}>
          <OptionCollection ref={containerRef} withGroups={withGroups}>
            {!hasChildren ? (
              <EmptyResultContainer>{emptyResultLabel}</EmptyResultContainer>
            ) : (
              filteredChildren.map((child, index) => {
                const childValue = child.props.value;
                const isOptionDisabled = child.props?.disabled ?? false;

                if (isOptionGroup(child)) {
                  if (!isOption(filteredChildren[index + 1])) {
                    return null;
                  }
                  return (
                    <OptionGroupContainer role="option-group" data-testid={child.props?.title} key={child.props?.title}>
                      {React.cloneElement(child)}
                    </OptionGroupContainer>
                  );
                }

                return (
                  <OptionContainer
                    role="option"
                    data-testid={childValue}
                    key={childValue}
                    onClick={handleOptionClick(childValue, isOptionDisabled)}
                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleOptionKeyDown(e, isOptionDisabled)}
                    tabIndex={0}
                    ref={node => {
                      switch (index) {
                        case firstOptionIndex:
                          firstOptionRef.current = node;
                          break;
                        case filteredChildren.length - 1:
                          lastOptionRef.current = node;
                          break;
                      }

                      if (value === childValue) {
                        selectedOptionRef.current = node;
                      }
                    }}
                    disabled={isOptionDisabled}
                  >
                    {React.cloneElement(child)}
                    {isOptionDisabled && <LockIcon size={18} />}
                  </OptionContainer>
                );
              })
            )}
          </OptionCollection>
        </Overlay>
      )}
    </SelectInputContainer>
  );
};

Option.displayName = 'SelectInput.Option';
OptionGroup.displayName = 'SelectInput.OptionGroup';
SelectInput.Option = Option;
SelectInput.OptionGroup = OptionGroup;

export {SelectInput};
