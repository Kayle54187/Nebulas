import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        wave: "wave 5s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%": {
            transform: "translateX(0) rotate(180deg)",
          },
          "50%": {
            transform: "translateX(-50%) rotate(180deg)",
          },
          "100%": {
            transform: "translateX(0) rotate(180deg)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
