"use client";

import { Status, Task } from "@/lib/store";
import { TaskCard } from "./TaskCard";
import { useTaskStore } from "@/lib/Providers/task-store-provider";
import React from "react";

const tempTasks: Task[] = [
  {
    id: "1234",
    title: "Task 1",
    description: "Task to be done",
    status: "TODO",
  },
  {
    id: "468",
    title: "Task 2",
    description: "Task is in progress",
    status: "IN_PROGRESS",
  },
  {
    id: "7496",
    title: "Task 3",
    description: "Task completed",
    status: "DONE",
  },
];

export default function Column({
  title,
  status,
}: {
  title: string;
  status: Status;
}) {
  const { tasks, updateTaskStatus, draggedTaskId, dragTask } = useTaskStore(
    (task) => task
  );
  const filteredData = tasks.filter((task) => task.status === status);
  // console.log(tasks);
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (!draggedTaskId) return;
    updateTaskStatus(draggedTaskId, status);
    dragTask(null);
  };
  return (
    <div className="p-2 w-1/3 space-y-2">
      <h1 className="font-bold text-xl">{title}</h1>
      <div
        className="bg-gray-200 dark:bg-[#293C55] p-4 rounded-md space-y-2 h-full overflow-y-auto scrollbar-hide"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {filteredData.map((task) => (
          <TaskCard key={task.id} data={task} />
        ))}
      </div>
    </div>
  );
}
