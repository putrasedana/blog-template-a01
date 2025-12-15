"use client";

import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getPost } from "@/lib/blog-utils";
import { use } from "react";
import { CommentSection } from "@/components/comment-section";

export default function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to articles
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-muted-foreground font-medium">
                Category:
              </span>
              <Badge>{post.category}</Badge>
              <span className="text-sm text-muted-foreground">
                {post.readTime} min read
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              {post.title}
            </h1>
            <div className="flex justify-between items-center text-muted-foreground">
              <span>By {post.author}</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </header>

          <div className="prose prose-invert max-w-none dark:prose-invert prose-sm sm:prose-base">
            {post.content.split("\n").map((paragraph, i) => (
              <p key={i} className="text-foreground mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <CommentSection postSlug={slug} postTitle={post.title} />
      </main>
    </div>
  );
}
