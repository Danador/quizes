/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html','./src/**/*.{ts,tsx,vue}'],
  theme: {
		screens: {
			'2xs': '320px',
			xs: '375px',
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1280px',
			'2xl': '1560px',
			'3xl': '1920px'
		},
		extend: {
			fontFamily: {
        		body: ['Poppins', ...defaultTheme.fontFamily.sans],
				'second': ['Roboto', ...defaultTheme.fontFamily.sans]
			},
			letterSpacing: {
			},
			fontWeight: {
			},
			fontSize: {
			},
			borderRadius: {
			},
			backgroundSize: {
			},
			spacing: {
				15: '60px',
			},
			maxWidth: {
				'1/2': '50%',
			},
			colors: {
				inherit: 'inherit',
				green: '#49C674',
				dark: '#444758',
				gray: 'rgba(147, 147, 147, 1)',
				light: '#f8fafb',
				'light-2': '#EDEFF5',
				'gray-light': '#efefef',
				'gray-light-2': '#FBFBFB',
				'gray-light-3': '#bebdbd',
				'gray-light-4': '#fafafa',
				'gray-light-5': '#b0afb8',
				'gray-2': 'rgba(105, 107, 117, 1)',
				'gray-3': 'rgba(217, 217, 217, 1)',
				'gray-4': 'rgba(157, 159, 170, 1)',
				'gray-5': '#696B75',
				'gray-6': '#B0AFB8',
				'gray-7': 'rgba(91, 91, 91, 1)',
				'dark-gray': '#202020',
				'light-green': 'rgba(153, 233, 181, 1)',
				'light-green-2': 'rgba(84, 228, 133, 1)',
				'light-green-3' : '#fff0d3',
				'orange': 'rgba(254, 188, 61, 1)',
				'soft-orange': 'rgba(252,221,170,1)',
				'soft-orange-2': 'rgba(251,203,127,1)',
				'soft-orange-3': '#fbcb7f',
				'dark-orange': '#93651e',
				'dark-orange-2': '#5a3a04',
				'light-yellow': 'rgba(255, 234, 167, 1)',
				'light-orange': 'rgba(255, 195, 80, 1)',
				red: 'rgba(229, 70, 70, 1)',
				'red-2': 'rgba(249, 81, 81, 1)',
				'pink': '#B0AFB8'

			},
			boxShadow: {
				'common': '0px 4px 4px 0px rgba(240, 240, 240, 0.25)',
				'yellow': '0px 4px 4px 0px rgba(255, 195, 80, 0.35)',
				'green': '0px 4px 4px 0px rgba(73, 198, 116, 0.25)',
			},
			borderRadius: {
				'smd': '4px',
				'2lg': '10px',
				'2.5xl': '20px',
				'4xl': '30px',
			},
			gridTemplateAreas: {
			},
			gridTemplateRows: {
				'aa1': 'repeat(2, auto) 1fr',
				'a1': 'auto 1fr',
				'1a': '1fr auto',
				'1a1': '1fr auto 1fr',
				'a11': 'auto 1fr 1fr',
				'11a': '1fr 1fr auto',
				'a1a': 'auto 1fr auto',
				'1aa': '1fr repeat(2, auto)',
				'aa1': 'repeat(2, auto) 1fr',
				'a1aa': 'auto 1fr repeat(2, auto)',
				'full': '100%',
			},
			gridTemplateColumns: {
				'aa1': 'repeat(2, auto) 1fr',
				'a1': 'auto 1fr',
				'1a': '1fr auto',
				'1a1': '1fr auto 1fr',
				'a11': 'auto 1fr 1fr',
				'11a': '1fr 1fr auto',
				'a1a': 'auto 1fr auto',
				'1aa': '1fr repeat(2, auto)',
				'aa1': 'repeat(2, auto) 1fr',
				'a1aa': 'auto 1fr repeat(2, auto)',
				'full': '100%',
			},
			animation: {
				'opacity-enter-active': 'opacity 0.3s ease',
				'opacity-leave-active': 'opacity 0.3s ease reverse',
				'slide-enter-active': 'slide 0.5s',
				'slide-leave-active': 'slide 0.5s reverse'
			},
			keyframes: {
				opacity: {
					'0%': {
						'@apply opacity-0': {},
					},
					'100%': {
						'@apply opacity-100': {},
					}
				},
				slide: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' }
				},
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
