'use client';
import type { FC, PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { CssBaseline, LinearProgress } from '@mui/material';

import { ThemeProvider } from '@/context/themeProvider';
import { store } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

/**
 * we cant use context api inside server components.
 * this component is responsible for wrapping server components and passing down provider values
 * @param {ReactNode} children
 */
const Providers: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default Providers;
