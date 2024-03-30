"use client";

import { Status } from "@/lib/store";
import { TaskCard } from "./Task";

export default function Column({
  title,
  status,
}: {
  title: string;
  status: Status;
}) {
  return (
    <div className="p-2 w-1/3 space-y-2">
      <h1 className="font-bold text-xl">{title}</h1>
      <div className="bg-gray-200 dark:bg-[#293C55] p-4 rounded-md">
        <TaskCard />
      </div>
    </div>
  );
}
