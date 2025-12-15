"use client";

import { useState, useCallback } from "react";
import { PostCard } from "@/components/post-card";
import { SearchBar } from "@/components/search-bar";
import { getPosts } from "@/lib/blog-utils";

export default function BlogPage() {
  const [searchResults, setSearchResults] = useState<ReturnType<
    typeof getPosts
  > | null>(null);
  const allPosts = getPosts().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const posts = searchResults !== null ? searchResults : allPosts;

  const handleSearch = useCallback(
    (query: string) => {
      if (!query.trim()) {
        setSearchResults(null);
        return;
      }

      const results = allPosts.filter((post) => {
        const lowerQuery = query.toLowerCase();
        return (
          post.title.toLowerCase().includes(lowerQuery) ||
          post.excerpt.toLowerCase().includes(lowerQuery) ||
          post.content.toLowerCase().includes(lowerQuery)
        );
      });
      setSearchResults(results);
    },
    [allPosts]
  );

  return (
    <div className="flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 py-12 w-full">
        <h1 className="text-4xl font-bold mb-8">All Articles</h1>

        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No articles found.</p>
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
