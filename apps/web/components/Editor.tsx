"use client";
import * as React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { nord } from "@uiw/codemirror-theme-nord/esm"; 
export function Editor({
  value,
  onChange,
  editorRef,
}: {
  value: string;
  onChange: (v: string) => void;
  editorRef: React.RefObject<HTMLDivElement|null>;
}) {
  return (
    <div ref={editorRef} className="h-full overflow-auto border-r">
      <CodeMirror
        value={value}
        height="100%"
        extensions={[markdown()]}
        onChange={onChange}
        theme={nord}
      />
    </div>
  );
}
