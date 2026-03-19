import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gradient brand palette — Palantir-inspired dark monochrome
        ink: {
          950: "#050505",
          900: "#0A0A0A",
          800: "#111111",
          700: "#1A1A1A",
          600: "#222222",
          500: "#2D2D2D",
          400: "#3A3A3A",
          300: "#555555",
          200: "#888888",
          100: "#AAAAAA",
          50:  "#CCCCCC",
        },
        brand: {
          DEFAULT: "#52525B",
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
        },
        // Semantic aliases
        surface: "#111111",
        border: "#2A2A2A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Mono", "monospace"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem", letterSpacing: "0.1em" }],
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        full: "9999px",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
      },
      animation: {
        "marquee": "marquee 28s linear infinite",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.5s ease forwards",
        "blink": "blink 1s step-end infinite",
        "chat-in": "chatIn 0.3s ease forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        chatIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
