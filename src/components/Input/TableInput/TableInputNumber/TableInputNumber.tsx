import React from 'react';
import {TableInputRow} from '../TableInputRow/TableInputRow';
import styled from 'styled-components';
import {NumberInput, NumberInputProps} from '../../NumberInput/NumberInput';
import {AkeneoThemedProps, getColor} from '../../../../theme/theme';
import {Override} from '../../../../shared/override';
import {TableInputReadOnlyCell} from '../shared/TableInputReadOnlyCell';
import {TableInputContext} from '../TableInputContext';
import {highlightCell} from '../shared/highlightCell';

const EditableTableInputNumber = styled(NumberInput)<{highlighted?: boolean; inError?: boolean} & AkeneoThemedProps>`
  height: 39px;
  padding-left: 10px;
  padding-right: 35px;
  border-radius: 0;
  border: none;
  background: none;

  ${highlightCell};

  &:focus {
    box-shadow: 0 0 0 1px ${getColor('grey', 100)};
  }
`;

type TableInputNumberProps = Override<
  NumberInputProps,
  {
    highlighted?: boolean;
    inError?: boolean;
  }
>;

const TableInputNumber = ({children, value, ...rest}: TableInputNumberProps) => {
  const {readOnly} = React.useContext(TableInputContext);
  if (readOnly) {
    return <TableInputReadOnlyCell title={value}>{value}</TableInputReadOnlyCell>;
  } else
    return (
      <EditableTableInputNumber value={value} {...rest}>
        {children}
      </EditableTableInputNumber>
    );
};

TableInputRow.displayName = 'TableInput.NumberInput';

export {TableInputNumber};
export type {TableInputNumberProps};
