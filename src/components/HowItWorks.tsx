"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const STEPS = [
  {
    id: "v6-how-slide-1",
    step: "1. Interrupt The Habit",
    title: "When the urge to scroll hits, shake to wake",
    desc: "We reach for our phones over 140 times a day out of pure reflex. Instead of falling into an endless algorithmic feed, reach for Detach. A gentle shake wakes the device, instantly breaking autopilot.",
    img: "/assets/detach_desk_habits.webp",
    alt: "Detach companion on desk beside morning coffee, ideas journal, and calming books",
  },
  {
    id: "v6-how-slide-2",
    step: "2. Instant Inspiration",
    title: "A single purposeful prompt, zero digital noise",
    desc: "No notifications, no red badges, no infinite rabbit holes. Detach presents one uplifting, constructive prompt designed to reset your mental clarity in under two minutes.",
    img: "/assets/detach_mindful_sunlight.webp",
    alt: "Mindful break in warm golden sunlight with Detach",
  },
  {
    id: "v6-how-slide-3",
    step: "3. Choose Your Energy",
    title: "Find exactly what your mind and body need right now",
    desc: "Whether you need a calming breath, a posture reset, a creative spark, or an engaging brain puzzle, a simple tap matches your immediate energy level.",
    img: "/assets/categories/brain_teasers.webp",
    alt: "Choosing a constructive micro activity on Detach",
  },
  {
    id: "v6-how-slide-4",
    step: "4. Reconnect",
    title: "Step back into the physical world with fresh eyes",
    desc: "Look up from your screen. Stretch your neck, have a spontaneous chat with a colleague, or simply take in your surroundings. Detach nudges you back to reality.",
    img: "/assets/generated/desk_context_macro.jpg",
    alt: "Engaging in an intentional break beside desk companion",
  },
  {
    id: "v6-how-slide-5",
    step: "5. Compound The Change",
    title: "Build lasting calm and focus that stays with you",
    desc: "Ten micro resets a day compound into hours of reclaimed attention, deeper relationships, and reduced anxiety. A small pocket habit with a profound life impact.",
    img: "/assets/generated/hero_cinematic.jpg",
    alt: "Building mindful daily habits with Detach",
  },
];

export default function HowItWorks() {
  const [activeSlide, setActiveSlide] = useState(0);
  const trackRef = useRef<HTMLUListElement>(null);

  // Sync scroll position with active dot
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) {
        setActiveSlide(0);
        return;
      }

      // If scrolled to the end, activate the last dot
      if (track.scrollLeft >= maxScroll - 20) {
        setActiveSlide(STEPS.length - 1);
        return;
      }

      // Find the card closest to the scroll position
      let closestIdx = 0;
      let minDistance = Infinity;
      const scrollPos = track.scrollLeft;

      for (let i = 0; i < STEPS.length; i++) {
        const item = track.children[i] as HTMLElement | undefined;
        if (!item) continue;
        const itemLeft = item.offsetLeft - track.offsetLeft;
        const dist = Math.abs(itemLeft - scrollPos);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = i;
        }
      }
      setActiveSlide(closestIdx);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const item = track.children[idx] as HTMLElement | undefined;
    if (!item) return;

    const targetPos = item.offsetLeft - track.offsetLeft;
    track.scrollTo({
      left: Math.min(Math.max(0, targetPos), maxScroll),
      behavior: "smooth",
    });
    setActiveSlide(idx);
  };

  return (
    <section aria-labelledby="v6-how-title" className="v6-how" id="v6-how-it-works">
      {/* Ambient Aurora Gradient Lighting */}
      <div aria-hidden="true" className="v6-aurora v6-aurora--how" />

      <div className="v6-how-pin">
        {/* Section Header */}
        <div className="v6-how-head">
          <h2 className="v6-section-title" data-letter-reveal="" id="v6-how-title">
            See how it works
          </h2>
        </div>

        {/* Interactive Carousel */}
        <div
          aria-label="How Detach works"
          aria-roledescription="carousel"
          className="v6-how-carousel"
          role="region"
        >
          <ul ref={trackRef} className="v6-how-track pr-8" tabIndex={0}>
            {STEPS.map((step, idx) => (
              <li
                key={step.id}
                aria-label={`${idx + 1} of ${STEPS.length}`}
                aria-roledescription="slide"
                className="v6-how-card last:mr-8 [scroll-snap-align:start] last:[scroll-snap-align:end]"
                id={step.id}
              >
                <div className="v6-how-card-copy" style={{ textAlign: "justify", textJustify: "inter-word" }}>
                  <span className="text-xs font-mono uppercase font-bold tracking-wider text-[#5e93ff] mb-2 block">
                    {step.step}
                  </span>
                  <h3
                    className="text-xl sm:text-2xl font-semibold leading-snug tracking-tight text-white mb-2"
                    style={{ textAlign: "justify", textJustify: "inter-word", textAlignLast: "left" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-[#94a3b8]"
                    style={{ textAlign: "justify", textJustify: "inter-word", textAlignLast: "left" }}
                  >
                    {step.desc}
                  </p>
                </div>
                <figure className="v6-how-card-visual w-full overflow-hidden relative mt-auto rounded-b-[20px]">
                  <Image
                    src={step.img}
                    alt={step.alt}
                    fill
                    sizes="(min-width: 1024px) 640px, 86vw"
                    className="!w-full !h-full !left-0 !top-0 !object-cover object-center rounded-b-[20px]"
                    loading="lazy"
                  />
                </figure>
              </li>
            ))}
          </ul>

          {/* Slider Dots */}
          <div className="v6-how-controls">
            <div className="v6-how-dots">
              {STEPS.map((step, idx) => (
                <button
                  key={`dot-${idx}`}
                  aria-controls={step.id}
                  aria-current={activeSlide === idx}
                  aria-label={`Show slide ${idx + 1} of ${STEPS.length}`}
                  className={`v6-how-dot ${activeSlide === idx ? "v6-is-active" : ""}`}
                  type="button"
                  onClick={() => scrollToSlide(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
