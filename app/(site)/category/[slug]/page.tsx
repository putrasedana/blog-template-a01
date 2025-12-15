"use client";

import { PostCard } from "@/components/post-card";
import { getCategory, getPostsByCategory } from "@/lib/blog-utils";
import { notFound } from "next/navigation";
import { use } from "react";

export default function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category.name).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 py-12 w-full">
        <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
        <p className="text-muted-foreground mb-8">{category.description}</p>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No articles in this category.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                author={post.author}
                date={post.date}
                readTime={post.readTime}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
