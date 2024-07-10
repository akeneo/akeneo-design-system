import React, { SyntheticEvent, ReactNode, PropsWithChildren } from 'react';
import { CheckboxChecked } from '../Checkbox/Checkbox';
type TreeProps<T = string> = {
    value: T;
    label: string;
    isLeaf?: boolean;
    selected?: CheckboxChecked;
    isLoading?: boolean;
    selectable?: boolean;
    readOnly?: boolean;
    onOpen?: (value: T) => void;
    onClose?: (value: T) => void;
    onChange?: (value: T, checked: boolean, event: SyntheticEvent) => void;
    onClick?: (value: T) => void;
    _isRoot?: boolean;
    children?: ReactNode;
};
declare const Tree: {
    <T>({ label, value, children, isLeaf, selected, isLoading, selectable, readOnly, onChange, onOpen, onClose, onClick, _isRoot, ...rest }: React.PropsWithChildren<TreeProps<T>>): React.JSX.Element;
    displayName: string;
};
export { Tree };
