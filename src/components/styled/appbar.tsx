'use client';
import { AppBar as MuiAppbar, AppBarProps, styled } from '@mui/material';

export const AppBar = styled(MuiAppbar)<AppBarProps>(({ theme }) => ({
  ...theme.mixins.toolbar,
  background: 'inherit',
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '1rem',
}));
