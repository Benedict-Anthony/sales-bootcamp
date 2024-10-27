import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1160px",
      xl: "1200px",
    },
    extend: {
      colors: {
        lightGray: "#C4C4C4",
        dark: "#121212",
        blue: "#100E86",
        red: "#FF0000",
        lightRed: "#FFE8E8",
        lightYellow: "#FBBC04",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
