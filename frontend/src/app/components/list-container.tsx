import TodoList from "./todo-list";
import { TodoList as TodoListType } from "../types";

interface ListContainerProps {
  lists: TodoListType[];
}

export default function ListContainer({ lists }: ListContainerProps) {
  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4">
      {lists.map((list, idx) => (
        <div
          key={list.title + "-" + idx}
          className="flex justify-center items-center"
        >
          <TodoList list={list} />
        </div>
      ))}
    </div>
  );
}
