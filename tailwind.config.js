const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#547a84",
				secondary: "#df9c61",
				tertiary: "#CFB3CD",
				// primary: "#724f74",
				// secondary: "#fa4d5e",
			},
			fontFamily: {
				...fontFamily,
				serif: ["Merriweather", "serif"],
				sans: ["Merriweather Sans", "sans-serif"],
				test: ["Anton"],
				fake: "Anton",
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
	plugins: [require("@tailwindcss/typography")],
};
