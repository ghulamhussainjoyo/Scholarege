/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      ringColor:{
        'royal-orange':'#eb9f47be',
        'mello-apricot':'#febe75'
      },
      colors: {
        'orange-theme': {
          'star-blue': '#5C5CBC',
          'dark-gunmetal': '#2E2E24',
          'lavender': '#E9E9F6',
          'royal-orange': '#EB9E47',
          'cultered': '#F5F5FA',
          'royal-orange-2':'#eb9f47be',
          'Beer':'#F18C18',
          
        },
        'cadet-blue': '#5F9EA0',
        'Jelly-bean-blue': '#418B8E',
        'jet-stream': '#BBD2C5',
        'dark-electric-blue': '#536976',
        'star-blue': '#5C5CBC',
        'dark-gunmetal': '#2E2E24',
        'lavender': '#E9E9F6',
        'royal-orange': '#EB9E47',
        'cultered': '#F5F5FA',
      },
      fontFamily: {
        'owsawald-regular': ['oswald regular']
      },
      screens:{
        '4xl':'2560px',
        '3xl':'1920px',
      }
    },
   
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
