"use client";

import { Task } from "@/lib/store";
import { MdDelete } from "react-icons/md";

export function TaskCard() { // pass (data: Task) after setting up store
  return (
    <div className=" flex items-center justify-between bg-white px-5 py-1 rounded-2xl">
      <div className="flex flex-col w-2/3">
        <h1 className="text-lg font-bold text-gray-800 ">Task Title</h1>
        <p className="text-sm text-gray-600 font-medium text-clip overflow-hidden ...">
          Task Description
        </p>
      </div>
      <MdDelete style={{ color: "red", fontSize: "24px", cursor: "pointer" }} />
    </div>
  );
}
