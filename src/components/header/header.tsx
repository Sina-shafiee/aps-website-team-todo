import { IconButton, Typography } from '@mui/material';
import { AppBar } from '../styled';

export const Header = () => {
  return (
    <AppBar component='header' position='static' color='inherit'>
      <Typography variant='h5'>Welcome</Typography>
      <IconButton>hello</IconButton>
    </AppBar>
  );
};
