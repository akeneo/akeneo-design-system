import styled from 'styled-components';
import React, {Ref} from 'react';

const TableInputTd = styled.td`
  padding: 0;
  min-width: 150px;
  max-width: 250px;
`;

type TableInputCellProps = React.TdHTMLAttributes<HTMLTableCellElement>;

const TableInputCell = React.forwardRef<HTMLTableCellElement, TableInputCellProps>(
  ({children, ...rest}: TableInputCellProps, forwardedRef: Ref<HTMLTableCellElement>) => {
    return (
      <TableInputTd ref={forwardedRef} {...rest}>
        {children}
      </TableInputTd>
    );
  }
);

TableInputCell.displayName = 'TableInput.Cell';

export {TableInputCell};
