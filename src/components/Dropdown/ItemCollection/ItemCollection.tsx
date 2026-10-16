import {Override} from '../../../shared/override';
import {Key} from '../../../shared/key';
import React, {ReactNode, Children, useRef, useCallback, KeyboardEvent, isValidElement, ReactElement} from 'react';
import styled from 'styled-components';
import {useAutoFocus} from '../../../hooks/useAutoFocus';
import {useCombinedRefs} from '../../../hooks/useCombinedRefs';
import {usePagination} from '../../../hooks/usePagination';
import {Placeholder} from '../../Placeholder/Placeholder';
import {IllustrationProps} from '../../../illustrations/IllustrationProps';
import {getFontSize} from '../../../theme/theme';
import {ITEM_SELECTOR, NAVIGABLE_ITEM_SELECTOR} from '../Item/Item';

const ItemCollectionContainer = styled.div`
  max-height: 320px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const NoResultPlaceholderContainer = styled(Placeholder)`
  margin: 10px 10px 20px 10px;
  & > div {
    font-size: ${getFontSize('default')};
  }
`;

const LISTBOX_SELECTOR = '[role="listbox"]';

type ItemCollectionProps = Override<
  React.HTMLAttributes<HTMLDivElement>,
  {
    /**
     * Handler called when the next page is almost reached.
     */
    onNextPage?: () => void;

    /**
     * The list of items.
     */
    children?: ReactNode;

    /**
     * The illustration displayed when no result was found.
     */
    noResultIllustration?: ReactElement<IllustrationProps>;

    /**
     * The text displayed when no result was found.
     */
    noResultTitle?: string;
  }
>;

const ItemCollection = React.forwardRef<HTMLDivElement, ItemCollectionProps>(
  (
    {children, onNextPage, noResultTitle, noResultIllustration, onKeyDown, ...rest}: ItemCollectionProps,
    forwardedRef
  ) => {
    const sentinelRef = useRef<HTMLDivElement>(null);
    const containerRef = useCombinedRefs(forwardedRef);

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLDivElement>) => {
        onKeyDown?.(event);

        if ((Key.ArrowDown !== event.key && Key.ArrowUp !== event.key) || event.defaultPrevented) return;

        const currentItem = event.target instanceof Element ? event.target.closest<HTMLElement>(ITEM_SELECTOR) : null;
        if (null === currentItem || null === containerRef.current) return;

        event.preventDefault();
        const navigableItems = Array.from(containerRef.current.querySelectorAll<HTMLElement>(NAVIGABLE_ITEM_SELECTOR));
        const currentIndex = navigableItems.indexOf(currentItem);
        const nextIndex = Key.ArrowDown === event.key ? currentIndex + 1 : currentIndex - 1;
        navigableItems[nextIndex]?.focus();
      },
      [onKeyDown]
    );

    const childrenCount = Children.toArray(children).filter(isValidElement).length;

    usePagination(containerRef, sentinelRef, onNextPage, true);

    useAutoFocus(containerRef, NAVIGABLE_ITEM_SELECTOR);

    return (
      <ItemCollectionContainer role="listbox" {...rest} onKeyDown={handleKeyDown} ref={containerRef}>
        {childrenCount
          ? children
          : noResultIllustration &&
            noResultTitle && <NoResultPlaceholderContainer illustration={noResultIllustration} title={noResultTitle} />}
        <div ref={sentinelRef} aria-hidden="true" />
      </ItemCollectionContainer>
    );
  }
);

export {ItemCollection, LISTBOX_SELECTOR};
