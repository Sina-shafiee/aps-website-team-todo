import { createTheme } from '@mui/material';
import { createContext, PropsWithChildren, useCallback, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { Theme, ThemeContextValue } from './types';

export const themeContext = createContext<Partial<ThemeContextValue>>({ theme: Theme.DARK });

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState(Theme.DARK);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  }, []);

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={createTheme({ palette: { mode: theme } })}>{children}</MuiThemeProvider>
    </themeContext.Provider>
  );
};
