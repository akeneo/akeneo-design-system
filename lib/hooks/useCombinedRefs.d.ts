import { MutableRefObject } from 'react';
declare type Ref<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;
declare const useCombinedRefs: <T>(...refs: Ref<T>[]) => import("react").RefObject<T>;
export { useCombinedRefs };
