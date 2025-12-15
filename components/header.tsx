"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, LogIn } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    if (mounted) {
      const html = document.documentElement;
      const newIsDark = !isDark;
      if (newIsDark) {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      setIsDark(newIsDark);
    }
  };

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/category", label: "Category" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/admin/dashboard", label: "Admin" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 lg:max-w-4xl lg:mx-auto">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-primary">
            My Blog
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-1 py-2 text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }
                    group
                  `}
                >
                  {link.label}
                  {/* Bottom border on hover and active */}
                  <span
                    className={`
                      absolute bottom-0 left-0 w-full h-0.5 transition-all duration-200
                      ${
                        isActive
                          ? "bg-primary scale-x-100"
                          : "bg-primary scale-x-0 group-hover:scale-x-100"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Sign-in Button and Dark Mode Toggle */}
          <div className="flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="hidden md:flex"
              >
                {isDark ? <Sun /> : <Moon />}
              </Button>
            )}

            {/* Desktop Ghost Style Sign-in Button */}
            <Button
              asChild
              variant="outline"
              className="hidden md:flex"
              aria-label="Sign in button"
            >
              <Link href="/signin">
                <LogIn className="w-4 h-4" />
                Sign in
              </Link>
            </Button>

            {/* Mobile: Dark Mode Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="md:hidden"
              >
                {isDark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-3 rounded transition-all duration-200 flex items-center
                    ${
                      isActive
                        ? "bg-primary/10 text-primary border-l-4 border-primary"
                        : "hover:bg-muted text-foreground border-l-4 border-transparent"
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  {isActive && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}

            {/* Mobile Sign-in Button (ghost style) */}
            <Link
              href="/signin"
              className={`
                mx-4 mt-2 px-4 py-3 rounded transition-all duration-200 flex items-center gap-3
                hover:bg-accent hover:text-accent-foreground text-foreground/80
                border border-transparent hover:border-border
              `}
              onClick={() => setIsOpen(false)}
            >
              <LogIn className="w-4 h-4" />
              Sign in
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
