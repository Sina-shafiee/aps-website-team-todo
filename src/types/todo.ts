export type Todo = {
  id: number;
  title: string;
  is_completed: boolean;
  description: string;
};

export type InitialTodoState = Todo[];
