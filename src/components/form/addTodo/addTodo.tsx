'use client';
import { Stack } from '@mui/material';
import { TextField } from '@/components/ui';
import { FormEventHandler } from 'react';

export const AddTodoForm = ({
  control,
  handleSubmit,
}: {
  control: any;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <Stack component='form' sx={{ height: '130px' }} spacing='12px' id='add-todo-form' onSubmit={handleSubmit}>
      <TextField placeHolder='Title' control={control} name='title' />
      <TextField placeHolder='Description' control={control} name='description' />
    </Stack>
  );
};
