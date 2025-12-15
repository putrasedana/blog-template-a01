import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { getPosts } from "@/lib/blog-utils";
import Link from "next/link";

export default function Home() {
  const posts = getPosts()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="flex flex-col">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 py-12 w-full">
        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4 text-balance">
            Welcome to My Blog
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Explore articles about web development, design, and modern
            technologies. Stay updated with the latest trends and best
            practices.
          </p>
          <Link href="/blog">
            <Button size="lg" className="cursor-pointer">
              Read All Articles
            </Button>
          </Link>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
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
        </section>
      </main>
    </div>
  );
}
