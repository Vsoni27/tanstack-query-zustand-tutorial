"use client";

import { ModeToggle } from "./ThemeToggleButton";

export default function TopBar() {
  return (
    <nav className="flex justify-between items-center py-2 px-6">
      <h1 className="font-extrabold text-lg bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
        TanStack Query + Zustand
      </h1>
      <ModeToggle />
    </nav>
  );
}
