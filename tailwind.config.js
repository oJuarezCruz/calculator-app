/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme1Bg: "hsl(222, 26%, 31%)",
        theme1ToggleBgAndKeypadBg: "hsl(223, 31%, 20%)",
        theme1ScreenBg: "hsl(224, 36%, 15%)",
        theme1CalcKeyBg: "hsl(225, 21%, 49%)",
        theme1KeyShadow: "hsl(224, 28%, 35%)",
        theme1KeyEqualNToggleBg: "hsl(6, 63%, 50%)",
        theme1KeyEqualNToggleShadow: "hsl(6, 70%, 34%)",
        theme1NormalKeyBg: "hsl(30, 25%, 89%)",
        theme1NormalKeyShadow: "hsl(28, 16%, 65%)",
        theme1KeyTxt: "hsl(221, 14%, 31%)",
        theme2Bg: "hsl(0, 0%, 90%)",
        theme2ToggleBgAndKeypadBg: "hsl(0, 5%, 81%)",
        theme2ScreenBg: "hsl(0, 0%, 93%)",
        theme2CalcKeyBg: "hsl(185, 42%, 37%)",
        theme2KeyShadow: "hsl(185, 58%, 25%)",
        theme2KeyEqualNToggleBg: "hsl(25, 98%, 40%)",
        theme2KeyEqualNToggleShadow: "hsl(25, 99%, 27%)",
        theme2NormalKeyBg: "hsl(45, 7%, 89%)",
        theme2NormalKeyShadow: "hsl(35, 11%, 61%)",
        theme2KeyTxt: "hsl(60, 10%, 19%)",
        theme3Bg: "hsl(268, 75%, 9%)",
        theme3ToggleKeypadAndScreenBg: "hsl(268, 71%, 12%)",
        theme3CalcKeyBg: "hsl(281, 89%, 26%)",
        theme3CalcKeyBgShadow: "hsl(285, 91%, 52%)",
        theme3KeyEqualNToggleBg: "hsl(176, 100%, 44%)",
        theme3KeyEqualNToggleBgShadow: "hsl(177, 92%, 70%)",
        theme3NormalKeyBg: "hsl(268, 47%, 21%)",
        theme3NormalKeyBgShadow: "hsl(290, 70%, 36%)",
        theme3KeyTxt: "hsl(52, 100%, 62%)",
        theme3EqualTxt: "hsl(198, 20%, 13%)"
      }
    },
  },
  plugins: [],
}

