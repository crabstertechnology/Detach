"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  const color = useTransform(
    progress,
    range,
    ["rgba(255, 255, 255, 0.25)", "rgba(255, 255, 255, 1)"]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.28em] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      {children}
    </motion.span>
  );
}

export default function TaglineReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.45"],
  });

  const text =
    "We touch our phones over one hundred and forty times every day out of reflex. Detach replaces that urge with quiet clarity, turning idle glances into moments of genuine presence.";

  const words = text.split(" ");

  return (
    <section
      ref={containerRef}
      aria-label="Core statement"
      className="py-24 sm:py-32 px-6 sm:px-8 max-w-5xl mx-auto relative flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight max-w-[760px] text-balance">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </h2>

      <p className="mt-8 text-sm sm:text-base text-[#94a3b8] max-w-[560px] leading-relaxed text-pretty">
        No infinite scrolls. No algorithmic notifications. Just a small, dedicated physical companion that protects your focus and gives your mind room to breathe.
      </p>
    </section>
  );
}

