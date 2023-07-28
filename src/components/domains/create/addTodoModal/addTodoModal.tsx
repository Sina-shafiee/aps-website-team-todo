import { Button } from '@mui/material';

import { BaseModal } from '@/components/ui';
import { AddTodoForm } from '@/components/form';

export const AddTodoModal = () => {
  const action = (
    <Button type='submit' form='add-todo-form' variant='contained'>
      Save
    </Button>
  );
  return (
    <BaseModal title='Add Todo' action={action}>
      <AddTodoForm insideModal />
    </BaseModal>
  );
};
