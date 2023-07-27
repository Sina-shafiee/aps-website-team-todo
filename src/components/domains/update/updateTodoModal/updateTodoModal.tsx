import { Button } from '@mui/material';

import { UpdateTodoForm } from '@/components/form';
import { BaseModal } from '@/components/ui';

type Props = {
  id: number;
};

export const UpdateTodoModal = ({ id }: Props) => {
  const action = (
    <Button type='submit' form='update-todo-form' variant='contained'>
      update
    </Button>
  );
  return (
    <BaseModal title='update Todo' action={action}>
      <UpdateTodoForm todoId={id} insideModal />
    </BaseModal>
  );
};
