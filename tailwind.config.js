module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Jost', 'Helvetica', 'Arial', 'sans-serif'],
        'mono' : ['Jost', 'Helvetica', 'Arial', 'sans-serif'],
        'serif' : ['Jost', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}