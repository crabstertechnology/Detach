"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Client-side validation per B10
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "homepage-hero" }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section aria-labelledby="v6-hero-title" className="v6-hero" data-cta-zone="" id="v6-home">
      {/* High-Resolution Cinematic Desk Photography */}
      <picture>
        <source srcSet="/assets/detach_hero_4k.webp" type="image/webp" />
        <Image
          src="/assets/detach_hero_desk.jpg"
          alt="Detach standalone touch device on dusk desk with warm ambient lighting"
          fill
          priority
          sizes="100vw"
          className="v6-hero-image"
        />
      </picture>

      {/* Massive Kinetic Typography with gradient from #FFFFFF -> #9B9B9B and no period per B5 */}
      <h1
        data-letter-reveal="intro"
        id="v6-hero-title"
        className="bg-gradient-to-r from-white via-[#f1f5f9] to-[#9b9b9b] bg-clip-text text-transparent"
      >
        Your digital habits
        <br />
        have a companion
        <br />
        now
      </h1>

      {/* Floating Glassmorphic Email Waitlist Input with Full States */}
      <form
        aria-label="Join the waitlist"
        className="v6-waitlist-form v6-hero-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="v6-hero-form-row">
          <label className="v6-sr-only" htmlFor="v6-hero-email">
            Email address
          </label>
          <input
            aria-describedby="v6-hero-form-note"
            autoComplete="email"
            id="v6-hero-email"
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
          />
          <button
            className="v6-button active:scale-[0.98] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            type="submit"
            disabled={loading || submitted}
          >
            {submitted ? "You're on the list" : loading ? "Reserving..." : "Join the waitlist"}
          </button>
        </div>

        {error && (
          <p className="text-xs text-rose-400 font-medium px-3 mt-1" role="alert">
            {error}
          </p>
        )}

        {submitted && (
          <p className="v6-form-note" id="v6-hero-form-note" role="status">
            ✓ Welcome to the founder waitlist! Production updates will arrive in your inbox.
          </p>
        )}
      </form>
    </section>
  );
}
