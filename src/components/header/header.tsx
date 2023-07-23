import { Button, Stack } from '@mui/material';
import Link from 'next/link';
import { AppBar } from '../styled';
import { Logo, ThemeSwitch } from '../ui';

export const Header = () => {
  return (
    <AppBar component='header' position='static' color='inherit'>
      <Logo />
      <ThemeSwitch />
    </AppBar>
  );
};
