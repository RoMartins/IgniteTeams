// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: { 
       colors: {
          'background-black': '#000',
          'green-700': '#00875F',
          'gray-700': "#121214"
        },

        fontFamily: {
          regular_roboto: ['Roboto_400Regular', 'sans'],
          bold_roboto: ['Roboto_700Bold', 'sans'],
        },
          //'regular-roboto': 'Roboto_400Regular'
      },
    },
    plugins: [],
  }

