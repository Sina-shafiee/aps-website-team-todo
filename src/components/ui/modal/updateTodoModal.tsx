'use client';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { addTodo, updateTodo, useAppDispatch, useAppSelector } from '@/store';

import { Button, CircularProgress, Stack } from '@mui/material';

import { zodResolver } from '@hookform/resolvers/zod';
import { updateTodoSchema, UpdateTodoValues } from '@/utils';

import { BaseModal } from './baseModal';
import { Todo } from '@/types';
import { Fragment } from 'react';

const UpdateTodoForm = dynamic(() => import('@/components/form').then((c) => c.UpdateTodoForm), {
  ssr: false,
  loading: () => (
    <Stack sx={{ height: '170px' }} alignItems='center' justifyContent='center'>
      <CircularProgress />
    </Stack>
  ),
});

type Props = {
  id: number;
};

export const UpdateTodoModal = ({ id }: Props) => {
  const _ = useAppDispatch();
  const router = useRouter();
  const todo = useAppSelector((state) => (state.todos as Todo[]).find((t) => t.id === id));

  if (!todo) {
    throw new Error('Todo not found');
  }

  const { control, handleSubmit } = useForm<UpdateTodoValues>({
    resolver: zodResolver(updateTodoSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    shouldFocusError: true,
    defaultValues: {
      title: todo.title,
      description: todo.description,
      is_completed: todo.is_completed,
    },
  });
  const onSubmit = (data: UpdateTodoValues) => {
    _(updateTodo({ ...data, id }));
    handleCloseModal();
  };

  const handleCloseModal = () => {
    router.back();
  };
  const action = (
    <Fragment>
      <Button onClick={handleCloseModal} variant='outlined'>
        cancel
      </Button>
      <Button type='submit' form='update-todo-form' variant='contained'>
        update
      </Button>
    </Fragment>
  );
  return (
    <BaseModal title='Add Todo' action={action}>
      <UpdateTodoForm handleSubmit={handleSubmit(onSubmit)} control={control} />
    </BaseModal>
  );
};
