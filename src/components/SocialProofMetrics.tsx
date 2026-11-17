"use client";

import React from "react";

const METRICS = [
  {
    value: "140+",
    label: "Reflex unlocks interrupted",
    desc: "Average number of subconscious phone pickups per day that Detach replaces with an intentional pause.",
  },
  {
    value: "2.1h",
    label: "Reclaimed attention daily",
    desc: "Hours of distracted scrolling converted back into creative focus, deep work, and real conversations.",
  },
  {
    value: "100%",
    label: "Distraction free hardware",
    desc: "Zero notification badges, zero algorithmic social feeds, and complete offline hardware privacy.",
  },
  {
    value: "2,400+",
    label: "Waitlist founders",
    desc: "Join a growing community committed to reclaiming their time and attention from screens.",
  },
];

export default function SocialProofMetrics() {
  return (
    <section
      aria-label="Impact and proof"
      className="py-16 sm:py-24 px-6 sm:px-8 max-w-6xl mx-auto border-y border-white/[0.08]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {METRICS.map((metric, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start p-6 rounded-2xl bg-[#090e1f] border border-[#1e3a8a]/30 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#3875ff]/50 hover:-translate-y-1"
          >
            <span className="font-mono text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              {metric.value}
            </span>
            <span className="text-sm font-medium text-[#5e93ff] mt-2 block">
              {metric.label}
            </span>
            <p className="text-xs text-[#94a3b8] mt-2 leading-relaxed text-pretty">
              {metric.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

