import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#07070a",
        surface: "#0a0f1d",
        foreground: "#f4f4f7",
        muted: "#94a3b8",
        brandBlue: {
          DEFAULT: "#3875ff",
          dark: "#007afe",
          deep: "#0d1b3e",
          surface: "#070d1e",
        },
        card: "#0d1424",
        cardBorder: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-geist-sans)", "Geist", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Geist Mono", "monospace"],
      },
      transitionTimingFunction: {
        "base-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        "base": "500ms",
      },
      keyframes: {
        "agent-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "agent-scroll-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "agent-scroll": "agent-scroll 35s linear infinite",
        "agent-scroll-reverse": "agent-scroll-reverse 35s linear infinite",
        "pulse-subtle": "pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
