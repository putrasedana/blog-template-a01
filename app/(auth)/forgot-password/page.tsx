// app/auth/forgot-password/page.tsx
"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
  Mail,
  CheckCircle,
  Key,
  ArrowLeft,
} from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const router = useRouter();

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    // Validate email
    if (!email.trim()) {
      setError("Please enter your email address");
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    // Simulate API call to send reset email
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real app with Supabase, you would:
    // 1. Call Supabase auth.resetPasswordForEmail(email)
    // 2. This sends a reset email with a token
    // 3. User clicks link which redirects to /auth/reset-password

    // For demo purposes, simulate success
    setSuccess(`Password reset email sent to ${email}`);
    setIsEmailSent(true);

    // Store email in localStorage to simulate token passing
    localStorage.setItem("passwordResetEmail", email);

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {isEmailSent ? "Check your email" : "Reset your password"}
            </h1>
            <p className="text-muted-foreground">
              {isEmailSent
                ? "We sent you a password reset link"
                : "Enter your email to receive reset instructions"}
            </p>
          </div>

          <Card className="border shadow-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">
                {isEmailSent ? "Email sent" : "Forgot Password"}
              </CardTitle>
              <CardDescription>
                {isEmailSent
                  ? "Click the link in your email to reset your password"
                  : "We'll send you a link to reset your password"}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {!isEmailSent ? (
                <form onSubmit={handleRequestReset} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        autoComplete="email"
                      />
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
                      className="bg-blue-50 border-blue-200"
                    >
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-blue-800">
                        {success}
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending reset link...
                      </>
                    ) : (
                      "Send Reset Link"
                    )}
                  </Button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="text-center p-6 border rounded-lg bg-muted/30">
                    <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Check your inbox</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      We've sent a password reset link to{" "}
                      <strong>{email}</strong>. Click the link in the email to
                      set a new password.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium mb-1">
                        Didn't receive the email?
                      </p>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 mt-2 rounded-full bg-muted-foreground" />
                          Check your spam or junk folder
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 mt-2 rounded-full bg-muted-foreground" />
                          Make sure you entered the correct email
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 mt-2 rounded-full bg-muted-foreground" />
                          <Button
                            type="button"
                            variant="link"
                            className="p-0 h-auto text-primary"
                            onClick={handleRequestReset}
                            disabled={isLoading}
                          >
                            Click here to resend
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex flex-col space-y-3">
              {!isEmailSent && (
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
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                      >
                        Back to Sign in
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
