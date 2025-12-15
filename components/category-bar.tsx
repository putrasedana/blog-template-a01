"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCategories } from "@/lib/blog-utils";

export function CategoryBar() {
  type Category = ReturnType<typeof getCategories>[number];

  const [categories, setCategories] = useState<Category[] | null>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    try {
      const cats = getCategories();
      setCategories(cats);
    } catch {
      setCategories([]);
    }
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      const categoryBarEl = document.getElementById("category-bar");
      if (categoryBarEl) {
        setIsScrollable(categoryBarEl.scrollWidth > categoryBarEl.clientWidth);
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [categories]);

  const isCategoryActive = (categorySlug: string) => {
    return pathname?.startsWith(`/category/${categorySlug}`);
  };

  if (!categories || categories.length === 0) return null;

  return (
    <div
      id="category-bar"
      className="w-full lg:max-w-4xl lg:mx-auto border-b border-border bg-background px-4 sm:px-6 lg:px-0 overflow-x-auto scrollbar-hide"
    >
      <div className="mx-auto flex justify-center gap-8 py-4">
        {categories.map((category) => {
          const isActive = isCategoryActive(category.slug);

          return (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className={`
                relative px-1 py-2 text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }
                group shrink-0 whitespace-nowrap
              `}
            >
              {category.name}
              {/* Bottom border on hover and active */}
              <span
                className={`
                  absolute bottom-0 left-0 w-full h-0.5 transition-all duration-200
                  ${
                    isActive
                      ? "bg-primary scale-x-100 h-0.5"
                      : "bg-primary scale-x-0 h-0.5 group-hover:scale-x-100"
                  }
                `}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
