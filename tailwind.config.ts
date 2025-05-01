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
        'vt-pink': '#ef5ba1',
        'vt-blue': '#0074bc',
        'vt-red-orange': '#f04e37',
        'vt-green': '#39b54a',
        'vt-silver': '#808080',
      },
      typography: (theme: (path: string) => string) => ({
        vt: {
          css: {
            color: theme('colors.vt-silver'),
            p: { color: theme('colors.vt-silver') },
            li: { color: theme('colors.vt-silver') },
            ul: { color: theme('colors.vt-silver') },
            ol: { color: theme('colors.vt-silver') },

            a: { color: theme('colors.vt-green') },
            h1: {
              color: theme('colors.vt-pink'),
              textTransform: 'uppercase',
            },
            h2: { color: theme('colors.vt-blue') },
            h3: { color: theme('colors.vt-blue') },
            strong: { color: theme('colors.vt-blue') },

            blockquote: {
              color: theme('colors.vt-blue'),
              borderLeftColor: theme('colors.vt-pink'),
            },
            code: {
              color: theme('colors.vt-red-orange'),
              backgroundColor: theme('colors.vt-silver') + '20',
              padding: '0.2em 0.4em',
              borderRadius: '4px',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // other plugins...
  ],
};

export default config;
