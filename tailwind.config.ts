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
        primary: {
          orange: '#FF6B35',
          yellow: '#FFB627',
          navy: '#1B3A6D',
        },
        secondary: {
          white: '#FFFFFF',
          lightgray: '#F5F5F5',
          darkgray: '#333333',
          black: '#000000',
        }
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
