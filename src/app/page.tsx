import { Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

import { Shell } from '@/components/ui';

const Home = () => {
  return (
    <Shell>
      <Typography>
        <Typography component='span' sx={{ color: blue[400] }}>
          Taskdo{' '}
        </Typography>
        is a powerful tool that will help users keep track of their tasks and stay organized, allowing users to quickly
        add, edit, and delete tasks.
      </Typography>
    </Shell>
  );
};

export default Home;
