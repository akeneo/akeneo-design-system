import React, {Children, cloneElement, HTMLAttributes, isValidElement, ReactNode} from 'react';
import styled, {css} from 'styled-components';
import {AkeneoThemedProps, getColor, getFontSize} from '../../theme/theme';
import {Button, ButtonProps} from '../Button/Button';
import {IconButton, IconButtonProps} from '../IconButton/IconButton';
import {Override} from '../../shared/override';

const SectionTitleContainer = styled.div<{$sticky?: number} & AkeneoThemedProps>`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid ${getColor('grey', 140)};

  ${({$sticky}) =>
    undefined !== $sticky &&
    css`
      position: sticky;
      top: ${$sticky}px;
      background-color: ${getColor('white')};
      z-index: 9;
    `}
`;

const TitleContainer = styled.h2<TitleProps & AkeneoThemedProps>`
  color: ${getColor('grey', 140)};
  font-size: ${getFontSize('big')};
  font-weight: 400;
  text-transform: ${({level}) => ('primary' === level ? 'uppercase' : 'unset')};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

type TitleProps = Override<
  HTMLAttributes<HTMLHeadingElement>,
  {
    level?: 'primary' | 'secondary';
  }
>;

const Title = ({level = 'primary', ...rest}: TitleProps) => (
  <TitleContainer as={'secondary' === level ? 'h3' : 'h2'} level={level} {...rest} />
);

const Spacer = styled.div`
  flex-grow: 1;
`;

const Separator = styled.div`
  border-left: 1px solid ${getColor('grey', 100)};
  margin: 0 10px;
  height: 24px;
`;

const Information = styled.div`
  font-size: ${getFontSize('default')};
  font-weight: normal;
  color: ${getColor('brand', 100)};
  white-space: nowrap;
`;

const StepNumberContainer = styled.span`
  display: inline-block;
  vertical-align: top;
  min-width: 28px;
  height: 23px;
  margin: calc((44px - 23px) / 2) 10px 0 0;
  padding: 0 5px;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: ${getColor('blue', 120)};
  color: ${getColor('white')};
  font-size: ${getFontSize('default')};
  font-weight: 600;
  line-height: 23px;
  text-align: center;
`;

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`;

type StepNumberProps = Override<
  HTMLAttributes<HTMLSpanElement>,
  {
    /**
     * The word announced by screen readers before the number, e.g. "Step".
     */
    label: string;

    /**
     * The number of the step.
     */
    children: ReactNode;
  }
>;

const StepNumber = ({label, children, ...rest}: StepNumberProps) => (
  <StepNumberContainer {...rest}>
    <VisuallyHidden>{label} </VisuallyHidden>
    {children}
  </StepNumberContainer>
);

const Highlight = styled.span`
  font-weight: 700;
`;

type SectionTitleProps = Override<
  HTMLAttributes<HTMLDivElement>,
  {
    /**
     * When set, defines the sticky top position of the Section Title.
     */
    sticky?: number;

    /**
     * The content of the section title.
     */
    children?: ReactNode;
  }
>;

/**
 * The section title allows users to correctly identify the content of the section.
 */
const SectionTitle = ({children, ...rest}: SectionTitleProps) => {
  const decoratedChildren = Children.map(children, child => {
    if (isValidElement<IconButtonProps>(child) && child.type === IconButton) {
      return cloneElement(child, {
        level: 'tertiary',
        size: 'small',
        ghost: 'borderless',
      });
    }

    if (isValidElement<ButtonProps>(child) && child.type === Button) {
      return cloneElement(child, {
        level: 'tertiary',
        size: 'small',
        ghost: true,
        ...child.props,
      });
    }

    return child;
  });

  return <SectionTitleContainer {...rest}>{decoratedChildren}</SectionTitleContainer>;
};

SectionTitle.Title = Title;
SectionTitle.Spacer = Spacer;
SectionTitle.Separator = Separator;
SectionTitle.Information = Information;
SectionTitle.StepNumber = StepNumber;
SectionTitle.Highlight = Highlight;

export {SectionTitle};
