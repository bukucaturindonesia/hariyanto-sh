import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: "#06151f",
          900: "#082235",
          800: "#0b334b",
          700: "#0f4a68",
          600: "#136c8e",
        },
        gold: {
          500: "#d6aa45",
          400: "#edc96b",
          300: "#f4dd96",
        },
        whatsapp: "#25d366",
      },
      boxShadow: {
        premium: "0 24px 80px rgba(8, 34, 53, 0.12)",
        glow: "0 22px 70px rgba(214, 170, 69, 0.24)",
      },
      backgroundImage: {
        "ocean-radial":
          "radial-gradient(circle at 20% 20%, rgba(19, 108, 142, 0.7), transparent 32%), radial-gradient(circle at 78% 8%, rgba(214, 170, 69, 0.28), transparent 28%), linear-gradient(135deg, #06151f 0%, #082235 48%, #0b334b 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
