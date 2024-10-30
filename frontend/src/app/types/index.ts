import { z } from "zod";
import { TodoListItemSchema, TodoListSchema } from "./schema";

export type TodoList = z.infer<typeof TodoListSchema>;
export type TodoListItem = z.infer<typeof TodoListItemSchema>;
