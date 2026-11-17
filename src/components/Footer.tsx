"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="v6-footer" id="v6-footer">
      {/* Giant Typography Brand Display across Footer */}
      <a aria-label="Detach home" className="v6-footer-brand" href="#v6-home">
        <Image
          alt="Detach"
          decoding="async"
          height={230}
          loading="lazy"
          src="/assets/detach_wordmark_footer.svg"
          width={1420}
          className="w-full h-auto object-contain"
        />
      </a>

      <div className="v6-footer-meta">
        {/* Navigation & Legal Links */}
        <nav aria-label="Legal" className="v6-footer-legal">
          <a href="#v6-how-it-works">How it works</a>
          <a href="#v6-product">Features</a>
          <a href="#v6-scenarios">In use</a>
          <a href="#v6-specs">Specifications</a>
          <a href="#v6-faq">FAQ</a>
          <a href="#privacy">Privacy policy</a>
          <a href="#terms">Terms of service</a>
          <a href="#shipping">Shipping & warranty</a>
        </nav>

        {/* Social Links */}
        <nav aria-label="Social and contact" className="v6-footer-socials">
          <a
            aria-label="X"
            href="https://x.com"
            rel="noopener noreferrer"
            target="_blank"
            title="X"
          >
            <Image
              alt=""
              decoding="async"
              height={22}
              loading="lazy"
              src="/assets/current/social-x.svg"
              width={22}
            />
          </a>
          <a
            aria-label="Discord"
            href="https://discord.com"
            rel="noopener noreferrer"
            target="_blank"
            title="Discord"
          >
            <Image
              alt=""
              decoding="async"
              height={22}
              loading="lazy"
              src="/assets/current/social-discord.svg"
              width={22}
            />
          </a>
          <a
            aria-label="Instagram"
            href="https://instagram.com"
            rel="noopener noreferrer"
            target="_blank"
            title="Instagram"
          >
            <Image
              alt=""
              decoding="async"
              height={22}
              loading="lazy"
              src="/assets/current/social-instagram.svg"
              width={22}
            />
          </a>
          <a
            aria-label="Email"
            href="mailto:hello@crabster.tech"
            title="Email Crabster"
          >
            <Image
              alt=""
              decoding="async"
              height={22}
              loading="lazy"
              src="/assets/current/social-mail.svg"
              width={22}
            />
          </a>
        </nav>
      </div>

      <p className="v6-footer-copyright">
        © 2026 Crabster Technology. All rights reserved. Detach is a trademark of Crabster Technology. Digital wellbeing for a brighter you.
      </p>
    </footer>
  );
}
