import Column from "@/components/Column";
import { CreateNewToDoDialog } from "@/components/CreateNewToDoDialog";

export default function ToDoPage() {
  return (
    <div className="p-8">
      <CreateNewToDoDialog />

      <section className="mt-10 flex gap-6 lg:gap-12">
        <Column title="Todo" status="TODO" />
        <Column title="In Progress" status="IN_PROGRESS" />
        <Column title="Done" status="DONE" />
      </section>
    </div>
  );
}
