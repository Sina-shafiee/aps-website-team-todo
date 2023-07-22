'use client';
import dynamic from 'next/dynamic';
import { addTodoSchema, AddTodoValues } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, CircularProgress, LinearProgress, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { BaseModal } from './baseModal';
const AddTodoForm = dynamic(() => import('@/components/form').then((c) => c.AddTodoForm), {
  ssr: false,
  loading: () => (
    <Stack sx={{ height: '120px' }} alignItems='center' justifyContent='center'>
      <CircularProgress />
    </Stack>
  ),
});
export const AddTodoModal = () => {
  const { control, handleSubmit } = useForm<AddTodoValues>({
    resolver: zodResolver(addTodoSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
  });
  const onSubmit = (data: AddTodoValues) => {
    console.log(data);
  };
  const action = (
    <Button type='submit' form='add-todo-form' variant='contained'>
      Save
    </Button>
  );
  return (
    <BaseModal title='Add Todo' action={action}>
      <AddTodoForm handleSubmit={handleSubmit(onSubmit)} control={control} />
    </BaseModal>
  );
};
