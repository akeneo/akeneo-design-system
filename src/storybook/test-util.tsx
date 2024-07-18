import React, {ComponentType, ReactElement, ReactNode} from 'react';
import {render, RenderOptions} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';
import {pimTheme} from '../themes';

const wrapper: ComponentType = ({children}: {children?: ReactNode}) => (
  <ThemeProvider theme={pimTheme}>{children}</ThemeProvider>
);
const customRender: (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => any = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, {wrapper, ...options});

export * from '@testing-library/react';
export {customRender as render};
