'use client';
import type { PropsWithChildren, FC } from 'react';
import { ThemeProvider } from '@mui/material';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@/store';

/**
 * we cant use context api inside server components.
 * this component is responsible for wrapping server components and passing down provider values
 * @param {ReactNode} children
 */
const Providers: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={{}}>{children}</ThemeProvider>
    </ReduxProvider>
  );
};

export default Providers;
