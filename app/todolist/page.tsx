import Column from "@/components/Column";
import { CreateNewToDoDialog } from "@/components/Form/CreateNewToDoDialog";

export default function ToDoPage() {
  return (
    <div className="p-8 h-full">
      <CreateNewToDoDialog />

      <section className="mt-10 flex gap-6 lg:gap-12 h-5/6">
        <Column title="Todo" status="TODO" />
        <Column title="In Progress" status="IN_PROGRESS" />
        <Column title="Done" status="DONE" />
      </section>
    </div>
  );
}
