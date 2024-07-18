/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FCDC31",
        orange: "#CC4F08",
        "orange-light": "#D9601B",
        "dark-orange": "#B14507",
        green: "#25D366",
        "grey": "#2D2E32",
        "grey-light": "#E2E2E2",
        "light-yellow": "#FFFBD7",
        "salted-yellow": "#E6DC80",
        "light-black": "#4D4C4B",
        "green-whatsapp": "#25D366",
        "green-whatsapp-dark": "#21B758",
        "green-alert": "#d1e7dd",
        "green-alert-border": "#a3cfbb",
        "green-alert-text": "#0a3622"
      },

      fontFamily: {
        nunito: "var(--font-nunito)",
        barlow: "var(--font-barlow)",
        openSans: "var(--font-open-sans)",
      },
    },
  },
  plugins: [],
};
