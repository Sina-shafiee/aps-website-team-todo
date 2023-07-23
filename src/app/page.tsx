import { Button, Stack, Typography } from '@mui/material';

import { Shell } from '@/components/ui';
import { TaskList } from '@/components/domains/home';
import Link from 'next/link';

const Home = () => {
  return (
    <Shell>
      <Stack direction='row' alignItems='center' py={2} justifyContent='space-between'>
        <Typography variant='h5'>Your Todos</Typography>
        <Button component={Link} href='/create' variant='contained'>
          Add New Todo
        </Button>
      </Stack>
      <TaskList />
    </Shell>
  );
};

export default Home;
