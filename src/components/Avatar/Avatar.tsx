import React, {useMemo} from 'react';
import styled, {css} from 'styled-components';
import {useTheme} from '../../hooks/useTheme';
import {AkeneoThemedProps, getColor} from '../../theme/theme';
import {AvatarContainerProps, AvatarProps} from './types';

const AvatarContainer = styled.span<AvatarContainerProps & AkeneoThemedProps>`
  ${({size}) =>
    size === 'default'
      ? css`
          height: 32px;
          width: 32px;
          border-radius: 32px;
        `
      : css`
          height: 140px;
          width: 140px;
          border-radius: 140px;
        `}
  ${({size, selected}) =>
    size === 'default' && selected
      ? css`
          padding: 1px;
          border: 3px solid ${getColor('blue', 100)};
          margin: -4px -8px 0 0;
        `
      : css`
          margin-right: -4px;
        `}
  box-sizing: content-box;
  display: inline-block;
  background-color: ${getColor('white')};
`;

const AvatarImage = styled.span<Partial<AvatarProps> & AkeneoThemedProps>`
  ${({size}) =>
    size === 'default'
      ? css`
          line-height: 32px;
          font-size: 15px;
          border-radius: 32px;
        `
      : css`
          line-height: 140px;
          font-size: 66px;
          border-radius: 140px;
        `}
  ${({disabled}) =>
    disabled
      ? css`
          opacity: 50%;
        `
      : css``}
  height: 100%;
  width: 100%;
  display: block;
  color: ${getColor('white')};
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-transform: uppercase;
`;

const Avatar = ({
  username,
  firstName,
  lastName,
  avatarUrl,
  size = 'default',
  disabled = false,
  selected = false,
  ...rest
}: AvatarProps) => {
  const theme = useTheme();

  const fallback = (
    firstName.trim().charAt(0) + lastName.trim().charAt(0) || username.substring(0, 2)
  ).toLocaleUpperCase();
  const title = `${firstName || ''} ${lastName || ''}`.trim() || username;
  const title_container = title + ' container';

  const backgroundColor = useMemo(() => {
    const colorId = username.split('').reduce<number>((s, l) => s + l.charCodeAt(0), 0);
    const colors = [
      theme.colorAlternative.green120,
      theme.colorAlternative.darkCyan120,
      theme.colorAlternative.forestGreen120,
      theme.colorAlternative.oliveGreen120,
      theme.colorAlternative.blue120,
      theme.colorAlternative.darkBlue120,
      theme.colorAlternative.hotPink120,
      theme.colorAlternative.red120,
      theme.colorAlternative.coralRed120,
      theme.colorAlternative.yellow120,
      theme.colorAlternative.orange120,
      theme.colorAlternative.chocolate120,
    ];

    return colors[colorId % colors.length];
  }, [theme, username]);

  const style = avatarUrl ? {backgroundImage: `url(${avatarUrl})`} : {backgroundColor};

  return (
    <AvatarContainer size={size} selected={selected} title={title_container}>
      <AvatarImage size={size} disabled={disabled} {...rest} style={style} title={title}>
        {avatarUrl ? '' : fallback}
      </AvatarImage>
    </AvatarContainer>
  );
};

export {Avatar};
export type {AvatarProps};
