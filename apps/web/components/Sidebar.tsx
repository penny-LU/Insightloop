"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  // TODO: 用戶可撈取筆記列表並 render
  return (
    
    <aside className="w-64 border-r bg-background p-4 overflow-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search notes..."
          className="w-full px-2 py-1 border rounded"
        />
      </div>
      <ul className="space-y-2">
        <li className="cursor-pointer border-none outline-none bg-gray-100 hover:bg-muted px-2 py-1 rounded">Note 1</li>
        <li className="cursor-pointer border-none outline-none bg-gray-100 hover:bg-muted px-2 py-1 rounded">Note 2</li>
      </ul>
    </aside>
  );
}
