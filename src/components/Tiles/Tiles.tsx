import React, {Children, FC, isValidElement, KeyboardEvent, ReactNode, Ref, useCallback} from 'react';
import styled, {css} from 'styled-components';
import {IconProps} from '../../icons/IconProps';
import {AkeneoThemedProps, getColor} from '../../theme/theme';
import {Key} from '../../shared/key';
import {Override} from '../../shared/override';
import {Tooltip} from '../Tooltip/Tooltip';

type Size = 'small' | 'big';

const TilesContainer = styled.div<{size: Size} & AkeneoThemedProps>`
  display: grid;
  ${({size}) =>
    size === 'small'
      ? css`
          gap: 20px;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        `
      : css`
          gap: 30px;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        `};
`;

const TileContainer = styled.div<
  {selected: boolean; size: Size; inline: boolean; onClick?: () => void; disabled: boolean} & AkeneoThemedProps
>`
  position: relative;
  margin: 1px;
  ${({size, inline}) => {
    if (!inline) {
      return size === 'small'
        ? css`
            height: 130px;
            text-align: center;
          `
        : css`
            height: 200px;
            text-align: center;
          `;
    }
    return css`
      height: auto;
    `;
  }}
  transition: border-color 0.2s, color 0.2s, background 0.2s;
  ${({onClick, disabled}) =>
    onClick !== undefined &&
    !disabled &&
    css`
      cursor: pointer;
    `}
  ${({selected}) =>
    selected
      ? css`
          border: 2px solid ${getColor('blue', 100)};
          color: ${getColor('blue', 100)};
          margin: 0;
          background: ${getColor('blue', 10)};
        `
      : css`
          border: 1px solid ${getColor('grey', 80)};
        `}
  ${({disabled}) =>
    !disabled &&
    css`
      &:hover {
        border: 2px solid ${getColor('blue', 100)};
        color: ${getColor('blue', 100)};
        margin: 0;
        background: ${getColor('blue', 10)};
      }
    `}
  box-sizing: border-box;
  ${({disabled}) =>
    disabled &&
    css`
      color: ${getColor('grey', 120)};
      cursor: not-allowed;
      background-color: ${getColor('grey', 20)};
    `}

  div[role=tooltip] {
    position: absolute;
    right: 5px;
  }
`;

const IconContainer = styled.div<{size: Size; disabled: boolean} & AkeneoThemedProps>`
  box-sizing: content-box;
  ${({size}) =>
    size === 'small'
      ? css`
          padding: 25px 0 0 0;
          height: 54px;
        `
      : css`
          padding: 40px 0 0 0;
          height: 100px;
        `}
  ${({disabled}) =>
    disabled &&
    css`
      color: ${getColor('grey', 100)};
    `}}
`;
const LabelContainer = styled.div`
  margin: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
`;

const InlineContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type TilesProps = {
  /**
   * Children are Tile components only
   */
  children?: ReactNode;

  /**
   * The size can be 'small' (by default), or 'big'
   */
  size?: Size;

  /**
   * Inline (false by default), make the height auto and the content horizontal
   */
  inline?: boolean;
};

type TileProps = Override<
  React.HTMLAttributes<HTMLDivElement>,
  (
    | {
        icon: React.ReactElement<IconProps>;
        size?: 'big' | 'small';
        inline?: false;
      }
    | {
        size?: 'big' | 'small';
        icon?: undefined;
        inline?: true;
      }
  ) & {
    selected?: boolean;
    onClick?: () => void;
    disabled?: boolean;
  }
>;

const Tile: FC<TileProps> = ({
  icon,
  selected = false,
  size = 'small',
  inline = false,
  onClick,
  children,
  disabled = false,
  ...rest
}) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (null !== event.currentTarget && event.key === Key.Enter) {
        onClick?.();
        event.preventDefault();
      }
    },
    [onClick]
  );

  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  let tooltipChildren = Children.map(children, child => {
    if (isValidElement(child) && child.type === Tooltip) {
      return child;
    }
    return undefined;
  });
  tooltipChildren = Array.isArray(tooltipChildren) ? tooltipChildren.filter(e => !!e) : tooltipChildren;

  let childrenWithoutTooltips = Children.map(children, child => {
    if (isValidElement(child) && child.type === Tooltip) {
      return undefined;
    }
    return child;
  });
  childrenWithoutTooltips = Array.isArray(childrenWithoutTooltips)
    ? childrenWithoutTooltips.filter(e => !!e)
    : childrenWithoutTooltips;

  return (
    <TileContainer
      selected={selected}
      size={size}
      inline={inline}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-disabled={disabled}
      disabled={disabled}
      {...rest}
    >
      {tooltipChildren && <>{tooltipChildren}</>}
      {!inline && icon && (
        <IconContainer size={size} disabled={disabled}>
          {React.cloneElement(icon, {size: size === 'small' ? 54 : 100})}
        </IconContainer>
      )}
      {inline ? (
        <InlineContainer>{childrenWithoutTooltips}</InlineContainer>
      ) : (
        <LabelContainer>{childrenWithoutTooltips}</LabelContainer>
      )}
    </TileContainer>
  );
};

/**
 * The Tiles component provides the user a list of choices, for example, an attribute type, a template, or an export
 * format.
 * It is a visual component made up of an icon and a label.
 */
const Tiles = React.forwardRef<HTMLDivElement, TilesProps>(
  ({size = 'small', inline = false, children, ...rest}: TilesProps, forwardedRef: Ref<HTMLDivElement>) => {
    return (
      <TilesContainer size={size} ref={forwardedRef} {...rest}>
        {React.Children.map(children, child => {
          if (!child) {
            return null;
          }
          if (isValidElement<TileProps>(child) && child.type === Tile) {
            return React.cloneElement(child, {size, inline});
          }
          throw new Error('A Tiles element can only have Tile children');
        })}
      </TilesContainer>
    );
  }
);

export {Tiles, Tile};
