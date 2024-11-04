import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { LucidePlusCircle } from "lucide-react";
import CreateListModal from "./create-list-modal";

export default function ControlMenu() {
  return (
    <div className="flex gap-4 p-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <LucidePlusCircle /> Add new list
          </Button>
        </DialogTrigger>
        <CreateListModal />
      </Dialog>
    </div>
  );
}
