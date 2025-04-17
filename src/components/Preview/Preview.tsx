import React, {
  ReactNode,
  HTMLAttributes,
  cloneElement,
  isValidElement,
  ReactElement,
  useState,
  useRef,
  useEffect,
} from 'react';
import styled, {css} from 'styled-components';
import {AkeneoThemedProps, getColor, getFontSize} from '../../theme/theme';
import {Override} from '../../shared/override';
import {IconButton, IconButtonProps} from '../IconButton/IconButton';
import {ArrowDownIcon} from '../../icons/ArrowDownIcon';
import {ArrowUpIcon} from '../../icons/ArrowUpIcon';
import {IconProps} from '../../icons';

const ANIMATION_DURATION = 100;

const getBackgroundColor = (level: Level) => {
  switch (level) {
    case 'info':
      return getColor('blue', 10);
    case 'warning':
      return getColor('yellow', 10);
    case 'error':
      return getColor('red', 10);
    case 'success':
      return getColor('green', 10);
  }
};

const getFontColor = (level: Level) => {
  switch (level) {
    case 'info':
      return getColor('blue', 100);
    case 'warning':
      return getColor('yellow', 120);
    case 'error':
      return getColor('red', 120);
    case 'success':
      return getColor('green', 120);
  }
};

const getIconColor = (level: Level) => {
  switch (level) {
    case 'info':
      return getColor('blue', 100);
    case 'warning':
      return getColor('yellow', 120);
    case 'error':
      return getColor('red', 120);
    case 'success':
      return getColor('green', 120);
  }
};

const getLinkColor = (level: Level) => {
  switch (level) {
    case 'info':
      return getColor('blue', 100);
    case 'warning':
      return getColor('yellow', 120);
    case 'error':
      return getColor('red', 120);
    case 'success':
      return getColor('green', 120);
  }
};

type Level = 'info' | 'warning' | 'error' | 'success';

const Container = styled.div<{$level: Level} & AkeneoThemedProps>`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 1px solid ${getColor('blue', 40)};
  color: ${props => getFontColor(props.$level)};
  background-color: ${props => getBackgroundColor(props.$level)};
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 15px;
`;

const IconContainer = styled.span<{$level: Level} & AkeneoThemedProps>`
  height: 20px;
  margin: 12px 10px;
  color: ${props => getIconColor(props.$level)};
`;

const PreviewTitle = styled.div<{$level: Level} & AkeneoThemedProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${getFontSize('small')};
  color: ${props => getFontColor(props.$level)};
`;

const PreviewList = styled.div<
  {
    isCollapsable: boolean;
    $height: number;
    $overflow: string;
    shouldAnimate: boolean;
    $level: Level;
  } & AkeneoThemedProps
>`
  overflow-wrap: break-word;
  white-space: break-spaces;
  color: ${getColor('grey', 140)};
  margin-top: ${({$height, isCollapsable}) => (0 === $height && isCollapsable ? 0 : 5)}px;
  ${({isCollapsable, $height, $overflow, shouldAnimate}) =>
    isCollapsable &&
    css`
      max-height: ${$height}px;
      overflow: ${$overflow};
      ${shouldAnimate &&
      css`
        transition: all ${ANIMATION_DURATION}ms ease-in-out;
        transition-property: max-height, margin-top;
      `}
    `}

  a {
    color: ${({$level}) => getLinkColor($level)};
  }
`;

const Highlight = styled.span`
  color: ${getColor('brand', 100)};
  font-weight: bold;
`;

const ActionsContainer = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  height: 0;

  button:hover {
    background: none !important;
  }
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -4px;
  padding: 4px;

  &:hover {
    background: ${getColor('blue', 20)};

    ${ActionsContainer} {
      opacity: 1;
    }
  }
`;

type RowProps = Override<
  HTMLAttributes<HTMLDivElement>,
  {
    /**
     * Add an action that will be displayed on the right of the Preview Row.
     */
    action?: ReactElement<IconButtonProps>;

    /**
     * Content of the Preview Row.
     */
    children?: ReactNode;
  }
>;

const Row = ({action, children}: RowProps) => {
  return (
    <RowContainer>
      {children}
      {action && (
        <ActionsContainer>
          {isValidElement<IconButtonProps>(action) && action.type === IconButton
            ? cloneElement(action, {
                level: 'tertiary',
                ghost: 'borderless',
                size: 'small',
              })
            : action}
        </ActionsContainer>
      )}
    </RowContainer>
  );
};

type PreviewProps = Override<
  HTMLAttributes<HTMLDivElement>,
  {
    /**
     * Title of the preview.
     */
    title: string;

    /**
     * Level of the preview defining its color and icon.
     */
    level?: Level;

    /**
     * Icon to display. If not provided, the Helper will display the corresponding level Icon.
     */
    icon?: ReactElement<IconProps>;

    /**
     * Content of the preview.
     */
    children?: ReactNode;
  } & (
    | {
        /**
         * Whether or not the Preview is open.
         */
        isOpen: boolean;

        /**
         * Label of the collapse button.
         */
        collapseButtonLabel: string;

        /**
         * Handler called when the collapse button is clicked.
         */
        onCollapse: (isOpen: boolean) => void;
      }
    | {
        isOpen?: undefined;
        collapseButtonLabel?: undefined;
        onCollapse?: undefined;
      }
  )
>;

/**
 * Preview component is used to put emphasis on some content.
 */
const Preview = ({
  title,
  level = 'info',
  icon,
  isOpen,
  collapseButtonLabel,
  onCollapse,
  children,
  ...rest
}: PreviewProps) => {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const isCollapsable = undefined !== collapseButtonLabel && undefined !== onCollapse && undefined !== isOpen;

  const handleCollapse = () => onCollapse?.(!isOpen);

  useEffect(() => {
    if (!isCollapsable) return;

    setContentHeight(contentHeight => {
      const scrollHeight = contentRef.current?.scrollHeight ?? 0;

      return 0 === scrollHeight ? contentHeight : scrollHeight;
    });

    const shouldAnimateTimeoutId = window.setTimeout(() => {
      setShouldAnimate(true);
    }, ANIMATION_DURATION);

    return () => {
      window.clearTimeout(shouldAnimateTimeoutId);
    };
  }, [children]);

  return (
    <Container $level={level}>
      {icon && <IconContainer $level={level}>{React.cloneElement(icon, {size: 20})}</IconContainer>}
      <PreviewContainer {...rest}>
        <PreviewTitle $level={level} onClick={handleCollapse}>
          {title}
          {isCollapsable && (
            <IconButton
              icon={isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
              title={collapseButtonLabel}
              level="tertiary"
              ghost="borderless"
              size="small"
            />
          )}
        </PreviewTitle>
        <PreviewList
          ref={contentRef}
          isCollapsable={isCollapsable}
          $overflow={shouldAnimate || !isOpen ? 'hidden' : 'inherit'}
          $height={true === isOpen ? contentHeight : 0}
          shouldAnimate={shouldAnimate}
          aria-hidden={!isOpen}
          $level={level}
        >
          {children}
        </PreviewList>
      </PreviewContainer>
    </Container>
  );
};

Highlight.displayName = 'Preview.Highlight';
Row.displayName = 'Preview.Row';

Preview.Highlight = Highlight;
Preview.Row = Row;

export {Preview};
