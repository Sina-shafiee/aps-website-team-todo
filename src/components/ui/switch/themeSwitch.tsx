'use client';
import { Fragment } from 'react';
import { useAppDispatch, useAppSelector, toggleTheme } from '@/store';
import { IconButton } from '@mui/material';

import LightIcon from '@/assets/icons/light.svg';
import DarkIcon from '@/assets/icons/dark.svg';

export const ThemeSwitch = () => {
  const _ = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.mode);
  const handleClick = () => {
    _(toggleTheme());
  };

  return (
    <Fragment>
      <IconButton onClick={handleClick}>
        {theme === 'dark' ? (
          <LightIcon style={{ width: '28px', height: '28px' }} />
        ) : (
          <DarkIcon style={{ width: '24px', height: '24px' }} />
        )}
      </IconButton>
    </Fragment>
  );
};
