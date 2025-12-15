"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Twitter, MapPin, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to an email service or backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 py-12 w-full">
        <h1 className="text-4xl font-bold mb-4 text-balance">Get in Touch</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Have a question or want to collaborate? we'd love to hear from you.
          Send us a message and we'll get back to you as soon as possible.
        </p>

        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Email */}
          <div className="flex flex-col gap-3 border border-border p-4 rounded-md">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">Email</h3>
            </div>
            <a
              href="mailto:hello@myblog.com"
              className="text-primary hover:underline"
            >
              hello@myblog.com
            </a>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-3 border border-border p-4 rounded-md">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-semibold text-lg">Social Links</h3>
            </div>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-3 border border-border p-4 rounded-md">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">Location</h3>
            </div>
            <p className="text-muted-foreground">
              Available for remote work and collaboration worldwide.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                  required
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>

              {submitted && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-md text-green-700 dark:text-green-400">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
