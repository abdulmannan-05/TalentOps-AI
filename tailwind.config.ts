import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F9F9", // Crisp Off-White (Surface / Main)
        primary: "#1A1A1A", // Obsidian Black (Action / Text / Headings)
        accent: {
          gold: "#D4AF37", // Aurelian Gold
          "gold-light": "rgba(212, 175, 55, 0.15)", // Subtle gold wash
        },
        secondary: "#FFFFFF", // Pure White (Card Surfaces)
        border: "#E5E5E5", // Neutral delicate border
        borderGold: "#E5C875", // Subtle gold border
        success: "#16A34A",
        warning: "#D97706",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
