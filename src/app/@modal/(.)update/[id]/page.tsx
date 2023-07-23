import React from 'react';
import { UpdateTodoModal } from '@/components/ui';

type Props = { params: { id: string } };

const UpdateModal = ({ params }: Props) => {
  const { id } = params;
  return <UpdateTodoModal id={parseInt(id)} />;
};

export default UpdateModal;
