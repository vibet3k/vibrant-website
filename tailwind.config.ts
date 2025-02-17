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
        'lexend-deca': ['var(--font-lexend-deca)', 'sans-serif'],
        'radley': ['var(--font-radley)', 'serif'],
      },
      colors: {
        'vt-pink': '#ef5ba1',
        'vt-blue': '#0074bc',
        'vt-red-orange': '#f04e37',
        'vt-green': '#39b54a',
        'vt-silver': '#808080',
      },
    },
  },
  plugins: [],
};

export default config;