import { config } from './src/lib/config.ts';

// This customizes TailwindCSS based on the values in src/lib/config.ts

// Pre-process the config.styling.daisyui object
const customLight = Object.entries(config.styling.daisyUITheme).reduce((theme, [key, value]) => {
	theme[key] = value;
	return theme;
}, {});

const customDark = Object.entries(config.styling.daisyUIDarkTheme).reduce((theme, [key, value]) => {
	theme[key] = value;
	return theme;
}, {});

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			main: config.fonts.bodyFont,
			heading: config.fonts.headingFont
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				light: customLight,
				dark: customDark
			}
		]
	}
};
