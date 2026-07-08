import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

// Editorial dark theme — serif display, one violet accent, cyan metadata tint.
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "#0A0A0A", // near-black page background
        surface: "#141414", // card/section background, one step lighter
        border: "#262626", // faint borders
        foreground: "#F5F5F5", // primary text
        muted: {
          DEFAULT: "#A3A3A3", // secondary text (dates, meta)
          foreground: "#A3A3A3",
        },
        accent: {
          DEFAULT: "#8B5CF6", // violet — buttons, fills, emphasis
          light: "#A78BFA", // violet tint — accent text on dark
          foreground: "#F5F5F5",
        },
        meta: "#67E8F9", // cyan — small metadata (dates, coords)
        // Semantic aliases still referenced by existing components/blog styles
        card: {
          DEFAULT: "#141414",
          foreground: "#F5F5F5",
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          foreground: "#A3A3A3",
        },
        input: "#262626",
        ring: "#8B5CF6",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
