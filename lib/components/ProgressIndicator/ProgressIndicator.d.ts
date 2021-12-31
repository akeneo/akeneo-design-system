import React, { ReactNode, HTMLAttributes } from 'react';
import { Override } from '../../shared';
declare type StepState = 'done' | 'inprogress' | 'todo';
declare type ProgressIndicatorProps = Override<HTMLAttributes<HTMLUListElement>, {
    children?: ReactNode;
}>;
declare const ProgressIndicator: {
    ({ children, ...rest }: ProgressIndicatorProps): JSX.Element;
    Step: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLLIElement>, "disabled" | "children" | "current" | "state"> & {
        current?: boolean | undefined;
        state?: StepState | undefined;
        disabled?: boolean | undefined;
        children?: ReactNode;
    } & React.RefAttributes<HTMLLIElement>>;
};
export { ProgressIndicator };
