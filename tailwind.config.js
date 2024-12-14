/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#005bc4',
  			secondary: '#c45b00',
  			warning: '#f5a524',
  			tblack: '#616161',
  			background: '#e9e9e9',
  			light: '#ffffff',
  			accent: {
  				light: '#FDE68A',
  				DEFAULT: '#F59E0B',
  				dark: '#B45309'
  			}
  		},
  		fontFamily: {
  			inter: [
  				'var(--font-inter)'
  			],
  			apercu: [
  				'var(--font-apercu)'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  darkMode: ["class", "class"],
  plugins: [nextui(), require("tailwindcss-animate")]
};
