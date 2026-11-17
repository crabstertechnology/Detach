"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProductUSPs() {
  const [activeScreen, setActiveScreen] = useState("/assets/categories/brain_teasers.webp");

  return (
    <section aria-label="Detach benefits and concept" className="v6-usps" id="v6-product">
      {/* USP 1: Physical Circuit Breaker */}
      <article
        aria-labelledby="v6-usp-voice-title"
        className="v6-usp v6-usp--voice"
        style={{ "--i": 0 } as React.CSSProperties}
      >
        <figure className="v6-usp-visual">
          <Image
            src="/assets/generated/desk_context_macro.jpg"
            alt="Detach standalone touch device on desk"
            width={1600}
            height={1036}
            loading="lazy"
            className="object-cover"
          />
          <figcaption className="v6-usp-stat">
            <span aria-hidden="true" className="v6-rec-dot" />
            <span className="v6-usp-stat-value">Mindful Habits</span>
            <span className="v6-usp-stat-label">zero doomscrolling</span>
          </figcaption>
        </figure>

        <div className="v6-usp-copy">
          <p className="v6-eyebrow">A Physical Boundary</p>
          <h2 id="v6-usp-voice-title" className="text-balance">
            Break the loop. Reclaim hours of your day.
          </h2>
          <div className="v6-usp-body">
            <p className="text-pretty">
              Modern smartphones are engineered to capture and hold your attention at all costs. Detach was created to do the exact opposite:
            </p>
            <p className="text-pretty">
              By offering a tactile, dedicated physical companion to reach for, Detach interrupts the subconscious dopamine reflex that pulls you into endless screen scrolling whenever you pause or feel bored.
            </p>
            <p className="text-pretty">
              Carry it in your pocket, wear it by its braided lanyard, or place it right beside your keyboard. Every time you feel the urge to check your phone, take a two minute positive reset instead.
            </p>
            <p className="text-pretty">
              You return to your work and your day feeling energized, grounded, and in control of your attention.
            </p>
          </div>

          <section aria-labelledby="v6-voice-languages-title" className="v6-voice-languages">
            <h3 id="v6-voice-languages-title">How It Transforms Your Day</h3>
            <ul aria-label="Personal transformation benefits">
              <li>Reclaim 2+ Hours Daily</li>
              <li>Break Phone Reflexes</li>
              <li>Eliminate Notification Anxiety</li>
              <li>Deeper Focus and Flow</li>
              <li>Genuine Real World Presence</li>
              <li>Calmer Bedtimes</li>
              <li aria-label="And more">…</li>
            </ul>
          </section>
        </div>
      </article>

      {/* USP 2: A Screen That Does Not Steal Your Attention */}
      <article
        aria-labelledby="v6-usp-display-title"
        className="v6-usp v6-usp--display"
        style={{ "--i": 1 } as React.CSSProperties}
      >
        <figure className="v6-usp-visual">
          <Image
            src="/assets/generated/hero_cinematic.jpg"
            alt="Detach vibrant display with gentle wellbeing prompt"
            width={1600}
            height={2400}
            loading="lazy"
            className="object-cover"
          />
        </figure>

        <div className="v6-usp-copy">
          <p className="v6-eyebrow">Glanceable Calm</p>
          <h2 id="v6-usp-display-title" className="text-balance">
            Designed for 10 seconds.
            <br />
            Not two hours.
          </h2>
          <div className="v6-usp-body">
            <p className="text-pretty">
              Detach features a vibrant, beautiful color touch display with one strict rule: deliver an immediate, constructive prompt and then turn off.
            </p>
            <p className="text-pretty">
              There are no algorithmic feeds designed to keep you tapping. No red badge notifications screaming for urgency. No social metrics or ad trackers competing for your mental energy.
            </p>
            <p className="text-pretty">
              Just crisp, delightful micro activities that give your eyes and brain a genuine break from digital fatigue.
            </p>
            <p className="text-pretty">
              A single tap or button press chooses your activity, and an intuitive shake gesture instantly wakes the screen whenever you need a mental reset.
            </p>
          </div>
        </div>
      </article>

      {/* USP 3: Nine Curated Categories */}
      <article
        aria-labelledby="v6-usp-sdk-title"
        className="v6-usp v6-usp--sdk"
        style={{ "--i": 2 } as React.CSSProperties}
      >
        <figure
          aria-label="Detach activity categories stage"
          className="v6-usp-visual v6-sdk-stage"
          role="img"
        >
          {/* Wall of Category Widgets */}
          <div className="v6-sdk-wall">
            <div className="v6-sdk-column">
              <Image
                src="/assets/categories/be_social.webp"
                alt="Be Social category"
                width={200}
                height={200}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveScreen("/assets/categories/be_social.webp")}
              />
              <Image
                src="/assets/categories/brain_teasers.webp"
                alt="Brain Teasers category"
                width={200}
                height={200}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveScreen("/assets/categories/brain_teasers.webp")}
              />
              <Image
                src="/assets/categories/quick_creativity.webp"
                alt="Quick Creativity category"
                width={200}
                height={200}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveScreen("/assets/categories/quick_creativity.webp")}
              />
            </div>
            <div className="v6-sdk-column">
              <Image
                src="/assets/categories/body_move.webp"
                alt="Body and Move category"
                width={200}
                height={200}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveScreen("/assets/categories/body_move.webp")}
              />
              <Image
                src="/assets/categories/calm_relax.webp"
                alt="Calm & Relax category"
                width={200}
                height={200}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveScreen("/assets/categories/calm_relax.webp")}
              />
              <Image
                src="/assets/categories/focus_mode.webp"
                alt="Focus Mode category"
                width={200}
                height={200}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveScreen("/assets/categories/focus_mode.webp")}
              />
            </div>
            <div className="v6-sdk-column">
              <Image
                src="/assets/categories/look_around.webp"
                alt="Look Around category"
                width={200}
                height={200}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveScreen("/assets/categories/look_around.webp")}
              />
              <Image
                src="/assets/categories/healthy_habits.webp"
                alt="Healthy Habits category"
                width={200}
                height={200}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveScreen("/assets/categories/healthy_habits.webp")}
              />
              <Image
                src="/assets/categories/mindfulness.webp"
                alt="Mindfulness category"
                width={200}
                height={200}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveScreen("/assets/categories/mindfulness.webp")}
              />
            </div>
          </div>

          {/* Active Category Display Preview */}
          <div className="v6-sdk-mockup">
            <Image
              src={activeScreen}
              alt="Active prompt on Detach screen"
              width={240}
              height={280}
              className="rounded-2xl shadow-2xl border border-white/20"
            />
          </div>
        </figure>

        <div className="v6-usp-copy">
          <p className="v6-eyebrow">Nine Curated Paths</p>
          <h2 id="v6-usp-sdk-title" className="text-balance">
            Small daily moments.
            <br />
            Massive life impact.
          </h2>
          <div className="v6-usp-body">
            <p className="text-pretty">
              Detach comes preloaded with nine science backed wellbeing categories designed to fit whatever energy you bring to the moment:
            </p>
            <p className="text-pretty">
              Feeling sluggish? Choose <strong>Body &amp; Move</strong> for a sixty second spinal stretch. Stressed before a meeting? Choose <strong>Calm &amp; Relax</strong> for guided breathwork. Hit a creative block? Try <strong>Brain Teasers</strong> or <strong>Quick Creativity</strong> to spark fresh lateral thinking.
            </p>
            <p className="text-pretty">
              It even nudges you outward with <strong>Be Social</strong> and <strong>Look Around</strong>, encouraging you to connect with colleagues or admire the physical space around you.
            </p>
            <p className="text-pretty">
              Over weeks and months, these tiny two minute investments transform how you feel, how you work, and how you connect.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
