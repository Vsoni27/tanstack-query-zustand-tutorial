"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";

import { type TaskStore, createTaskStore } from "../store";

export const TaskStoreContext = createContext<StoreApi<TaskStore> | null>(null);

export interface TaskStoreProviderProps {
  children: ReactNode;
}

export const TaskStoreProvider = ({ children }: TaskStoreProviderProps) => {
  const storeRef = useRef<StoreApi<TaskStore>>();
  if (!storeRef.current) {
    storeRef.current = createTaskStore();
  }

  return (
    <TaskStoreContext.Provider value={storeRef.current}>
      {children}
    </TaskStoreContext.Provider>
  );
};

export const useTaskStore = <T,>(selector: (store: TaskStore) => T): T => {
  const taskStoreContext = useContext(TaskStoreContext);

  if (!taskStoreContext) {
    throw new Error(`useTaskStore must be use within TaskStoreProvider`);
  }

  return useStore(taskStoreContext, selector);
};
