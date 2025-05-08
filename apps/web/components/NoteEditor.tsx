"use client";

import { useState, FormEvent } from "react";
import { Card, CardContent } from "@/ui/card";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import { Sparkles, Send } from "lucide-react";

const NoteEditor: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [inputTag, setInputTag] = useState<string>("");

  const addTag = () => {
    const t = inputTag.trim();
    if (t && !tags.includes(t)) {
      setTags(prev => [...prev, t]);
      setInputTag("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(prev => prev.filter(t => t !== tag));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      alert("請填寫標題和內容！");
      return;
    }
    console.log("Note submitted:", { title, content, tags });
  };

  return (
    <Card className="w-full max-w-2xl p-6 space-y-6">
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <Input
            name="title"
            placeholder="筆記標題"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="text-2xl font-bold"
            required
          />

          <Textarea
            name="content"
            placeholder="以 Markdown 撰寫筆記..."
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={6}
            required
          />

          <div className="flex gap-2 items-center">
            <Input
              placeholder="新增標籤"
              value={inputTag}
              onChange={e => setInputTag(e.target.value)}
              onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addTag())}
            />
            <Button type="button" size="sm" onClick={addTag}>
              Add
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Badge
                key={tag}
                variant="secondary"
                onClick={() => removeTag(tag)}
                className="cursor-pointer"
              >
                {tag} ✕
              </Badge>
            ))}
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline" size="sm" type="button">
              <Sparkles className="w-4 h-4 mr-1" />
              摘要
            </Button>
            <Button size="sm" type="submit">
              <Send className="w-4 h-4 mr-1" />
              儲存筆記
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default NoteEditor;
