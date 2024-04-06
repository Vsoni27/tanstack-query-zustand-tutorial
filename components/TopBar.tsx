"use client";

import Link from "next/link";
import { ModeToggle } from "./ThemeToggleButton";

export default function TopBar() {
  return (
    <nav className="flex justify-between items-center py-2 px-6">
      <div className="flex items-center justify-center space-x-6">
        <h1 className="font-extrabold text-xl bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
          TanStack Query + Zustand
        </h1>
        <Link href="/" className="font-bold text-gray-700 dark:text-gray-400">
          Home
        </Link>
        <Link
          href="/todolist"
          className="font-bold text-gray-700 dark:text-gray-400"
        >
          ToDo
        </Link>
      </div>
      <ModeToggle />
    </nav>
  );
}
