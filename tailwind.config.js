/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: {
          950: "#06070a",
          900: "#0a0c12",
          850: "#0f1118",
          800: "#141722",
          700: "#1c2030",
        },
        neon: {
          cyan: "#00f6ff",
          purple: "#a855f7",
          green: "#39ff8f",
          pink: "#ff4fd8",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 246, 255, 0.25)",
        glowPurple: "0 0 20px rgba(168, 85, 247, 0.25)",
        glowGreen: "0 0 20px rgba(57, 255, 143, 0.25)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
