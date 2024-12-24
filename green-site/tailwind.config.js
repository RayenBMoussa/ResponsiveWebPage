/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '647px'},
      // => @media (max-width: 639px) { ... }

      'mb': {'max': '570px'},
      // => @media (max-width: 570px) { ... }

      'smb': {'max': '460px'},
      // => @media (max-width: 570px) { ... }

      'ssm': {'max': '360px'},
      // => @media (max-width: 360px) { ... }
      '1150': {'max': '1150px'},
      // => @media (max-width: 1150px) { ... }
    },
    colors:{
      "primary":"#52aa4d",
      "secondary":"#263238",
      "info":"#2194f3",
      "warning":"#FBC02D",
      "error":"#E53835",
      "success":"#2E7D31",
      "black":"#263238",
      "d-grey":"#534b4b",
      "grey":"#717171",
      "l-grey":"#89939E",
      "grey-blue":"#ABBED1",
      "silver":"#F5F7FA",
      "white":"#FFFFFF",
      "shade1":"#43A046",
      "shade2":"#388E3B",
      "shade3":"#237D31",
      "shade4":"#1B5E1F",
      "shade5":"#103E13",
      "tint1":"#66BB69",
      "tint2":"#81C784",
      "tint3":"#A5D6A7",
      "tint4":"#C8E6C9",
      "tint5":"#E8F5E9",
      "bars":"rgb(250, 238, 236)",
      "green":"#6bbc6e",
      "shad":"#ABBED1",
      "grey-box":"#515b60",
      "place":"#D9DBE1"
    }
  },
  plugins: [],
}

