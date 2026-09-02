import React, {
  ClipboardEvent,
  isValidElement,
  NamedExoticComponent,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import {arrayUnique} from '../../../shared/array';
import {Key} from '../../../shared/key';
import {Override} from '../../../shared/override';
import {InputProps} from '../common/InputProps';
import {Overlay} from '../common/Overlay';
import {IconButton} from '../../IconButton/IconButton';
import {useBooleanState} from '../../../hooks/useBooleanState';
import {useShortcut} from '../../../hooks/useShortcut';
import {VerticalPosition} from '../../../hooks/usePosition';
import {AkeneoThemedProps, getColor} from '../../../theme/theme';
import {ArrowDownIcon} from '../../../icons/ArrowDownIcon';
import {ChipInput, ChipValue} from './ChipInput';
import {usePagination} from '../../../hooks/usePagination';
import {Locale} from '../../Locale/Locale';

// Matching : line break, tabulation, comma and semi-colon. The space is deliberately left out, unlike in
// TagInput: this input has a search box, and a space separator would make a multi-word label untypable.
const CHIP_SEPARATOR_REGEX = new RegExp('[\\n\\r\\t,;]+', 'g');

const MultiSelectInputContainer = styled.div<{$value: string[] | null; $readOnly: boolean} & AkeneoThemedProps>`
  width: 100%;

  & input[type='text'] {
    cursor: ${({$readOnly}) => ($readOnly ? 'not-allowed' : 'pointer')};
    background: ${({$value, $readOnly}) => (null === $value && $readOnly ? getColor('grey', 20) : 'transparent')};

    &:focus {
      z-index: 2;
    }
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const ActionContainer = styled.div`
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const OptionContainer = styled.div<{$highlighted: boolean}>`
  background: ${({$highlighted}) => ($highlighted ? getColor('grey', 20) : getColor('white'))};
  height: 34px;
  padding: 0 20px;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({$highlighted}) => ($highlighted ? getColor('brand', 140) : getColor('grey', 120))};
  line-height: 34px;

  &:focus {
    color: ${getColor('grey', 120)};
  }
  &:hover {
    background: ${getColor('grey', 20)};
    color: ${getColor('brand', 140)};
  }
  &:active {
    color: ${getColor('brand', 100)};
    font-weight: 700;
  }
  &:disabled {
    color: ${getColor('grey', 100)};
  }
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
  text-transform: uppercase;
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

const OptionCollection = styled.div<{$withGroups: boolean}>`
  max-height: 320px;
  overflow-y: auto;
  padding-left: ${({$withGroups}) => ($withGroups ? '20px' : '0')};
`;

type OptionProps = {
  value: string;
  children: string;
  enableLocaleRender?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;

const Option = ({children, enableLocaleRender, ...rest}: OptionProps) => (
  <span {...rest}>{enableLocaleRender ? <Locale code={rest.value} languageLabel={children} /> : children}</span>
);
const OptionGroup = ({children, ...rest}: React.HTMLAttributes<HTMLSpanElement>) => <span {...rest}>{children}</span>;

type MultiMultiSelectInputProps = Override<
  Override<React.InputHTMLAttributes<HTMLDivElement>, InputProps<string[]>>,
  (
    | {
        readOnly: true;
      }
    | {
        readOnly?: boolean;
        onChange: (newValue: string[]) => void;
      }
  ) & {
    /**
     * The props value of the selected option.
     */
    value: string[];

    /**
     * The selected options which are invalid
     */
    invalidValue?: string[];

    /**
     * The placeholder displayed when no option is selected.
     */
    placeholder?: string;

    /**
     * The text displayed when no result was found.
     */
    emptyResultLabel: string;

    /**
     * Accessibility text for the open dropdown button.
     */
    openLabel: string;

    /**
     * Accessibility text for the remove chip button.
     */
    removeLabel: string;

    /**
     * Defines if the input is valid on not.
     */
    invalid?: boolean;

    /**
     * List of separators used to create chips.
     */
    separators?: string[];

    /**
     * The options.
     */
    children?: ReactElement<OptionProps>[] | ReactElement<OptionProps>;

    /**
     * Force the vertical position of the overlay.
     */
    verticalPosition?: VerticalPosition;

    /**
     * Minimum width of the dropdown overlay in pixels. Useful when the parent
     * container is narrower than the desired dropdown width.
     */
    dropdownMinWidth?: number;

    /**
     * Values that cannot be unselected
     */
    lockedValues?: string[];

    /**
     * Callback called when the user hit enter on the field.
     */
    onSubmit?: () => void;

    /**
     * Disables automatic selection when text matches option values exactly.
     * When true, users must explicitly select options from the dropdown.
     * Useful for search scenarios where option values might be common search terms.
     * @default false
     */
    disableAutoSelect?: boolean;
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
          optionsFilteredExternally?: false;
        }
      | {
          onNextPage: () => void;
          onSearchChange: (searchValue: string) => void;
          /**
           * The given options are already filtered by the caller (e.g. server-side search): the component renders
           * them as-is instead of matching them against the search value. Already-selected options are still
           * hidden from the list.
           */
          optionsFilteredExternally: true;
        }
    ) & {
      /**
       * Handler called when the dropdown open state changes.
       */
      onOpenChange?: (isOpen: boolean) => void;
    }
>;

const isOptionGroup = (component: ReactElement<OptionProps, NamedExoticComponent>): boolean =>
  component?.type.displayName === 'MultiSelectInput.OptionGroup';

const isOption = (component: ReactElement<OptionProps, NamedExoticComponent>): boolean =>
  component?.type.displayName === 'MultiSelectInput.Option';

/**
 * Multi select input allows the user to select content and data
 * when the expected user input is composed of multiple option values.
 */
const MultiSelectInput = ({
  id,
  placeholder,
  invalid,
  value = [],
  invalidValue = [],
  emptyResultLabel,
  children = [],
  onChange,
  removeLabel,
  onSubmit,
  openLabel,
  readOnly = false,
  verticalPosition,
  dropdownMinWidth,
  onNextPage,
  onSearchChange,
  optionsFilteredExternally = false,
  disableAutoSelect = false,
  lockedValues = [],
  'aria-labelledby': ariaLabelledby,
  onOpenChange,
  ...rest
}: MultiMultiSelectInputProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [withGroups, setWithGroups] = useState<boolean>(false);
  const [activeOptionIndex, setActiveOptionIndex] = useState<number>(0);
  const [dropdownIsOpen, openOverlayState, closeOverlayState] = useBooleanState();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsContainerRef = useRef<HTMLDivElement>(null);
  const lastOptionRef = useRef<HTMLDivElement>(null);

  const openOverlay = useCallback(() => {
    openOverlayState();
    if (!dropdownIsOpen) {
      onOpenChange?.(true);
    }
  }, [dropdownIsOpen, openOverlayState, onOpenChange]);

  const closeOverlay = useCallback(() => {
    closeOverlayState();
    if (dropdownIsOpen) {
      onOpenChange?.(false);
    }
  }, [dropdownIsOpen, closeOverlayState, onOpenChange]);

  const validChildren = useMemo(
    () =>
      React.Children.toArray(children).filter((child): child is ReactElement<OptionProps, NamedExoticComponent> =>
        isValidElement<OptionProps>(child)
      ),
    [children]
  );

  const indexedChips = useMemo(
    () =>
      validChildren.reduce<{[key: string]: ChipValue}>((indexedChips, child) => {
        if (isOptionGroup(child)) {
          return indexedChips;
        }

        const children = child.props.children;
        const value = child.props.value;

        if ('string' !== typeof children) {
          throw new Error('Multi select only accepts string as Option');
        }

        if (Object.prototype.hasOwnProperty.call(indexedChips, value)) {
          throw new Error(`Duplicate option value ${value}`);
        }

        indexedChips[value] = {code: value, label: children};

        return indexedChips;
      }, {}),
    [validChildren]
  );

  const filteredChildren = useMemo(
    () =>
      validChildren.filter(child => {
        const childValue = child.props.value;
        const optionValue = childValue + child.props.children;

        return (
          isOptionGroup(child) ||
          (!value.includes(childValue) &&
            (optionsFilteredExternally || optionValue.toLowerCase().includes(searchValue.toLowerCase())))
        );
      }),
    [optionsFilteredExternally, validChildren, searchValue, value]
  );

  const hasChildren = useMemo(() => {
    return filteredChildren.some(child => isOption(child));
  }, [filteredChildren]);

  const firstOptionIndex = filteredChildren.findIndex(child => isOption(child));
  const optionIndexes = filteredChildren.reduce<number[]>((indexes, child, index) => {
    if (isOption(child)) {
      indexes.push(index);
    }

    return indexes;
  }, []);

  const moveActiveOption = (direction: 1 | -1) => {
    if (optionIndexes.length === 0) {
      return;
    }

    const currentPosition = optionIndexes.indexOf(activeOptionIndex);
    const nextPosition = Math.min(Math.max(currentPosition + direction, 0), optionIndexes.length - 1);
    setActiveOptionIndex(optionIndexes[nextPosition]);
  };

  const handleArrowDown = (event: KeyboardEvent) => {
    event.preventDefault();
    if (!dropdownIsOpen) {
      openOverlay();
      return;
    }
    moveActiveOption(1);
  };

  const handleArrowUp = (event: KeyboardEvent) => {
    event.preventDefault();
    if (!dropdownIsOpen) {
      openOverlay();
      return;
    }
    moveActiveOption(-1);
  };

  const handleEnter = () => {
    if (filteredChildren.length > 0 && dropdownIsOpen && isOption(filteredChildren[activeOptionIndex])) {
      const newValue = filteredChildren[activeOptionIndex].props.value;

      onChange?.(arrayUnique([...value, newValue]));
      setSearchValue('');
      onSearchChange?.('');
      closeOverlay();
    } else {
      !readOnly && onSubmit?.();
    }
  };

  const convertSearchIntoChips = (searchValue: string, isPastedValue: boolean) => {
    const newChips = searchValue.split(CHIP_SEPARATOR_REGEX).map((chip: string) => chip.trim());
    const newChipsWithoutEmpty = newChips.filter((chip: string) => chip !== '');

    // When options are filtered externally, the rendered children are only the loaded page(s) of a
    // much larger server-side option list, so matching a pasted list against them would wrongly
    // reject valid codes that simply haven't been fetched yet. Only a pasted list of several terms is
    // unambiguously made of codes: a single term is just as likely to be a label, and text being typed
    // stays a search term even once it holds a separator. The caller validates the resulting value
    // against the full option list (see how already-selected values are validated, e.g.
    // AttributeMultiSelectInput).
    const acceptsChipsOutsideLoadedOptions =
      optionsFilteredExternally && isPastedValue && newChipsWithoutEmpty.length > 1;

    const newChipsFiltered = acceptsChipsOutsideLoadedOptions
      ? newChipsWithoutEmpty
      : newChipsWithoutEmpty.filter((chip: string) => validChildren.map(child => child.props.value).includes(chip));
    onChange?.(arrayUnique([...value, ...newChipsFiltered]));
    // When nothing matched, the input is handed back untouched: it may well be a label that contains
    // a separator, and rejoining the chips would drop the separator the user just typed.
    const invalidChipsProvided =
      newChipsFiltered.length === 0
        ? searchValue
        : newChipsWithoutEmpty.filter(x => !newChipsFiltered.includes(x)).join(',');
    // Update the search input with leftover (invalid) chips that were not matched.
    setSearchValue(invalidChipsProvided);
    // Calls onSearchChange (if provided) with the invalid input.
    onSearchChange?.(invalidChipsProvided);
    openOverlay();
  };

  const handleSearch = (searchValue: string) => {
    if (disableAutoSelect || null === searchValue.match(CHIP_SEPARATOR_REGEX)) {
      setSearchValue(searchValue);
      onSearchChange?.(searchValue);
      openOverlay();
      return;
    }

    convertSearchIntoChips(searchValue, false);
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    if (disableAutoSelect || !event.clipboardData) {
      return;
    }

    event.preventDefault();
    const input = event.currentTarget;
    const selectionStart = input.selectionStart ?? input.value.length;
    const selectionEnd = input.selectionEnd ?? input.value.length;
    const pastedValue =
      input.value.slice(0, selectionStart) + event.clipboardData.getData('text') + input.value.slice(selectionEnd);
    convertSearchIntoChips(pastedValue, true);
  };

  const handleRemove = (chipsCode: string) => {
    onChange?.(value.filter(value => value !== chipsCode));
  };

  const handleOptionClick = (newValue: string) => () => {
    onChange?.(arrayUnique([...value, newValue]));
    setSearchValue('');
    onSearchChange?.('');
    closeOverlay();
    inputRef.current?.focus();
  };

  const handleBlur = () => {
    setSearchValue('');
    onSearchChange?.('');
    closeOverlay();
    inputRef.current?.blur();
  };

  usePagination(optionsContainerRef, lastOptionRef, onNextPage, dropdownIsOpen, filteredChildren);

  const handleFocus = () => openOverlay();

  useShortcut(Key.Enter, handleEnter, inputRef);
  useShortcut(Key.Escape, handleBlur, inputRef);
  useShortcut(Key.ArrowDown, handleArrowDown, inputRef);
  useShortcut(Key.ArrowUp, handleArrowUp, inputRef);

  useEffect(() => {
    setActiveOptionIndex(firstOptionIndex);
  }, [dropdownIsOpen, searchValue, filteredChildren.length, firstOptionIndex]);

  useEffect(() => {
    optionsContainerRef.current?.querySelector('[data-active="true"]')?.scrollIntoView?.({block: 'nearest'});
  }, [activeOptionIndex]);

  useEffect(() => {
    if (filteredChildren.some(child => isOptionGroup(child))) {
      setWithGroups(true);
    }
  }, [filteredChildren]);

  return (
    <MultiSelectInputContainer ref={containerRef} $readOnly={readOnly} $value={value} {...rest}>
      <InputContainer>
        <ChipInput
          ref={inputRef}
          id={id}
          placeholder={placeholder}
          value={value.map(chipCode => indexedChips[chipCode] ?? {code: chipCode, label: chipCode})}
          invalidValue={invalidValue}
          searchValue={searchValue}
          removeLabel={removeLabel}
          readOnly={readOnly}
          invalid={invalid}
          onSearchChange={handleSearch}
          onPaste={handlePaste}
          onRemove={handleRemove}
          onFocus={handleFocus}
          lockedValues={lockedValues}
        />
        {!readOnly && (
          <ActionContainer>
            <IconButton
              ghost="borderless"
              level="tertiary"
              size="small"
              icon={<ArrowDownIcon />}
              title={openLabel}
              onClick={openOverlay}
              onFocus={handleBlur}
              tabIndex={0}
            />
          </ActionContainer>
        )}
      </InputContainer>
      {dropdownIsOpen && !readOnly && (
        <Overlay parentRef={containerRef} minWidth={dropdownMinWidth} onClose={handleBlur}>
          <OptionCollection ref={optionsContainerRef} $withGroups={withGroups}>
            {!hasChildren ? (
              <EmptyResultContainer>{emptyResultLabel}</EmptyResultContainer>
            ) : (
              filteredChildren.map((child, index) => {
                if (isOptionGroup(child)) {
                  if (!isOption(filteredChildren[index + 1])) {
                    return null;
                  }
                  return (
                    <OptionGroupContainer
                      role="option-group"
                      key={child.props?.title}
                      ref={index === filteredChildren.length - 1 ? lastOptionRef : undefined}
                    >
                      {React.cloneElement(child)}
                    </OptionGroupContainer>
                  );
                }

                return (
                  <OptionContainer
                    key={child.props.value}
                    onClick={handleOptionClick(child.props.value)}
                    ref={index === filteredChildren.length - 1 ? lastOptionRef : undefined}
                    data-active={index === activeOptionIndex}
                    $highlighted={index === activeOptionIndex}
                  >
                    {React.cloneElement(child)}
                  </OptionContainer>
                );
              })
            )}
          </OptionCollection>
        </Overlay>
      )}
    </MultiSelectInputContainer>
  );
};

Option.displayName = 'MultiSelectInput.Option';
OptionGroup.displayName = 'MultiSelectInput.OptionGroup';
MultiSelectInput.Option = Option;
MultiSelectInput.OptionGroup = OptionGroup;

export {MultiSelectInput};
