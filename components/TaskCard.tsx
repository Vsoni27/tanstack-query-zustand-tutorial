"use client";

import { useTaskStore } from "@/lib/Providers/task-store-provider";
import { Task } from "@/lib/store";
import { cn } from "@/lib/utils";
import { MdDelete } from "react-icons/md";

export function TaskCard({ data }: { data: Task }) {
  const { deleteTask, dragTask } = useTaskStore((task) => task);

  return (
    <div
      className={cn(
        "flex items-center justify-between bg-white px-5 py-1 rounded-2xl border-4",
        {
          "border-red-600": data.status === "TODO",
          "border-purple-700": data.status === "IN_PROGRESS",
          "border-green-500": data.status === "DONE",
        }
      )}
      draggable
      onDrag={() => dragTask(data.id)}
      style={{cursor: "grab"}}
    >
      <div className="flex flex-col w-2/3">
        <h1 className="text-lg font-bold text-gray-800 ">{data.title}</h1>
        <p className="text-sm text-gray-600 font-medium text-clip overflow-hidden ...">
          {data.description}
        </p>
      </div>
      <MdDelete
        onClick={() => deleteTask(data.id)}
        style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
      />
    </div>
  );
}
