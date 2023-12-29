import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      colors: {
        primary: "#00040f", // Your primary background color
        secondary: "#00f6ff", // Your secondary accent color
        dimWhite: "rgba(255, 255, 255, 0.7)", // A dimmed white color
        dimBlue: "rgba(9, 151, 124, 0.1)", // A dimmed blue color
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Use the Poppins font family
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
export default config
