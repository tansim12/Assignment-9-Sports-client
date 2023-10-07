/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes:
     [
      {
        mytheme: {
          primary: "#552499",

          secondary: "#18bc31",

          accent: "#eae385",

          neutral: "#E527B2",

          "base-100": "#f3eef6",

          info: "#369dd9",

          success: "#3acf8a",

          warning: "#b97004",

          error: "#fa5c81",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
