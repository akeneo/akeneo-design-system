import React, {Children, useMemo} from 'react';
import styled from 'styled-components';
import {Override} from '../../shared';
import {AkeneoThemedProps, getColor} from '../../theme';
import {AvatarProps} from './types';

const AvatarListContainer = styled.div<Partial<AvatarsProps> & AkeneoThemedProps>`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  & > * {
    position: relative;
  }
`;

const RemainingAvatar = styled.span`
  height: 32px;
  width: 32px;
  color: ${getColor('grey', 120)};
  border: 1px solid;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 32px;
`;

type AvatarsProps = Override<
  React.HTMLAttributes<HTMLDivElement>,
  {
    max: number;
    maxTitle?: number;
  }
>;

const Avatars: React.FC<AvatarsProps> = ({max, maxTitle = 10, children, ...rest}) => {
  const childrenArray = Children.toArray(children);
  const displayedChildren = childrenArray.slice(0, max);
  const remainingChildren = childrenArray.slice(max, childrenArray.length + 1);
  const remainingChildrenCount = childrenArray.length - max;
  const reverseChildren = displayedChildren.reverse();

  const remainingUsersTitle = useMemo(() => {
    const remainingNames = remainingChildren
      .map(child => {
        if (!React.isValidElement<AvatarProps>(child)) return;
        const {firstName, lastName, username} = child.props;

        return `${firstName || ''} ${lastName || ''}`.trim() || username;
      })
      .slice(0, maxTitle)
      .join('\n');

    if (remainingChildren.length > maxTitle) {
      return remainingNames.concat('\n', '...');
    }

    return remainingNames;
  }, [maxTitle, remainingChildren]);

  return (
    <AvatarListContainer title={rest.title || remainingUsersTitle} {...rest}>
      {remainingChildrenCount > 0 && <RemainingAvatar>+{remainingChildrenCount}</RemainingAvatar>}
      {reverseChildren}
    </AvatarListContainer>
  );
};

export {Avatars};
export type {AvatarsProps};
