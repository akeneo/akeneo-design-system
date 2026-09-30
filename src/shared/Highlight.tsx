import React from 'react';
import styled from 'styled-components';
import {getColor} from '../theme/theme';

const Highlighted = styled.span`
  background-color: ${getColor('brand', 20)};
`;

const Highlight: React.FC<{children: string; highlight: string}> = ({children, highlight}) => {
  const index = '' === highlight ? -1 : children.toLowerCase().indexOf(highlight.toLowerCase());
  if (index < 0) {
    return <span>{children}</span>;
  }

  const left = children.substring(0, index);
  const middle = children.substring(index, index + highlight.length);
  const right = children.substring(index + highlight.length);

  return (
    <>
      {'' !== left && <span>{left}</span>}
      <Highlighted>{middle}</Highlighted>
      {'' !== right && <span>{right}</span>}
    </>
  );
};

export {Highlight};
