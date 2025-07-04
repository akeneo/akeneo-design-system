import React, {
  ReactNode,
  Ref,
  SyntheticEvent,
  HTMLAttributes,
  forwardRef,
  useContext,
  DragEvent,
  MouseEvent,
} from 'react';
import styled, {css} from 'styled-components';
import {AkeneoThemedProps, getColor} from '../../../theme/theme';
import {Checkbox} from '../../../components/Checkbox/Checkbox';
import {Override} from '../../../shared/override';
import {TableContext} from '../TableContext';
import {TableCell} from '../TableCell/TableCell';
import {RowIcon} from '../../../icons/RowIcon';
import {DangerIcon} from '../../../icons/DangerIcon';
import {LockIcon} from '../../../icons/LockIcon';
import {PlaceholderPosition, usePlaceholderPosition} from '../../../hooks/usePlaceholderPosition';
import {DraggedElementContext} from '../../../contexts/DraggedElementContext';

type Level = 'warning' | 'tertiary';

const RowContainer = styled.tr<
  {
    isSelected: boolean;
    level?: Level;
    isClickable: boolean;
    isDragAndDroppable: boolean;
    placeholderPosition: PlaceholderPosition;
  } & AkeneoThemedProps
>`
  ${({isSelected}) =>
    isSelected &&
    css`
      > td {
        background-color: ${getColor('blue', 20)};
      }
    `};

  ${({isClickable}) =>
    isClickable &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}

  ${({isDragAndDroppable}) =>
    isDragAndDroppable &&
    css`
      & > *:first-child {
        width: 44px;
      }
    `}

  ${({placeholderPosition}) =>
    placeholderPosition === 'top' &&
    css`
      background: linear-gradient(to bottom, ${getColor('blue', 40)} 4px, ${getColor('white')} 0px);
    `}

  ${({placeholderPosition}) =>
    placeholderPosition === 'bottom' &&
    css`
      background: linear-gradient(to top, ${getColor('blue', 40)} 4px, ${getColor('white')} 0px);
    `}

  ${({placeholderPosition}) =>
    placeholderPosition === 'full_row' &&
    css`
      background-color: ${getColor('grey', 20)};
    `}

  &:hover > td {
    opacity: 1;
    ${({isClickable}) =>
      isClickable &&
      css`
        background-color: ${getColor('grey', 20)};
      `}
  }

  &:hover > td > div {
    opacity: 1;
  }

  ${({level}) =>
    level === 'warning'
      ? css`
          > td {
            :first-child {
              padding: 0 0 0 5px;
            }
            background-color: ${getColor('yellow', 10)};
          }
        `
      : level === 'tertiary' &&
        css`
          > td {
            background-color: ${getColor('grey', 20)};
            color: ${getColor('grey', 120)};
          }
        `};
`;

const CheckboxContainer = styled.td<{isVisible: boolean}>`
  background: none !important;
  opacity: ${({isVisible}) => (isVisible ? 1 : 0)};
  cursor: auto;

  > div {
    justify-content: center;
  }
`;

const HandleCell = styled(TableCell)<{readonly: boolean}>`
  cursor: grab;
  width: 20px;

  > div {
    justify-content: center;
  }

  :active {
    cursor: grabbing;
  }

  ${({readonly}) =>
    readonly &&
    css`
      color: ${getColor('grey', 40)};
    `}
`;

const getIcon = (level: Level) => {
  switch (level) {
    case 'warning':
      return <WarningIcon />;
    case 'tertiary':
      return <LockIcon />;
  }
};

const WarningIcon = styled(DangerIcon)`
  color: ${getColor('yellow', 120)};
`;

type TableRowProps = Override<
  HTMLAttributes<HTMLTableRowElement>,
  {
    /**
     * Content of the row
     */
    children?: ReactNode;

    /**
     * Function called when the user clicks on the row checkbox, required when table is selectable
     */
    onSelectToggle?: (isSelected: boolean) => void;

    /**
     * Define if the row is selected, required when table is selectable
     */
    isSelected?: boolean | 'mixed';

    /**
     * Define if the row has a warning
     */
    level?: Level;

    /**
     * Function called when the user clicks on the row
     */
    onClick?: (event: MouseEvent<HTMLTableRowElement>) => void;

    /**
     * @private
     */
    rowIndex?: number;
  }
>;

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (
    {rowIndex = 0, isSelected = false, level, onSelectToggle, onClick, draggable, children, ...rest}: TableRowProps,
    forwardedRef: Ref<HTMLTableRowElement>
  ) => {
    const {isSelectable, displayCheckbox, isDragAndDroppable, hasWarningRows, hasLockedRows, dragAndDropMode} =
      useContext(TableContext);
    const [placeholderPosition, placeholderDragEnter, placeholderDragLeave, placeholderDragEnd] =
      usePlaceholderPosition(rowIndex, dragAndDropMode);

    if (isSelectable && (undefined === isSelected || undefined === onSelectToggle)) {
      throw Error('A row in a selectable table should have the prop "isSelected" and "onSelectToggle"');
    }
    const {index: draggedElementIndex, onDragStart, onDragEnd} = useContext(DraggedElementContext);

    const handleCheckboxChange = (event: SyntheticEvent) => {
      event.stopPropagation();
      onSelectToggle?.(!isSelected);
    };

    const handleDragEnter = () => {
      if (null !== draggedElementIndex) {
        placeholderDragEnter(draggedElementIndex);
      }
    };

    const handleDragStart = (event: DragEvent<HTMLTableRowElement>) => {
      event.dataTransfer.setData('text', rowIndex.toString());
      onDragStart?.(rowIndex);
    };

    const handleDragEnd = () => {
      placeholderDragEnd();
      onDragEnd?.();
    };

    return (
      <RowContainer
        ref={forwardedRef}
        isClickable={undefined !== onClick}
        isSelected={!!isSelected}
        level={level}
        isDragAndDroppable={isDragAndDroppable}
        onClick={onClick}
        placeholderPosition={isDragAndDroppable ? placeholderPosition : 'none'}
        draggable={isDragAndDroppable && draggable}
        data-draggable-index={rowIndex}
        onDragEnter={handleDragEnter}
        onDragLeave={placeholderDragLeave}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        {...rest}
      >
        {isSelectable && (
          <CheckboxContainer
            aria-hidden={!displayCheckbox && !isSelected}
            isVisible={displayCheckbox || !!isSelected}
            onClick={handleCheckboxChange}
          >
            <Checkbox
              checked={isSelected}
              onChange={(_value, e) => {
                handleCheckboxChange(e);
              }}
            />
          </CheckboxContainer>
        )}
        {isDragAndDroppable && (
          <HandleCell
            onMouseDown={() => onDragStart?.(rowIndex)}
            onMouseUp={onDragEnd}
            data-testid="dragAndDrop"
            readonly={draggable === false}
          >
            <RowIcon size={16} />
          </HandleCell>
        )}
        {hasWarningRows && (
          <TableCell>
            {level === 'warning' && React.cloneElement(getIcon(level), {size: 16, 'data-testid': 'warning-icon'})}
          </TableCell>
        )}
        {children}
        {hasLockedRows && (
          <TableCell>
            {level === 'tertiary' && React.cloneElement(getIcon(level), {size: 16, 'data-testid': 'lock-icon'})}
          </TableCell>
        )}
      </RowContainer>
    );
  }
);

export {TableRow};
export type {TableRowProps};
