// app/category/page.tsx - Shows all categories
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { getCategories } from "@/lib/blog-utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CategoryPage() {
  const categories = getCategories();

  return (
    <div className="flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 py-12 w-full">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">All Categories</h1>
          <p className="text-muted-foreground">
            Browse articles by topic and find content that interests you
          </p>
        </div>

        {/* Categories Grid */}
        {categories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No categories available.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.id} href={`/category/${category.slug}`}>
                <Card className="h-full hover:shadow-md transition-shadow duration-200 cursor-pointer">
                  <CardContent className="p-6">
                    {/* Category Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>

                    {/* Category Stats */}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State for No Posts */}
        {categories.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link
                href="/"
                className="text-primary hover:underline font-medium"
              >
                View all articles
              </Link>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
