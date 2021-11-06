const config = {
	mode: "jit",
	purge: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			fontFamily:{
				'sans' : ['Arial','sans-serif'],
			},
		},
	},

	plugins: [
		require('@tailwindcss/line-clamp'),
	],
};

module.exports = config;
