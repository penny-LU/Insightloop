"use client";

import * as React from "react";
// import NoteEditor from "@/components/NoteEditor";
import { Sidebar } from "@/components/Sidebar";
import { Toolbar } from "@/components/Toolbar";
import { Editor } from "@/components/Editor";
import { Preview } from "@/components/Preview";

export default function HomePage() {
  const [content, setContent] = React.useState("");
  const editorRef = React.useRef<HTMLDivElement>(null);
  const previewRef = React.useRef<HTMLDivElement>(null);

  // Scroll Sync
  React.useEffect(() => {
    if (!editorRef.current || !previewRef.current) return;
    const ed = editorRef.current, pr = previewRef.current;
    const sync = () => {
      const ratio = ed.scrollTop / (ed.scrollHeight - ed.clientHeight);
      pr.scrollTop = ratio * (pr.scrollHeight - pr.clientHeight);
    };
    ed.addEventListener("scroll", sync);
    return () => ed.removeEventListener("scroll", sync);
  }, []);

  const handleSave = () => {
    // TODO: tRPC or fetch POST
    console.log("Save content:", content);
  };
  const handleSync = () => { /* 呼叫同步 API */ };
  const handleSummary = async () => {
    // TODO: 呼叫後端 AI 摘要 API
    const res = await fetch("/api/summary", {
      method: "POST",
      body: JSON.stringify({ text: content }),
    });
    const { summary } = await res.json();
    alert(summary);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Toolbar
          onSave={handleSave}
          onSync={handleSync}
          onSummary={handleSummary}
        />
        <div className="flex flex-1">
          <Editor
            value={content}
            onChange={setContent}
            editorRef={editorRef}
          />
          <Preview content={content} ref={previewRef} />
        </div>
      </div>
    </div>
  );
}
