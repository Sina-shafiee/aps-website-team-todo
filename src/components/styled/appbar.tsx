'use client';
import { AppBar as MuiAppbar, AppBarProps, styled } from '@mui/material';

export const AppBar = styled(MuiAppbar)<AppBarProps>(({ theme }) => ({
  background: theme.palette.common.white,
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  ...theme.mixins.toolbar,
}));
