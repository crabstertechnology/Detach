"use client";

import React, { useState } from "react";
import Image from "next/image";

const CATEGORIES = [
  {
    id: "be_social",
    name: "Be Social",
    tagline: "Connect with people around you",
    icon: "/assets/categories/be_social.webp",
    color: "#ff6b81",
    examples: [
      "Ask a teammate how their project is progressing",
      "Invite someone for a quick 5-minute coffee chat",
      "Compliment a coworker on a recent achievement",
      "Share an interesting idea or article face-to-face",
    ],
    benefit: "Replaces isolation and passive social media feeds with real dopamine from genuine human interaction.",
  },
  {
    id: "brain_teasers",
    name: "Brain Teasers",
    tagline: "Train your mind with fun challenges",
    icon: "/assets/categories/brain_teasers.webp",
    color: "#4d96ff",
    examples: [
      "Rapid lateral thinking riddles",
      "Pattern recognition puzzles",
      "Number sequence mental sprints",
      "Quick memory recall exercises",
    ],
    benefit: "Exercises cognitive neuroplasticity during downtime instead of dulling attention with infinite scrolls.",
  },
  {
    id: "quick_creativity",
    name: "Quick Creativity",
    tagline: "Spark new ideas and creativity",
    icon: "/assets/categories/quick_creativity.webp",
    color: "#ff9f43",
    examples: [
      "Sketch a quick 60-second doodle on scratch paper",
      "Come up with 3 wild solutions to an everyday problem",
      "Re-imagine your workspace layout for better airflow",
      "Write a short two-line haiku about your morning",
    ],
    benefit: "Unlocks divergent thinking to solve persistent work blockers and spark fresh creative momentum.",
  },
  {
    id: "body_move",
    name: "Body and Move",
    tagline: "Get active and refresh your energy",
    icon: "/assets/categories/body_move.webp",
    color: "#2ed573",
    examples: [
      "Shoulder rolls, chest opening, and spinal twist",
      "Stand up and do 10 brisk calf raises",
      "Take a 2-minute walk around the floor",
      "Wrist and forearm stretches for typing relief",
    ],
    benefit: "Counters prolonged sedentary desk fatigue, boosts blood circulation, and eases physical stiffness.",
  },
  {
    id: "calm_relax",
    name: "Calm & Relax",
    tagline: "Reduce stress and feel better",
    icon: "/assets/categories/calm_relax.webp",
    color: "#a55eea",
    examples: [
      "Physiological sigh: 2 quick inhales, long exhale",
      "Sensory grounding: 5 things you see, 4 you feel",
      "Progressive muscle relaxation in shoulders & jaw",
      "Close eyes and listen to ambient silence",
    ],
    benefit: "Lowers cortisol and nervous system tension without reaching for high-stimulation feeds.",
  },
  {
    id: "focus_mode",
    name: "Focus Mode",
    tagline: "Improve concentration and productivity",
    icon: "/assets/categories/focus_mode.webp",
    color: "#feca57",
    examples: [
      "25-minute Pomodoro deep-work timer",
      "Single-task clarity: pick exactly 1 goal for next hour",
      "Clear desktop clutter to eliminate visual noise",
      "Task breakdown: slice big tasks into micro-steps",
    ],
    benefit: "Protects deep work flow state from notification fragmentation and task switching.",
  },
  {
    id: "look_around",
    name: "Look Around",
    tagline: "Be more aware of your surroundings",
    icon: "/assets/categories/look_around.webp",
    color: "#3867d6",
    examples: [
      "20-20-20 rule: look 20 feet away for 20 seconds",
      "Notice three architectural details in your room",
      "Watch the sunlight or weather outside your window",
      "Observe plant growth and physical desk items",
    ],
    benefit: "Relieves digital eye strain and brings your awareness fully back to the immediate physical reality.",
  },
  {
    id: "healthy_habits",
    name: "Healthy Habits",
    tagline: "Build better daily routines",
    icon: "/assets/categories/healthy_habits.webp",
    color: "#eb3b5a",
    examples: [
      "Drink a full glass of cool water",
      "Check sitting ergonomics and monitor height",
      "Write down one priority you want to finish today",
      "Clean your keyboard and screen with a wipe",
    ],
    benefit: "Transforms unconscious idle habits into self-care rituals that compound daily.",
  },
  {
    id: "mindfulness",
    name: "Mindfulness",
    tagline: "Stay present in the moment",
    icon: "/assets/categories/mindfulness.webp",
    color: "#20bf6b",
    examples: [
      "1-minute breath counting from 1 to 10",
      "Notice physical sensations of your feet on the floor",
      "Acknowledge mental chatter without judging it",
      "Cultivate gratitude for one specific thing today",
    ],
    benefit: "Interrupts anxious thought loops and creates mental spaciousness throughout the busy workday.",
  },
];

export default function CategoriesGrid() {
  const [selectedId, setSelectedId] = useState("brain_teasers");
  const activeCategory = CATEGORIES.find((c) => c.id === selectedId) || CATEGORIES[0];

  return (
    <section id="detach-categories" className="py-24 sm:py-36 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <span className="text-xs font-mono uppercase tracking-widest text-[#ff671f] bg-[#ff671f]/10 border border-[#ff671f]/20 px-3 py-1 rounded-full inline-block mb-3">
          9 Wellbeing Categories
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
          Shake to explore 9 categories.
        </h2>
        <p className="text-sm sm:text-base text-[#9e9ea9] leading-relaxed">
          Instead of defaulting to endless algorithmic reels, choose a 1 to 3 minute positive micro-activity designed to refresh your mind, body, and focus.
        </p>
      </div>

      {/* Grid of 9 Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedId(cat.id)}
              className={`p-6 rounded-3xl text-left transition-all duration-300 border flex flex-col justify-between ${
                isSelected
                  ? "bg-[#14141c] border-orange-500/40 shadow-xl shadow-orange-500/10 scale-[1.02]"
                  : "bg-[#0c0c10] border-white/5 hover:border-white/15 hover:bg-white/[0.03]"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white/5 p-1 border border-white/10">
                  <Image
                    src={cat.icon}
                    alt={cat.name}
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <span
                  className="w-3 h-3 rounded-full mt-1"
                  style={{ backgroundColor: cat.color }}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#8c8c97] leading-relaxed">
                  {cat.tagline}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>Micro-activities</span>
                <span className="text-[#ff8c42]">{isSelected ? "Viewing details ↓" : "Select →"}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Category Deep Dive Panel */}
      <div className="rounded-3xl bg-gradient-to-br from-[#13131b] via-[#0c0c10] to-[#120d09] border border-orange-500/20 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="w-3.5 h-3.5 rounded-full"
                style={{ backgroundColor: activeCategory.color }}
              />
              <span className="text-xs font-mono uppercase tracking-wider text-white/60">
                Featured Activity
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-2">
              {activeCategory.name}
            </h3>
            <p className="text-sm sm:text-base text-[#ff8c42] font-medium mb-4">
              {activeCategory.tagline}
            </p>
            <p className="text-sm text-[#9e9ea8] leading-relaxed mb-6">
              {activeCategory.benefit}
            </p>
          </div>

          {/* Sample Activity Cards on DEtach Screen */}
          <div className="w-full lg:max-w-md bg-black/60 border border-white/10 rounded-2xl p-6 shadow-inner">
            <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 block mb-3">
              Sample prompts from DEtach:
            </span>
            <ul className="space-y-2.5">
              {activeCategory.examples.map((ex, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-xs sm:text-sm text-white/90 bg-white/[0.03] border border-white/5 p-3 rounded-xl"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff671f] shrink-0" />
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

