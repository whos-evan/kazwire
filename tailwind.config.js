/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#f49625',
				secondary: '#1f79ad',
				tertiary: '#e5e7eb',
				tertiaryDark: '#202124',
			}
		}
	},
	plugins: [],
	darkMode: 'class'
};
