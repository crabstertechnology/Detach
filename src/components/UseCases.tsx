"use client";

import React from "react";

const USE_CASES = [
  {
    title: "IT Companies & Tech Teams",
    tag: "Screen Fatigue Relief",
    description:
      "Developers, designers, and engineers spend long uninterrupted hours staring at code and attending virtual standups. DEtach provides quick physical resets that relieve eye strain and reboot cognitive processing between sprints.",
    points: [
      "Promotes ergonomic movement during prolonged desk coding",
      "Reduces cognitive fatigue between intense debugging sessions",
      "Encourages healthier screen-break routines without phone doomscrolling",
    ],
    icon: "💻",
  },
  {
    title: "Corporate Offices & Workplaces",
    tag: "Team Wellbeing & Culture",
    description:
      "Placed in shared work areas, meeting rooms, and coffee stations, DEtach offers employees an inviting alternative to solitary phone scrolling, fostering face-to-face chats and creative collaboration.",
    points: [
      "Supports employee wellbeing and stress reduction",
      "Sparks spontaneous informal team bonding and conversations",
      "Fosters a culture of intentional work sessions and healthy downtime",
    ],
    icon: "🏢",
  },
  {
    title: "Educational Institutions & Libraries",
    tag: "Distraction-Free Study",
    description:
      "In schools, universities, and student study lounges, DEtach helps students overcome social media addiction during revision. Quick brain teasers and focus exercises refresh mental stamina between study blocks.",
    points: [
      "Encourages mindful smartphone use during revision periods",
      "Promotes creative thinking and problem-solving exercises",
      "Builds sustainable study habits and executive attention span",
    ],
    icon: "🎓",
  },
  {
    title: "Corporate Wellness Programs",
    tag: "Tangible HR Initiatives",
    description:
      "Unlike passive webinars or generic apps that employees ignore, DEtach is an interactive physical gadget that employees genuinely love using every day in relaxation pods and shared desk clusters.",
    points: [
      "Integrates mindfulness and movement into daily workplace culture",
      "Measurable shift toward positive digital habits",
      "Turnkey addition to executive desks and employee wellness kits",
    ],
    icon: "🌱",
  },
];

export default function UseCases() {
  return (
    <section id="detach-workplaces" className="py-24 sm:py-36 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
        <span className="text-xs font-mono uppercase tracking-widest text-[#2ed573] bg-[#2ed573]/10 border border-[#2ed573]/20 px-3 py-1 rounded-full inline-block mb-3">
          Deployments & Environments
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
          Where DEtach thrives.
        </h2>
        <p className="text-sm sm:text-base text-[#8c8c97] leading-relaxed">
          From modern software engineering teams to university libraries and home desks, DEtach brings intentional presence wherever screens dominate.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {USE_CASES.map((uc, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-[#0c0c10] border border-white/10 p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{uc.icon}</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#ff8c42] bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                  {uc.tag}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                {uc.title}
              </h3>
              <p className="text-sm text-[#8c8c97] leading-relaxed mb-6">
                {uc.description}
              </p>

              <ul className="space-y-2.5 pt-4 border-t border-white/5">
                {uc.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                    <span className="text-[#ff671f] font-bold mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

