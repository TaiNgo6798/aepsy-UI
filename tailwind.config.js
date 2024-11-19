/** @type {import('tailwindcss').Config} */
import animate from 'tailwindcss-animate'

module.exports = {
    darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
  	extend: {
  		backgroundColor: {
  			light: '#f6f3ea',
  			avatar: '#b5c8c9'
  		},
  		colors: {
  			primary: '#be6b65',
  			'green-light': '#edf5eb',
  			'green-dark': '#516253',
  			'green-dark-2': '#51625380',
  			'green-dark-3': '#3c493dd1',
			'blue-light': '#f1f6f9'
  		},
  		borderRadius: {
  			lg: '10px',
  			md: '8px',
  			sm: '6px'
  		}
  	}
  },
  plugins: [animate],
}
