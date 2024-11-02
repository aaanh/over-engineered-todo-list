import { Button } from "@/components/ui/button";
import { LucidePlusCircle } from "lucide-react";

export default function ControlMenu() {
  return (
    <div className="p-4 flex gap-4">
      <Button className="">
        <LucidePlusCircle /> Add new list
      </Button>
    </div>
  );
}
