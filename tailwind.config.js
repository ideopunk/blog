module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"primary": "#547a84",
				"secondary": "#df9c61",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
