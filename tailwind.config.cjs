const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{html,js,svelte,ts}"
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#137f94",
				secondary: "#df5c61",
				primaryLight: "hsl(190, 77%, 80%)",
				primaryXLight: "hsl(190, 67%, 92%)",
				primaryDark: "hsl(230, 15%, 70%)",
				secondaryDark: "hsl(358, 785%, 45%)",
				"secondary-grey": "hsl(358, 16%, 95%)",
			},
			fontFamily: {
				...fontFamily,
				serif: ["Merriweather", "serif"],
				sans: ["Merriweather Sans", "sans-serif"]
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.black"),
						fontFamily: "Merriweather",
						code: {
							"&::before": {
								display: "none"
							},
							"&::after": {
								display: "none"
							}
						},
						// a: {
						// 	color: theme("colors.primary"),
						// 	"&:hover": {
						// 		color: theme("colors.secondaryDark")
						// 	},
						// 	fontWeight: 400
						// },
						em: {}
					}
				}
			})
		}
	},
	plugins: [require("@tailwindcss/typography")]
};
