import styled from 'styled-components';
import {getColor, getFontSize} from '../../../theme/theme';
import React from 'react';

const ItemLabel = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  line-height: normal;
  overflow: hidden;
`;

/* The caption keeps its own grey, upright and regular, when the item is active or hovered. */
const Caption = styled.span`
  color: ${getColor('grey', 120)};
  font-size: ${getFontSize('small')};
  font-style: normal;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
`;

type SubtitleProps = {label: string; children?: React.ReactNode};

/** The counterpart of Surtitle: the item's label first, then a caption under it. */
const Subtitle: React.FC<SubtitleProps> = ({label, children, ...rest}) => (
  <SubtitleContainer {...rest}>
    <ItemLabel>{children}</ItemLabel>
    <Caption title={label}>{label}</Caption>
  </SubtitleContainer>
);

export {Subtitle};
