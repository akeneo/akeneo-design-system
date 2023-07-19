import React, { HTMLAttributes, ReactNode } from 'react';
import { Override } from '../../shared';
declare type StepState = 'done' | 'inprogress' | 'todo';
declare type ProgressIndicatorProps = Override<HTMLAttributes<HTMLUListElement>, {
    children?: ReactNode;
}>;
declare const ProgressIndicator: {
    ({ children, ...rest }: ProgressIndicatorProps): React.JSX.Element;
    Step: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLLIElement>, "disabled" | "children" | "current" | "state" | "index"> & {
        current?: boolean | undefined;
        state?: StepState | undefined;
        disabled?: boolean | undefined;
        children?: ReactNode;
        index?: number | undefined;
    } & React.RefAttributes<HTMLLIElement>>;
};
export { ProgressIndicator };
