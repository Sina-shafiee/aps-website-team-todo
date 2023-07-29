import Link from 'next/link';
import { Button, Stack, Typography } from '@mui/material';

const TodoNotFound = () => {
  return (
    <Stack sx={{ minHeight: '80vh' }} alignItems='center' justifyContent='center'>
      <Typography sx={{ mb: 2 }} variant='h5'>
        The page you are looking for doesn&apos;t exist
      </Typography>
      <Button variant='contained' component={Link} href='/'>
        Back to home
      </Button>
    </Stack>
  );
};

export default TodoNotFound;
