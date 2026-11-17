"use client";

import React, { useState } from "react";

interface WaitlistPanelProps {
  id?: string;
  isLaunchCta?: boolean;
}

export default function Waitlist({
  id = "v6-waitlist",
  isLaunchCta = false,
}: WaitlistPanelProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: id }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const titleId = `${id}-title`;

  return (
    <section
      aria-labelledby={titleId}
      className={`v6-waitlist-panel ${isLaunchCta ? "v6-launch-cta" : ""}`}
      data-cta-zone=""
      id={id}
    >
      <div className="v6-waitlist-copy">
        <h2 id={titleId} className="text-balance">
          Join the waitlist
          <br />
          for exclusive founder perks
        </h2>
        <p className="text-pretty">
          Be the first to break free from compulsive phone scrolling. Founder reservations opening soon with exclusive early pricing.
        </p>
      </div>

      <form
        aria-label="Join the waitlist"
        className="v6-waitlist-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
          <label className="v6-sr-only" htmlFor={`${id}-email`}>
            Email address
          </label>
          <input
            autoComplete="email"
            id={`${id}-email`}
            name="email"
            placeholder="Enter your email"
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            disabled={loading || submitted}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3875ff] transition-all"
          />
          <button
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold bg-[#3875ff] hover:bg-[#2563eb] text-white active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shrink-0 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            type="submit"
            disabled={loading || submitted}
          >
            {submitted ? "Joined waitlist!" : loading ? "Reserving..." : "Join the waitlist"}
            <svg
              aria-hidden="true"
              className="v6-cta-arrow w-4 h-4"
              fill="none"
              height="18"
              viewBox="0 0 18 18"
              width="18"
            >
              <path
                d="M3.75 9H14.25M9 3.75L14.25 9L9 14.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>

        {error && (
          <p className="text-xs text-rose-400 font-medium mt-2" role="alert">
            {error}
          </p>
        )}

        {/* Risk Reversal note per landing-page-design skill */}
        <p className="text-xs text-[#94a3b8] mt-3 block text-pretty">
          No credit card required. Cancel or opt out anytime. First batch includes a 30 day money back guarantee.
        </p>

        {submitted && (
          <p className="v6-form-note mt-2 text-emerald-400 font-medium" id={`${id}-form-note`} role="status">
            ✓ You are reserved for early founder pricing! Watch your inbox for updates.
          </p>
        )}
      </form>
    </section>
  );
}
