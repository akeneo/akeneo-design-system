import React, { ReactNode } from 'react';
import { Override } from '../../shared';
import { ButtonProps } from '../Button/Button';
type SplitButtonProps = Omit<Override<ButtonProps, {
    label: string;
}>, 'href'>;
declare const SplitButton: {
    ({ label, children, ...rest }: SplitButtonProps): React.JSX.Element;
    Item: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
        children: ReactNode;
    } & React.RefAttributes<HTMLDivElement>>;
};
export { SplitButton };
export type { SplitButtonProps };
