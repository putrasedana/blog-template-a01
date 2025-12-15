// app/auth/error/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Home, RefreshCw } from "lucide-react";

export default function AuthErrorPage() {
  const [error, setError] = useState<string>("");
  const [errorDescription, setErrorDescription] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Get error from query parameters
    const errorParam = searchParams.get("error");
    const errorDescParam = searchParams.get("error_description");

    if (errorParam) {
      setError(decodeURIComponent(errorParam));
    }
    if (errorDescParam) {
      setErrorDescription(decodeURIComponent(errorDescParam));
    }
  }, [searchParams]);

  // Common error messages and solutions
  const commonErrors = [
    {
      code: "invalid_credentials",
      message: "Invalid email or password",
      solution: "Check your credentials and try again",
    },
    {
      code: "email_not_confirmed",
      message: "Email not confirmed",
      solution: "Check your inbox for the confirmation email",
    },
    {
      code: "user_already_exists",
      message: "User already exists",
      solution: "Try signing in instead of signing up",
    },
    {
      code: "weak_password",
      message: "Password is too weak",
      solution: "Use a stronger password with at least 8 characters",
    },
    {
      code: "oauth_error",
      message: "OAuth authentication failed",
      solution: "Try another sign-in method",
    },
    {
      code: "magic_link_expired",
      message: "Magic link has expired",
      solution: "Request a new magic link",
    },
    {
      code: "rate_limit_exceeded",
      message: "Too many attempts. Please try again later",
      solution: "Wait a few minutes before trying again",
    },
  ];

  const getErrorSolution = (errorMsg: string) => {
    const foundError = commonErrors.find(
      (err) =>
        errorMsg.toLowerCase().includes(err.code) ||
        errorMsg.toLowerCase().includes(err.message.toLowerCase())
    );
    return foundError?.solution || "Please try again or contact support.";
  };

  return (
    <div className="flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Authentication Error</h1>
            <p className="text-muted-foreground">
              Something went wrong during authentication
            </p>
          </div>

          <Card className="border shadow-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Error Details</CardTitle>
              <CardDescription>
                Here's what went wrong and how to fix it
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Error Message */}
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {error || "An unknown authentication error occurred"}
                </AlertDescription>
              </Alert>

              {/* Error Description */}
              {errorDescription && (
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Details:</span>{" "}
                    {errorDescription}
                  </p>
                </div>
              )}

              {/* Suggested Solution */}
              <div className="p-4  border border-border rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">
                  How to fix this:
                </h3>
                <p className="text-sm text-white-foreground/90">
                  {getErrorSolution(error || errorDescription)}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={() => router.push("/signin")}
                  className="w-full"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>

                <Link href="/">
                  <Button variant="outline" className="w-full">
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                  </Button>
                </Link>
              </div>

              {/* Common Error Solutions */}
              <div className="mt-4">
                <h3 className="text-sm font-medium mb-2">Common Solutions:</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 mt-2 rounded-full bg-muted-foreground" />
                    Clear browser cookies and cache
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 mt-2 rounded-full bg-muted-foreground" />
                    Try a different browser
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 mt-2 rounded-full bg-muted-foreground" />
                    Check your internet connection
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 mt-2 rounded-full bg-muted-foreground" />
                    Disable browser extensions temporarily
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-2 text-muted-foreground">
                  Still having issues?
                </span>
              </div>
            </div>

            <div className="mt-4">
              <Button type="button" variant="outline" className="w-full">
                <Link href="/contact">Contact our support team</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
