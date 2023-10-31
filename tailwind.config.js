// /** @type {import('tailwindcss').Config} */
// module.exports = {
// content: [
//   './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//   './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//   './src/app/**/*.{js,ts,jsx,tsx,mdx}',
// ],
//   theme: {
//     extend: {

//     },
//   },
//   plugins: [],
// }
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
