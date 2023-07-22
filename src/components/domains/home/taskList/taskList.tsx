import { Grid } from '@mui/material';
import { TaskCard } from '@/components/ui';

export const TaskList = () => {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: 7 })
        .fill(7)
        .map((_, index) => (
          <TaskCard key={index} />
        ))}
    </Grid>
  );
};
