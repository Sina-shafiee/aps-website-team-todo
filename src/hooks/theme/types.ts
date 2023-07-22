export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}
export type ThemeContextValue = { theme: Theme; toggleTheme: () => void };
