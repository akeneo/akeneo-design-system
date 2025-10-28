import React, {SyntheticEvent, isValidElement, ReactElement, ReactNode, PropsWithChildren, useEffect} from 'react';
import styled, {css} from 'styled-components';
import {AkeneoThemedProps, getColor} from '../../theme/theme';
import {CommonStyle} from '../../theme/common';
import {Checkbox, CheckboxChecked} from '../Checkbox/Checkbox';
import {ArrowRightIcon} from '../../icons/ArrowRightIcon';
import {FolderIcon} from '../../icons/FolderIcon';
import {FolderPlainIcon} from '../../icons/FolderPlainIcon';
import {FoldersIcon} from '../../icons/FoldersIcon';
import {FoldersPlainIcon} from '../../icons/FoldersPlainIcon';
import {LoaderIcon} from '../../icons/LoaderIcon';
import {Highlight} from './Highlight';

const folderIconCss = css`
  vertical-align: middle;
  transition: color 0.2s ease;
  margin-right: 5px;
`;

const TreeContainer = styled.li`
  display: block;
  color: ${getColor('grey140')};
`;

const SubTreesContainer = styled.ul`
  margin: 0 0 0 20px;
  padding: 0;
`;

const TreeArrowIcon = styled(ArrowRightIcon)<{$isFolderOpen: boolean} & AkeneoThemedProps>`
  transform: rotate(${({$isFolderOpen}) => ($isFolderOpen ? '90' : '0')}deg);
  transition: transform 0.2s ease-out;
  vertical-align: middle;
  color: ${getColor('grey100')};
  cursor: pointer;
`;

const TreeLeafNotSelectedIcon = styled(FolderIcon)`
  ${folderIconCss}
`;

const TreeFolderSelectedIcon = styled(FoldersPlainIcon)`
  ${folderIconCss}
  color: ${getColor('blue100')};
`;

const TreeLeafSelectedIcon = styled(FolderPlainIcon)`
  ${folderIconCss}
  color: ${getColor('blue100')};
`;

const TreeFolderNotSelectedIcon = styled(FoldersIcon)`
  ${folderIconCss}
`;

const TreeLoaderIcon = styled(LoaderIcon)`
  ${folderIconCss}
  color: ${getColor('grey100')};
`;

const ValueLabel = styled.span`
  color: ${getColor('grey', 100)};
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  line-height: normal;
  overflow: hidden;
`;

const CodeLabel = styled.span`
  color: ${getColor('grey', 100)};
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LabelText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TreeLine = styled.div<{$selected?: CheckboxChecked} & AkeneoThemedProps>`
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-right: 20px;
  ${({$selected}) =>
    $selected &&
    css`
      color: ${getColor('blue100')};
    `}
`;

const NodeCheckbox = styled(Checkbox)`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`;

const ArrowButton = styled.button`
  height: 30px;
  width: 30px;
  vertical-align: middle;
  margin-right: 2px;
  padding: 0;
  border: none;
  background: none;
  &:not(:disabled) {
    cursor: pointer;
  }
`;

const LabelWithFolder = styled.button<{$selected?: CheckboxChecked} & AkeneoThemedProps>`
  ${CommonStyle}
  height: 30px;
  vertical-align: middle;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 5px 0 0;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: calc(100% - 35px);
  text-align: left;
  white-space: nowrap;
  ${({$selected}) =>
    $selected &&
    css`
      color: ${getColor('blue100')};
    `}
  &:hover {
    ${({$selected}) =>
      !$selected &&
      css`
        color: ${getColor('grey140')};
      `}
  }
`;

const TreeIcon: React.FC<{
  isLoading: boolean;
  isLeaf: boolean;
  selected: boolean | 'mixed';
}> = ({isLoading, isLeaf, selected}) => {
  if (isLoading) {
    return <TreeLoaderIcon size={24} />;
  }

  const isSelected = selected === true || selected === 'mixed';

  if (isLeaf) {
    return isSelected ? <TreeLeafSelectedIcon size={24} /> : <TreeLeafNotSelectedIcon size={24} />;
  }

  return isSelected ? <TreeFolderSelectedIcon size={24} /> : <TreeFolderNotSelectedIcon size={24} />;
};

export type TreeProps<T = string> = {
  value: T;
  label: string;
  isLeaf?: boolean;
  selected?: boolean | 'mixed';
  isLoading?: boolean;
  selectable?: boolean;
  readOnly?: boolean;
  onOpen?: (value: T) => void;
  onClose?: (value: T) => void;
  onChange?: (value: T, checked: boolean, event: SyntheticEvent) => void;
  onClick?: (value: T) => void;
  defaultOpen?: boolean;
  _isRoot?: boolean;
  children?: ReactNode;
  valueLabel?: string;
  highlight?: string;
  additional?: ReactNode;
  hideIcons?: boolean;
  code?: string;
};

const TreeComponent = React.forwardRef(function Tree<T>(
  {
    label,
    value,
    children,
    isLeaf = false,
    selected = false,
    isLoading = false,
    selectable = false,
    readOnly = false,
    onChange,
    onOpen,
    onClose,
    onClick,
    defaultOpen = false,
    _isRoot = true,
    valueLabel,
    highlight = '',
    additional,
    hideIcons = false,
    code,
    ...rest
  }: PropsWithChildren<TreeProps<T>>,
  forwardRef: React.ForwardedRef<HTMLLIElement>
) {
  const subTrees: ReactElement<TreeProps<T>>[] = [];
  React.Children.forEach(children, child => {
    if (null === child) {
      return;
    }
    if (!isValidElement<TreeProps<T>>(child)) {
      throw new Error('Tree component only accepts Tree as children');
    }
    subTrees.push(child);
  });

  const [isOpen, setOpen] = React.useState<boolean>(subTrees.length > 0);

  useEffect(() => {
    if (subTrees.length > 0 && defaultOpen) {
      setOpen(true);
    }
  }, [subTrees.length, defaultOpen]);

  const handleOpen = React.useCallback(() => {
    setOpen(true);
    if (onOpen) {
      onOpen(value);
    }
  }, [onOpen, value]);

  const handleClose = React.useCallback(() => {
    setOpen(false);
    if (onClose) {
      onClose(value);
    }
  }, [onClose, value]);

  const handleArrowClick = React.useCallback(() => {
    if (isLeaf) {
      return;
    }

    isOpen ? handleClose() : handleOpen();
  }, [isOpen, handleClose, handleOpen, isLeaf]);

  const handleClick = React.useCallback(() => {
    if (onClick) {
      onClick(value);
    } else {
      handleArrowClick();
    }
  }, [handleArrowClick, onClick, value]);

  const handleSelect = React.useCallback(
    (checked: CheckboxChecked, event: SyntheticEvent) => {
      if (onChange) {
        onChange(value, checked as boolean, event);
      }
    },
    [onChange, value]
  );

  // https://www.w3.org/WAI/GL/wiki/Using_ARIA_trees
  const result = (
    <TreeContainer ref={forwardRef} role="treeitem" aria-expanded={isOpen} {...rest}>
      <TreeLine $selected={selected}>
        <ArrowButton disabled={isLeaf} role="button" onClick={handleArrowClick}>
          {!isLeaf && <TreeArrowIcon $isFolderOpen={isOpen} size={14} />}
        </ArrowButton>

        {selectable && <NodeCheckbox checked={selected} onChange={handleSelect} readOnly={readOnly} />}

        <LabelWithFolder onClick={handleClick} $selected={selected} title={label} aria-selected={Boolean(selected)}>
          {!hideIcons && <TreeIcon isLoading={isLoading} isLeaf={isLeaf} selected={selected} />}
          {code ? (
            <LabelContainer>
              <CodeLabel>{code}</CodeLabel>
              <LabelText>
                <Highlight highlight={highlight}>{label}</Highlight>
              </LabelText>
            </LabelContainer>
          ) : (
            <Highlight highlight={highlight}>{label}</Highlight>
          )}{' '}
          {additional}
          {valueLabel && (
            <ValueLabel>
              <Highlight highlight={highlight}>{valueLabel}</Highlight>
            </ValueLabel>
          )}
        </LabelWithFolder>
      </TreeLine>
      {isOpen && !isLeaf && subTrees.length > 0 && (
        <SubTreesContainer role="group">
          {subTrees.map(subTree =>
            React.cloneElement(subTree, {
              key: JSON.stringify(subTree.props.value),
              defaultOpen: defaultOpen,
              _isRoot: false,
            })
          )}
        </SubTreesContainer>
      )}
    </TreeContainer>
  );

  return _isRoot ? <ul role="tree">{result}</ul> : result;
}) as <T>(props: TreeProps<T> & {ref?: React.ForwardedRef<HTMLLIElement>}) => JSX.Element;

const Tree = Object.assign(TreeComponent, {
  displayName: 'Tree',
});

export {Tree};
