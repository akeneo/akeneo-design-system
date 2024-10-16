import React from 'react';
import {TableInputRow} from '../TableInputRow/TableInputRow';
import styled from 'styled-components';
import {DateInput, DateInputProps} from '../../DateInput/DateInput';
import {AkeneoThemedProps, getColor} from '../../../../theme/theme';
import {TableInputContext} from '../TableInputContext';
import {TableInputReadOnlyCell} from '../shared/TableInputReadOnlyCell';
import {Override} from '../../../../shared/override';
import {highlightCell} from '../shared/highlightCell';

const EditableTableInputDate = styled(DateInput)<{highlighted?: boolean; inError?: boolean} & AkeneoThemedProps>`
  height: 39px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0;
  border: none;
  background: none;

  ${highlightCell};

  &:focus {
    box-shadow: 0 0 0 1px ${getColor('grey', 100)};
  }
`;

type TableInputDateProps = Override<
  DateInputProps,
  {
    highlighted?: boolean;
    inError?: boolean;
  }
>;

const TableInputDate = ({children, value, ...rest}: TableInputDateProps) => {
  const {readOnly} = React.useContext(TableInputContext);
  if (readOnly) {
    return <TableInputReadOnlyCell title={value}>{value}</TableInputReadOnlyCell>;
  } else
    return (
      <EditableTableInputDate value={value} {...rest}>
        {children}
      </EditableTableInputDate>
    );
};

TableInputRow.displayName = 'TableInput.DateInput';

export {TableInputDate};
