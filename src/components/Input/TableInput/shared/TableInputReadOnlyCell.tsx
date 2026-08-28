import styled from 'styled-components';
import {AkeneoThemedProps, getColor} from '../../../../theme/theme';
import {highlightCell} from './highlightCell';

const TableInputReadOnlyCell = styled.div<{$highlighted?: boolean; $inError?: boolean} & AkeneoThemedProps>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: not-allowed;
  padding: 0 10px;
  color: ${getColor('grey', 100)};
  height: 39px;
  line-height: 39px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${highlightCell};
`;

export {TableInputReadOnlyCell};
