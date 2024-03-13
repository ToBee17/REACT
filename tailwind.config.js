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
        foreground: "hsl(var(--foreground)/<alpha-value>)",
        cardbackground: "hsl(var(--card-background)/<alpha-value>)",
        cardforeground: "hsl(var(--card-foreground)/<alpha-value>)",
        bgtop: "hsl(var(--background-top)/<alpha-value>)",
        cardhover: "hsl(var(--card-hover)/<alpha-value>)",

        up: "hsl(var(--lime-green)/<alpha-value>)",
        down : "hsl(var(--bright-red)/<alpha-value>)",
        facebook: "hsl(var(--facebook)/<alpha-value>)",
        twitter: "hsl(var(--twitter)/<alpha-value>)",
        youtube: "hsl(var(--youtube)/<alpha-value>)",
      },
      backgroundImage: {
        
      instagram: "var(--instagram",
      },
      
    },
  },
  plugins: [],
}