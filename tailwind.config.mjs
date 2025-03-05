/** @type {import('tailwindcss').Config} */
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
      screens: {
        'sm': '720px',   // Custom breakpoint for 250px
         // Custom breakpoint for 350px
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],  // Add Space Mono as a custom font
        inter: ['Inter', 'sans-serif'],

      },
     
    },
  },
  plugins: [],
};
