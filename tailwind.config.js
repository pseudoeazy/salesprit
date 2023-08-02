/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "11px": "11px",
      "12px": "12px",
      "13px": "13px",
      "14px": "14px",
      "16px": "16px",
      "18px": "18px",
      "24px": "24px",
      "30px": "30px",
      "36px": "36px",
      "42px": "42px",
      "48px": "48px",
    },
    extend: {
      colors: {
        primary: {
          50: "#e5f6ff",
          100: "#b3e5ff",
          200: "#80d4ff",
          300: "#4dc3ff",
          400: "#1ab2ff",
          500: "#0099e6",
          600: "#0077b3",
          700: "#00334d",
          800: "#00334d",
          900: "#00111a",
          DEFAULT: "#003048",
        },
        secondary: {
          DEFAULT: "#F67F20",
          50: "#fef1e6",
          100: "#fcd5b5",
          200: "#fab984",
          300: "#f89d53",
          400: "#f68022",
          500: "#dd6709",
          600: "#ac5007",
          700: "#7b3905",
          800: "#4a2203",
          900: "#190b01",
        },
        success: "#12991F",
        danger: "#FF3636",
        info: "#2F80ED",
        warning: "#E2B93B",
        stroke: "#E5E5E5",
        mygrey: "#777",
        mygray:"#E5E5E5"
      },
      
    },
  },
  plugins: [],
};
