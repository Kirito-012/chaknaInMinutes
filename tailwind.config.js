/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				redOrange: '#FF3B30',
				pearlLusta: '#FCE8D8',
				mineShaft: '#2B2B2B',
				supernova: '#FFCA0A',
				neutralBg: '#F7F7F7',
			},
			fontFamily: {
				heading: ['Bangers', 'cursive'],
				body: ['Poppins', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				'xl-hero': '18px',
			},
			spacing: {
				'hero-pad': '72px',
			},
		},
	},
	plugins: [],
}
