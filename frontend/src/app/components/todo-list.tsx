import type { TodoList, TodoListItem } from "@/app/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TodoList({ list }: { list: TodoList }) {
  return (
    <Card className="shadow border w-[300px]">
      <CardHeader className="bg-foreground/90 shadow mb-2 p-4 rounded-xl text-background">
        <CardTitle className="text-center text-lg">{list.title}</CardTitle>
        <CardDescription className="text-background">
          {list.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {list.items?.map((item: TodoListItem, idx: number) => (
          <div
            key={`${item.itemName}-${idx}`}
            className="gap-2 grid grid-cols-[2rem_1fr]"
          >
            <div className="flex justify-center items-center">
              <span>{idx}</span>
            </div>
            <div className="border-b">
              <p className="font-semibold">{item.itemName}</p>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
