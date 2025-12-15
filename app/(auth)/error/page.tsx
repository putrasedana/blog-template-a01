// app/auth/error/page.tsx
import { Suspense } from "react";
import AuthErrorContent from "./error-content";

export default function AuthErrorPage() {
  return (
    <Suspense fallback={<AuthErrorSkeleton />}>
      <AuthErrorContent />
    </Suspense>
  );
}

// Skeleton loading component
function AuthErrorSkeleton() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Loading...</h1>
            <p className="text-muted-foreground">Preparing error details</p>
          </div>
          <div className="animate-pulse space-y-4">
            <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
            <div className="h-24 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
