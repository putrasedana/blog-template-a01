// app/(site)/layout.tsx
"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
// import { CategoryBar } from "@/components/category-bar";
// import { usePathname } from "next/navigation";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();

  // const isCategoryDetailRoute = pathname?.match(/^\/category\/[^/]+$/);

  return (
    <>
      <Header />
      {/* {isCategoryDetailRoute && <CategoryBar />} */}
      {children}
      <Footer />
      <Analytics />
    </>
  );
}
