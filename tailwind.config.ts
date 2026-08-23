import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          DEFAULT: "#6096BD",
          light: "#A8C5DB",
          dark: "#133F7A",
        },
        accent: {
          DEFAULT: "#F0513E",
          dark: "#C04132",
        },
        // Design system tokens extracted from the media bio one-pager.
        navy: {
          DEFAULT: "#1A3F6F",
          mid: "#2461A8",
          light: "#4A90C4",
          pale: "#D6E8F5",
        },
        cream: "#F4F8FC",
        charcoal: "#0F2137",
        slate: "#4A6080",
        mist: "#C8DFF0",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
