import image from './public/image5.jpg'
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg:"url(`${image}`)"
      }
    },
  },
  plugins: [],
}

