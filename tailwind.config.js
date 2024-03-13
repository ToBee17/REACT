/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background)/<alpha-value>)",
        foreground: "hsl(var(--forground)/<alpha-value>)",
        card_background: "hsl(var(--card-background)/<alpha-value>)",
        card_foreground: "hsl(var(--card-foreground)/<alpha-value>)",
        bg_top: "hsl(var(--background-top)/<alpha-value>)",
        card_hover: "hsl(var(--card-hover)/<alpha-value>)",
      },
      
    },
  },
  plugins: [],
}