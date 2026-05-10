"use client";

import { useState } from "react";

interface Props {
  source: string;
  buttonLabel?: string;
  successMessage?: string;
  placeholder?: string;
  variant?: "light" | "dark";
  size?: "default" | "large";
}

export default function EmailSignupForm({
  source,
  buttonLabel = "Join",
  successMessage = "You're on the list. I'll be in touch.",
  placeholder = "your@email.com",
  variant = "light",
  size = "default",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error || "Subscription failed");
      }
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Subscription failed");
    }
  };

  if (status === "success") {
    return (
      <p
        className={
          variant === "dark"
            ? "text-background/90 text-sm"
            : "text-text font-medium"
        }
      >
        {successMessage}
      </p>
    );
  }

  const inputClass =
    variant === "dark"
      ? "flex-1 px-4 py-2 bg-background/10 border border-background/20 rounded-lg text-background placeholder-background/50 focus:outline-none focus:border-gold text-sm"
      : `flex-1 ${size === "large" ? "px-5 py-4 text-base" : "px-4 py-3 text-sm"} bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary`;

  const buttonClass =
    variant === "dark"
      ? "px-4 py-2 bg-gold text-text font-medium rounded-lg hover:bg-gold-dark transition-colors duration-200 text-sm disabled:opacity-50"
      : `btn btn-primary ${size === "large" ? "text-base px-6 py-4" : ""} disabled:opacity-50`;

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          disabled={status === "submitting"}
          className={inputClass}
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === "submitting" || !email}
          className={buttonClass}
        >
          {status === "submitting" ? "Joining…" : buttonLabel}
        </button>
      </div>
      {error && (
        <p
          className={
            variant === "dark"
              ? "text-error/90 text-xs mt-2"
              : "text-error text-sm mt-2"
          }
          role="alert"
        >
          {error}
        </p>
      )}
    </form>
  );
}
