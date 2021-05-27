import { DependencyList } from 'react';
declare const usePaginatedResults: <Type>(fetcher: (page: number) => Promise<Type[]>, dependencies: DependencyList, shouldFetch?: boolean) => readonly [Type[], () => void];
export { usePaginatedResults };
