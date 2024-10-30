import { z } from "zod";

export const TodoListItemSchema = z.object({
  itemName: z.string(),
  description: z.string().optional().default(""),
});

export const TodoListSchema = z.object({
  listId: z.string(),
  title: z.string(),
  description: z.string().optional().default(""),
  items: z.array(TodoListItemSchema).optional(),
});
