import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        yellow: { hv: "#FACC15", light: "#FDE047", dark: "#EAB308" },
        black:  { DEFAULT: "#000000", soft: "#111111", card: "#161616", border: "#262626" },
        white:  { DEFAULT: "#FFFFFF", dim: "rgba(255,255,255,0.72)", muted: "rgba(255,255,255,0.40)" },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "geo-grid":
          "linear-gradient(rgba(250,204,21,0.06) 1px, transparent 1px)," +
          "linear-gradient(90deg, rgba(250,204,21,0.06) 1px, transparent 1px)",
        "hazard":
          "repeating-linear-gradient(45deg,transparent,transparent 14px,rgba(250,204,21,0.18) 14px,rgba(250,204,21,0.18) 28px)",
        "yellow-fade": "linear-gradient(135deg,#FACC15,#EAB308)",
      },
      keyframes: {
        "cursor-glow": {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(250,204,21,0.5)" },
          "50%":     { boxShadow: "0 0 0 16px rgba(250,204,21,0)" },
        },
        "hazard-pulse": {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0.75" },
        },
        "phone-flash": {
          "0%,100%": { color: "#FACC15" },
          "50%":     { color: "#ffffff" },
        },
        "float-up": {
          from: { transform:"translateY(0)" },
          to:   { transform:"translateY(-8px)" },
        },
      },
      animation: {
        "cursor-glow":  "cursor-glow 2s ease-in-out infinite",
        "hazard-pulse": "hazard-pulse 1.4s ease-in-out infinite",
        "phone-flash":  "phone-flash 1.2s ease-in-out infinite",
        "float-up":     "float-up 3s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
