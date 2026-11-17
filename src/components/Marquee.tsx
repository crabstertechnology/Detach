"use client";

import React from "react";

const CATEGORIES = [
  { name: "Be Social", icon: "👥", color: "#ff6b81", tag: "Connection" },
  { name: "Brain Teasers", icon: "🧠", color: "#4d96ff", tag: "Cognition" },
  { name: "Quick Creativity", icon: "💡", color: "#ff9f43", tag: "Divergent" },
  { name: "Body and Move", icon: "🏃", color: "#38bdf8", tag: "Somatic" },
  { name: "Calm & Relax", icon: "🪷", color: "#a55eea", tag: "Parasympathetic" },
  { name: "Focus Mode", icon: "🎯", color: "#3875ff", tag: "Attention" },
  { name: "Look Around", icon: "🔭", color: "#00d2d3", tag: "Observation" },
  { name: "Healthy Habits", icon: "❤️", color: "#ff4757", tag: "Routine" },
  { name: "Mindfulness", icon: "🍃", color: "#818cf8", tag: "Presence" },
];

export default function Marquee() {
  return (
    <section aria-labelledby="v6-compat-title" className="v6-compatibility">
      {/* Title Count Header */}
      <p className="v6-compat-title" id="v6-compat-title">
        <span className="v6-compat-count">9</span>
        <span>wellbeing categories supported.</span>
      </p>

      {/* Dual Continuous Infinite Marquee Tracks */}
      <div
        aria-label="A selection of supported wellbeing categories"
        className="v6-agent-marquee"
        role="region"
      >
        {/* Track 1: Forward Motion */}
        <div className="v6-agent-row-track">
          <ul className="v6-agent-list">
            {CATEGORIES.map((cat, idx) => (
              <li key={`fwd-1-${idx}`} className="v6-agent-logo">
                <span className="text-xl shrink-0" aria-hidden="true">
                  {cat.icon}
                </span>
                <span className="font-heading font-medium text-[15px] tracking-tight text-white whitespace-nowrap">
                  {cat.name}
                </span>
                <span
                  className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border border-white/10"
                  style={{ color: cat.color }}
                >
                  {cat.tag}
                </span>
              </li>
            ))}
          </ul>
          <ul aria-hidden="true" className="v6-agent-list">
            {CATEGORIES.map((cat, idx) => (
              <li key={`fwd-2-${idx}`} className="v6-agent-logo">
                <span className="text-xl shrink-0" aria-hidden="true">
                  {cat.icon}
                </span>
                <span className="font-heading font-medium text-[15px] tracking-tight text-white whitespace-nowrap">
                  {cat.name}
                </span>
                <span
                  className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border border-white/10"
                  style={{ color: cat.color }}
                >
                  {cat.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Track 2: Reverse Motion */}
        <div aria-hidden="true" className="v6-agent-row-track v6-agent-row-track--reverse">
          <ul className="v6-agent-list">
            {[...CATEGORIES].reverse().map((cat, idx) => (
              <li key={`rev-1-${idx}`} className="v6-agent-logo">
                <span className="text-xl shrink-0" aria-hidden="true">
                  {cat.icon}
                </span>
                <span className="font-heading font-medium text-[15px] tracking-tight text-white whitespace-nowrap">
                  {cat.name}
                </span>
                <span
                  className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border border-white/10"
                  style={{ color: cat.color }}
                >
                  {cat.tag}
                </span>
              </li>
            ))}
          </ul>
          <ul aria-hidden="true" className="v6-agent-list">
            {[...CATEGORIES].reverse().map((cat, idx) => (
              <li key={`rev-2-${idx}`} className="v6-agent-logo">
                <span className="text-xl shrink-0" aria-hidden="true">
                  {cat.icon}
                </span>
                <span className="font-heading font-medium text-[15px] tracking-tight text-white whitespace-nowrap">
                  {cat.name}
                </span>
                <span
                  className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border border-white/10"
                  style={{ color: cat.color }}
                >
                  {cat.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
