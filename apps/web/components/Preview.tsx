"use client";
import * as React from "react";
import ReactMarkdown from "react-markdown";

export interface PreviewProps {
    content: string;
  }

export const Preview = React.forwardRef<
  HTMLDivElement,
  PreviewProps
>(({ content }, ref) => (
  <div ref={ref} className="p-4 h-full overflow-auto prose dark:prose-invert">
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
));

Preview.displayName = "Preview";