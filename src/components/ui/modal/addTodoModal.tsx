'use client';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { addTodo, useAppDispatch } from '@/store';

import { Button, CircularProgress, LinearProgress, Stack } from '@mui/material';

import { zodResolver } from '@hookform/resolvers/zod';
import { addTodoSchema, AddTodoValues } from '@/utils';

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
  const _ = useAppDispatch();
  const router = useRouter();
  const { control, handleSubmit } = useForm<AddTodoValues>({
    resolver: zodResolver(addTodoSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    shouldFocusError: true,
  });
  const onSubmit = (data: AddTodoValues) => {
    _(addTodo(data));
    router.back();
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
