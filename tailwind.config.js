/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "forest", "halloween", "sunset", "winter"],
    darkTheme: "forest",
    base: true,
    styled: true,
    utils: true,
  },
};
