"use client";

import React from "react";
import Image from "next/image";

export default function Scenarios() {
  return (
    <section aria-labelledby="v6-scenarios-title" className="v6-scenarios" id="v6-scenarios">
      <h2 className="v6-section-title" data-letter-reveal="" id="v6-scenarios-title">
        It just feels right.
      </h2>
      <div className="v6-scenario-grid">
        {/* Scenario 1: Handheld */}
        <article className="v6-scenario-card v6-handheld">
          <Image
            alt="Leaning back and taking an intentional reset with Detach"
            className="v6-scenario-image"
            decoding="async"
            height={960}
            loading="lazy"
            src="/assets/handheld_in_hand.jpg"
            width={1440}
          />
          <div aria-hidden="true" className="v6-scenario-glass" />
          <div className="v6-scenario-copy">
            <span className="v6-scenario-label">Handheld</span>
            <h3>
              Lean back.
              <br />
              Take an intentional reset.
            </h3>
          </div>
        </article>

        {/* Scenario 2: Shared Office & Team Spaces */}
        <article className="v6-scenario-card v6-quiet-voice">
          <Image
            alt="Corporate office and shared work areas where Detach sparks conversations"
            className="v6-scenario-image"
            decoding="async"
            height={960}
            loading="lazy"
            src="/assets/generated/hero_cinematic.jpg"
            width={1440}
          />
          <div aria-hidden="true" className="v6-scenario-glass" />
          <div className="v6-scenario-copy">
            <span className="v6-scenario-label">Workplace</span>
            <h3>
              Real moments.
              <br />
              Connect with colleagues around you.
            </h3>
          </div>
        </article>

        {/* Scenario 3: Desktop Companion */}
        <article className="v6-scenario-card v6-desktop" id="v6-desktop">
          <Image
            alt="Detach resting on a desk beside coffee and notebook"
            className="v6-scenario-image"
            decoding="async"
            height={1281}
            loading="lazy"
            src="/assets/generated/desk_context_macro.jpg"
            width={1920}
          />
          <div aria-hidden="true" className="v6-scenario-glass" />
          <div className="v6-scenario-copy">
            <span className="v6-scenario-label">Desktop</span>
            <h3>
              Rest it by your side.
              <br />
              A tactile companion within arm&apos;s reach.
            </h3>
          </div>
        </article>
      </div>
    </section>
  );
}
