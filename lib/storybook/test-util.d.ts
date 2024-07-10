import { ReactElement } from 'react';
import { RenderOptions } from '@testing-library/react';
declare const customRender: (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => any;
export * from '@testing-library/react';
export { customRender as render };
