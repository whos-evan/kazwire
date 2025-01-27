export const config = {
	branding: {
		name: 'Kazwire',
		description: 'Enjoy free, fast, and safe gaming and browsing with Kazwire.',
		slogan: 'All your favorites all in one place!',
		mainDomain: 'https://kazwire.com',
		supportEmail: 'contact@kazwire.com'
	},
	social: {
		tiktok: 'https://www.tiktok.com/@kazwire',
		discord: 'https://discord.gg/kazchat-785577600219086881'
	},
	analytics: {
		gtmID: 'GTM-KVGNDGZ7'
	},
	// Options: "hero", "main", "faq"
	// Order: top to bottom
	homeLayoutOrder: ['hero', 'main'],
	features: {
		searchBar: true,
		accountCreation: true
	},
	faq: [
		{
			question: 'What is this site?',
			answer: 'This site is an example site, it is meant to be used as a template for other sites.'
		},
		{
			question: 'What is this site?',
			answer: 'This site is an example site, it is meant to be used as a template for other sites.'
		}
	],
	styling: {
		// Options: "boxy", "rounded"
		contentBoxStyleType: 'rounded',
		daisyUITheme: {
			primary: '#f49625',
			secondary: '#f49625',
			accent: '#1f79ad',
			neutral: '#1f79ad',
			'base-100': '#e5e7eb',
			info: '#48b8e3',
			success: '#4db0a9',
			warning: '#cf9147',
			error: '#e9929f',
			'--rounded-box': '0.75rem', // border radius rounded-box utility class, used in card and other large boxes
			'--rounded-btn': '0.75rem' // border radius rounded-btn utility class, used in buttons and similar element
			// "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
			// "--animation-btn": "0.25s", // duration of animation when you click on button
			// "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
			// "--btn-text-case": "uppercase", // set default text transform for buttons
			// "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
			// "--border-btn": "1px", // border width of buttons
			// "--tab-border": "1px", // border width of tabs
			// "--tab-radius": "0.5rem", // border radius of tabs
		},
		daisyUIDarkTheme: {
			primary: '#f49625',
			secondary: '#f49625',
			accent: '#1f79ad',
			neutral: '#1f79ad',
			'base-100': '#202124',
			info: '#48b8e3',
			success: '#4db0a9',
			warning: '#cf9147',
			error: '#e9929f',
			'--rounded-box': '0.75rem', // border radius rounded-box utility class, used in card and other large boxes
			'--rounded-btn': '0.75rem' // border radius rounded-btn utility class, used in buttons and similar element
			// "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
			// "--animation-btn": "0.25s", // duration of animation when you click on button
			// "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
			// "--btn-text-case": "uppercase", // set default text transform for buttons
			// "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
			// "--border-btn": "1px", // border width of buttons
			// "--tab-border": "1px", // border width of tabs
			// "--tab-radius": "0.5rem", // border radius of tabs
		}
	},
	fonts: {
		headingFont: ['Inter', 'sans'],
		bodyFont: ['Inter', 'sans'],
		googleFont: 'Inter' // imports a single google font
	}
} as const;
