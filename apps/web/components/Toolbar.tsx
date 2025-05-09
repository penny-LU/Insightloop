"use client";
import * as React from "react";
import { Button } from "@/ui/button";
import { Sun, Moon, Save, RefreshCw, WandSparkles } from "lucide-react"

export function Toolbar({
  onSave,
  onSync,
  onSummary,
}: {
  onSave: () => void;
  onSync: () => void;
  onSummary: () => void;
}) {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className="flex items-center justify-between p-4 border-b bg-background">
      <div className="flex space-x-2">
        <Button variant="outline" onClick={onSave}><Save size={16} /> Save</Button>
        <Button variant="outline" onClick={onSync}><RefreshCw size={16} /> Sync</Button>
        <Button variant="outline" onClick={onSummary}><WandSparkles size={16} /> AI Summary</Button>
      </div>
      <Button variant="ghost" onClick={() => setDark(!dark)}>
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </Button>
    </div>
  );
}
