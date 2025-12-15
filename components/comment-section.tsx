// components/comment-section.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, ThumbsUp, User, MessageSquare, Reply } from "lucide-react";

interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  date: string;
  likes: number;
  replies: Comment[];
}

interface CommentSectionProps {
  postSlug: string;
  postTitle: string;
}

// Mock comments data
const mockComments: Comment[] = [
  {
    id: 1,
    author: "Alex Johnson",
    avatar: "",
    content:
      "Great article! I've been looking for a clear explanation of this topic for weeks. The examples were particularly helpful.",
    date: "2024-01-15T10:30:00",
    likes: 12,
    replies: [
      {
        id: 101,
        author: "Sarah Miller",
        avatar: "",
        content: "I agree, the examples made everything click for me too!",
        date: "2024-01-15T14:20:00",
        likes: 3,
        replies: [],
      },
    ],
  },
  {
    id: 2,
    author: "Tech Enthusiast",
    avatar: "",
    content:
      "Nice write-up. Could you elaborate more on the performance implications?",
    date: "2024-01-14T16:45:00",
    likes: 5,
    replies: [],
  },
  {
    id: 3,
    author: "Maria Chen",
    avatar: "",
    content:
      "Thanks for sharing this! I've implemented some of these patterns in my project and already see improvements.",
    date: "2024-01-13T09:15:00",
    likes: 8,
    replies: [],
  },
];

export function CommentSection({ postSlug, postTitle }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newComment.trim() || !name.trim()) {
      alert("Please enter your name and comment");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newCommentObj: Comment = {
      id: comments.length + 1,
      author: name,
      avatar: "",
      content: newComment.trim(),
      date: new Date().toISOString(),
      likes: 0,
      replies: [],
    };

    setComments([newCommentObj, ...comments]);
    setNewComment("");
    setName("");
    setEmail("");
    setIsSubmitting(false);
  };

  const handleSubmitReply = async (commentId: number) => {
    if (!replyContent.trim()) {
      alert("Please enter a reply");
      return;
    }

    // Find the comment to reply to
    const addReplyToComment = (
      comments: Comment[],
      id: number,
      reply: Comment
    ): Comment[] => {
      return comments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            replies: [reply, ...comment.replies],
          };
        }
        if (comment.replies.length > 0) {
          return {
            ...comment,
            replies: addReplyToComment(comment.replies, id, reply),
          };
        }
        return comment;
      });
    };

    const newReply: Comment = {
      id: Date.now(),
      author: "Current User", // In a real app, this would be the logged-in user
      avatar: "",
      content: replyContent.trim(),
      date: new Date().toISOString(),
      likes: 0,
      replies: [],
    };

    setComments(addReplyToComment(comments, commentId, newReply));
    setReplyContent("");
    setReplyingTo(null);
  };

  const handleLikeComment = (commentId: number) => {
    const updateLikes = (comments: Comment[], id: number): Comment[] => {
      return comments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, likes: comment.likes + 1 };
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: updateLikes(comment.replies, id) };
        }
        return comment;
      });
    };

    setComments(updateLikes(comments, commentId));
  };

  const renderComment = (comment: Comment, isReply = false) => (
    <div key={comment.id} className={`${isReply ? "ml-8 mt-4" : "mb-6"}`}>
      <div className="flex gap-3">
        <Avatar className="h-10 w-10">
          {comment.avatar ? (
            <AvatarImage src={comment.avatar} alt={comment.author} />
          ) : (
            <AvatarFallback>
              <User className="h-5 w-5" />
            </AvatarFallback>
          )}
        </Avatar>

        <div className="flex-1">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-sm">{comment.author}</h4>
                <p className="text-xs text-muted-foreground">
                  {formatDate(comment.date)}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLikeComment(comment.id)}
                className="h-8 px-2 text-muted-foreground hover:text-primary"
              >
                <ThumbsUp className="h-4 w-4 mr-1" />
                {comment.likes}
              </Button>
            </div>

            <p className="text-sm text-foreground">{comment.content}</p>
          </div>

          <div className="flex gap-2 mt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                setReplyingTo(replyingTo === comment.id ? null : comment.id)
              }
              className="h-8 text-xs"
            >
              <Reply className="h-3 w-3 mr-1" />
              Reply
            </Button>
          </div>

          {/* Reply form */}
          {replyingTo === comment.id && (
            <div className="mt-3 ml-8">
              <Textarea
                placeholder="Write a reply..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                className="mb-2"
                rows={2}
              />
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => handleSubmitReply(comment.id)}
                  className="h-8"
                >
                  <Send className="h-3 w-3 mr-1" />
                  Post Reply
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setReplyingTo(null);
                    setReplyContent("");
                  }}
                  className="h-8"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}

          {/* Render replies */}
          {comment.replies.length > 0 && (
            <div className="mt-4">
              {comment.replies.map((reply) => renderComment(reply, true))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="mt-12 pt-8 border-t">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="h-5 w-5" />
        <h2 className="text-2xl font-bold">Comments ({comments.length})</h2>
      </div>

      {/* Add Comment Form */}
      <div className="mb-8 p-6 bg-card border rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Leave a Comment</h3>
        <form onSubmit={handleSubmitComment}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-1 block">
                Name *
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-1 block">
                Email (optional)
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="comment" className="text-sm font-medium mb-1 block">
              Comment *
            </label>
            <Textarea
              id="comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts..."
              rows={4}
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <p className="text-xs text-muted-foreground">
              Your email will not be published. Required fields are marked *
            </p>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>Posting...</>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Post Comment
                </>
              )}
            </Button>
          </div>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment) => renderComment(comment))
        )}
      </div>
    </section>
  );
}
