import { create, createStore } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v1 as uuidv1 } from "uuid";

export type Status = "TODO" | "IN_PROGRESS" | "DONE";

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: Status;
};

export type State = {
  tasks: Task[];
  draggedTaskId: string | null;
};

type Action = {
  addTask: (title: string, description?: string) => void;
  deleteTask: (id: string) => void;
  dragTask: (id: string | null) => void;
  updateTaskStatus: (title: string, newStatus: Status) => void;
};

export type TaskStore = State & Action;

export const defaultInitState: State = {
  tasks: [], // will initialize empty array of tasks
  draggedTaskId: null,
};

export const createTaskStore = (initState: State = defaultInitState) => {
  return createStore<TaskStore>()(
    persist(
      (set) => ({
        ...initState,
        addTask: (title: string, description?: string) =>
          set((state) => ({
            tasks: [
              ...state.tasks,
              { id: uuidv1(), title, description, status: "TODO" },
            ],
          })),
        deleteTask: (id: string) =>
          set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
          })),
        dragTask: (id: string | null) =>
          set((state) => ({ draggedTaskId: id })),
        updateTaskStatus: (id: string, newStatus: Status) =>
          set((state) => ({
            tasks: state.tasks.map((task) =>
              task.id === id ? { ...task, status: newStatus } : task
            ),
          })),
      }),
      {
        name: "task-store",
      }
    )
  );
};
