"use client";

import React, { useState } from "react";

export default function Specifications() {
  const [activePart, setActivePart] = useState<string | null>(null);

  return (
    <section aria-labelledby="v6-specs-title" className="v6-specs" id="v6-specs">
      <h2 className="v6-section-title" data-letter-reveal="" id="v6-specs-title">
        Hardware Specifications
      </h2>

      {/* General Specs Summary Banner */}
      <div className="mb-8 p-6 rounded-2xl bg-[#080f24] border border-[#1e3a8a]/40 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#5e93ff] block mb-1">
              General Specifications
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-semibold text-white">
              Engineered for Everyday Carry &amp; Mindful Living
            </h3>
            <p className="text-xs sm:text-sm text-[#93a4c8] mt-1.5 leading-relaxed">
              Ultra-compact, featherlight, and thoughtfully built to withstand daily life in your pocket, bag, or on your wrist. Detach pairs a responsive color touchscreen and all-day rechargeable battery with an intuitive shake-to-wake motion sensor.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-xl bg-[#0d1c42] border border-[#2563eb]/30 text-center">
              <span className="text-[10px] uppercase font-mono text-white/50 block">Form Factor</span>
              <span className="text-xs font-semibold text-[#5e93ff]">Pocket &amp; Wearable</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-[#0d1c42] border border-[#2563eb]/30 text-center">
              <span className="text-[10px] uppercase font-mono text-white/50 block">Weight</span>
              <span className="text-xs font-semibold text-white">~38 Grams</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-[#0d1c42] border border-[#2563eb]/30 text-center">
              <span className="text-[10px] uppercase font-mono text-white/50 block">Charging</span>
              <span className="text-xs font-semibold text-[#5e93ff]">USB-C Fast Charge</span>
            </div>
          </div>
        </div>
      </div>

      <div className="v6-specs-layout">
        {/* Interactive Schematic Diagram */}
        <figure className="v6-specs-diagram">
          <div aria-hidden="true" className="v6-aurora v6-aurora--spec" />
          <div className="v6-specs-drawing" data-active={activePart || undefined}>
            <svg
              aria-labelledby="v6-spec-drawing-label"
              className="v6-hairline"
              role="img"
              viewBox="0 0 1171 1085"
            >
              <title id="v6-spec-drawing-label">
                Product diagram of Detach 1.69 inch Touch Companion
              </title>

              {/* Main Outer Body Contour */}
              <g className="v6-hl-layer v6-hl-body">
                <rect
                  x="290"
                  y="120"
                  width="590"
                  height="780"
                  rx="56"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  opacity="0.85"
                />
                <rect
                  x="315"
                  y="145"
                  width="540"
                  height="730"
                  rx="44"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.35"
                />
              </g>

              {/* 1.69" Color Touch Display */}
              <g
                className="v6-part cursor-pointer"
                data-part="display"
                onMouseEnter={() => setActivePart("display")}
                onMouseLeave={() => setActivePart(null)}
              >
                <rect
                  x="365"
                  y="190"
                  width="440"
                  height="500"
                  rx="28"
                  fill={activePart === "display" ? "rgba(56, 117, 255, 0.2)" : "rgba(255, 255, 255, 0.03)"}
                  stroke={activePart === "display" ? "var(--c-accent)" : "currentColor"}
                  strokeWidth={activePart === "display" ? "3" : "2"}
                />
                <rect
                  x="395"
                  y="230"
                  width="380"
                  height="420"
                  rx="14"
                  fill="none"
                  stroke={activePart === "display" ? "var(--c-accent)" : "currentColor"}
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                  opacity="0.6"
                />
                <text
                  x="585"
                  y="435"
                  textAnchor="middle"
                  fill={activePart === "display" ? "var(--c-accent)" : "currentColor"}
                  fontSize="18"
                  fontFamily="sans-serif"
                  fontWeight="600"
                >
                  1.69&quot; Color Touch Display
                </text>
                <text
                  x="585"
                  y="465"
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.6)"
                  fontSize="13"
                  fontFamily="sans-serif"
                >
                  240 × 280 Clarity • Anti-Glare Glass
                </text>
              </g>

              {/* Dual-Core Processor */}
              <g
                className="v6-part cursor-pointer"
                data-part="processor"
                onMouseEnter={() => setActivePart("processor")}
                onMouseLeave={() => setActivePart(null)}
              >
                <rect
                  x="485"
                  y="720"
                  width="200"
                  height="75"
                  rx="10"
                  fill={activePart === "processor" ? "rgba(56, 117, 255, 0.25)" : "rgba(255, 255, 255, 0.04)"}
                  stroke={activePart === "processor" ? "var(--c-accent)" : "currentColor"}
                  strokeWidth="2"
                />
                <text
                  x="585"
                  y="752"
                  textAnchor="middle"
                  fill={activePart === "processor" ? "var(--c-accent)" : "currentColor"}
                  fontSize="14"
                  fontFamily="sans-serif"
                  fontWeight="600"
                >
                  Dual-Core Processor
                </text>
                <text
                  x="585"
                  y="775"
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.5)"
                  fontSize="11"
                  fontFamily="sans-serif"
                >
                  240 MHz • Instant Wake
                </text>
              </g>

              {/* Shake-to-Wake Motion Sensor */}
              <g
                className="v6-part cursor-pointer"
                data-part="sensor"
                onMouseEnter={() => setActivePart("sensor")}
                onMouseLeave={() => setActivePart(null)}
              >
                <rect
                  x="365"
                  y="720"
                  width="95"
                  height="75"
                  rx="10"
                  fill={activePart === "sensor" ? "rgba(56, 117, 255, 0.28)" : "none"}
                  stroke={activePart === "sensor" ? "var(--c-accent)" : "currentColor"}
                  strokeWidth="2"
                />
                <text
                  x="412"
                  y="752"
                  textAnchor="middle"
                  fill={activePart === "sensor" ? "var(--c-accent)" : "currentColor"}
                  fontSize="12"
                  fontFamily="sans-serif"
                  fontWeight="600"
                >
                  Motion
                </text>
                <text
                  x="412"
                  y="772"
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.5)"
                  fontSize="10"
                  fontFamily="sans-serif"
                >
                  Shake Sensor
                </text>
              </g>

              {/* All-Day Battery */}
              <g
                className="v6-part cursor-pointer"
                data-part="battery"
                onMouseEnter={() => setActivePart("battery")}
                onMouseLeave={() => setActivePart(null)}
              >
                <rect
                  x="710"
                  y="720"
                  width="95"
                  height="75"
                  rx="10"
                  fill={activePart === "battery" ? "rgba(56, 117, 255, 0.28)" : "none"}
                  stroke={activePart === "battery" ? "var(--c-accent)" : "currentColor"}
                  strokeWidth="2"
                />
                <text
                  x="757"
                  y="752"
                  textAnchor="middle"
                  fill={activePart === "battery" ? "var(--c-accent)" : "currentColor"}
                  fontSize="12"
                  fontFamily="sans-serif"
                  fontWeight="600"
                >
                  Battery
                </text>
                <text
                  x="757"
                  y="772"
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.5)"
                  fontSize="10"
                  fontFamily="sans-serif"
                >
                  All-Day LiPo
                </text>
              </g>

              {/* Direct USB-C Port */}
              <g
                className="v6-part cursor-pointer"
                data-part="charging"
                onMouseEnter={() => setActivePart("charging")}
                onMouseLeave={() => setActivePart(null)}
              >
                <rect
                  x="515"
                  y="860"
                  width="140"
                  height="26"
                  rx="13"
                  fill={activePart === "charging" ? "rgba(56, 117, 255, 0.35)" : "none"}
                  stroke={activePart === "charging" ? "var(--c-accent)" : "currentColor"}
                  strokeWidth="2"
                />
                <rect
                  x="535"
                  y="868"
                  width="100"
                  height="10"
                  rx="5"
                  fill={activePart === "charging" ? "var(--c-accent)" : "#5e93ff"}
                />
                <text
                  x="585"
                  y="920"
                  textAnchor="middle"
                  fill={activePart === "charging" ? "var(--c-accent)" : "currentColor"}
                  fontSize="13"
                  fontFamily="sans-serif"
                  fontWeight="500"
                >
                  USB-C Fast Charging Port
                </text>
              </g>

              {/* Side Tactile Buttons */}
              <g
                className="v6-part cursor-pointer"
                data-part="buttons"
                onMouseEnter={() => setActivePart("buttons")}
                onMouseLeave={() => setActivePart(null)}
              >
                <rect
                  x="880"
                  y="340"
                  width="20"
                  height="70"
                  rx="4"
                  fill={activePart === "buttons" ? "var(--c-accent)" : "currentColor"}
                  opacity="0.9"
                />
                <rect
                  x="880"
                  y="450"
                  width="20"
                  height="70"
                  rx="4"
                  fill={activePart === "buttons" ? "var(--c-accent)" : "currentColor"}
                  opacity="0.9"
                />
                <text
                  x="920"
                  y="435"
                  fill={activePart === "buttons" ? "var(--c-accent)" : "currentColor"}
                  fontSize="13"
                  fontFamily="sans-serif"
                  fontWeight="500"
                >
                  Tactile Buttons
                </text>
              </g>

              {/* Lanyard Anchor & Loop */}
              <g
                className="v6-part cursor-pointer"
                data-part="lanyard"
                onMouseEnter={() => setActivePart("lanyard")}
                onMouseLeave={() => setActivePart(null)}
              >
                <circle
                  cx="880"
                  cy="170"
                  r="18"
                  fill="none"
                  stroke={activePart === "lanyard" ? "var(--c-accent)" : "currentColor"}
                  strokeWidth="3"
                />
                <circle
                  cx="880"
                  cy="170"
                  r="8"
                  fill={activePart === "lanyard" ? "var(--c-accent)" : "#5e93ff"}
                />
                <path
                  d="M898 170 Q 1020 220 1060 360 Q 1090 480 1030 520 Q 970 540 910 400"
                  fill="none"
                  stroke={activePart === "lanyard" ? "var(--c-accent)" : "currentColor"}
                  strokeWidth="3"
                  strokeDasharray="6 4"
                  opacity="0.8"
                />
                <text
                  x="960"
                  y="150"
                  fill={activePart === "lanyard" ? "var(--c-accent)" : "currentColor"}
                  fontSize="13"
                  fontFamily="sans-serif"
                  fontWeight="500"
                >
                  Alloy Lanyard Loop
                </text>
              </g>
            </svg>
          </div>

          <figcaption className="v6-spec-caption">
            <span className="v6-spec-caption-dot" />
            <span className="v6-spec-caption-text">
              {activePart === "display" && "1.69\" Color Touch Display — High-density, anti-glare, responsive touch"}
              {activePart === "processor" && "Dual-Core ESP32-S3 Processor — 240 MHz for fluid 60 FPS animation"}
              {activePart === "sensor" && "Shake-to-Wake Motion Sensor — Instant response when picking up device"}
              {activePart === "battery" && "Rechargeable Lithium-Polymer Battery — All-day active battery life"}
              {activePart === "charging" && "Universal USB Type-C Port — Fast charging & universal compatibility"}
              {activePart === "buttons" && "Dual Tactile Micro-Buttons — Satisfying physical click feedback"}
              {activePart === "lanyard" && "Reinforced Alloy Anchor — Braided wrist strap for easy, secure carry"}
              {!activePart && "Hover over any component to explore physical features"}
            </span>
          </figcaption>
        </figure>

        {/* Clean, General Consumer Hardware Specifications */}
        <dl className="v6-specs-list">
          <div
            className="cursor-pointer"
            data-parts="dimensions"
            onMouseEnter={() => setActivePart("dimensions")}
            onMouseLeave={() => setActivePart(null)}
          >
            <dt>Dimensions &amp; Weight</dt>
            <dd>
              <span className="v6-spec-line">65 mm × 42 mm × 12 mm</span>
              <span className="v6-spec-line">Featherlight ~38 grams</span>
              <span className="v6-spec-line">Ultra-compact pocket &amp; wearable form factor</span>
            </dd>
          </div>

          <div
            className="cursor-pointer"
            data-parts="display"
            onMouseEnter={() => setActivePart("display")}
            onMouseLeave={() => setActivePart(null)}
          >
            <dt>Display</dt>
            <dd>
              <span className="v6-spec-line">1.69-inch vibrant IPS color display</span>
              <span className="v6-spec-line">240 × 280 pixels, rich contrast</span>
              <span className="v6-spec-line">Flicker-free brightness dimming</span>
            </dd>
          </div>

          <div
            className="cursor-pointer"
            data-parts="processor"
            onMouseEnter={() => setActivePart("processor")}
            onMouseLeave={() => setActivePart(null)}
          >
            <dt>Processor</dt>
            <dd>
              <span className="v6-spec-line">High-efficiency Dual-Core Processor</span>
              <span className="v6-spec-line">Up to 240 MHz clock speed</span>
              <span className="v6-spec-line">Fluid 60 FPS micro-animations</span>
            </dd>
          </div>

          <div
            className="cursor-pointer"
            data-parts="battery"
            onMouseEnter={() => setActivePart("battery")}
            onMouseLeave={() => setActivePart(null)}
          >
            <dt>Battery &amp; Power</dt>
            <dd>
              <span className="v6-spec-line">Built-in Rechargeable LiPo Battery</span>
              <span className="v6-spec-line">All-day active use on a single charge</span>
              <span className="v6-spec-line">Multi-week ultra-low-power standby</span>
            </dd>
          </div>

          <div
            className="cursor-pointer"
            data-parts="charging"
            onMouseEnter={() => setActivePart("charging")}
            onMouseLeave={() => setActivePart(null)}
          >
            <dt>Charging</dt>
            <dd>
              <span className="v6-spec-line">Universal USB Type-C port</span>
              <span className="v6-spec-line">Fast recharge in under 45 minutes</span>
              <span className="v6-spec-line">Works with any standard phone charger or laptop</span>
            </dd>
          </div>

          <div
            className="cursor-pointer"
            data-parts="sensor"
            onMouseEnter={() => setActivePart("sensor")}
            onMouseLeave={() => setActivePart(null)}
          >
            <dt>Sensors &amp; Interaction</dt>
            <dd>
              <span className="v6-spec-line">6-Axis Motion Sensor (Shake to Wake)</span>
              <span className="v6-spec-line">Responsive capacitive touch screen</span>
              <span className="v6-spec-line">Dual tactile side buttons for navigation</span>
            </dd>
          </div>

          <div
            className="cursor-pointer"
            data-parts="lanyard"
            onMouseEnter={() => setActivePart("lanyard")}
            onMouseLeave={() => setActivePart(null)}
          >
            <dt>Portability &amp; Audio</dt>
            <dd>
              <span className="v6-spec-line">Integrated alloy lanyard anchor &amp; wrist strap</span>
              <span className="v6-spec-line">Gentle acoustic chime for mindful resets</span>
              <span className="v6-spec-line">Pocketable curved unibody casing</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
