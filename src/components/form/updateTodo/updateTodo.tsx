'use client';
import { FormEventHandler } from 'react';
import { Stack, Typography } from '@mui/material';
import { TextField, Checkbox } from '@/components/ui';

export const UpdateTodoForm = ({
  control,
  handleSubmit,
}: {
  control: any;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <Stack
      component='form'
      sx={{ height: '170px' }}
      justifyContent='space-between'
      id='update-todo-form'
      onSubmit={handleSubmit}
    >
      <Stack gap='12px'>
        <TextField placeHolder='Title' control={control} name='title' />
        <TextField placeHolder='Description' control={control} name='description' />
      </Stack>
      <Stack direction='row' alignItems='center' gap={1}>
        <Checkbox label='Completed? check the box.' control={control} name='is_completed' />
      </Stack>
    </Stack>
  );
};
