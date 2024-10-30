import { getLists } from "./actions";
import TodoList from "./components/todo-list";

export default async function Home() {
  const todoLists = await getLists();
  const placeholder = Array(10).fill(todoLists[0]);

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-4">
      {placeholder.map((list, idx) => (
        <div
          key={list.title + "-" + idx}
          className="flex justify-center items-center"
        >
          <TodoList list={list}></TodoList>
        </div>
      ))}
    </div>
  );
}
