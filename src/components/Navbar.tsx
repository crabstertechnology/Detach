"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switch navbar to floating pill past the hero section
      setIsPastHero(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`v6-site-nav ${isPastHero ? "v6-is-past-hero" : ""}`}>
      {/* Brand Wordmark */}
      <a aria-label="Detach home" className="v6-brand flex items-center" href="#v6-home">
        <Image
          src="/assets/detach_logo_dark.png"
          alt="Detach"
          width={120}
          height={36}
          priority
          className="h-7 w-auto object-contain"
        />
      </a>

      {/* Main Desktop Section Links */}
      <nav aria-label="Page sections" className="v6-nav-links">
        <a href="#v6-how-it-works">How it works</a>
        <a href="#v6-product">Features</a>
        <a href="#v6-scenarios">In use</a>
        <a href="#v6-specs">Specs</a>
        <a href="#v6-faq">FAQ</a>
      </nav>

      {/* Right Actions: 3D Flip Waitlist Button & Mobile Toggle */}
      <div className="v6-nav-actions">
        <a className="v6-button v6-button--flip v6-nav-cta" href="#v6-waitlist">
          <span className="v6-cta-flip">
            <span className="v6-cta-flip__front">Join the waitlist</span>
            <span aria-hidden="true" className="v6-cta-flip__back">
              Join the waitlist
            </span>
          </span>
          <svg
            aria-hidden="true"
            className="v6-cta-arrow"
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
        </a>

        <button
          aria-controls="v6-mobile-menu"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="v6-menu-toggle"
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <Image src="/assets/current/menu.svg" alt="" width={18} height={18} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <nav
        aria-label="Page sections"
        className="v6-mobile-menu"
        id="v6-mobile-menu"
        hidden={!mobileMenuOpen}
      >
        <a href="#v6-how-it-works" onClick={closeMenu}>
          How it works
        </a>
        <a href="#v6-product" onClick={closeMenu}>
          Features
        </a>
        <a href="#v6-scenarios" onClick={closeMenu}>
          In use
        </a>
        <a href="#v6-specs" onClick={closeMenu}>
          Specs
        </a>
        <a href="#v6-faq" onClick={closeMenu}>
          FAQ
        </a>
        <a className="v6-button" href="#v6-waitlist" onClick={closeMenu}>
          Join the waitlist
          <svg
            aria-hidden="true"
            className="v6-cta-arrow"
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
        </a>
      </nav>
    </header>
  );
}
