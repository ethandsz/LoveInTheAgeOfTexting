import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['\'Montserrat\', sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: { 
          "primary": "#f97316",    
          "secondary": "#ff52d9",     
          "accent": "#00cdb7",    
          "neutral": "#252525",    
          "base-100": "#000000",    
          "info": "#BEBEBE",   
          "success": "#9affdc",   
          "warning": "#ffbe00",   
          "error": "#ff5861",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

