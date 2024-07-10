import React, { HTMLAttributes, ReactNode } from 'react';
import { Override } from '../../shared';
type StepState = 'done' | 'inprogress' | 'todo';
type ProgressIndicatorProps = Override<HTMLAttributes<HTMLUListElement>, {
    children?: ReactNode;
}>;
declare const ProgressIndicator: {
    ({ children, ...rest }: ProgressIndicatorProps): React.JSX.Element;
    Step: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLLIElement>, "current" | "children" | "disabled" | "state" | "index"> & {
        current?: boolean | undefined;
        state?: StepState | undefined;
        disabled?: boolean | undefined;
        children?: ReactNode;
        index?: number | undefined;
    } & React.RefAttributes<HTMLLIElement>>;
};
export { ProgressIndicator };
