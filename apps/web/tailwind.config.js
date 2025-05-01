/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./lib/**/*.{ts,tsx,js,jsx}",
    "../../node_modules/@shadcn/ui/**/*.{js,ts,tsx}",
    "./pages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      /* 可自定義色票、間距、字體…… */
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

