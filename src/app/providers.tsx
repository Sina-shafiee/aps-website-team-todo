'use client';
import type { FC, PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { CssBaseline } from '@mui/material';

import { ThemeProvider } from '@/context/themeProvider';
import { store } from '@/store';

/**
 * we cant use context api inside server components.
 * this component is responsible for wrapping server components and passing down provider values
 * @param {ReactNode} children
 */
const Providers: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default Providers;
