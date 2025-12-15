"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { getPost, getCategories } from "@/lib/blog-utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AdminPostFormProps {
  postId: number | null;
  onSave: () => void;
}

export function AdminPostForm({ postId, onSave }: AdminPostFormProps) {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [readTime, setReadTime] = useState("5");
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCategories(getCategories().map((c) => c.name));

    if (postId) {
      const post = getPost(postId.toString());
      if (post) {
        setTitle(post.title);
        setExcerpt(post.excerpt);
        setContent(post.content);
        setCategory(post.category);
        setAuthor(post.author);
        setReadTime(post.readTime.toString());
      }
    }
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const slug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      // if (postId) {
      //   updatePost(postId, {
      //     title,
      //     excerpt,
      //     content,
      //     category,
      //     author,
      //     readTime: Number.parseInt(readTime),
      //   })
      // } else {
      //   addPost({
      //     slug,
      //     title,
      //     excerpt,
      //     content,
      //     category,
      //     author,
      //     date: new Date().toISOString().split("T")[0],
      //     readTime: Number.parseInt(readTime),
      //   })
      // }

      onSave();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium text-foreground block mb-2">
          Title
        </label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Post title"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground block mb-2">
          Excerpt
        </label>
        <Textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
          placeholder="Brief summary"
          rows={2}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground block mb-2">
          Content
        </label>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          placeholder="Post content (paragraphs separated by newlines)"
          rows={6}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-foreground block mb-2">
            Category
          </label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground block mb-2">
            Read Time (mins)
          </label>
          <Input
            type="number"
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
            min="1"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-foreground block mb-2">
          Author
        </label>
        <Input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          placeholder="Author name"
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Post"}
        </Button>
      </div>
    </form>
  );
}
