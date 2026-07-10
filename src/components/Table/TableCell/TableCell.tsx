import React, {ReactNode, Ref, useContext} from 'react';
import styled, {css} from 'styled-components';
import {AkeneoThemedProps, getColor} from '../../../theme/theme';
import {Image} from '../../../components/Image/Image';
import {Override} from '../../../shared/override';
import {TableContext} from '../TableContext';

const TableCellContainer = styled.td<{$rowTitle: boolean; $wrapText: boolean} & AkeneoThemedProps>`
  color: ${getColor('grey', 140)};
  border-bottom: 1px solid ${getColor('grey', 60)};
  padding: 15px 10px;
  max-width: 15vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;

  &:has(code) {
    max-width: none;
  }

  ${props =>
    props.$wrapText &&
    css`
      max-width: 40ch;
      white-space: normal;
      overflow: visible;
      overflow-wrap: break-word;
      text-overflow: clip;
      vertical-align: top;

      /* long code tokens (paths/URLs) break instead of overflowing */
      code {
        overflow-wrap: break-word;
      }
    `}

  ${props =>
    props.$rowTitle &&
    css`
      color: ${getColor('brand', 100)};
      font-style: italic;
    `}
`;

const TableCellInnerContainer = styled.div<{$wrapText: boolean}>`
  display: flex;
  align-items: center;
  min-height: 24px;

  ${props =>
    props.$wrapText &&
    css`
      display: block;
    `}
`;

type TableCellProps = Override<
  React.TdHTMLAttributes<HTMLTableCellElement>,
  {
    /**
     * Content of the cell.
     */
    children?: ReactNode;

    /**
     * Define the cell as the title of the row.
     */
    rowTitle?: boolean;
  }
>;

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({children, rowTitle = false, ...rest}: TableCellProps, forwardedRef: Ref<HTMLTableCellElement>) => {
    const {wrapText} = useContext(TableContext);

    return (
      <TableCellContainer ref={forwardedRef} $rowTitle={rowTitle} $wrapText={wrapText} {...rest}>
        <TableCellInnerContainer $wrapText={wrapText}>
          {React.Children.map(children, child => {
            if (!React.isValidElement(child) || child.type !== Image) return child;

            return React.cloneElement(child as any, {
              width: 44,
              height: 44,
            });
          })}
        </TableCellInnerContainer>
      </TableCellContainer>
    );
  }
);

export {TableCell};
