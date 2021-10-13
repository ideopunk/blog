const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or false
	theme: {
		extend: {
			colors: {
				primary: "#547a84",
				secondary: "#df9c61",
				// primary: "#724f74",
				// secondary: "#fa4d5e",
			},
			fontFamily: {
				...fontFamily,
				serif: ["Merriweather", "serif"],
				sans: ["Anton", "sans-serif"],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.black"),
						fontFamily: ["Merriweather"],
						a: {
							color: theme("colors.primary"),
							"&:hover": {
								color: theme("colors.secondary"),
							},
							fontWeight: 400,
						},
						em: {},
					},
				},
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
