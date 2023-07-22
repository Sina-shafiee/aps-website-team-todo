import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';

export const TaskCard = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant='h5' component='div'>
            -----------------------------
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ ml: 'auto', boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}
            color='secondary'
            variant='contained'
            size='small'
          >
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
