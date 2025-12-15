// app/auth/reset-password/page.tsx - Main page with Suspense
import { Suspense } from "react";
import ResetPasswordContent from "./reset-password-content";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<ResetPasswordSkeleton />}>
      <ResetPasswordContent />
    </Suspense>
  );
}

// Skeleton loading component
function ResetPasswordSkeleton() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="border shadow-sm rounded-lg p-6 space-y-6 animate-pulse">
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
