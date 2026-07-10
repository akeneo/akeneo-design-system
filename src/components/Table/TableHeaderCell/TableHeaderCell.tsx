import React, {ReactNode, Ref, useContext} from 'react';
import styled, {css} from 'styled-components';
import {ArrowSimpleDownIcon} from '../../../icons/ArrowSimpleDownIcon';
import {ArrowSimpleUpIcon} from '../../../icons/ArrowSimpleUpIcon';
import {AkeneoThemedProps, getColor} from '../../../theme/theme';
import {TableContext} from '../TableContext';

type TableSortDirection = 'descending' | 'ascending' | 'none';

type TableHeaderCellProps = {
  /**
   * Define if the header can be sorted.
   */
  isSortable?: boolean;

  /**
   * Function called when the user click on sort icon, required when isSortable.
   */
  onDirectionChange?: (direction: TableSortDirection) => void;

  /**
   * Define the sort direction.
   */
  sortDirection?: TableSortDirection;

  /**
   * Content of the header cell.
   */
  children?: ReactNode;
};

const HeaderCellContainer = styled.th<{$isSortable: boolean; $isSorted: boolean} & AkeneoThemedProps>`
  background: linear-gradient(to top, ${getColor('grey', 120)} 1px, ${getColor('white')} 0px);
  height: 44px;
  text-align: left;
  color: ${({$isSorted}) => getColor($isSorted ? 'brand' : 'grey', 100)};
  font-weight: normal;
  box-sizing: content-box;

  ${({$isSortable}) =>
    $isSortable &&
    css`
      cursor: pointer;
    `};
`;

const HeaderCellContentContainer = styled.span<{$wrapText: boolean}>`
  color: ${getColor('grey', 140)};
  padding: 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  + svg {
    vertical-align: middle;
  }

  ${props =>
    props.$wrapText &&
    css`
      max-width: 40ch;
      white-space: normal;
      overflow: visible;
      overflow-wrap: break-word;
      text-overflow: clip;
    `}
`;

const TableHeaderCell = React.forwardRef<HTMLTableHeaderCellElement, TableHeaderCellProps>(
  (
    {isSortable = false, onDirectionChange, sortDirection, children, ...rest}: TableHeaderCellProps,
    forwardedRef: Ref<HTMLTableHeaderCellElement>
  ) => {
    const {wrapText} = useContext(TableContext);

    if (isSortable && (onDirectionChange === undefined || sortDirection === undefined)) {
      throw Error('Sortable header should provide onDirectionChange and direction props');
    }

    if (!isSortable && (onDirectionChange !== undefined || sortDirection !== undefined)) {
      throw Error('Not sortable header does not provide onDirectionChange and direction props');
    }

    const handleClick = () => {
      switch (sortDirection) {
        case 'ascending':
          onDirectionChange && onDirectionChange('descending');
          break;
        case 'descending':
        case 'none':
          onDirectionChange && onDirectionChange('ascending');
          break;
      }
    };

    return (
      <HeaderCellContainer
        $isSorted={sortDirection !== 'none'}
        $isSortable={isSortable}
        aria-sort={sortDirection}
        onClick={handleClick}
        {...rest}
      >
        <HeaderCellContentContainer ref={forwardedRef} $wrapText={wrapText}>
          {children}
        </HeaderCellContentContainer>
        {isSortable &&
          (sortDirection === 'descending' || sortDirection === 'none' ? (
            <ArrowSimpleDownIcon size={14} />
          ) : (
            <ArrowSimpleUpIcon size={14} />
          ))}
      </HeaderCellContainer>
    );
  }
);

export {TableHeaderCell};
