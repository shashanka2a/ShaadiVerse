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
        'brand-red': '#A61C2E',
        'brand-pink': '#FFF0F2',
        'brand-gold': '#FBBF24',
        'text-dark': '#1F2937',
        'text-light': '#6B7280',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        script: ['var(--font-great-vibes)', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;


