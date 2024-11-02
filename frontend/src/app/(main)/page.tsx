import ControlMenu from "../components/control-menu";
import ListContainer from "../components/list-container";
import { getLists } from "./actions";

export default async function Home() {
  const todoLists = await getLists();
  const placeholder = Array(10).fill(todoLists[0]);

  return (
    <div>
      <ControlMenu />
      <ListContainer lists={placeholder} />
    </div>
  );
}
