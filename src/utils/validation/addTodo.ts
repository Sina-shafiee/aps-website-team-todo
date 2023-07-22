import * as z from 'zod';
export const addTodoSchema = z.object({
  title: z
    .string({ required_error: 'Title is Required' })
    .min(4, { message: 'Title must be atleast 4 characters' })
    .max(40, { message: 'Title length must be under 40 char.' }),
  description: z
    .string({ required_error: 'Description is Required' })
    .min(8, { message: 'Description must be atleast 8 characters' })
    .max(90, { message: 'Description length must be under 90 char.' }),
});
// extracting the type
export type AddTodoValues = z.infer<typeof addTodoSchema>;
