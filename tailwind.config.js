/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		// Automatically generate all text color combinations
		...['red', 'green', 'blue', 'yellow', 'purple'].flatMap((color) =>
			[500, 600, 700, 800, 900].map((shade) => `text-${color}-${shade}`)
		)
	],
	theme: {
		extend: {}
	},
	plugins: []
};
