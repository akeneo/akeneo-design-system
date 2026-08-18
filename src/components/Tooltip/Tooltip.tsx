import React, {HTMLAttributes, ReactNode, useRef, useEffect, RefObject, useState} from 'react';
import {createPortal} from 'react-dom';
import styled, {css} from 'styled-components';
import {Override} from '../../shared/override';
import {HelpPlainIcon} from '../../icons/HelpPlainIcon';
import {AkeneoThemedProps, getColor, getFontSize} from '../../theme/theme';
import {CommonStyle} from '../../theme/common';
import {useBooleanState} from '../../hooks/useBooleanState';

type Direction = 'top' | 'right' | 'bottom' | 'left';

const TooltipIconMargin = 5;
const TooltipContainer = styled.div<{$size?: number}>`
  position: relative;
  display: inline-block;
  ${({$size}) =>
    $size !== undefined &&
    css`
      height: ${$size + TooltipIconMargin * 2}px;
      width: ${$size + TooltipIconMargin * 2}px;
    `}
`;

const TooltipIcon = styled(HelpPlainIcon)`
  margin: ${TooltipIconMargin}px;
  color: ${getColor('blue', 100)};
`;

const TooltipContent = styled.div<
  {
    $direction: Direction;
    width: number;
    $maxWidth?: number;
    $top: number;
    $left: number;
    $offset?: number;
    $contentZIndex?: number;
  } & AkeneoThemedProps
>`
  ${CommonStyle}
  position: fixed;
  z-index: ${({$contentZIndex}) => $contentZIndex ?? 1901};
  border-radius: 4px;
  padding: 10px;
  width: ${({width, $maxWidth}) => (undefined === $maxWidth ? `${width}px` : 'max-content')};
  ${({$maxWidth}) =>
    undefined !== $maxWidth &&
    css`
      max-width: ${$maxWidth}px;
    `}
  color: ${getColor('grey', 120)};
  background: ${getColor('blue', 10)};
  border: 1px solid ${getColor('blue', 40)};
  font-size: ${getFontSize('default')};
  line-height: 1;
  text-transform: none;
  box-shadow: 0 0 16px rgba(89, 146, 199, 0.25);
  top: ${({$top, $direction, $offset = 0}) => {
    switch ($direction) {
      case 'top':
        return `${$top - $offset}px`;
      case 'bottom':
        return `${$top + $offset}px`;
      default:
        return `${$top}px`;
    }
  }};
  left: ${({$left, $direction, $offset = 0}) => {
    switch ($direction) {
      case 'left':
        return `${$left - $offset}px`;
      case 'right':
        return `${$left + $offset}px`;
      default:
        return `${$left}px`;
    }
  }};
  opacity: ${({$top, $left}) => (-1 === $top && -1 === $left ? 0 : 1)};
`;

const TooltipTitle = styled.div`
  color: ${getColor('blue', 120)};
  font-weight: 700;
  margin-bottom: 5px;
`;

const computePosition = (
  direction: Direction,
  parentRef?: RefObject<HTMLDivElement>,
  elementRef?: RefObject<HTMLDivElement>
): number[] => {
  if (
    undefined === parentRef ||
    undefined === elementRef ||
    null === parentRef.current ||
    null === elementRef.current
  ) {
    return [-1, -1];
  }

  const {
    top: parentTop,
    left: parentLeft,
    width: parentWidth,
    height: parentHeight,
  } = parentRef.current.getBoundingClientRect();

  const {width: elementWidth, height: elementHeight} = elementRef.current.getBoundingClientRect();

  const relativeCenterTop = parentTop + parentHeight / 2 - elementHeight / 2;
  const relativeCenterLeft = parentLeft + parentWidth / 2 - elementWidth / 2;

  switch (direction) {
    default:
    case 'top':
      return [parentTop - elementHeight, relativeCenterLeft];
    case 'right':
      return [relativeCenterTop, parentLeft + parentWidth];
    case 'bottom':
      return [parentTop + parentHeight, relativeCenterLeft];
    case 'left':
      return [relativeCenterTop, parentLeft - elementWidth];
  }
};

export type TooltipProps = Override<
  HTMLAttributes<HTMLDivElement>,
  {
    /**
     * Define the direction in which the tooltip will be rendered.
     */
    direction?: Direction;

    /**
     * Define the icon size.
     */
    iconSize?: number;

    /**
     * If provided, define the node to display as trigger.
     */
    trigger?: ReactNode;

    /**
     * Content of the tooltip.
     */
    children: ReactNode;

    /**
     * Define the width of the tooltip.
     */
    width?: number;

    /**
     * If provided, the tooltip fits its content and wraps beyond this width, ignoring `width`.
     */
    maxWidth?: number;

    /**
     * Define the offset of the tooltip content relative to the anchor.
     */
    offset?: number;

    /**
     * Define a custom z-index for the tooltip content.
     */
    contentZIndex?: number;

    /**
     * Delay in milliseconds before the tooltip appears on hover. Defaults to 0 (immediate).
     */
    mouseEnterDelay?: number;
  }
>;

const Tooltip = ({
  direction = 'top',
  iconSize = 24,
  width = 200,
  maxWidth,
  children,
  trigger,
  offset,
  contentZIndex,
  mouseEnterDelay = 0,
  ...rest
}: TooltipProps) => {
  const [isVisible, showTooltip, hideTooltip] = useBooleanState(false);
  const hideTooltipAfterTimeoutRef = useRef<number>();
  const showTooltipAfterDelayRef = useRef<number>();
  const portalNode = document.createElement('div');
  portalNode.setAttribute('id', 'tooltip-root');
  const portalRef = useRef<HTMLDivElement>(portalNode);
  const parentRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<number[]>([0, 0]);

  const showTooltipHandler = () => {
    clearTimeout(hideTooltipAfterTimeoutRef.current);
    clearTimeout(showTooltipAfterDelayRef.current);
    if (mouseEnterDelay > 0) {
      showTooltipAfterDelayRef.current = window.setTimeout(showTooltip, mouseEnterDelay);
    } else {
      showTooltip();
    }
  };

  const hideTooltipAfterTimeout = () => {
    clearTimeout(showTooltipAfterDelayRef.current);
    hideTooltipAfterTimeoutRef.current = window.setTimeout(() => {
      hideTooltip();
    }, 100);
  };

  useEffect(() => {
    document.body.appendChild(portalRef.current);

    return () => {
      document.body.removeChild(portalRef.current);
      clearTimeout(hideTooltipAfterTimeoutRef.current);
      clearTimeout(showTooltipAfterDelayRef.current);
    };
  }, []);

  useEffect(() => {
    setPosition(computePosition(direction, parentRef, contentRef));
  }, [children, direction, parentRef, contentRef, isVisible]);

  const [top, left] = position;

  return (
    <TooltipContainer
      ref={parentRef}
      role="tooltip"
      {...rest}
      $size={trigger ? undefined : iconSize}
      onMouseEnter={showTooltipHandler}
      onMouseLeave={hideTooltipAfterTimeout}
    >
      {trigger || <TooltipIcon size={iconSize} />}
      {isVisible &&
        createPortal(
          <TooltipContent
            ref={contentRef}
            $direction={direction}
            width={width}
            $maxWidth={maxWidth}
            $top={top}
            $left={left}
            $offset={offset}
            $contentZIndex={contentZIndex}
            onMouseEnter={showTooltipHandler}
            onMouseLeave={hideTooltipAfterTimeout}
          >
            {children}
          </TooltipContent>,
          portalRef.current
        )}
    </TooltipContainer>
  );
};

Tooltip.Title = TooltipTitle;

export {Tooltip};
