// app/auth/reset-password/page.tsx
"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import {
  AlertCircle,
  Loader2,
  CheckCircle,
  Eye,
  EyeOff,
  Lock,
  ArrowLeft,
} from "lucide-react";

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValidToken, setIsValidToken] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // In a real app with Supabase, you would:
  // 1. Get token from URL query params
  // 2. Verify token with Supabase
  // 3. If valid, show reset form
  // 4. If invalid/expired, show error

  useEffect(() => {
    // Check for token in URL (simulated)
    const token = searchParams.get("token");

    // In a real Supabase app:
    // if (token) {
    //   verifyTokenWithSupabase(token).then(isValid => {
    //     setIsValidToken(isValid);
    //   });
    // } else {
    //   setError("Invalid or missing reset token");
    // }

    // For demo, simulate token verification
    setTimeout(() => {
      if (token === "demo-token" || !token) {
        setIsValidToken(true);
        // Get email from localStorage (simulated)
        const savedEmail =
          localStorage.getItem("passwordResetEmail") || "user@example.com";
        setEmail(savedEmail);
      } else {
        setError(
          "Invalid or expired reset token. Please request a new reset link."
        );
      }
    }, 500);
  }, [searchParams]);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Validate
    if (!newPassword || !confirmPassword) {
      setError("Please enter and confirm your new password");
      setIsLoading(false);
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      setIsLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    // Simulate API call to reset password
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real app with Supabase:
    // await supabase.auth.updateUser({ password: newPassword })

    // Success
    setSuccess(
      "Password reset successfully! You can now sign in with your new password."
    );

    // Clear the reset email from storage
    localStorage.removeItem("passwordResetEmail");

    // Store demo password reset
    localStorage.setItem(
      "passwordReset",
      JSON.stringify({
        email: email,
        resetAt: new Date().toISOString(),
      })
    );

    // Redirect to login after delay
    setTimeout(() => {
      router.push("/signin");
    }, 2000);

    setIsLoading(false);
  };

  if (!isValidToken && error) {
    return (
      <div className="flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Invalid Reset Link</CardTitle>
                <CardDescription>
                  This password reset link is invalid or has expired
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>

                <div className="mt-4 space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Please request a new password reset link.
                  </p>
                  <Link href="/forgot-password">
                    <Button className="w-full">Request New Reset Link</Button>
                  </Link>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/" className="w-full">
                  <Button variant="outline" className="w-full">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Create new password</h1>
            <p className="text-muted-foreground">
              Set a new password for your account
            </p>
            {email && (
              <p className="text-sm text-muted-foreground mt-2">
                Resetting password for:{" "}
                <span className="font-medium">{email}</span>
              </p>
            )}
          </div>

          <Card className="border shadow-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Reset Password</CardTitle>
              <CardDescription>
                Enter a new password for your account
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New password</Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter new password (min. 8 characters)"
                      className="pr-10"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      disabled={isLoading}
                      autoComplete="new-password"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm new password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your new password"
                      className="pr-10"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      disabled={isLoading}
                      autoComplete="new-password"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {success && (
                  <Alert
                    variant="default"
                    className="bg-green-50 border-green-200"
                  >
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      {success}
                    </AlertDescription>
                  </Alert>
                )}

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Resetting password...
                    </>
                  ) : (
                    "Reset Password"
                  )}
                </Button>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col space-y-3">
              <div className="text-center text-sm text-muted-foreground w-full">
                <div className="space-y-3">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-background px-2 text-muted-foreground">
                        Remember your password?
                      </span>
                    </div>
                  </div>

                  <Link href="/signin">
                    <Button type="button" variant="outline" className="w-full">
                      Back to Sign in
                    </Button>
                  </Link>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
