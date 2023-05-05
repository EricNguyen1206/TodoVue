module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#777777",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },

      primary: "#66c0de",
      "primary-dark": "#3d7ab6",
      secondary: "#994ff3",
      "secondary-light": "#db8aff",
      asset: "#f98939",

      headline: "#181818",
      paragraph: "#2e2e2e",
      background: "#fffffe",

      "card-background": "#181818",
      "card-headline": "#fffffe",
      "card-paragraph": "#ddd6d6",

      success: "#63b860",
      info: "#66c0de",
      warning: "#ecad52",
      danger: "#d4524e",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
