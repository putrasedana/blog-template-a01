import postsData from "@/data/posts.json";
import categoriesData from "@/data/categories.json";

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export function getPosts(): Post[] {
  return postsData;
}

export function getPost(slug: string): Post | null {
  return postsData.find((post) => post.slug === slug) || null;
}

export function getPostsByCategory(category: string): Post[] {
  return postsData.filter((post) => post.category === category);
}

export function getCategories(): Category[] {
  return categoriesData;
}

export function getCategory(slug: string): Category | null {
  return categoriesData.find((cat) => cat.slug === slug) || null;
}

export function searchPosts(query: string): Post[] {
  const lowerQuery = query.toLowerCase();
  return postsData.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery)
  );
}
